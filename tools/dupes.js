/* 找出跨机型的近似重复事件，用于校准全景时间轴的合并阈值 */
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

const PUNCT = /[\s\-_·・:：,，。.、；;!！?？'"“”‘’()（）\[\]【】《》<>/\\|+*&#@%$~^`]/g;
const norm = (s) => String(s || "").toLowerCase().replace(PUNCT, "");
function bigrams(s) { const o = {}; for (let i = 0; i < s.length - 1; i++) o[s.substr(i, 2)] = 1; return o; }
function dice(a, b) {
  if (!a.length || !b.length) return 0;
  const A = bigrams(a), B = bigrams(b);
  let inter = 0;
  for (const k in A) if (B[k]) inter++;
  return (2 * inter) / (Object.keys(A).length + Object.keys(B).length);
}

const evs = [];
const seenSameConsoleTitle = new Map();
for (const c of sandbox.window.CJ_DATA || []) {
  for (const e of c.events || []) {
    evs.push({ c: c.name, cid: c.id, y: String(e.date || "").slice(0, 4), m: String(e.date || "").slice(0, 7), t: e.title, n: norm(e.title) });
  }
}

// 同机型内标题重复
console.log("=== 同一机型内标题完全重复 ===");
for (const c of sandbox.window.CJ_DATA || []) {
  const m = new Map();
  for (const e of c.events || []) {
    const k = norm(e.title);
    if (m.has(k)) console.log(`  [${c.id}] ${e.title}  (与「${m.get(k)}」重复)`);
    m.set(k, e.title);
  }
}

const pairs = [];
for (let i = 0; i < evs.length; i++) {
  for (let j = i + 1; j < evs.length; j++) {
    if (evs[i].cid === evs[j].cid) continue;
    if (evs[i].y !== evs[j].y) continue;
    const d = dice(evs[i].n, evs[j].n);
    if (d >= 0.40) pairs.push({ d, a: evs[i], b: evs[j] });
  }
}
pairs.sort((x, y) => y.d - x.d);

const lines = [];
lines.push("=== 同年跨机型近似事件（dice >= 0.40），按相似度降序 ===");
lines.push("候选对数: " + pairs.length);
for (const p of pairs) {
  const sameMonth = p.a.m === p.b.m;
  lines.push(`${p.d.toFixed(3)} ${sameMonth ? "同月" : "异月"}  [${p.a.c}] ${p.a.m} ${p.a.t}`);
  lines.push(`              [${p.b.c}] ${p.b.m} ${p.b.t}`);
}
fs.mkdirSync(path.join(__dirname, "reports"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "reports", "dupes.txt"), lines.join("\n"), "utf8");
console.log("候选对数: " + pairs.length + " -> tools/reports/dupes.txt");

// 分档统计，帮助选阈值
const buckets = { ">=0.85": 0, "0.75-0.85": 0, "0.68-0.75": 0, "0.60-0.68": 0, "0.50-0.60": 0, "0.40-0.50": 0 };
for (const p of pairs) {
  if (p.d >= 0.85) buckets[">=0.85"]++;
  else if (p.d >= 0.75) buckets["0.75-0.85"]++;
  else if (p.d >= 0.68) buckets["0.68-0.75"]++;
  else if (p.d >= 0.60) buckets["0.60-0.68"]++;
  else if (p.d >= 0.50) buckets["0.50-0.60"]++;
  else buckets["0.40-0.50"]++;
}
console.log(buckets);
