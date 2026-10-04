# 游戏机破解史 · 全景时间轴

Xbox、Nintendo Switch、PlayStation 三大阵营全系列机型的破解史整理，输出为一套**纯静态、可离线打开**的时间轴网页。

主线覆盖软破（softmod）、硬破（hardmod）、硬件漏洞（BootROM / 故障注入）、软件漏洞（内核 / hypervisor / WebView 等）、工具生态与法律战，每条事件都带有可核查的原文链接。

> **口径**：数据截至 **2026 年 10 月**。
> **免责**：本站仅为技术史与安全研究整理，不提供任何破解工具、密钥或操作指引。破解主机可能违反厂商服务条款与当地法律（如 DMCA 第 1201 条反规避条款），并可能导致账号或主机被封禁。

---

## 页面结构

| 页面 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 总览：术语说明、**机型速查表**、三大阵营导航、**全景时间轴**（全部机型合并去重后排序）、破解产业与法律战专题 |
| [`cve.html`](cve.html) | **CVE 索引**：汇总全站被正式分配编号的漏洞，按编号年份排序，链到 NVD 官方条目并回链到对应机型时间轴的具体事件 |
| [`xbox.html`](xbox.html) | Xbox 家族（初代 / 360 / One / Series X\|S） |
| [`switch.html`](switch.html) | Nintendo Switch 家族（V1 Erista / 续航版·Lite·OLED / Switch 2） |
| [`playstation.html`](playstation.html) | PlayStation 家族（PS1 / PS2 / PSP / PS3 / PS Vita / PS4 / PS5） |
| `console/<机型>.html` | **每台主机一个独立时间轴页**（15 个，含横向专题），含概览、本机型内搜索、分类筛选、同系列上下页导航 |

每页都提供：关键字搜索（可直接输入年份或漏洞名）、按事件类型（软破 / 硬破 / 硬件漏洞 / 软件漏洞 / 工具与生态 / 法律与产业）筛选、年份快跳导航、以及指向机型独立页的链接。

### 关于 CVE 覆盖

主机破解的很大一部分成果**根本没有 CVE 编号**：直读芯片、脉冲注入、电压毛刺属于硬件改机而非软件漏洞；PS1、PS2、Xbox 初代等早期平台的缺陷早于「消费级设备漏洞普遍编号」的年代；Switch 与 PlayStation 的固件漏洞常由厂商内部修复、或经漏洞赏金计划私密披露，未申请编号。反过来，主机复用的通用组件（FreeBSD 网络栈、WebKit、Chakra、NSS、Windows 内核）一旦被利用，几乎都带着现成的 CVE 编号。

因此数据里 `cve` 字段的处理原则是：**确证有编号才填，查不到一律留空，绝不虚构**。有编号的漏洞汇总在 [`cve.html`](cve.html)，没有编号的条目仍完整保留在各机型时间轴中。

## 机型与数据规模

<!-- BUILD:MODELS -->

| 机型 | 家族 | 事件数 | 时间跨度 | 原文链接 | 独立页面 |
| --- | --- | ---: | --- | ---: | --- |
| Xbox 360 | Xbox | 27 | 2005–2026 | 65 | [`console/xbox-360.html`](console/xbox-360.html) |
| Xbox One | Xbox | 23 | 2013–2026 | 48 | [`console/xbox-one.html`](console/xbox-one.html) |
| Xbox（初代） | Xbox | 25 | 2001–2026 | 67 | [`console/xbox-original.html`](console/xbox-original.html) |
| Xbox Series X|S | Xbox | 21 | 2013–2026 | 57 | [`console/xbox-series.html`](console/xbox-series.html) |
| Nintendo Switch 2 | Switch | 26 | 2018–2026 | 51 | [`console/switch-2.html`](console/switch-2.html) |
| Switch 续航版 / Lite / OLED（Mariko） | Switch | 26 | 2016–2026 | 65 | [`console/switch-mariko.html`](console/switch-mariko.html) |
| Nintendo Switch（V1 / Erista） | Switch | 28 | 2017–2026 | 61 | [`console/switch-v1.html`](console/switch-v1.html) |
| PlayStation Vita | PlayStation | 27 | 2011–2026 | 62 | [`console/ps-vita.html`](console/ps-vita.html) |
| PlayStation (PS1) | PlayStation | 26 | 1995–2026 | 62 | [`console/ps1.html`](console/ps1.html) |
| PlayStation 2 | PlayStation | 20 | 2000–2026 | 41 | [`console/ps2.html`](console/ps2.html) |
| PlayStation 3 | PlayStation | 29 | 2006–2026 | 81 | [`console/ps3.html`](console/ps3.html) |
| PlayStation 4 | PlayStation | 33 | 2013–2026 | 69 | [`console/ps4.html`](console/ps4.html) |
| PlayStation 5 | PlayStation | 24 | 2020–2026 | 55 | [`console/ps5.html`](console/ps5.html) |
| PlayStation Portable (PSP) | PlayStation | 23 | 2004–2026 | 49 | [`console/psp.html`](console/psp.html) |
| 破解产业与法律战（横向专题） | 横向专题 | 37 | 1992–2026 | 95 | [`console/industry-legal.html`](console/industry-legal.html) |

合计 **15** 个机型／专题、**395** 条事件、**928** 条原文链接。

<!-- /BUILD:MODELS -->

---

## 目录结构

```
console-jailbreak/
├── index.html               总览首页 + 全景时间轴
├── xbox.html                Xbox 家族页
├── switch.html              Switch 家族页
├── playstation.html         PlayStation 家族页
├── console/                 每机型独立时间轴页（生成产物）
├── assets/
│   ├── style.css            样式表
│   └── timeline.js          时间轴渲染器（经典脚本，非 ES module）
├── data/                    时间轴数据，每机型一个文件
│   ├── xbox-original.js  xbox-360.js  xbox-one.js  xbox-series.js
│   ├── switch-v1.js  switch-mariko.js  switch-2.js
│   ├── ps1.js  ps2.js  psp.js  ps3.js  ps-vita.js  ps4.js  ps5.js
│   └── industry-legal.js    横向专题：破解产业与法律战
├── tools/                   构建与校验脚本
│   ├── reports/             自动生成的审计报告
│   ├── shots/               无头浏览器截图
│   └── link-report.json     全部链接的逐条核查结果
├── .nojekyll                关闭 GitHub Pages 的 Jekyll 预处理
└── README.md
```

### 为什么用经典 `<script>` 而不是 JSON + fetch

页面要能在 `file://` 协议下直接双击打开。浏览器的 CORS 策略会阻止 `file://` 下的 `fetch()`/XHR 读取本地 JSON，ES module 同样受限；而**经典 `<script src>` 子资源加载不受影响**。因此数据文件写成 `window.CJ_DATA.push({...})` 形式的普通脚本。

这个选择同时也是 GitHub Pages 友好的：站点**没有任何构建步骤**，提交什么就发布什么，`http://` 与 `file://` 下的渲染结果一致（已实测）。

---

## 部署到 GitHub Pages

可以直接部署，无需构建。仓库里已包含 `.nojekyll`（关闭 Jekyll 预处理），所有引用都是**相对路径**且**大小写与文件名严格一致**——这两点是 GitHub Pages 最常见的翻车原因，已用 `node tools/check-deploy.js` 逐条排掉。

### 部署前自检

```powershell
node tools/check-deploy.js                                  # 静态检查：引用、大小写、绝对路径、Jekyll、charset
node tools/serve.js 8123                                    # 起本地静态服务器预览（另开一个终端）
node tools/check-deploy.js --http http://127.0.0.1:8123     # 按 GitHub Pages 的 http:// 方式实访复核
```

### 方式一：项目站点（地址形如 `https://<用户名>.github.io/<仓库名>/`）

```bash
cd C:\Users\10971\Desktop\goofish\console-jailbreak
git init -b main
git add .
git commit -m "游戏机破解史时间轴：Xbox / Switch / PlayStation 全系列"
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

然后到仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，Branch 选 **`main`** + 文件夹 **`/ (root)`**，保存后等 1–2 分钟即可访问。

### 方式二：用户站点（地址形如 `https://<用户名>.github.io/`）

把仓库名取为 `<用户名>.github.io`，其余步骤相同，站点会挂在根路径。

### 说明与注意

- **不需要任何构建**。`console/*.html` 是已经生成好的静态文件，直接提交即可；只有在改动 `data/` 之后才需要重新跑 `node tools/build-pages.js` 与 `node tools/build-cve.js` 再提交。
- **子路径安全**。因为没有一处以 `/` 开头的绝对路径，放在 `/<仓库名>/` 这样的子目录下不会断链。
- **`tools/` 与 `README.md` 也会被一起发布**（约 2 MB，其中大部分是截图与逐条链接核查报告）。它们不影响站点运行，留着的好处是别人可以复核数据来源；若想精简，可只推送 `index.html`、`cve.html`、`xbox.html`、`switch.html`、`playstation.html`、`console/`、`assets/`、`data/` 与 `.nojekyll`，但本地工具链需保留在工作副本里。
- **仓库设为 public 意味着这些文件连同 git 历史都公开**。本项目不含任何密钥、破解工具或个人数据，全部内容来自公开来源。
- 如果之后启用了自定义域名或在 Pages 设置里切到 GitHub Actions 构建，**务必保留 `.nojekyll`**，否则 Jekyll 会重新接管构建。

---

## 数据格式

每个 `data/<id>.js` 文件：

```js
window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "xbox-360",            // 与文件名一致，用于生成 console/<id>.html
  name: "Xbox 360",
  family: "Xbox",            // Xbox | Switch | PlayStation | 横向专题
  released: "2005-11",
  status: "截至 2026 年 10 月的现状总结",
  summary: "该机型破解史的总体特征与关键转折（2-5 句）",
  events: [
    {
      date: "2011-08",            // YYYY 或 YYYY-MM
      dateLabel: "2011年8月",      // 可选，展示用
      title: "事件标题",
      category: "硬件漏洞",        // 软破|硬破|硬件漏洞|软件漏洞|工具与生态|法律与产业
      exploit: "Reset Glitch Hack",
      cve: "CVE-XXXX-XXXX",       // 没有就写 ""
      firmware: "适用机型/固件范围",  // 没有就写 ""
      description: "攻击面与原理、利用方式与前置条件、影响范围、后续如何被封堵",
      sources: [ { title: "来源标题", url: "https://..." } ]
    }
  ]
});
```

事件在文件里按时间升序排列；渲染器也会再排一次，因此顺序问题不会影响展示。

---

## 工具

| 命令 | 作用 |
| --- | --- |
| `node tools/validate.js` | 校验全部数据文件：JS 语法、必填字段、`category` 取值、日期格式、跨年倒序、URL 形态；输出汇总表并把唯一 URL 写入 `tools/urls.json` |
| `node tools/check-links.js` | 实际请求所有来源链接（先 HEAD 后 GET 回退，带浏览器 UA），报告不可达、超时与跳转，结果写入 `tools/link-report.json` |
| `node tools/todo-links.js` | 从 `link-report.json` 中提取需要人工处理的链接（404 / 405 / 证书错误）与超时、反爬域名分布，输出 `tools/reports/todo-links.txt` |
| `node tools/audit-urls.js` | 来源质量审计：域名分布、白名单外域名、无标题来源、单来源事件、描述过短的事件，输出 `tools/reports/url-audit.txt` |
| `node tools/dupes.js` | 找出跨机型的近似重复事件，用于校准全景时间轴的合并阈值与聚类规则，输出 `tools/reports/dupes.txt` |
| `node tools/build-pages.js` | 依据 `data/` 生成 `console/<id>.html`，并刷新本文件中的机型表格 |
| `node tools/build-cve.js` | 从 `data/` 汇总全部 CVE 编号，生成 `cve.html`（含指向各机型时间轴具体事件的锚点链接） |
| `node tools/probe.js` | 一次性探测一批候选 URL 的可达性，用于给失效链接挑替换来源 |
| `node tools/check-deploy.js` | **部署预检**：本地引用是否存在且大小写严格匹配、有无绝对路径、Jekyll 敏感项、`.nojekyll`、charset 与体积构成；加 `--http <base>` 可按 `http://` 方式复验全部资源 |
| `node tools/serve.js [端口]` | 起一个本地静态预览服务器（默认 `http://127.0.0.1:8123/`），用于在推送前模拟 GitHub Pages 的加载方式 |
| `tools/render-check.ps1` | 用无头 Chrome/Edge 渲染各页面，统计实际渲染出的机型块/事件卡/外链数量并截图到 `tools/shots/` |

数据更新后的标准流程：

```powershell
node tools/validate.js        # 先保证结构和语法没问题
node tools/build-pages.js     # 重新生成独立机型页
node tools/build-cve.js       # 重新生成 CVE 索引页
node tools/check-links.js     # 核查链接可达性
node tools/todo-links.js      # 挑出需要人工处理的那几条
node tools/audit-urls.js      # 看一下来源构成
powershell -ExecutionPolicy Bypass -File tools\render-check.ps1   # 无头渲染验证
```

---

## 数据来源与可信度

- 每个事件至少 1 个来源，全站 395 条事件对应 928 条链接引用、703 个唯一 URL、213 个域名，平均约 2.35 个来源/事件。
- 优先来源：英文维基百科、CVE 数据库（NVD / MITRE / CIRCL Vulnerability-Lookup）、GitHub 官方项目仓库、一手研究原文（fail0verflow、TheFloW、CTurt、bunnie 等）、安全会议（CCC / hardwear.io）、法院与政府文书（justice.gov、ice.gov、copyright.gov、hCourt.gov.au、BAILII、EUR-Lex）、以及主流科技媒体（Ars Technica、The Verge、Eurogamer、Hackaday、Engadget、BBC 等）。

### 链接核查结果（`node tools/check-links.js`）

全部 703 个唯一 URL 都用脚本实际请求过。需要区分两类「异常」：

| 类别 | 数量 | 说明 |
| --- | ---: | --- |
| 404 死链 | **0** | 已全部修正或替换（见下方修订记录） |
| NVD 条目链接 | 20 / 20 可达 | 每个填写过的 CVE 编号都附有 NVD（或 MITRE / CIRCL）条目链接，**全部返回 200**——等于逐个验证了编号真实存在 |
| 405 Method Not Allowed | 13 | 全部是 `arstechnica.com`。该站对非浏览器请求返回「Human Verification」人机验证页，URL 本身有效，浏览器可正常打开 |
| 403 Forbidden | ~116 | 反爬站点（Cloudflare / Akamai 等），浏览器可正常打开 |
| 连接超时 / 连接重置 | ~108 | 本机网络环境所致，主要是 `github.com`、`en.wikipedia.org`、`consolemods.org`——这些站点本身在线（已用搜索独立确认），只是本地访问受限 |
| 证书告警 | 2 | `swarm.ptsecurity.com` 的证书链在本机信任库里缺失；`consolemods.org` 有一次握手返回自签名证书。两个站点本身正常 |

也就是说：**没有已知的失效或编造链接**。剩余的「异常」是反爬与本地网络限制，可在网络条件更好的环境重跑 `node tools/check-links.js` 复核。

## 修订记录与已知不确定项

整理过程中发现并修正的问题（保留记录，便于复核）：

- **Uberchips 案**：初稿写成「2019 年 9 月、德克萨斯东区法院、判赔 1223 万美元」。经查证，1223 万美元属于 2018 年针对 ROM 站点 LoveROMs / LoveRETRO 的另一桩诉讼；Uberchips 案实际在**俄亥俄北区法院**（2020 年 5 月立案），2020 年 10 月以**约 200 万美元和解 + 永久禁令**结案。已改写条目并补上辨正说明（来源：Engadget、VGC、BBC、CourtListener）。
- **Xbox Dev Mode 免注册费**：初稿记为 2025-11 一次性取消。实际是自 **2025 年 7 月下旬**起分阶段放开，11 月大范围可用。已改写为分阶段表述。
- **失效链接**：`torrentfreak.com` 的 Uberchips 报道已下线；`nostarch.com/node/260`（bunnie 的公开信）无法访问；`playstationdev.wiki` 使用自签名证书。已分别替换为可用来源或删除冗余来源。
- **`wiki.gbatemp.net`**：多个机型条目引用过该域名，已统一替换为 `switchbrew.org`。
- **PS5 BootROM 密钥与 39C3 电压毛刺、Relapse 链（7.00–13.60）、14.00 封堵**：这些 2025–2026 年的说法经过交叉核实，确认属实。
- **数据口径易混淆处**：同一款机型的不同硬件修订版结论可能完全相反（Switch 的 Erista 与 Mariko、Xbox One 的 Greybull 主板与后续主板、PS3 的 NOR 与 eMMC 机型），页面中已逐条标注适用机型与固件范围。
- **CVE 编号系统补充**：初版只填了 14 个 CVE。之后对三大阵营逐条重查，补充到 **22 个 CVE、32 条事件**，并新增独立的 [`cve.html`](cve.html) 索引页。新增的包括：`CVE-2007-1221`（Xbox 360 hypervisor，与 1220 同为 2007-03-02 发布、同一 SecurityFocus BID）、`CVE-2016-4657`（Switch PegaSwitch 复用的 Pegasus WebKit 漏洞）、`CVE-2017-9417`（Broadpwn）、`CVE-2017-0785`（BlueBorne）、`CVE-2010-1807` / `CVE-2010-4577`（PS3Xploit 浏览器链）、`CVE-2015-5675`（FreeBSD BadIRET，CTurt 1.76 内核提权）、`CVE-2024-43102`（FreeBSD umtx UAF，PS5 umtx2）、`CVE-2025-64390`（PS4 BD-JB 沙箱逃逸）。每个编号都对照 NVD / MITRE / CIRCL 条目核实，附带的 20 条登记链接实测 **全部返回 200**。
- **明确排除「名字相近但无关」的编号**：核查中查到微软 MSRC 有一批含 "Xbox" 字样的 CVE（如 CVE-2022-21967、CVE-2024-38078、CVE-2025-55242），逐条确认后全部是 Windows 端的 Xbox Gaming Services 与配件组件漏洞，**与主机越狱无关，未采用**。

**已知不确定项**：

1. 2026 年 9 月两项判决（荷兰海牙法院对 MIG Switch 销售商的禁令、美国法院对化名 Archbox 被告的 450 万美元缺席判决）目前**没有公开判决书全文**，仅有 Engadget / Eurogamer / IGN / Nintendo Life / Stevivor / Tarnkappe.info 等二手报道。相关条目已在正文中标出「来源说明」。
2. **疑似但证据不足、刻意未填的 CVE**：`CVE-2018-6240`（NVIDIA Tegra BootROM 任意写，需内核权限）在语义上与 Switch 2018-12 的 warmboot 任意写缺陷高度吻合，且 NVD 中含 "bootrom" 关键词的 NVIDIA 条目只有 6240 与 6242（后者已用于 Fusée Gelée）。但**没有任何来源把 6240 与 Switch 这个具体缺陷关联起来**——SwitchBrew 该行未标 CVE，NVIDIA 公告只写 Android 产品。按「确证才填」的原则留空。

## 全景时间轴的去重规则

同一条跨机型大事（例如 Team Xecuter 案、Gary Bowser 判刑、Fusée Gelée 公开、2026 年 Gezine 通用 userland 漏洞）会在多个机型的数据里各出现一次——最多的一条（Bowser 判刑）在 5 个机型里都有记录。首页的合并视图对它们做三级处理：

1. **特征事件聚类**（`index.html` 中的 `CLUSTERS` 表）：对明确可判定为「同一件事」的跨机型事件做精确合并，把涉及的机型写进 `origin` 标签（合并后 331 条，原始 358 条）；
2. **跳过「现状」小结**：各机型自己的收尾性小结（标题以「现状 / 现况」开头）不属于历史事件，不进入合并视图；
3. **兜底相似度合并**：同月内标题字符二元组 Dice 相似度 ≥ 0.75 的条目合并。

只做这几类合并，是为了避免把**相关但不同**的事件误并成一条（例如 PS Jailbreak 破解设备的发布，与它之后引发的诉讼，就是两条独立事件）。

