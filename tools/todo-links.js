/* 列出需要人工处理的链接：404 / 405 / 证书类错误 */
"use strict";
const fs = require("fs");
const path = require("path");
const r = JSON.parse(fs.readFileSync(path.join(__dirname, "link-report.json"), "utf8"));

const groups = { dead404: [], m405: [], tls: [], timeout: [], blocked403: [] };
for (const x of r) {
  const st = String(x.status);
  if (st === "404") groups.dead404.push(x);
  else if (st === "405") groups.m405.push(x);
  else if (/CERT|TLS|SSL/i.test(st)) groups.tls.push(x);
  else if (/TIMEOUT|ECONNRESET|SOCKET|ETIMEDOUT/i.test(st)) groups.timeout.push(x);
  else if (st === "403") groups.blocked403.push(x);
}

const out = [];
const dump = (title, list) => {
  out.push("=== " + title + " (" + list.length + ") ===");
  for (const x of list) out.push(`  ${x.status}  ${x.url}\n       引用: ${(x.refs || []).join(" | ")}`);
  out.push("");
};
dump("404 死链（必须修）", groups.dead404);
dump("405 Method Not Allowed（需确认）", groups.m405);
dump("证书 / TLS 错误", groups.tls);
out.push("=== 连接超时域名分布 ===");
const dom = {};
for (const x of groups.timeout) {
  let h = "?"; try { h = new URL(x.url).hostname.replace(/^www\./, ""); } catch {}
  (dom[h] ||= []).push(x.url);
}
for (const [h, list] of Object.entries(dom).sort((a, b) => b[1].length - a[1].length)) {
  out.push(`  ${list.length}x  ${h}`);
}
out.push("");
out.push("=== 403 反爬域名分布（前 40）===");
const dom2 = {};
for (const x of groups.blocked403) {
  let h = "?"; try { h = new URL(x.url).hostname.replace(/^www\./, ""); } catch {}
  (dom2[h] ||= []).push(x.url);
}
for (const [h, list] of Object.entries(dom2).sort((a, b) => b[1].length - a[1].length).slice(0, 40)) {
  out.push(`  ${list.length}x  ${h}`);
}

const REPORTS = path.join(__dirname, "reports");
fs.mkdirSync(REPORTS, { recursive: true });
fs.writeFileSync(path.join(REPORTS, "todo-links.txt"), out.join("\n"), "utf8");
console.log("404=" + groups.dead404.length + " 405=" + groups.m405.length + " tls=" + groups.tls.length +
  " timeout=" + groups.timeout.length + " 403=" + groups.blocked403.length);
