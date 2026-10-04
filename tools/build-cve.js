/* 由 data/*.js 生成 CVE 索引页 cve.html
   用法: node tools/build-cve.js
   说明: 事件锚点 ev-<consoleId>-<sortedIndex> 与 assets/timeline.js 的渲染顺序保持一致
        （两边都用 normDate 排序，且 Array.prototype.sort 是稳定排序）。 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

const sandbox = { window: {} };
vm.createContext(sandbox);
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".js")).sort();
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), "utf8"), sandbox, { filename: f }); }
  catch (e) { console.error("! 跳过 " + f + ": " + e.message); }
}
const consoles = sandbox.window.CJ_DATA || [];

const FAMILY_LABEL = { Xbox: "Xbox 家族", Switch: "Nintendo Switch 家族", PlayStation: "PlayStation 家族", "横向专题": "横向专题" };

function normDate(d) {
  const m = String(d || "").match(/(\d{4})(?:[-/.](\d{1,2}))?(?:[-/.](\d{1,2}))?/);
  if (!m) return "9999-99-99";
  return m[1] + "-" + (m[2] ? String(m[2]).padStart(2, "0") : "00") + "-" + (m[3] ? String(m[3]).padStart(2, "0") : "00");
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const CVE_RE = /^CVE-\d{4}-\d{4,}$/i;

// cveId -> { id, year, refs: [...] }
const cveMap = new Map();
let eventsWithCve = 0;
let totalEvents = 0;

for (const c of consoles) {
  // 与渲染器一致的排序，用于生成锚点下标
  const sorted = (c.events || [])
    .map((e, i) => ({ e, i }))
    .sort((a, b) => normDate(a.e.date).localeCompare(normDate(b.e.date)));

  sorted.forEach(({ e }, sortedIdx) => {
    totalEvents++;
    const raw = String(e.cve || "").trim();
    if (!raw) return;
    const ids = raw.split(/[,\s/、]+/).map((s) => s.trim()).filter(Boolean).filter((s) => CVE_RE.test(s));
    if (!ids.length) return;
    eventsWithCve++;
    for (const cve of ids) {
      const key = cve.toUpperCase();
      if (!cveMap.has(key)) cveMap.set(key, { id: key, year: key.split("-")[1], refs: [] });
      cveMap.get(key).refs.push({
        consoleId: c.id,
        consoleName: c.name,
        family: c.family,
        eventTitle: e.title,
        date: e.date,
        dateLabel: e.dateLabel || e.date,
        category: e.category,
        exploit: e.exploit || "",
        anchor: "console/" + c.id + ".html#ev-" + c.id + "-" + sortedIdx,
      });
    }
  });
}

const cves = [...cveMap.values()].sort((a, b) =>
  a.year.localeCompare(b.year) || a.id.localeCompare(b.id));

// 机型覆盖统计
const byConsole = {};
for (const cve of cves) {
  for (const r of cve.refs) {
    byConsole[r.consoleId] = byConsole[r.consoleId] || { name: r.consoleName, family: r.family, n: 0 };
    byConsole[r.consoleId].n++;
  }
}
const coveredConsoles = Object.keys(byConsole).length;

const rows = cves.map((cve) => {
  // 按机型分组，避免同一 CVE 在同一机型下重复列出机型名
  const groups = new Map();
  for (const r of cve.refs) {
    if (!groups.has(r.consoleId)) groups.set(r.consoleId, { name: r.consoleName, events: [] });
    groups.get(r.consoleId).events.push(r);
  }
  const refs = [...groups.entries()].map(([id, g]) => {
    const evs = g.events.map((r) =>
      '<a class="cve-ev" href="' + esc(r.anchor) + '">' + esc(r.dateLabel) + " · " + esc(r.eventTitle) + "</a>"
    ).join("");
    return '<div class="cve-group"><a class="cve-console" href="console/' + esc(id) + '.html">' +
      esc(g.name) + "</a>" + evs + "</div>";
  }).join("");
  const cats = [...new Set(cve.refs.map((r) => r.category))].join(" / ");
  return "<tr>" +
    '<td><a class="cve-id" href="https://nvd.nist.gov/vuln/detail/' + esc(cve.id) + '" target="_blank" rel="noopener noreferrer">' + esc(cve.id) + "</a></td>" +
    '<td class="cve-year">' + esc(cve.year) + "</td>" +
    '<td class="cve-refs">' + refs + "</td>" +
    '<td class="cve-cat">' + esc(cats) + "</td>" +
    "</tr>";
}).join("\n");

const consoleRows = Object.entries(byConsole)
  .sort((a, b) => b[1].n - a[1].n)
  .map(([id, v]) =>
    '<a class="console-chip" href="console/' + esc(id) + '.html">' +
    '<span class="cc-name">' + esc(v.name) + '</span>' +
    '<span class="cc-count">' + v.n + " 个 CVE</span></a>").join("");

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CVE 索引 | 游戏机破解史</title>
<meta name="description" content="Xbox / Nintendo Switch / PlayStation 全系列主机破解史中被正式分配 CVE 编号的漏洞索引，按编号排序并链接到 NVD 与对应事件。">
<link rel="stylesheet" href="assets/style.css">
<style>
  .cve-id { font-family: var(--mono); font-size: 13px; white-space: nowrap; font-weight: 600; }
  .cve-year { font-family: var(--mono); font-size: 12px; color: var(--text-faint); }
  .cve-cat { font-size: 12px; color: var(--text-faint); white-space: nowrap; }
  .cve-refs { display: flex; flex-direction: column; gap: 10px; font-size: 13px; }
  .cve-group { display: flex; flex-direction: column; gap: 3px; }
  .cve-console { font-weight: 600; white-space: nowrap; }
  .cve-ev { color: var(--text-dim); font-size: 12px; padding-left: 12px; white-space: nowrap; }
  .cve-ev:hover { color: #7dd3fc; }
  .note {
    background: var(--bg-card); border: 1px solid var(--border-soft);
    border-left: 2px solid var(--hwvuln); border-radius: 10px;
    padding: 16px 20px; margin: 0 0 26px; color: var(--text-dim); font-size: 13.5px;
  }
  .note p { margin: 0 0 8px; }
  .note p:last-child { margin: 0; }
  .note b { color: var(--text); }
</style>
</head>
<body style="--accent:var(--swvuln)">

<nav class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="index.html"><span class="brand-dot"></span>游戏机破解史</a>
    <div class="navlinks">
      <a href="index.html">总览</a>
      <a href="xbox.html">Xbox 家族</a>
      <a href="switch.html">Switch 家族</a>
      <a href="playstation.html">PlayStation 家族</a>
      <a href="cve.html" class="active">CVE 索引</a>
    </div>
  </div>
</nav>

<div class="wrap">

  <header class="hero">
    <h1 style="background:linear-gradient(120deg,#d8c7ff 5%,#a78bfa 95%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">CVE 索引</h1>
    <p class="lede">
      主机破解史上漏洞很多，但<b>被正式分配 CVE 编号的只是其中一部分</b>。下表把三大阵营数据里出现过的 CVE 全部汇总，
      按编号年份排序，每个编号都链接到 NVD 官方条目，并回链到本站对应机型时间轴中的那一条事件。
    </p>
    <div class="hero-meta">
      <div><b>${cves.length}</b>个 CVE 编号</div>
      <div><b>${eventsWithCve}</b>条事件带编号</div>
      <div><b>${coveredConsoles}</b>个机型覆盖</div>
      <div><b>${totalEvents}</b>条事件总数</div>
    </div>
  </header>

  <div class="note">
    <p><b>为什么 CVE 数量远少于漏洞数量？</b>主机破解的很大一部分成果根本拿不到 CVE：直读芯片、脉冲注入、电压毛刺这类<b>硬件改机</b>不是软件漏洞；
    PS1、PS2、Xbox 初代等早期平台的缺陷大多早于「消费级设备漏洞普遍编号」的年代；而 Switch、PlayStation 的固件漏洞常由厂商内部修复、
    或经漏洞赏金计划私密披露，未申请编号。反过来，主机里复用的通用组件（FreeBSD 网络栈、WebKit、Chakra、NSS、Windows 内核）一旦被利用，
    几乎都带着现成的 CVE 编号。</p>
    <p>因此本页是<b>「已编号漏洞」的完整索引，而不是「全部漏洞」的索引</b>。没有 CVE 的条目仍完整保留在各机型时间轴中，
    其 <code>cve</code> 字段为空是刻意为之——宁可留空，也不虚构编号。</p>
  </div>

  <h2 class="section-title">全部 CVE（按编号年份升序）</h2>
  <div class="table-wrap">
    <table class="quick">
      <thead>
        <tr><th>CVE 编号</th><th>年份</th><th>涉及机型与对应事件</th><th>事件类型</th></tr>
      </thead>
      <tbody>
${rows}
      </tbody>
    </table>
  </div>

  <h2 class="section-title">按机型统计</h2>
  <div class="console-index">${consoleRows}</div>

  <footer class="footer">
    <p><b>关于本页</b>：本页由 <code>node tools/build-cve.js</code> 从 <code>data/</code> 自动生成，数据口径截至 2026 年 10 月。
      所有 CVE 编号都经过人工核查（NVD / MITRE 条目或研究者本人披露），未编号的漏洞一律留空。</p>
    <p>破解主机可能违反厂商服务条款与当地法律（如 DMCA 第 1201 条反规避条款），并导致账号或主机被封禁。本站不提供任何破解工具、密钥或操作指引，仅供安全研究与技术史参考。</p>
    <p><a href="index.html">返回总览</a></p>
  </footer>
</div>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, "cve.html"), html, "utf8");
console.log("生成 cve.html：" + cves.length + " 个 CVE、" + eventsWithCve + " 条事件、" + coveredConsoles + " 个机型");
for (const cve of cves) {
  console.log("  " + cve.id.padEnd(18) + cve.refs.map((r) => r.consoleId).join(", "));
}
