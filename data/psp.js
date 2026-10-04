window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "psp",
  name: "PlayStation Portable (PSP)",
  family: "PlayStation",
  released: "2004-12",
  status: "截至 2026 年 10 月，PSP 全系（1000/2000/3000/Go/E1000）在 6.60/6.61 上都能实现永久破解：用 Infinity 或 2024 年问世的新版 cIPL（Despertar del Cementerio v10）即可让开机即生效的自制系统常驻，再加上 ARK-4 提供现代功能，官方系统自 2015 年的 6.61 起再无更新。整个生态已经完全定型，社区只做维护性更新——ARK-4 在 2026 年 5 月 15 日发布了 4.20.69 r206。",
  summary: "PSP是史上破解最彻底、生命周期最长的掌机之一：从2005年Photo Viewer的TIFF缓冲区溢出开始，索尼与自制社区展开长达十年的猫鼠游戏。2007年的Pandora神奇电池用服务模式电池把硬破变成通用降级工具，2008年PSP-3000封堵该路径后，社区转向ChickHEN、TN HEN与PRO等项目。最终2016年的Infinity利用启动链持久化，让曾被认为无法永久破解的PSP-3000/Go也获得开机即生效的自制系统。",
  events: [
    {
      date: "2004-12",
      dateLabel: "2004年12月",
      title: "PSP-1000在日本首发，破解生态起步",
      category: "工具与生态",
      exploit: "官方系统 1.00 / Memory Stick 自制程序",
      cve: "",
      firmware: "PSP-1000（1.00）",
      description: "2004年12月12日PSP-1000在日本上市，初期固件1.00允许直接执行记忆棒上未签名的EBOOT.PBP，成为最早的“免漏洞”运行窗口。这一宽松设计让模拟器与自制程序在发售数月内涌现，也直接导致索尼在1.50之后收紧可执行文件校验。此后每一次官方固件更新几乎都以封堵自制程序为主要目的，奠定了整场猫鼠游戏的基本格局。",
      sources: [
        { title: "Wololo.net：PSP与破解社区九年发展史（确认2004-12-12日本首发）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" },
        { title: "Sony Interactive Entertainment 官方新闻稿档案", url: "https://sonyinteractive.com/en/news/press-releases/" }
      ]
    },
    {
      date: "2005-06",
      dateLabel: "2005年6月",
      title: "1.50与KXploit多程序方案",
      category: "软破",
      exploit: "EBOOT.PBP 目录加载 / KXploit",
      cve: "",
      firmware: "PSP-1000（1.50 可执行、1.51 起封堵）",
      description: "在1.50固件上，社区通过把未签名EBOOT.PBP放进记忆棒的PSP/GAME目录直接运行自制程序；KXploit这类工具则用“同名双目录”技巧绕开系统对GAME目录只能存在一个可执行程序、且会与存档目录冲突的限制，实现多个自制程序与正版游戏共存。这是最早成规模的PSP软破方案，完全依赖系统加载逻辑的宽松而非内存漏洞，因此没有任何CVE编号。索尼随后在1.51（2005年5月）修复了该目录处理方式，KXploit随之失效。",
      sources: [
        { title: "Penny Arcade 2005-06-22：KXsploit for PSP 1.5（KXploit 同期报道）", url: "https://automata.penny-arcade.com/news/post/2005/06/22/kxsploit-for-psp-1.5" },
        { title: "Engadget 2005-06-24：Swapless PSP homebrew bootstrap（同期免盘引导方案报道）", url: "https://www.engadget.com/2005-06-24-swapless-psp-homebrew-bootstrap.html" }
      ]
    },
    {
      date: "2005-09",
      dateLabel: "2005年9月",
      title: "Photo Viewer TIFF 溢出漏洞",
      category: "软件漏洞",
      exploit: "Photo Viewer TIFF 解析溢出",
      cve: "CVE-2005-3084",
      firmware: "PSP-1000（2.0 固件）",
      description: "2005年9月公开的漏洞位于PSP 2.0固件Photo Viewer所用的TIFF图像解析库：构造畸形TIFF文件即可触发缓冲区溢出，NVD记录为可造成拒绝服务的远程攻击面（CVE-2005-3084）。社区很快把这一崩溃转化为用户态代码执行入口——把恶意TIFF放进记忆棒、在相册中打开即触发，用于在2.0上运行未签名代码。索尼在2.01/2.50固件中修补了该解析路径，这成为PSP历史上第一个被正式编号并长期被引用的漏洞。",
      sources: [
        { title: "NVD：CVE-2005-3084 详情", url: "https://nvd.nist.gov/vuln/detail/CVE-2005-3084" },
        { title: "MITRE CVE 记录：CVE-2005-3084", url: "https://www.cve.org/CVERecord?id=CVE-2005-3084" }
      ]
    },
    {
      date: "2005-09",
      dateLabel: "2005年9月",
      title: "首个2.0降级到1.50工具发布",
      category: "软破",
      exploit: "2.0 → 1.50 downgrader（TIFF 溢出链）",
      cve: "CVE-2005-3084",
      firmware: "PSP-1000（2.0 降至 1.50）",
      description: "在TIFF溢出实现用户态代码执行后，社区完成并发布了把2.0固件降级回1.50的完整降级器：先在2.0上借溢出获得执行，再由降级程序重写NAND中的固件数据，最后要求用户手动把电池取出/进入恢复状态。降级到1.50意味着重获EBOOT直接加载能力，因此“降级”此后长期是PSP软破的核心基础设施。索尼以2.01与后续固件修补溢出并强化固件校验，但降级思路一直延续到6.20/6.60时代的降级器。",
      sources: [
        { title: "Engadget 2005-09-28：Working 2.0 to 1.5 PSP downgrader completed & released", url: "https://www.engadget.com/2005-09-28-working-2-0-to-1-5-psp-downgrader-completed-amp-released.html" },
        { title: "NVD：CVE-2005-3084（漏洞本体）", url: "https://nvd.nist.gov/vuln/detail/CVE-2005-3084" }
      ]
    },
    {
      date: "2005-10",
      dateLabel: "2005年10月",
      title: "固件2.01封堵TIFF漏洞，猫鼠游戏开启",
      category: "法律与产业",
      exploit: "官方固件 2.01 / 2.50 安全更新",
      cve: "",
      firmware: "PSP-1000（2.01、2.50）",
      description: "索尼在2.0被攻破后迅速推出2.01更新，直接修补Photo Viewer的TIFF溢出；随后2.50进一步加固固件与网络功能，官方更新说明中几乎不提安全修复，只强调新增特性。由于索尼以游戏UMD捆绑与网络服务强制推动升级，用户被迫在“新功能”与“自制程序”之间二选一。这一模式在随后十年反复出现，也催生了社区“不要升级”的长期共识。",
      sources: [
        { title: "Game Developer：PlayStation Portable 2.50 Firmware Released", url: "https://www.gamedeveloper.com/game-platforms/playstation-portable-2-50-firmware-released" },
        { title: "Wololo.net：PSP与破解社区九年发展史（早期固件与漏洞脉络）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2006-06",
      dateLabel: "2006年6月",
      title: "Devhook 与 2.71 SE-A 自制系统",
      category: "工具与生态",
      exploit: "Devhook / Dark_AleX 2.71 SE-A (Open Edition)",
      cve: "",
      firmware: "PSP-1000（1.50 上加载 2.71 系统）",
      description: "Dark_AleX的Devhook系列通过把官方固件镜像加载进内存并模拟NAND分区，让停留在1.50的机器可以在不刷写固件的前提下运行更高版本系统、UMD备份与自制程序，Devhook 0.41D/0.42等版本在2006年年中广泛流传。2006年下半年他又推出2.71 SE（Open Edition）系列，第一次真正改写固件本体并保留1.50核心执行环境，被视为PSP“自制系统（CFW）”概念的起点。索尼随后用固件更新不断破坏Devhook所依赖的可执行环境与模块签名校验。",
      sources: [
        { title: "Engadget 2006-09-06：New PSP hack gets downgrader, e-Loader（同期降级器与加载器报道）", url: "https://www.engadget.com/2006-09-06-new-psp-hack-gets-downgrader-e-loader.html" },
        { title: "Wololo.net：PSP与破解社区九年发展史", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2007-01",
      dateLabel: "2007年1月",
      title: "Dark_AleX 发布 3.03 OE-A 自制系统",
      category: "工具与生态",
      exploit: "3.03 OE-A 自制固件",
      cve: "",
      firmware: "PSP-1000（基于3.03）",
      description: "3.03 OE-A把自制系统的功能推进到可自定义boot与固件模块的程度，用户可在不借助Devhook的情况下直接获得内核级自制能力，OE系列成为当时PSP破解生态的事实标准。它同时支持UMD备份运行与PS1游戏加载（POPS）的早期形态，把破解的价值从“跑模拟器”扩展到完整替代官方系统。索尼随即在3.10及之后固件中修补相关校验，OE系列停止更新并由M33系列接棒。",
      sources: [
        { title: "Wikipedia：PlayStation Portable homebrew（PlayStation Portable 自制软件历史条目）", url: "https://en.wikipedia.org/wiki/PlayStation_Portable_homebrew" },
        { title: "Wololo.net：PSP与破解社区九年发展史（Dark_AleX 与自制固件脉络）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2007-07",
      dateLabel: "2007年7月",
      title: "Dark_AleX 退出PSP自制社区",
      category: "法律与产业",
      exploit: "—",
      cve: "",
      firmware: "",
      description: "2007年7月，PSP自制系统最具影响力的开发者Dark_AleX宣布退出开发，公开理由是个人生活与社区压力，外界普遍猜测与索尼的法律施压有关，Ars Technica当时以“PSP用户哀悼”为题报道。此事一度被视为PSP破解场景终结的信号，也让社区开始分散到多个团队与项目。不过同年稍晚他以M33名义回归并继续发布自制固件，说明这次退出更多是开发者个人层面的转折而非技术路线的终结。",
      sources: [
        { title: "Ars Technica 2007-07：Dark_Alex quits the custom firmware scene, PSP users mourn", url: "https://arstechnica.com/gaming/2007/07/dark-alex-quits-the-custom-firmware-scene-psp-users-mourn/" },
        { title: "Wololo.net：PSP与破解社区九年发展史（提及 Dark_AleX 2007 年退出）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2007-08",
      dateLabel: "2007年8月",
      title: "Pandora 神奇电池发布",
      category: "硬破",
      exploit: "Pandora's Battery / JigKick 服务模式电池",
      cve: "",
      firmware: "PSP-1000 与早期 PSP-2000（全固件版本）",
      description: "Team C+D公开的Pandora方案利用PSP电池EEPROM中的序列号：把电池改写为服务模式（JigKick）电池后，主机开机即进入服务模式，由电池而非NAND中的IPL引导，并从特制记忆棒上的IPL执行未签名代码。这意味着任何固件版本的PSP-1000都可以被降级或恢复，同时也成为通用的救砖手段，彻底改变了此前“升错固件就报废”的局面。索尼随后在PSP-2000后期主板与PSP-3000上更换引导设计，使该电池不再可用。",
      sources: [
        { title: "Engadget 2007-08-23：Pandora's battery unbricks all PSP systems", url: "https://www.engadget.com/2007-08-23-pandoras-battery-unbricks-all-psp-systems.html" },
        { title: "PS Dev Wiki：JigKick Battery（服务模式电池技术说明）", url: "https://www.psdevwiki.com/psp/index.php?title=JigKick_Battery" }
      ]
    },
    {
      date: "2007-09",
      dateLabel: "2007年9月",
      title: "PSP-2000 上市与 3.71 M33",
      category: "工具与生态",
      exploit: "3.71 M33 自制固件",
      cve: "",
      firmware: "PSP-1000 / PSP-2000（基于3.71）",
      description: "索尼在2007年9月推出更轻薄的PSP-2000，初期主板仍可被刷写，因而与Pandora电池配合形成成熟的破解组合。同年9月Dark_AleX以M33名义发布3.71 M33，把恢复菜单（Recovery Menu）、固件模块定制与1.50核心补丁整合进单一自制系统，成为后续M33/GEN/PRO系列的模板。此后索尼多次改版PSP-2000主板（TA-088v3等），逐步取消刷写与Pandora支持，逼迫社区寻找纯软件路径。",
      sources: [
        { title: "GBAtemp：3.71 M33 Custom Firmware released（2007年9月发布帖）", url: "https://gbatemp.net/threads/3-71-m33-custom-firmware-released.61139/" },
        { title: "Sony Interactive Entertainment 官方新闻稿 2007-07-12：PSP-2000 于9月上市", url: "https://sonyinteractive.com/en/press-releases/2007/pspplaystationportable-becomes-slimmer-and-lighter/" }
      ]
    },
    {
      date: "2008-10",
      dateLabel: "2008年10月",
      title: "5.00 M33 发布，PSP-3000封堵",
      category: "工具与生态",
      exploit: "5.00 M33 自制固件 / PSP-3000 新引导设计",
      cve: "",
      firmware: "PSP-1000 / PSP-2000（5.00 M33）；PSP-3000（官方固件）",
      description: "索尼发布5.00官方固件几天后，Dark_AleX的5.00 M33跟进上线，修正了XMB中设置CPU频率后实际仍回落222MHz等问题，是M33系列最成熟的版本之一。与此同时，2008年10月16日在日本上市的PSP-3000更换了主板与预引导流程，服务模式电池（Pandora）与固件刷写同时失效，PSP-2000后期型号也逐步采用同类主板。这一代硬件改动让社区明白：PSP-3000只能走纯软件漏洞路线，直接催生了2009年的ChickHEN。",
      sources: [
        { title: "Sony Interactive Entertainment 官方新闻稿 2008-09-02：PSP-3000 于10月16日在日本上市", url: "https://sonyinteractive.com/en/press-releases/2008/sony-computer-entertainment-japan-to-introduce-new-psp-playstationportable-with-advanced-high-contrast-lcd-this-october-in-japan/" },
        { title: "Wololo.net：PSP与破解社区九年发展史", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2009-05",
      dateLabel: "2009年5月",
      title: "ChickHEN 破解 PSP-3000",
      category: "软破",
      exploit: "ChickHEN（Photo Viewer TIFF 内存破坏）",
      cve: "",
      firmware: "PSP-3000 / PSP-2000 v3（5.03）",
      description: "Davee公开的ChickHEN利用5.03固件Photo Viewer中TIFF解析的内存破坏，让被硬件封堵的PSP-3000第一次能运行未签名代码：把特制TIFF与HEN文件放入记忆棒，在相册中触发即获得用户态执行，再借内核漏洞升级为HEN环境。它随后以R2版本更新来提高成功率，并成为PSP-3000破解路线的起点，社区据此开发出ISO加载器与降级工具。索尼在5.05及后续固件中修补该漏洞，并在新出厂的PSP-3000上直接预装更高版本，ChickHEN只对5.03机器有效。",
      sources: [
        { title: "Exophase：ChickHEN for Firmware 5.03 R2（发布报道）", url: "https://www.exophase.com/11340/chickhen-for-firmware-503-r2/" },
        { title: "Endless Paradigm：ChickHEN Homebrew Enabler（社区发布帖）", url: "https://endlessparadigm.com/forum/showthread.php?mode=linear&tid=17010&pid=218883" }
      ]
    },
    {
      date: "2010-06",
      dateLabel: "2010年6月",
      title: "PSP-3000 专用 5.03 P 自制系统",
      category: "软破",
      exploit: "5.03 P / Prometheus 系列（含 Prometheus ISO Loader）",
      cve: "",
      firmware: "PSP-3000 / PSP-2000 v3（5.03）",
      description: "在ChickHEN提供的执行环境之上，开发者liquidzigong于2010年6月发布仅面向PSP-3000的CFW-5.03 P，把原本需要每次手动触发的HEN包装成更完整、可直接加载ISO的自制系统，后续Prometheus系列进一步改善了免盘与游戏兼容性。这一阶段形成了“5.03机器走ChickHEN+5.03 P/Prometheus”的固定组合，是PSP-3000早期用户最主流的破解方案。索尼用5.05以上固件封堵TIFF漏洞，未破解的新机只能等待6.20时代的软件漏洞。",
      sources: [
        { title: "Endless Paradigm：[Released] Prometheus ISO Loader for 6.20 TN-A（同期 Prometheus 系工具）", url: "https://endlessparadigm.com/forum/showthread.php?mode=linear&tid=25447&pid=340685" },
        { title: "Wololo.net 2010-12-08：TN Hen 发布预告（Patapon 2 漏洞与 HBL 生态）", url: "https://wololo.net/2010/12/08/tn-hen-some-bumps-on-the-roa/" }
      ]
    },
    {
      date: "2010-12",
      dateLabel: "2010年12月",
      title: "Total_Noob 6.20 TN HEN 发布",
      category: "软破",
      exploit: "6.20 TN HEN（Patapon 2 试玩版存档/内核漏洞 + HBL）",
      cve: "",
      firmware: "全系列（6.20，后续扩展 6.35）",
      description: "6.20 TN HEN由Total_Noob开发，利用《Patapon 2》试玩版漏洞触发的用户态执行（最初基于HBL），并叠加内核漏洞升级为HEN，让当时最新的PSP-3000/Go在6.20上运行自制程序与ISO加载器。它与wololo等人维护的Half Byte Loader生态结合，把6.20变成新机破解的推荐固件版本，也让“HEN”成为此后PRO/ME自制系统的通用入口。索尼随后在6.31/6.35更新中修补相关漏洞，但移植到6.35的版本很快出现。",
      sources: [
        { title: "Wololo.net 2010-12-08：TN Hen release 预告（Patapon 2 漏洞与 HBL）", url: "https://wololo.net/2010/12/08/tn-hen-some-bumps-on-the-roa/" },
        { title: "Wololo.net：PSP与破解社区九年发展史（HBL 与 6.20 HEN）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2010-12",
      dateLabel: "2010年12月",
      title: "PSJailbreak 案：索尼诉破解设备销售商",
      category: "法律与产业",
      exploit: "PSJailbreak USB 加密狗（PS3 引导程序）",
      cve: "",
      firmware: "",
      description: "2010 年，销售 PSJailbreak（PS3 用 USB 越狱狗，2010 年 8 月上市后不久即遭禁售）的经销商在澳大利亚被法院禁止销售；随后索尼转而起诉核心开发者 George Hotz 与 fail0verflow 团队，最终在 2011 年 4 月以和解收场。这起案件与 PSP 本身没有直接技术关系——PSJailbreak 只作用于 PS3 的 USB 与 lv2 系统调用层——但它确立了主机厂商以 DMCA 反规避条款打击破解设备销售的路径，也间接让 PSP/Vita 时代的社区更倾向匿名发布与海外托管。相关判决与和解文书至今仍被作为主机破解法律研究的典型案例。",
      sources: [
        { title: "BBC News (2010): PS3 hack ban upheld by court as free version released", url: "https://www.bbc.com/news/technology-11176441" },
        { title: "Wikipedia：Sony Computer Entertainment America v. George Hotz", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" }
      ]
    },
    {
      date: "2011-08",
      dateLabel: "2011年8月",
      title: "PRO 自制系统支持6.60，成为后期主流",
      category: "工具与生态",
      exploit: "PRO CFW（6.35 / 6.39 / 6.60）",
      cve: "",
      firmware: "全系列（6.20 / 6.35 / 6.39 / 6.60）",
      description: "索尼发布6.60固件修补some1的6.39内核漏洞后不到两周，Virtuous Flame与Coldbird的PRO项目就推出支持6.60的PRO-B9，随后PRO-C系列成为6.60时代的通用自制系统，覆盖PSP-1000到PSP Go全机型。PRO提供VSH菜单、ISO/CSX加载、插件支持与恢复模式，并可与ME系列并存，事实上统一了后期PSP破解的软件栈。索尼此后几乎不再为PSP发布安全更新，6.60/6.61成为自制系统的最终战场。",
      sources: [
        { title: "Wololo.net 2011-08-25：CFW Pro B9 is out, adds 6.60 compatibility", url: "https://wololo.net/2011/08/25/cfw-pro-b9-is-out-adds-6-60-compatibility/" },
        { title: "Wololo.net 2011-08-10：PSP Official Firmware 6.60 patches the 6.39 Kernel exploit", url: "https://wololo.net/2011/08/10/psp-official-firmware-6-60-patches-the-6-39-kernel-exploit/" }
      ]
    },
    {
      date: "2013-03",
      dateLabel: "2013年3月",
      title: "ARK-2 与6.60/6.61自制系统",
      category: "工具与生态",
      exploit: "ARK-2 自制固件（前身 Pro CFW 分支）",
      cve: "",
      firmware: "全系列（6.60 / 6.61）",
      description: "ARK-2由原PRO团队相关开发者维护，定位为轻量、开源、兼容PSP与PS Vita的ePSP（PSP模拟器）环境的自制系统，支持6.60/6.61以及部分5.03机器在无永久补丁的情况下以HEN方式加载。它把自制系统从“单一固件版本绑定”推向跨机型、跨平台复用，也是后来Vita上Adrenaline/ARK生态的技术来源之一。由于索尼已停止PSP系统更新，ARK系列此后的更新主要围绕兼容性与插件生态。",
      sources: [
        { title: "GitHub：PSP-Archive/ARK-4（ARK 系列官方仓库，含 ARK-2 传承说明）", url: "https://github.com/PSP-Archive/ARK-4" },
        { title: "PSP-Archive ARK-4 Wiki：cIPL 与永久破解机制", url: "https://github.com/PSP-Archive/ARK-4/wiki/cIPL" }
      ]
    },
    {
      date: "2015-01",
      dateLabel: "2015年1月",
      title: "索尼发布6.61固件，PSP系统更新终结",
      category: "法律与产业",
      exploit: "官方固件 6.61",
      cve: "",
      firmware: "全系列（6.61）",
      description: "2015年1月索尼发布PSP 6.61系统更新，主要修补6.60上可用的内核漏洞，此时PSP硬件早已停产，仅剩PSN商店与部分网络服务仍在运行。这次更新是PSP官方系统的最后一次功能性/安全性更新，也把破解社区的注意力集中到仅剩的两个版本（6.60与6.61）上。由于无法再通过新固件获得漏洞，此后社区改用启动链持久化手段来固化破解效果。",
      sources: [
        { title: "PSX-Place：PSP Custom Firmware Updates Out - Includes 6.61 PRO-C2", url: "https://www.psx-place.com/threads/psp-custom-firmware-updates-out-includes-6-61-pro-c2.1170/" },
        { title: "Wololo.net：PSP 与破解社区发展史（后期固件脉络）", url: "https://wololo.net/2014/06/02/sony-playstation-portable-and-the-hacking-scene-9-years-of-development/" }
      ]
    },
    {
      date: "2015-02",
      dateLabel: "2015年2月",
      title: "PRO-C2 支持6.61固件",
      category: "工具与生态",
      exploit: "6.61 PRO-C2 / ME 2.3",
      cve: "",
      firmware: "全系列（6.20 / 6.35 / 6.39 / 6.60 / 6.61）",
      description: "针对索尼1月发布的6.61固件，PRO团队很快推出6.61 PRO-C2，使最新固件也能运行自制系统；同期neur0n的ME系列同样跟进，形成“6.60/6.61 + PRO-C2 或 ME”的最终软件组合。PRO-C2把此前的PRO-B/C功能整合，支持插件、ISO加载、恢复模式与VSH菜单，并在PSP Go上支持暂停游戏等特性。至此PSP软件层面的破解资源基本齐备，剩下的唯一问题是能否在每次关机后自动生效。",
      sources: [
        { title: "PSX-Place：6.61 PRO-C f3 - PSP Custom Firmware Released", url: "https://www.psx-place.com/threads/6-61-pro-c-f3-psp-custom-firmware-released.1143/" },
        { title: "PSX-Place：PSP Custom Firmware Updates Out - Includes 6.61 PRO-C2", url: "https://www.psx-place.com/threads/psp-custom-firmware-updates-out-includes-6-61-pro-c2.1170/" }
      ]
    },
    {
      date: "2016-02",
      dateLabel: "2016年2月",
      title: "Davee 发布 Infinity 永久破解",
      category: "硬件漏洞",
      exploit: "Infinity（持久化启动链劫持 / cIPL 思路）",
      cve: "",
      firmware: "全系列（6.60 / 6.61，含 PSP Go 与 E1000）",
      description: "Infinity由Davee（ChickHEN作者）发布，通过把自定义的持久化补丁写入主机启动链，让原本只能“开机后手动重新激活”的HEN/LCFW在PSP-3000、PSP Go与E1000等不可刷写机型上变成开机即生效的永久自制系统。它支持6.60与6.61、可在PRO与ME之间切换，2.0版本进一步加入E1000与PSP Go的暂停/恢复游戏功能，被视为PSP破解史的收官之作。由于需要写入启动相关区域，安装存在变砖风险，使用前通常建议配合Pandora/Despertar del Cementerio等救砖手段。",
      sources: [
        { title: "Infinity 官方项目页（Davee）", url: "https://infinity.lolhax.org/" },
        { title: "GitHub：DaveeFTW/Infinity（持久化自制系统源码库）", url: "https://github.com/DaveeFTW/Infinity" },
        { title: "GBAtemp：Davee's Infinity CFW - Permanent 6.61 CFW on All 3000 & Go Models", url: "https://gbatemp.net/threads/davees-infinity-cfw-permanent-6-61-cfw-on-all-3000-go-models.414948/" }
      ]
    },
    {
      date: "2021-11",
      dateLabel: "2021年11月",
      title: "Despertar del Cementerio 9.01",
      category: "工具与生态",
      exploit: "Despertar del Cementerio 9.01 / Baryon Sweeper",
      cve: "",
      firmware: "PSP-1000 / 2000 / 3000（03g）",
      description: "2021年11月发布的Despertar del Cementerio 9.01基于5.02重建了这套经典Pandora救砖与刷机工具，并把此前被视为“不可破解”的TA-088v3与03g版PSP-3000纳入支持范围，其自述称所用bootrom层级漏洞理论上对所有PSP硬件有效。它需要借助Pandora电池或Baryon Sweeper进入服务模式引导，说明即便在2020年代，PSP最底层的引导链仍可被攻破。这类更新标志着社区重心已从寻找新漏洞转向保存与延长旧硬件寿命。",
      sources: [
        { title: "Wololo.net 2021-11-14：PSP Release: Despertar Del Cementerio 9.01 (PSP unbricker)", url: "https://wololo.net/2021/11/14/psp-release-despertar-del-cementerio-9-01-psp-unbricker/" },
        { title: "GitHub：balika011/DC-M33（Despertar del Cementerio 源码与发布）", url: "https://github.com/balika011/DC-M33" }
      ]
    },
    {
      date: "2024-04",
      dateLabel: "2024年4月",
      title: "新 cIPL 与 DC v10 全系永久破解",
      category: "硬件漏洞",
      exploit: "Davee IPLSDK / 新 CIPL（Custom IPL）",
      cve: "",
      firmware: "全系列（6.61，含 TA-088v3、全部3000型、PSP Go、E1000）",
      description: "2024年4月，ARK团队与zecoxao、krazynez等人基于Davee的IPLSDK与balika011的03g代码，发布了面向全部八种PSP型号的新CIPL与Despertar del Cementerio v10：它直接替换固件原有的IPL，使TA-088v3、各版PSP-3000、PSP Go与E1000这些“不可刷写”机型也能运行完整且可自救的6.61 ARK-4自制系统，能力上强于只做自动启动的Infinity永久补丁。服务模式引导依赖Baryon Sweeper等硬件注入手段，新CIPL还允许在固件损坏时从记忆棒自救。至此PSP在硬件与软件两个层面都达到破解上限。",
      sources: [
        { title: "Wololo.net 2024-04-20：Release: New CIPL and Despertar del Cementerio v10 for every PSP!", url: "https://wololo.net/2024/04/20/release-new-cipl-and-despertar-del-cementerio-v10-for-every-psp/" },
        { title: "GitHub：DaveeFTW/iplsdk（新版 CIPL 底层工具链）", url: "https://github.com/DaveeFTW/iplsdk" },
        { title: "GitHub：PSP-Archive/ARK-4（ARK CFW 官方仓库）", url: "https://github.com/PSP-Archive/ARK-4" }
      ]
    },
    {
      date: "2026-05",
      dateLabel: "2026年5月15日",
      title: "ARK-4 4.20.69 r206：PSP 自制系统的维护性更新",
      category: "工具与生态",
      exploit: "ARK-4 v4.20.69 r206（e/CFW）",
      cve: "",
      firmware: "PSP 6.60 / 6.61（同时支持 PS Vita 的 ePSP 环境）",
      description: "2026 年 5 月 15 日，ARK-4 发布 4.20.69 r206，继续为 PSP 与 PS Vita 的 ePSP 环境提供同一套开源自制系统。ARK-4 既能以 HEN 方式加载，也能配合 Infinity 或新版 cIPL 实现开机即生效，因此同时覆盖了“不可刷写”的 3000 型、PSP Go、E1000 与早期可刷机机型。这类更新不再涉及新漏洞，主要修兼容性、插件与存储支持，说明 PSP 破解已经进入纯维护期：官方固件停在 2015 年的 6.61，而工具链仍在被社区照顾。",
      sources: [
        { title: "GitHub Releases: PSP-Archive/ARK-4 v4.20.69 r206（2026-05-15）", url: "https://github.com/PSP-Archive/ARK-4/releases/tag/v42069r206" },
        { title: "GitHub: PSP-Archive/ARK-4（e/CFW for the PSP and PS Vita）", url: "https://github.com/PSP-Archive/ARK-4" },
        { title: "GitHub Wiki: PSP-Archive/ARK-4 - cIPL 与永久破解机制", url: "https://github.com/PSP-Archive/ARK-4/wiki/cIPL" }
      ]
    }
  ]
});
