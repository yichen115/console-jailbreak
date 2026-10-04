/* 本地静态预览服务器（用于在推送前模拟 GitHub Pages 的 http:// 加载方式）
   用法:
     node tools/serve.js                       # 站点目录作为 web 根，访问 http://127.0.0.1:8123/
     node tools/serve.js 8124 --root ..        # 上层目录作为 web 根，访问 http://127.0.0.1:8124/console-jailbreak/
                                               # —— 这一种才等价于 GitHub Pages 的「项目站点」子路径场景
     node tools/serve.js 8125 --prefix /demo   # 把站点挂在任意 URL 前缀下（目录名与前缀不一致时用）
   注意: 这是纯静态文件服务，只用于本地预览，不是应用服务器。 */
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const argv = process.argv.slice(2);
function opt(name) {
  const i = argv.indexOf("--" + name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : null;
}
const positional = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1].startsWith("--")));
const PORT = Number(positional[0] || 8123);
const ROOT = path.resolve(__dirname, "..", opt("root") || ".");
const PREFIX = (opt("prefix") || "").replace(/\/$/, "");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let urlPath;
  try { urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname); }
  catch { res.writeHead(400); return res.end("bad request"); }

  // 子路径前缀（模拟 GitHub Pages 项目站点）
  if (PREFIX) {
    if (urlPath === PREFIX) { res.writeHead(302, { Location: PREFIX + "/" }); return res.end(); }
    if (!urlPath.startsWith(PREFIX + "/")) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("404（本服务器只在 " + PREFIX + "/ 下提供站点）");
    }
    urlPath = urlPath.slice(PREFIX.length);
  }

  if (urlPath.endsWith("/")) urlPath += "index.html";
  // 防目录穿越
  const target = path.resolve(ROOT, "." + urlPath);
  if (!target.startsWith(ROOT)) { res.writeHead(403); return res.end("forbidden"); }

  fs.stat(target, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("404 " + urlPath);
    }
    res.writeHead(200, {
      "Content-Type": TYPES[path.extname(target).toLowerCase()] || "application/octet-stream",
      "Content-Length": st.size,
      "Cache-Control": "no-store",
    });
    fs.createReadStream(target).pipe(res);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log("静态预览服务器已启动: http://127.0.0.1:" + PORT + PREFIX + "/");
  console.log("根目录: " + ROOT + (PREFIX ? "  (URL 前缀 " + PREFIX + ")" : ""));
});
