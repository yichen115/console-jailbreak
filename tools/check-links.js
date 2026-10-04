/* 核查 data/*.js 中的全部来源链接是否可达
   用法: node tools/check-links.js [--concurrency 10] [--timeout 20000]
   输出: 控制台报告 + tools/link-report.json */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const argv = process.argv.slice(2);
function arg(name, dflt) {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] ? Number(argv[i + 1]) : dflt;
}
const CONC = arg("concurrency", 10);
const TIMEOUT = arg("timeout", 20000);

const DATA_DIR = path.join(__dirname, "..", "data");
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".js")).sort();

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), "utf8"), sandbox, { filename: f }); }
  catch (e) { console.error(`! 跳过 ${f}: ${e.message}`); }
}

// URL -> 引用它的 (机型, 事件标题)
const urlMap = new Map();
for (const c of sandbox.window.CJ_DATA || []) {
  for (const ev of c.events || []) {
    for (const s of ev.sources || []) {
      if (!s || !s.url) continue;
      if (!urlMap.has(s.url)) urlMap.set(s.url, []);
      urlMap.get(s.url).push(`${c.name} / ${ev.title}`);
    }
  }
}

async function main() {
const urls = [...urlMap.keys()].sort();
console.log(`待核查 URL: ${urls.length} 个 (并发 ${CONC}, 超时 ${TIMEOUT}ms)\n`);

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function probe(url) {
  const attempts = [
    { method: "HEAD", redirect: "follow" },
    { method: "GET", redirect: "follow", headers: { Range: "bytes=0-2047" } },
  ];
  let last = null;
  for (const a of attempts) {
    try {
      const res = await fetch(url, {
        method: a.method,
        redirect: a.redirect,
        headers: Object.assign({ "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" }, a.headers || {}),
        signal: AbortSignal.timeout(TIMEOUT),
      });
      // HEAD 被拒或返回异常时退回 GET
      if (a.method === "HEAD" && [403, 405, 400, 501, 503].includes(res.status)) { last = res.status; continue; }
      return { status: res.status, finalUrl: res.url, method: a.method };
    } catch (e) {
      last = e.name === "TimeoutError" ? "TIMEOUT" : e.name + ": " + (e.cause?.code || e.message);
    }
  }
  return { status: last, finalUrl: null, method: null };
}

const results = [];
let idx = 0;

async function worker(id) {
  while (idx < urls.length) {
    const my = idx++;
    const url = urls[my];
    const r = await probe(url);
    const ok = typeof r.status === "number" && r.status >= 200 && r.status < 400;
    results[my] = { url, ok, ...r, refs: urlMap.get(url) };
    const mark = ok ? "ok  " : "FAIL";
    process.stdout.write(`[${String(my + 1).padStart(3)}/${urls.length}] ${mark} ${String(r.status).padEnd(8)} ${url}\n`);
  }
}
await Promise.all(Array.from({ length: Math.min(CONC, urls.length) }, (_, i) => worker(i)));

const bad = results.filter((r) => !r.ok);
const moved = results.filter((r) => r.ok && r.finalUrl && r.finalUrl.replace(/\/$/, "") !== r.url.replace(/\/$/, ""));

console.log("\n" + "=".repeat(78));
console.log(`总计 ${results.length} | 可达 ${results.length - bad.length} | 异常 ${bad.length} | 重定向 ${moved.length}`);
console.log("=".repeat(78));

if (bad.length) {
  console.log("\n### 需要人工确认的链接\n");
  const byStatus = {};
  for (const r of bad) (byStatus[r.status] ||= []).push(r);
  for (const [st, list] of Object.entries(byStatus).sort()) {
    console.log(`-- ${st} (${list.length}) --`);
    for (const r of list) console.log(`   ${r.url}\n      引用: ${r.refs.slice(0, 3).join(" | ")}`);
  }
}

if (moved.length) {
  console.log("\n### 发生跳转（建议更新为新地址）\n");
  for (const r of moved.slice(0, 40)) console.log(`   ${r.url}\n    -> ${r.finalUrl}`);
}

fs.writeFileSync(path.join(__dirname, "link-report.json"), JSON.stringify(results, null, 1));
console.log("\n完整报告: tools/link-report.json");
}

main().catch((e) => { console.error("核查失败:", e); process.exit(2); });
