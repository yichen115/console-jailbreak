/* ==========================================================================
   游戏机破解史时间轴 — 渲染器
   经典脚本（非 module），可在 file:// 下直接运行。
   依赖：各 data/*.js 通过 window.CJ_DATA.push({...}) 注入数据。
   ========================================================================== */
(function () {
  "use strict";

  var CATS = ["软破", "硬破", "硬件漏洞", "软件漏洞", "工具与生态", "法律与产业"];

  var CAT_CLASS = {
    "软破": "cat-软破",
    "硬破": "cat-硬破",
    "硬件漏洞": "cat-硬件漏洞",
    "软件漏洞": "cat-软件漏洞",
    "工具与生态": "cat-工具与生态",
    "法律与产业": "cat-法律与产业"
  };

  /* ------------------------------------------------------------ 工具函数 */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // 把 "2003"、"2003-05"、"2003-05-12" 归一化成可排序的键
  function sortKey(d) {
    var m = String(d || "").match(/(\d{4})(?:[-/.](\d{1,2}))?(?:[-/.](\d{1,2}))?/);
    if (!m) return "9999-99-99";
    var mo = m[2] ? ("0" + m[2]).slice(-2) : "00";
    var da = m[3] ? ("0" + m[3]).slice(-2) : "00";
    return m[1] + "-" + mo + "-" + da;
  }

  function dateLabel(ev) {
    if (ev.dateLabel) return ev.dateLabel;
    var m = String(ev.date || "").match(/^(\d{4})(?:-(\d{1,2}))?/);
    if (!m) return ev.date || "时间不详";
    return m[2] ? m[1] + "年" + parseInt(m[2], 10) + "月" : m[1] + "年";
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ------------------------------------------------- 单个事件卡片 DOM */

  function buildEvent(ev) {
    var cat = CATS.indexOf(ev.category) >= 0 ? ev.category : "工具与生态";
    var wrap = el("div", "event " + CAT_CLASS[cat]);

    var meta = "";
    if (ev.origin) meta += '<span class="tag-meta">' + esc(ev.origin) + "</span>";
    if (ev.exploit) meta += '<span class="tag-meta">' + esc(ev.exploit) + "</span>";
    if (ev.cve) meta += '<span class="tag-meta">' + esc(ev.cve) + "</span>";
    if (ev.firmware) meta += '<span class="tag-meta">适用：' + esc(ev.firmware) + "</span>";

    var srcs = "";
    var list = (ev.sources || []).filter(function (s) { return s && s.url; });
    if (list.length) {
      srcs = '<div class="event-srcs"><span class="src-label">原文</span>' +
        list.map(function (s) {
          return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
            esc(s.title || s.url) + "</a>";
        }).join("") + "</div>";
    }

    wrap.innerHTML =
      '<div class="event-card">' +
        '<div class="event-top">' +
          '<span class="event-date">' + esc(ev.date || "") + "</span>" +
          '<span class="tag">' + esc(cat) + "</span>" +
        "</div>" +
        '<h4 class="event-title">' + esc(ev.title || "") + "</h4>" +
        (meta ? '<div class="event-srcs" style="margin-top:6px">' + meta + "</div>" : "") +
        '<p class="event-desc">' + esc(ev.description || "") + "</p>" +
        srcs +
      "</div>";

    // 搜索用的纯文本索引
    wrap.dataset.search = [
      ev.title, ev.description, ev.exploit, ev.cve, ev.firmware,
      ev.dateLabel, ev.date, cat, ev.origin,
      (ev.sources || []).map(function (s) { return s.title; }).join(" ")
    ].join(" ").toLowerCase();

    wrap.dataset.cat = cat;
    wrap.dataset.year = String(ev.date || "").slice(0, 4);
    return wrap;
  }

  /* ------------------------------------------------------ 单个机型区块 */

  function buildConsole(c, index) {
    var events = (c.events || []).slice().sort(function (a, b) {
      var ka = sortKey(a.date), kb = sortKey(b.date);
      return ka < kb ? -1 : ka > kb ? 1 : 0;
    });

    var block = el("section", "console-block");
    block.id = "console-" + (c.id || index);

    /* --- 头部 --- */
    var counts = {};
    events.forEach(function (e) {
      var k = CATS.indexOf(e.category) >= 0 ? e.category : "工具与生态";
      counts[k] = (counts[k] || 0) + 1;
    });

    var pills = '<span class="stat-pill">共 <b>' + events.length + "</b> 个事件</span>";
    if (events.length) {
      pills += '<span class="stat-pill">跨度 <b>' +
        esc(String(events[0].date || "").slice(0, 4)) + "–" +
        esc(String(events[events.length - 1].date || "").slice(0, 4)) + "</b></span>";
    }
    CATS.forEach(function (k) {
      if (counts[k]) pills += '<span class="stat-pill">' + k + " <b>" + counts[k] + "</b></span>";
    });

    var single = document.body.getAttribute("data-single") === "1";

    var head = el("header", "console-head");
    head.innerHTML =
      "<h2>" + esc(c.name || c.id) + "</h2>" +
      '<p class="ch-rel">发售 ' + esc(c.released || "—") + " · " + esc(c.family || "") + "</p>" +
      (c.summary ? '<p class="ch-summary">' + esc(c.summary) + "</p>" : "") +
      (c.status ? '<div class="ch-status"><b>现状</b><span>' + esc(c.status) + "</span></div>" : "") +
      '<div class="stat-row">' + pills + "</div>" +
      '<p style="margin:14px 0 0"><a href="console/' + esc(c.id) + '.html" ' +
      'style="font-size:13px">查看该机型的独立时间轴页 →</a></p>';
    // 机型独立页已经由生成器渲染了更详细的「概览」区块，这里不再重复
    if (!single) block.appendChild(head);

    /* --- 过滤器 --- */
    var bar = el("div", "toolbar");
    var present = CATS.filter(function (k) { return counts[k]; });

    var btns = [{ label: "全部", val: "*" }].concat(
      present.map(function (k) { return { label: k + " " + counts[k], val: k }; })
    );

    btns.forEach(function (b, i) {
      var btn = el("button", "filter-btn" + (i === 0 ? " active" : ""), esc(b.label));
      btn.type = "button";
      btn.dataset.val = b.val;
      bar.appendChild(btn);
    });
    block.appendChild(bar);

    /* --- 时间轴 --- */
    var tl = el("div", "timeline");
    var yearFirstId = {};
    events.forEach(function (e, i) {
      var node = buildEvent(e);
      // 稳定锚点：排序后的下标，供 CVE 索引页 / 年份快跳精确定位
      node.id = "ev-" + (c.id || index) + "-" + i;
      var y = node.dataset.year;
      if (y && !yearFirstId[y]) yearFirstId[y] = node.id;
      tl.appendChild(node);
    });
    if (!events.length) {
      tl.innerHTML = '<p style="color:var(--text-faint)">暂无数据。</p>';
    }
    block.appendChild(tl);

    /* --- 年份快跳（事件较多时才有意义） --- */
    var years = Object.keys(yearFirstId).sort();
    if (years.length >= 5) {
      var nav = el("div", "yearnav");
      var links = years.map(function (y) {
        var n = 0;
        Array.prototype.forEach.call(tl.children, function (x) {
          if (x.classList && x.classList.contains("event") && x.dataset.year === y) n++;
        });
        return '<a href="#' + yearFirstId[y] + '" title="' + y + " 年共 " + n + ' 条">' + y + "</a>";
      }).join("");
      nav.innerHTML = '<span class="yn-label">年份</span>' + links;
      block.insertBefore(nav, bar);
    }

    /* --- 过滤交互（同时尊重全局搜索） --- */
    var active = "*";
    function apply() {
      var q = (window.CJ_QUERY || "").trim().toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(tl.children, function (node) {
        if (!node.classList || !node.classList.contains("event")) return;
        var okCat = active === "*" || node.dataset.cat === active;
        var okQ = !q || node.dataset.search.indexOf(q) >= 0;
        var ok = okCat && okQ;
        node.classList.toggle("hidden", !ok);
        if (ok) shown++;
      });
      block.dataset.shown = shown;
      if (window.CJ_onFilter) window.CJ_onFilter();
    }

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      Array.prototype.forEach.call(bar.querySelectorAll(".filter-btn"), function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      active = btn.dataset.val;
      apply();
    });

    block.__apply = apply;
    apply();
    return block;
  }

  /* ---------------------------------------------------------- 机型索引 */

  function buildIndex(consoles) {
    var host = document.getElementById("console-index");
    if (!host) return;
    host.innerHTML = "";
    consoles.forEach(function (c, i) {
      var a = el("a", "console-chip");
      a.href = "#console-" + (c.id || i);
      a.innerHTML = '<span class="cc-name">' + esc(c.name || c.id) + "</span>" +
        '<span class="cc-count">' + (c.events || []).length + " 条</span>";
      host.appendChild(a);
    });
  }

  /* ------------------------------------------------------------ 统计条 */

  function buildOverview(consoles) {
    // index.html 会把合并前的完整数据挂在 window.CJ_ALL 上，统计以它为准
    var src = window.CJ_ALL || consoles;
    var total = 0, srcs = {}, cves = {};
    var minYear = 9999, maxYear = 0;
    src.forEach(function (c) {
      (c.events || []).forEach(function (e) {
        total++;
        var y = parseInt(String(e.date || "").slice(0, 4), 10);
        if (y) { if (y < minYear) minYear = y; if (y > maxYear) maxYear = y; }
        var m = String(e.cve || "").match(/CVE-\d{4}-\d{4,}/gi);
        if (m) m.forEach(function (x) { cves[x.toUpperCase()] = 1; });
        (e.sources || []).forEach(function (s) {
          if (!s || !s.url) return;
          try { srcs[new URL(s.url).hostname.replace(/^www\./, "")] = 1; } catch (_) {}
        });
      });
    });
    function set(sel, val) {
      var n = document.querySelector(sel);
      if (n && val !== undefined && val !== null && val !== "") n.textContent = val;
    }
    set("[data-stat='events']", total);
    if (maxYear) set("[data-stat='span']", minYear + "–" + maxYear);
    set("[data-stat='domains']", Object.keys(srcs).length);
    set("[data-stat='cves']", Object.keys(cves).length);
  }

  /* -------------------------------------------------------------- 启动 */

  function boot() {
    var consoles = (window.CJ_DATA || []).slice();

    // 允许页面用 body[data-consoles] 指定顺序
    var order = document.body.getAttribute("data-consoles");
    if (order) {
      var byId = {};
      consoles.forEach(function (c) { byId[c.id] = c; });
      consoles = order.split(",").map(function (s) { return byId[s.trim()]; })
        .filter(Boolean);
    }

    var host = document.getElementById("consoles");
    if (!host) return;

    if (!consoles.length) {
      host.innerHTML = '<p style="color:var(--text-faint)">数据未加载。</p>';
      return;
    }

    consoles.forEach(function (c, i) { host.appendChild(buildConsole(c, i)); });
    buildIndex(consoles);
    buildOverview(consoles);

    // 全局搜索
    var input = document.getElementById("search");
    if (input) {
      var all = [];
      consoles.forEach(function (c) {
        var node = document.getElementById("console-" + c.id);
        if (node && node.__apply) all.push(node.__apply);
      });
      var timer = null;
      input.addEventListener("input", function () {
        window.CJ_QUERY = input.value;
        clearTimeout(timer);
        timer = setTimeout(function () { all.forEach(function (f) { f(); }); }, 120);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
