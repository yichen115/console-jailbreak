/* 由 data/*.js 生成每机型独立页面 console/<id>.html
   用法: node tools/build-pages.js */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const OUT_DIR = path.join(ROOT, "console");
fs.mkdirSync(OUT_DIR, { recursive: true });

const sandbox = { window: {} };
vm.createContext(sandbox);
const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".js")).sort();
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), "utf8"), sandbox, { filename: f }); }
  catch (e) { console.error("! 跳过 " + f + ": " + e.message); }
}
const consoles = sandbox.window.CJ_DATA || [];

const FAMILY_ORDER = ["Xbox", "Switch", "PlayStation", "横向专题"];
const FAMILY_LABEL = { Xbox: "Xbox 家族", Switch: "Nintendo Switch 家族", PlayStation: "PlayStation 家族", "横向专题": "横向专题" };
const FAMILY_PAGE = { Xbox: "xbox.html", Switch: "switch.html", PlayStation: "playstation.html", "横向专题": "index.html" };
const FAMILY_ACCENT = { Xbox: "var(--xbox)", Switch: "var(--switch)", PlayStation: "var(--ps)", "横向专题": "var(--legal)" };

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function escAttr(s) { return esc(s).replace(/'/g, "&#39;"); }

function normDate(d) {
  const m = String(d || "").match(/(\d{4})(?:[-/.](\d{1,2}))?(?:[-/.](\d{1,2}))?/);
  if (!m) return "9999-99-99";
  return m[1] + "-" + (m[2] ? String(m[2]).padStart(2, "0") : "00") + "-" + (m[3] ? String(m[3]).padStart(2, "0") : "00");
}

// 按家族分组，用于上一台 / 下一台导航
const groups = {};
for (const c of consoles) (groups[c.family] ||= []).push(c);
for (const g of Object.values(groups)) g.sort((a, b) => normDate(a.released).localeCompare(normDate(b.released)));

let written = 0;
const index = [];

for (const c of consoles) {
  const evs = (c.events || []).slice().sort((a, b) => normDate(a.date).localeCompare(normDate(b.date)));
  const dates = evs.map((e) => e.date).filter(Boolean).sort();
  const span = dates.length ? String(dates[0]).slice(0, 4) + "–" + String(dates[dates.length - 1]).slice(0, 4) : "—";
  const srcCount = evs.reduce((a, e) => a + ((e.sources || []).length), 0);

  const cats = {};
  for (const e of evs) cats[e.category] = (cats[e.category] || 0) + 1;
  const catPills = Object.entries(cats)
    .map(([k, v]) => '<span class="stat-pill">' + esc(k) + " <b>" + v + "</b></span>").join("");

  // 本机型涉及的 CVE 编号
  const cveSet = new Set();
  for (const e of evs) {
    const m = String(e.cve || "").match(/CVE-\d{4}-\d{4,}/gi);
    if (m) m.forEach((x) => cveSet.add(x.toUpperCase()));
  }
  const cveCount = cveSet.size;

  const sibs = groups[c.family] || [c];
  const i = sibs.findIndex((x) => x.id === c.id);
  const prev = i > 0 ? sibs[i - 1] : null;
  const next = i >= 0 && i < sibs.length - 1 ? sibs[i + 1] : null;

  const navHtml = [
    prev ? '<a class="pn" href="' + prev.id + '.html"><span>← 上一台</span><b>' + esc(prev.name) + "</b></a>" : '<span class="pn pn-off"></span>',
    next ? '<a class="pn pn-next" href="' + next.id + '.html"><span>下一台 →</span><b>' + esc(next.name) + "</b></a>" : '<span class="pn pn-off"></span>',
  ].join("");

  const sibChips = sibs.map((x) =>
    '<a class="console-chip' + (x.id === c.id ? " cc-active" : "") + '" href="' + x.id + '.html">' +
    '<span class="cc-name">' + esc(x.name) + '</span><span class="cc-count">' + (x.events || []).length + " 条</span></a>").join("");

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.name)} 破解史时间轴 | 游戏机破解史</title>
<meta name="description" content="${escAttr(String(c.name) + " 破解史时间轴：" + String(c.summary || "").slice(0, 110))}">
<link rel="stylesheet" href="../assets/style.css">
<style>
  .pn { display:flex; flex-direction:column; gap:2px; padding:14px 18px; border-radius:10px;
        background:var(--bg-card); border:1px solid var(--border-soft); color:var(--text);
        font-size:13px; min-width:200px; flex:1; max-width:320px; }
  .pn:hover { text-decoration:none; background:var(--bg-card-hover); border-color:var(--border); }
  .pn span { color:var(--text-faint); font-size:11.5px; }
  .pn b { font-size:15px; font-weight:600; }
  .pn-next { text-align:right; margin-left:auto; }
  .pn-off { border:none; background:none; }
  .pager { display:flex; gap:12px; margin:34px 0 0; }
  .cc-active { border-color:var(--accent); background:var(--bg-card); }
</style>
</head>
<body data-consoles="${escAttr(c.id)}" data-single="1" style="--accent:${FAMILY_ACCENT[c.family] || "var(--soft)"}">

<nav class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="../index.html"><span class="brand-dot"></span>游戏机破解史</a>
    <div class="navlinks">
      <a href="../index.html">总览</a>
      <a href="../xbox.html"${c.family === "Xbox" ? ' class="active"' : ""}>Xbox 家族</a>
      <a href="../switch.html"${c.family === "Switch" ? ' class="active"' : ""}>Switch 家族</a>
      <a href="../playstation.html"${c.family === "PlayStation" ? ' class="active"' : ""}>PlayStation 家族</a>
      <a href="../cve.html">CVE 索引</a>
    </div>
  </div>
</nav>

<div class="wrap">

  <p style="margin:26px 0 0;font-size:13px;color:var(--text-faint)">
    <a href="../index.html">总览</a> ／
    <a href="../${FAMILY_PAGE[c.family] || "index.html"}">${esc(FAMILY_LABEL[c.family] || "全部机型")}</a> ／
    <span style="color:var(--text-dim)">${esc(c.name)}</span>
  </p>

  <header class="hero" style="padding-top:20px">
    <h1 style="font-size:clamp(28px,4.4vw,42px)">${esc(c.name)}<br><span style="font-size:.52em;color:var(--text-faint);-webkit-text-fill-color:var(--text-faint)">破解史时间轴</span></h1>
    <div class="hero-meta" style="margin-top:20px">
      <div><b>${esc(c.released || "—")}</b>发售</div>
      <div><b>${evs.length}</b>收录事件</div>
      <div><b>${span}</b>时间跨度</div>
      <div><b>${srcCount}</b>条原文链接</div>
      ${cveCount ? "<div><b>" + cveCount + "</b>个 CVE 编号</div>" : ""}
    </div>
  </header>

  <section class="console-block" style="margin-top:8px">
    <header class="console-head">
      <h2 style="font-size:19px">概览</h2>
      <p class="ch-rel">${esc(c.family || "")}</p>
      ${c.summary ? '<p class="ch-summary">' + esc(c.summary) + "</p>" : ""}
      ${c.status ? '<div class="ch-status"><b>现状</b><span>' + esc(c.status) + "</span></div>" : ""}
      <div class="stat-row">${catPills}</div>
    </header>
  </section>

  <h2 class="section-title">时间轴</h2>

  <div class="toolbar">
    <input id="search" type="search" placeholder="在本机型内搜索…"
           style="font:inherit;font-size:13.5px;padding:7px 14px;border-radius:999px;background:var(--bg-soft);border:1px solid var(--border);color:var(--text);min-width:240px;flex:1;max-width:400px">
  </div>

  <div class="legend" style="margin-bottom:22px">
    <span class="l-soft"><i></i>软破</span>
    <span class="l-hard"><i></i>硬破</span>
    <span class="l-hw"><i></i>硬件漏洞</span>
    <span class="l-sw"><i></i>软件漏洞</span>
    <span class="l-tool"><i></i>工具与生态</span>
    <span class="l-legal"><i></i>法律与产业</span>
  </div>

  <div id="consoles"></div>

  <h2 class="section-title">${esc(FAMILY_LABEL[c.family] || "同系列")}其他机型</h2>
  <div class="console-index">${sibChips}</div>

  <div class="pager">${navHtml}</div>

  <footer class="footer">
    <p><b>关于本页</b>：本页为 ${esc(c.name)} 的破解史时间轴，共 ${evs.length} 个事件、${srcCount} 条原文链接，口径截至 2026 年 10 月。</p>
    <p>破解主机可能违反厂商服务条款与当地法律（如 DMCA 第 1201 条反规避条款），并导致账号或主机被封禁。本站不提供任何破解工具、密钥或操作指引，仅供安全研究与技术史参考。</p>
    <p><a href="../index.html">返回总览</a></p>
  </footer>
</div>

<script src="../data/${escAttr(c.id)}.js"></script>
<script src="../assets/timeline.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT_DIR, c.id + ".html"), html, "utf8");
  written++;
  index.push({ id: c.id, name: c.name, family: c.family, events: evs.length, span, srcCount });
}

console.log("生成 " + written + " 个机型页面 -> console/");
console.table(index);

/* ---- 同步刷新 README.md 里的机型表格 ---- */
const README = path.join(ROOT, "README.md");
const START = "<!-- BUILD:MODELS -->";
const END = "<!-- /BUILD:MODELS -->";
if (fs.existsSync(README)) {
  let md = fs.readFileSync(README, "utf8");
  const i = md.indexOf(START);
  const j = md.indexOf(END);
  if (i >= 0 && j > i) {
    const famRank = (f) => { const k = FAMILY_ORDER.indexOf(f); return k < 0 ? 99 : k; };
    const rows = index.slice().sort((a, b) =>
      famRank(a.family) - famRank(b.family) || String(a.id).localeCompare(String(b.id)));

    const totalEv = rows.reduce((a, r) => a + r.events, 0);
    const totalSrc = rows.reduce((a, r) => a + r.srcCount, 0);

    const lines = [START, "",
      "| 机型 | 家族 | 事件数 | 时间跨度 | 原文链接 | 独立页面 |",
      "| --- | --- | ---: | --- | ---: | --- |"];
    for (const r of rows) {
      lines.push(`| ${r.name} | ${r.family} | ${r.events} | ${r.span} | ${r.srcCount} | [\`console/${r.id}.html\`](console/${r.id}.html) |`);
    }
    lines.push("");
    lines.push(`合计 **${rows.length}** 个机型／专题、**${totalEv}** 条事件、**${totalSrc}** 条原文链接。`);
    lines.push("");
    lines.push(END);

    md = md.slice(0, i) + lines.join("\n") + md.slice(j + END.length);
    fs.writeFileSync(README, md, "utf8");
    console.log("README.md 机型表格已刷新（" + rows.length + " 行）");
  } else {
    console.warn("README.md 中未找到 " + START + " / " + END + " 标记，跳过表格刷新");
  }
}
