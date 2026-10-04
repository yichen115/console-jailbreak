/* GitHub Pages / 静态托管部署预检
   用法: node tools/check-deploy.js
   检查项:
     1. 所有本地引用的文件是否存在，且**大小写完全匹配**（GitHub Pages 跑在 Linux 上，区分大小写）
     2. 是否存在绝对路径引用（/xxx 或 C:\xxx），子目录部署时会失效
     3. 是否有以 _ 或 . 开头的文件/目录（GitHub Pages 默认跑 Jekyll，会忽略它们）
     4. 是否缺少 .nojekyll
     5. 每个 HTML 是否有 charset 声明
     6. 哪些文件是本地开发用、不必上传（体积清单）
*/
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SKIP_DIRS = new Set(["node_modules", ".git"]);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const allFiles = walk(ROOT);
const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));
const rel = (p) => path.relative(ROOT, p).replace(/\\/g, "/");

let problems = 0;
const warn = (m) => { problems++; console.log("  ✗ " + m); };

// ---------- 1 & 2. 引用检查（含大小写） ----------
console.log("=== 1. 本地引用检查（存在性 + 大小写）===");

// 大小写敏感的存在性判断：逐段与目录项做精确比较
function existsExact(absPath) {
  const parts = path.relative(ROOT, absPath).split(path.sep);
  let cur = ROOT;
  for (const part of parts) {
    let entries;
    try { entries = fs.readdirSync(cur); } catch { return { ok: false, why: "父目录不存在" }; }
    if (entries.includes(part)) { cur = path.join(cur, part); continue; }
    const ci = entries.find((e) => e.toLowerCase() === part.toLowerCase());
    if (ci) return { ok: false, why: "大小写不匹配，实际是 " + ci };
    return { ok: false, why: "不存在" };
  }
  return { ok: true };
}

const refRe = /(?:href|src)\s*=\s*"([^"]+)"/g;
const caseIssues = [];
const missing = [];
const absolute = [];

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, "utf8");
  const dir = path.dirname(f);
  let m;
  while ((m = refRe.exec(content))) {
    const ref = m[1].trim();
    if (/^(https?:|mailto:|data:|javascript:|#)/i.test(ref)) continue;
    if (ref.startsWith("//")) continue;
    // 绝对路径（子目录部署会断）
    if (ref.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(ref)) { absolute.push(`${rel(f)} -> ${ref}`); continue; }
    const [pathPart] = ref.split("#");
    if (!pathPart) continue;
    const target = path.resolve(dir, decodeURIComponent(pathPart));
    const r = existsExact(target);
    if (!r.ok) {
      if (r.why.startsWith("大小写")) caseIssues.push(`${rel(f)} -> ${ref}  (${r.why})`);
      else missing.push(`${rel(f)} -> ${ref}`);
    }
  }
}

if (caseIssues.length) caseIssues.forEach((x) => warn("[大小写] " + x));
if (missing.length) missing.forEach((x) => warn("[缺失] " + x));
if (absolute.length) absolute.forEach((x) => warn("[绝对路径] " + x));
if (!caseIssues.length && !missing.length && !absolute.length) {
  console.log("  ✓ 全部本地引用存在、大小写一致、且均为相对路径");
}

// ---------- 3. Jekyll 会忽略的文件 ----------
console.log("\n=== 2. Jekyll 敏感项（_ 或 . 开头的顶层条目）===");
const topEntries = fs.readdirSync(ROOT);
const jekyllHidden = topEntries.filter((n) => n.startsWith("_") || (n.startsWith(".") && n !== ".nojekyll"));
console.log(jekyllHidden.length ? "  会被 Jekyll 忽略: " + jekyllHidden.join(", ") : "  ✓ 无被忽略的顶层条目");

// ---------- 4. .nojekyll ----------
console.log("\n=== 3. .nojekyll ===");
const hasNojekyll = fs.existsSync(path.join(ROOT, ".nojekyll"));
console.log(hasNojekyll ? "  ✓ 已存在" : "  ✗ 缺失（缺失时 GitHub Pages 会跑 Jekyll，可能忽略 _ 开头的文件并增加构建失败风险）");

// ---------- 5. charset ----------
console.log("\n=== 4. HTML charset 声明 ===");
const noCharset = htmlFiles.filter((f) => !/<meta\s+charset=/i.test(fs.readFileSync(f, "utf8")));
console.log(noCharset.length ? "  ✗ 缺 charset: " + noCharset.map(rel).join(", ") : `  ✓ ${htmlFiles.length} 个 HTML 全部声明了 charset`);

// ---------- 6. 体积清单 ----------
console.log("\n=== 5. 体积构成（判断哪些不必上传）===");
const groups = {};
for (const f of allFiles) {
  const top = rel(f).split("/")[0];
  groups[top] = (groups[top] || 0) + fs.statSync(f).size;
}
const total = Object.values(groups).reduce((a, b) => a + b, 0);
for (const [k, v] of Object.entries(groups).sort((a, b) => b[1] - a[1])) {
  console.log("  " + (v / 1024).toFixed(0).padStart(6) + " KB  " + k + "/");
}
console.log("  " + (total / 1024).toFixed(0).padStart(6) + " KB  合计");
console.log("  HTML " + htmlFiles.length + " 个 | 全部文件 " + allFiles.length + " 个");

console.log("\n结论: " + (problems === 0 ? "无阻塞问题，可直接部署" : problems + " 个问题需处理"));

/* ---------- 可选：通过 http:// 复验（模拟 GitHub Pages 的加载方式） ----------
   用法: node tools/check-deploy.js --http http://127.0.0.1:8123
   需要先跑 node tools/serve.js                                         */
const httpIdx = process.argv.indexOf("--http");
if (httpIdx >= 0 && process.argv[httpIdx + 1]) {
  const base = process.argv[httpIdx + 1].replace(/\/$/, "");
  (async () => {
    console.log("\n=== 6. HTTP 实访（base " + base + "）===");
    const refs = new Set();
    for (const f of htmlFiles) {
      const content = fs.readFileSync(f, "utf8");
      const dir = path.dirname(f);
      let m;
      const re = /(?:href|src)\s*=\s*"([^"]+)"/g;
      while ((m = re.exec(content))) {
        const r = m[1].trim();
        if (/^(https?:|mailto:|data:|javascript:|#|\/\/)/i.test(r)) continue;
        const p = r.split("#")[0];
        if (!p) continue;
        refs.add(path.relative(ROOT, path.resolve(dir, decodeURIComponent(p))).replace(/\\/g, "/"));
      }
    }
    let bad = 0;
    for (const r of [...refs].sort()) {
      let status;
      try { status = (await fetch(base + "/" + r, { signal: AbortSignal.timeout(10000) })).status; }
      catch (e) { status = "ERR " + e.message; }
      if (status !== 200) { bad++; console.log("  ✗ " + status + "  /" + r); }
    }
    console.log("  引用资源 " + refs.size + " 个 | 全部返回 200: " + (bad === 0 ? "是 ✓" : "否，" + bad + " 个失败"));

    // 首页 HTML 是否真的能拿到
    try {
      const res = await fetch(base + "/index.html");
      const txt = await res.text();
      console.log("  index.html -> " + res.status + "，" + txt.length + " 字节，" +
        (txt.includes("data/xbox-360.js") ? "含数据脚本引用 ✓" : "缺少数据脚本引用 ✗"));
    } catch (e) {
      console.log("  ✗ 无法取得 index.html: " + e.message);
    }
  })();
}

// 用 exitCode 而不是 process.exit()，否则上面 --http 的异步检查会被直接掐断
process.exitCode = problems ? 1 : 0;
