/* 来源链接质量审计：域名分布、可疑链接、无标题链接、单来源事件 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA_DIR = path.join(__dirname, "..", "data");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of fs.readdirSync(DATA_DIR).filter((x) => x.endsWith(".js")).sort()) {
  try { vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), "utf8"), sandbox, { filename: f }); }
  catch (e) { console.error("skip " + f + ": " + e.message); }
}

const consoles = sandbox.window.CJ_DATA || [];
const domains = {};
const urls = new Map();
const noTitle = [];
const singleSource = [];
const shortDesc = [];
let totalEv = 0, totalSrc = 0;

// 宽松白名单：公认可靠或一手来源
const TRUSTED = [
  "wikipedia.org", "github.com", "github.io", "nist.gov", "cve.org", "mitre.org",
  "justice.gov", "eff.org", "courtlistener.com", "arstechnica.com", "theverge.com",
  "eurogamer.net", "polygon.com", "kotaku.com", "ign.com", "gamesindustry.biz",
  "hackaday.com", "wololo.net", "gbatemp.net", "psx-place.com", "consolemods.org",
  "free60.org", "fail0verflow.com", "ccc.de", "media.ccc.de", "theflow.github.io",
  "reuters.com", "bloomberg.com", "torrentfreak.com", "bbc.com", "bbc.co.uk",
  "nytimes.com", "wsj.com", "apnews.com", "nintendo.com", "sony.com", "playstation.com",
  "xbox.com", "microsoft.com", "nvidia.com", "amd.com", "youtube.com", "archive.org",
  "web.archive.org", "bunnie.org", "cturt.github.io", "wiiu.hacks.guide", "switch.homebrew.guide",
  "3dbrew.org", "psdevwiki.com", "ps3devwiki.com", "team-xecuter.com", "sx.xecuter.com",
  "retroreversing.com", "copetti.org", "flipacholas.github.io", "atmosphere-nx.github.io",
  "notebookcheck.net", "xda-developers.com", "tomshardware.com", "pcgamer.com",
  "engadget.com", "cnet.com", "venturebeat.com", "gamasutra.com", "gamedeveloper.com",
  "vice.com", "motherboard.vice.com", "wired.com", "theregister.com", "bleepingcomputer.com",
  "securityweek.com", "thehackernews.com", "zdnet.com", "techcrunch.com", "registry.gov"
];

for (const c of consoles) {
  for (const e of c.events || []) {
    totalEv++;
    if (typeof e.description !== "string" || e.description.length < 60) {
      shortDesc.push(`[${c.id}] ${e.date} ${e.title} (${(e.description || "").length} 字)`);
    }
    const srcs = (e.sources || []).filter((s) => s && s.url);
    totalSrc += srcs.length;
    if (srcs.length < 2) singleSource.push(`[${c.id}] ${e.date} ${e.title} (${srcs.length} 个来源)`);
    for (const s of srcs) {
      let host;
      try { host = new URL(s.url).hostname.replace(/^www\./, ""); } catch { host = "!!INVALID!!"; }
      domains[host] = (domains[host] || 0) + 1;
      if (!urls.has(s.url)) urls.set(s.url, []);
      urls.get(s.url).push(c.id);
      if (!s.title || !String(s.title).trim()) noTitle.push(`${s.url}  (${c.id} / ${e.title})`);
    }
  }
}

const lines = [];
lines.push(`事件 ${totalEv} 条 | 链接引用 ${totalSrc} 次 | 唯一 URL ${urls.size} 个 | 唯一域名 ${Object.keys(domains).length} 个`);
lines.push("");
lines.push("=== 域名分布（按引用次数降序）===");
const sorted = Object.entries(domains).sort((a, b) => b[1] - a[1]);
for (const [d, n] of sorted) {
  const trusted = TRUSTED.some((t) => d === t || d.endsWith("." + t));
  lines.push(`${String(n).padStart(4)}  ${trusted ? "  " : "? "}${d}`);
}
lines.push("");
lines.push("=== 不在宽松白名单内的域名（需人工确认可靠性）===");
for (const [d, n] of sorted) {
  const trusted = TRUSTED.some((t) => d === t || d.endsWith("." + t));
  if (!trusted) lines.push(`  ${n}x  ${d}`);
}
lines.push("");
lines.push("=== 缺少标题的来源 ===");
lines.push(noTitle.length ? noTitle.join("\n") : "  无");
lines.push("");
lines.push("=== 只有一个来源的事件（共 " + singleSource.length + " 条）===");
lines.push(singleSource.join("\n"));
lines.push("");
lines.push("=== 描述过短（<60 字）的事件（共 " + shortDesc.length + " 条）===");
lines.push(shortDesc.join("\n"));

const REPORTS = path.join(__dirname, "reports");
fs.mkdirSync(REPORTS, { recursive: true });
fs.writeFileSync(path.join(REPORTS, "url-audit.txt"), lines.join("\n"), "utf8");

// 单来源比例高的引用 URL（一个链接被多个机型复用 = 可能是横向事件）
const reused = [...urls.entries()].filter(([, v]) => v.length >= 3).sort((a, b) => b[1].length - a[1].length);
console.log(`事件 ${totalEv} | 引用 ${totalSrc} | 唯一 URL ${urls.size} | 域名 ${Object.keys(domains).length}`);
console.log(`单来源事件 ${singleSource.length} | 描述过短 ${shortDesc.length} | 无标题 ${noTitle.length}`);
console.log("报告 -> tools/reports/url-audit.txt");
