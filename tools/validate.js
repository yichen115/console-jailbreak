/* 校验 data/*.js 时间轴数据：语法、结构、时间顺序、URL 形态 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA_DIR = path.join(__dirname, "..", "data");
const CATS = ["软破", "硬破", "硬件漏洞", "软件漏洞", "工具与生态", "法律与产业"];
const REQUIRED_CONS = ["id", "name", "family", "released", "status", "summary", "events"];
const REQUIRED_EV = ["date", "title", "category", "description", "sources"];
const OPTIONAL_EV = ["dateLabel", "exploit", "cve", "firmware"];

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".js")).sort();
if (!files.length) {
  console.error("没有找到任何数据文件");
  process.exit(1);
}

const sandbox = { window: {} };
vm.createContext(sandbox);

let errors = 0;
let warns = 0;
const allUrls = new Map();
const summary = [];

function err(file, msg) { errors++; console.log(`  ✗ [${file}] ${msg}`); }
function warn(file, msg) { warns++; console.log(`  ! [${file}] ${msg}`); }

// "2003" -> "2003-00-00"; "2003-5" -> "2003-05-00"
function normDate(d) {
  const m = String(d || "").match(/(\d{4})(?:[-/.](\d{1,2}))?(?:[-/.](\d{1,2}))?/);
  if (!m) return "9999-99-99";
  const mo = m[2] ? String(m[2]).padStart(2, "0") : "00";
  const da = m[3] ? String(m[3]).padStart(2, "0") : "00";
  return `${m[1]}-${mo}-${da}`;
}

for (const f of files) {
  const src = fs.readFileSync(path.join(DATA_DIR, f), "utf8");
  console.log(`\n── ${f} (${(src.length / 1024).toFixed(1)} KB)`);

  // 1) 语法
  try {
    vm.runInContext(src, sandbox, { filename: f, timeout: 5000 });
  } catch (e) {
    err(f, `JS 语法/运行错误: ${e.message}`);
    continue;
  }

  const data = sandbox.window.CJ_DATA || [];
  const c = data[data.length - 1];
  if (!c) { err(f, "window.CJ_DATA 为空"); continue; }

  // 2) 顶层字段
  for (const k of REQUIRED_CONS) {
    if (c[k] === undefined || c[k] === null || c[k] === "") err(f, `缺少顶层字段 ${k}`);
  }
  if (c.id !== f.replace(/\.js$/, "")) warn(f, `id "${c.id}" 与文件名不一致（期望 "${f.replace(/\.js$/, "")}"）`);

  // 3) 事件
  const evs = Array.isArray(c.events) ? c.events : [];
  if (evs.length < 14) err(f, `事件数 ${evs.length} < 14`);
  if (!Array.isArray(c.events)) { err(f, "events 不是数组"); continue; }

  const seen = new Set();
  let prevYear = "", prevRaw = "";
  const cats = {};
  let noSrc = 0;

  evs.forEach((ev, i) => {
    const tag = `events[${i}] "${(ev.title || "").slice(0, 18)}"`;
    for (const k of REQUIRED_EV) {
      if (ev[k] === undefined || ev[k] === null) err(f, `${tag} 缺少字段 ${k}`);
    }
    if (!/^\d{4}(-\d{1,2})?(-\d{1,2})?$/.test(String(ev.date || ""))) {
      err(f, `${tag} date 格式异常: "${ev.date}"（应为 YYYY 或 YYYY-MM）`);
    }
    if (!CATS.includes(ev.category)) err(f, `${tag} category 非法: "${ev.category}"`);
    cats[ev.category] = (cats[ev.category] || 0) + 1;

    if (typeof ev.description !== "string" || ev.description.length < 40) {
      warn(f, `${tag} description 偏短 (${(ev.description || "").length} 字)`);
    }

    if (!Array.isArray(ev.sources) || !ev.sources.length) {
      noSrc++;
      err(f, `${tag} 没有 sources`);
    } else {
      ev.sources.forEach((s) => {
        if (!s || !s.url) return err(f, `${tag} source 缺少 url`);
        if (!/^https?:\/\//.test(s.url)) return err(f, `${tag} url 非法: ${s.url}`);
        try {
          const u = new URL(s.url);
          allUrls.set(s.url, (allUrls.get(s.url) || 0) + 1);
          if (!u.hostname.includes(".")) err(f, `${tag} host 可疑: ${s.url}`);
        } catch { err(f, `${tag} url 无法解析: ${s.url}`); }
      });
    }

    // 时间升序：只在「跨年倒序」时告警。
    // 同一年内既有 YYYY 也有 YYYY-MM 的事件时，月份精度差异不代表顺序错误。
    const key = normDate(ev.date);
    const year = key.slice(0, 4);
    if (prevYear && year < prevYear) {
      warn(f, `${tag} 跨年倒序：${ev.date} 出现在 ${prevRaw} 之后`);
    }
    prevYear = year; prevRaw = ev.date;

    // 重复标题
    if (seen.has(ev.title)) warn(f, `${tag} 标题重复`);
    seen.add(ev.title);
  });

  const dates = evs.map((e) => e.date).filter(Boolean).sort();
  summary.push({
    file: f, name: c.name, events: evs.length,
    range: `${dates[0] || "?"} → ${dates[dates.length - 1] || "?"}`,
    cats, srcTotal: evs.reduce((a, e) => a + ((e.sources || []).length), 0),
  });
  console.log(`  机型: ${c.name} | 事件 ${evs.length} | ${summary[summary.length - 1].range} | 分类 ${JSON.stringify(cats)}`);
}

// ---- 汇总 ----
console.log("\n" + "=".repeat(78));
console.log("汇总");
console.log("=".repeat(78));
let totalEv = 0, totalSrc = 0;
for (const s of summary) { totalEv += s.events; totalSrc += s.srcTotal; }
console.table(summary.map((s) => ({ 文件: s.file, 机型: s.name, 事件: s.events, 区间: s.range, 链接: s.srcTotal })));
console.log(`文件 ${files.length} 个 | 事件 ${totalEv} 条 | 链接引用 ${totalSrc} 次 | 唯一 URL ${allUrls.size} 个`);
console.log(`错误 ${errors} 个 | 警告 ${warns} 个`);

fs.writeFileSync(path.join(__dirname, "urls.json"), JSON.stringify([...allUrls.keys()].sort(), null, 1));
console.log("唯一 URL 列表已写入 tools/urls.json");

process.exit(errors ? 1 : 0);
