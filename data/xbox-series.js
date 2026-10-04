window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "xbox-series",
  name: "Xbox Series X|S",
  family: "Xbox",
  released: "2020-11",
  status: "截至 2026 年 10 月，Series X|S 零售机依旧未被攻破：没有任何公开的软破、固件降级或 modchip/ODE 方案，本世代 SoC 与 PSP 信任根也没有出现类似 BLISS 的硅片缺陷（该攻击仅适用于 2013 款初代 Xbox One）。官方 Dev Mode 是唯一的免硬改通道，2025 年取消开发者注册费后门槛进一步降低，2026 年社区继续借它把 Switch 模拟器 Ryujinx、4K60 的 Mario Kart Wii 以及 PS5 模拟器 KytyPS5 的移植版搬上主机。代价是这条路完全受微软政策与账号体系约束，且只能停留在用户态沙箱内，无法触及内核、hypervisor 或安全处理器。",
  summary: "Xbox Series X|S 沿用 Xbox One 的 PSP 硬件信任根与 Hyper-V 虚拟化，发售后既没有公开的软件漏洞与固件降级路径，也没有出现直读芯片或 ODE，硬破领域至今空白。它的破解史几乎等同于 Dev Mode 生态史：模拟器与自制软件全部依赖官方开发者模式侧载，也因此先后被商店下架与封号政策整肃。2026-03 的 Bliss 用双重电压毛刺首次攻破 2013 款 Xbox One 的 Boot ROM，但 One S、One X 与 Series X|S 被明确排除在影响范围之外，本世代信任根仍然完好。",
  events: [
    {
      date: "2013-11",
      dateLabel: "2013年11月",
      title: "前史：Xbox One 确立 PSP 信任链",
      category: "硬件漏洞",
      exploit: "Platform Security Processor (PSP) + Hyper-V hypervisor",
      cve: "",
      firmware: "Xbox One 2013 初代（Series X|S 沿用同源架构）",
      description: "初代 Xbox One 在 2013-11 上市时就把信任根放在南桥内的 ARM 架构 Platform Security Processor（PSP）上，并用 Hyper-V hypervisor 把 Game OS（Exclusive OS）与 System OS（Shared OS）隔离，启动链从 Boot ROM 到内核逐级做 RSA/ECC 双签名验证，同时关闭 UART、JTAG 等调试接口。微软工程师当时称它为「微软史上最安全的产品」，此后十余年零售机始终没有出现可用的公开利用链。Xbox Series X|S 直接继承这套架构，并换成更新的安全处理器与更严格的熔丝、反回滚策略，因此本世代的安全基线其实是 2013 年打下的。这也解释了为什么针对 Xbox 的公开攻击最终都绕开软件，转向硅片与物理故障注入。",
      sources: [
        { title: "Semiconductor Engineering: Breaking The Unhackable Xbox One", url: "https://semiengineering.com/breaking-the-unhackable-xbox-one/" },
        { title: "Wikipedia: Xbox One", url: "https://en.wikipedia.org/wiki/Xbox_One" },
        { title: "GIGAZINE: The Xbox One has finally been breached using Bliss", url: "https://gigazine.net/gsc_news/en/20260318-xbox-one-hacked/" }
      ]
    },
    {
      date: "2016-03",
      dateLabel: "2016年3月",
      title: "Dev Mode 让零售机变开发机",
      category: "工具与生态",
      exploit: "Xbox Dev Mode（Dev Mode Activation 应用 + Partner Center 账号）",
      cve: "",
      firmware: "零售机全系（Xbox One 起，Series X|S 首发即支持）",
      description: "在 Build 2016 上微软宣布任何零售 Xbox One 都可以当开发机使用：安装 Xbox Dev Mode 应用、注册 Partner Center 个人开发者账号（一次性费用，长期约 19 美元）并输入激活码即可进入 Developer Mode，运行未签名的 UWP 应用。代价是开发模式下无法运行零售游戏与商店应用，也不能正常使用 Xbox Live。这条官方通道此后成为 Xbox One 与 Series X|S 唯一的「免硬改」侧载途径，RetroArch 等模拟器与自制工具几乎全部依赖它。2025 年 7 月起微软逐步取消了这笔费用但加入身份验证，并重申把 Dev Mode 当模拟器平台使用违反合作伙伴计划条款。",
      sources: [
        { title: "GamesIndustry.biz: Microsoft Build 2016 - Yes, your Xbox One is a dev kit", url: "https://www.gamesindustry.biz/microsoft-build-2016-yes-your-xbox-one-is-a-dev-kit" },
        { title: "Game Developer: Any retail Xbox One can be used as dev kit starting now", url: "https://www.gamedeveloper.com/production/any-retail-xbox-one-can-be-used-as-dev-kit-starting-now" },
        { title: "Microsoft Learn: Xbox Developer Mode activation", url: "https://learn.microsoft.com/en-us/windows/uwp/xbox-apps/devkit-activation" }
      ]
    },
    {
      date: "2020-01",
      dateLabel: "2020年1月",
      title: "微软启动 Xbox 漏洞赏金计划",
      category: "软件漏洞",
      exploit: "Microsoft Xbox Bounty Program（单项最高 2 万美元）",
      cve: "",
      firmware: "Xbox Live 与 Xbox 主机软件服务（覆盖 Xbox One 与 Series X|S）",
      description: "2020-01-30 前后，微软把 Xbox Live 与主机相关软件纳入 MSRC 漏洞赏金计划，单个漏洞奖励最高 2 万美元。它第一次给主机软件漏洞提供了明确的合法披露与变现渠道，说明微软把研究火力引向账号、在线服务与主机软件层，而不是让研究者去积累公开利用链。对 Series X|S 而言，这套机制自 2020-11 发售起就覆盖其服务端与主机软件。至今仍没有公开的 Series X|S 内核或 hypervisor 漏洞，与该计划长期存在密切相关。",
      sources: [
        { title: "The Verge: Microsoft launches Xbox bug bounty program", url: "https://www.theverge.com/2020/1/31/21114887/microsoft-xbox-bounty-bug-security-rewards" },
        { title: "TechCrunch: Microsoft will now pay up to $20K for Xbox Live security exploits", url: "https://techcrunch.com/2020/01/30/microsoft-will-now-pay-up-to-20k-for-xbox-live-security-exploits/" },
        { title: "ZDNet: Microsoft launches Xbox bug bounty program", url: "https://www.zdnet.com/article/microsoft-launches-xbox-bug-bounty-program-with-rewards-of-up-to-20000/" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "Team Xecuter 两名负责人被捕",
      category: "法律与产业",
      exploit: "Team Xecuter（Xecuter 品牌 modchip 与 SX 系列设备）",
      cve: "",
      firmware: "初代 Xbox、Xbox 360 等历代主机的改机市场",
      description: "2020-10-02 美国检方公布起诉书：Max Louarn、Yuanning Chen 与 Gary Bowser 被控 11 项重罪，包括电汇欺诈、规避技术措施与贩运规避设备，Louarn 与 Bowser 已于 2020-09 在海外被捕。Team Xecuter 以 Xbox 时代的 Xecuter 直读芯片起家，是历史上规模最大的主机改机组织，业务覆盖初代 Xbox、Xbox 360、NES Classic、PlayStation Classic 与 Nintendo Switch。这场跨国执法让硬件改机产业大幅收缩，也直接塑造了新主机世代的破解生态：此后几乎没有团队敢为 Series X|S 这类机器量产 modchip。",
      sources: [
        { title: "ICE: ICE investigation leads to the arrest of 2 members of Team Xecuter", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" },
        { title: "Wikipedia: Team Xecuter", url: "https://en.wikipedia.org/wiki/Team_Xecuter" }
      ]
    },
    {
      date: "2020-11",
      dateLabel: "2020年11月",
      title: "Series X|S 发售，无可用软破",
      category: "软破",
      exploit: "无（零售机没有可用漏洞；Dev Mode 为唯一免硬改途径）",
      cve: "",
      firmware: "Xbox Series X|S 零售机（2020-11 首发）",
      description: "Xbox Series X|S 于 2020-11-10 发售，两款机型都运行与 Xbox One 同源的虚拟化系统与 PSP 信任根，并加入更严格的安全启动与熔丝策略，固件更新强制且带反回滚保护。发售后没有任何公开的浏览器、存档或游戏内漏洞能运行未签名代码，也不存在可行的固件降级路径。对用户而言唯一「免硬改」的方案就是官方 Dev Mode：可以侧载未签名 UWP（因此能跑 RetroArch 等模拟器），但被限制在用户态沙箱内，无法触及内核、hypervisor 或安全处理器。此后数年，Series X|S 的破解史基本上就是 Dev Mode 生态史。",
      sources: [
        { title: "Wikipedia: Xbox Series X and Series S", url: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S" },
        { title: "Microsoft Learn: Xbox Developer Mode activation", url: "https://learn.microsoft.com/en-us/windows/uwp/xbox-apps/devkit-activation" },
        { title: "Semiconductor Engineering: Breaking The Unhackable Xbox One", url: "https://semiengineering.com/breaking-the-unhackable-xbox-one/" }
      ]
    },
    {
      date: "2020-11",
      dateLabel: "2020年11月",
      title: "Pluton：Xbox 安全处理器进 PC",
      category: "硬件漏洞",
      exploit: "Microsoft Pluton security processor",
      cve: "",
      firmware: "Xbox One / Series X|S 安全处理器设计（外溢至 PC SoC）",
      description: "2020-11-17 微软联合 AMD、Intel、高通发布 Microsoft Pluton，把源自 Xbox 主机的安全处理器设计搬进 PC 处理器，让密钥与凭据留在 CPU 内部而不暴露在外部总线。这等于把 Xbox One/Series 的硬件信任根模式确立为行业标准，也让主机安全研究的重心进一步转向硅片级缺陷与物理攻击。对 Series X|S 来说，Pluton 一脉的安全处理器正是 Bliss 这类故障注入攻击必须面对的目标，微软此后在 SoC 内持续加厚 MPU、ECC 与调试接口封锁。",
      sources: [
        { title: "The Verge: Microsoft Pluton is a new processor with Xbox-like security", url: "https://www.theverge.com/2020/11/17/21571069/microsoft-pluton-processor-security-windows-pc" },
        { title: "Wikipedia: Microsoft Pluton", url: "https://en.wikipedia.org/wiki/Microsoft_Pluton" },
        { title: "GIGAZINE: Microsoft announces new security chip Pluton", url: "https://gigazine.net/gsc_news/en/20201118-microsoft-pluton-processor" }
      ]
    },
    {
      date: "2021-08",
      dateLabel: "2021年8月",
      title: "Dev Mode 跑通 PS1 4K 模拟",
      category: "软破",
      exploit: "DuckStation / RetroArch（UWP 侧载）",
      cve: "",
      firmware: "Xbox Series X|S（Developer Mode）",
      description: "2021 年 8 月，Wired 意大利版等媒体报道玩家在 Series X|S 的 Dev Mode 中通过 DuckStation 等 UWP 模拟器把 PS1 游戏提升到 4K 分辨率运行，展示出本世代主机免硬改方案的性能红利。这类玩法不需要焊接、直读芯片或任何固件修改，唯一前提是拥有开发者账号并接受开发模式不能玩零售游戏的限制。媒体与社区的持续演示，把 Dev Mode 在玩家心中的定位从开发工具变成了官方后门。",
      sources: [
        { title: "Wired Italia: Come giocare in 4k ai giochi della prima PlayStation sulle nuove Xbox", url: "https://www.wired.it/gadget/videogiochi/2021/08/16/xbox-giochi-playstation-rom-duckstation/" },
        { title: "GitHub Gist: How to install RetroArch Game Emulator on Xbox One / Series S / Series X", url: "https://gist.github.com/wviana/ff10323e6a3279ba0ac77b79aad196e7" }
      ]
    },
    {
      date: "2022-01",
      dateLabel: "2022年1月",
      title: "微软停用不活跃 Dev Mode 账号",
      category: "工具与生态",
      exploit: "Dev Mode 账号批量停用（微软后称为误操作）",
      cve: "",
      firmware: "Xbox One / Series X|S（Developer Mode）",
      description: "2022 年 1 月，大量把 Dev Mode 当作模拟器平台的用户收到账号「不活跃」通知并被停用开发者模式访问，社区一度认为微软要彻底封杀 Dev Mode 模拟器。微软随后表示这是误操作并逐步恢复账号，公开确认没有关闭 Dev Mode 的计划。事件暴露出整个免硬改生态完全系于微软的账号政策：不需要任何技术手段，一次后台策略调整就能让所有自制软件失效。",
      sources: [
        { title: "Wccftech: Microsoft is Disabling Inactive Xbox Dev Mode Access", url: "https://wccftech.com/microsoft-disabling-xbox-dev-mode-access/" },
        { title: "Exputer: Microsoft is Disabling Dev Mode Access on Xbox", url: "https://exputer.com/news/xbox/microsoft-is-disabling-dev-mode-access-on-xbox/" },
        { title: "Exputer: Microsoft Confirms No Plans To Disable Dev Mode On Xbox", url: "https://exputer.com/news/xbox/microsoft-confirms-no-plans-to-disable-dev-mode-on-xbox/" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Bowser 获刑 40 个月",
      category: "法律与产业",
      exploit: "Team Xecuter 案判决（Gary Bowser）",
      cve: "",
      firmware: "Xbox / Xbox 360 时代的改机生态",
      description: "2022 年 2 月，Team Xecuter 的对外负责人 Gary Bowser 被判处 40 个月监禁，并面临数千万美元级别的赔偿与罚金，罪名包括共谋电汇欺诈与贩运规避设备。这是主机改机史上最重的刑事判决之一，美国检方明确把 modchip、自定义固件与盗版游戏库视为同一条犯罪链条。判决之后 Xbox 改机生态基本只剩零星小规模卖家，也解释了为什么 2020 年后上市的新主机没有出现成气候的硬破方案。",
      sources: [
        { title: "US DOJ WDWA: Team Xecuter salesperson sentenced for conspiracy", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "ICE: arrest of 2 members of Team Xecuter", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" },
        { title: "Wikipedia: Team Xecuter", url: "https://en.wikipedia.org/wiki/Team_Xecuter" }
      ]
    },
    {
      date: "2022-07",
      dateLabel: "2022年7月",
      title: "Dev Mode 里跑起 Windows 98",
      category: "软破",
      exploit: "RetroArch + DOSBox Pure（UWP 侧载）",
      cve: "",
      firmware: "Xbox Series X|S（Developer Mode）",
      description: "2022-07-11 The Verge 报道，社区在 Series X|S 的 Dev Mode 中用 RetroArch 的 DOSBox Pure 核心启动完整 Windows 98，并运行 Quake、Half-Life 等 PC 游戏，甚至能开 Word 97。这说明官方开发者模式下的免硬改方案已经能跑通用操作系统级软件，距离把主机当 PC 用只差沙箱与驱动的限制。整个过程依然完全依赖微软继续开放 Dev Mode，条款一旦收紧就不复存在。",
      sources: [
        { title: "The Verge: The Xbox Series X will now run one of the best retro versions of Windows", url: "https://www.theverge.com/2022/7/11/23203906/xbox-series-consoles-windows-98-gaming-retro" },
        { title: "Game Rant: Xbox Series X Can Run Windows 98", url: "https://gamerant.com/xbox-series-x-windows-98/" }
      ]
    },
    {
      date: "2023-04",
      dateLabel: "2023年4月",
      title: "微软下架商店模拟器",
      category: "法律与产业",
      exploit: "Microsoft Store 政策执行（RetroArch、DuckStation、PPSSPP 等被移除）",
      cve: "",
      firmware: "Xbox Series X|S / Xbox One（零售模式）",
      description: "2023 年 4 月微软从 Microsoft Store 移除 RetroArch、DuckStation 等模拟器，并让已安装的模拟器无法继续启动，零售模式下的模拟器生态被清空。The Verge 指出这是微软收紧 Xbox 模拟器政策的一部分，业内普遍传闻与任天堂的版权压力有关，但微软从未正式说明原因。模拟器本身并没有利用任何漏洞，封禁纯粹是政策与版权博弈的结果；当时的 Dev Mode 依然可以运行这些应用。",
      sources: [
        { title: "The Verge: Microsoft locks down game emulation on the Xbox Series X and Series S", url: "https://www.theverge.com/2023/4/7/23674707/microsoft-xbox-emulators-ban-nintendo" },
        { title: "IT之家：微软打击 Xbox 运行模拟器行为", url: "https://www.ithome.com/0/708/968.htm" },
        { title: "PCMag: Microsoft Disables Game Emulators Downloaded on Xbox", url: "https://www.pcmag.com/news/microsoft-disables-game-emulators-downloaded-on-xbox" }
      ]
    },
    {
      date: "2023-07",
      dateLabel: "2023年7月",
      title: "零售模式模拟器用户被封 15 天",
      category: "法律与产业",
      exploit: "账号封禁（15 天警告与永久封号威胁）",
      cve: "",
      firmware: "Xbox Series X|S / Xbox One（零售模式）",
      description: "2023 年 7 月底，微软开始向在零售模式下运行模拟器的用户发放 15 天账号封禁作为警告，并警告继续使用将面临永久封禁，Retail Mode 团队随后宣布解散并关闭其收费的 Patreon 渠道。此前社区靠零售模式白名单绕过商店下架，甚至有人以每月约 2 美元的价格出售这类方案，事件后这条路径彻底消失。Dev Mode 由此成为 Series X|S 上唯一能运行模拟器的官方途径，微软也把封账号而非技术封锁当作主要手段。",
      sources: [
        { title: "Noticias3D: Microsoft ha empezado a suspender a aquellos que utilizan emuladores", url: "https://www.noticias3d.com/noticia/92506/xbox-series-x-series-s-emuladores-suspension-cuenta.html" },
        { title: "IT之家：微软打击 Xbox 运行模拟器行为（上传者封号、使用者关小黑屋 15 天）", url: "https://www.ithome.com/0/708/968.htm" },
        { title: "Hitmarker: Xbox is reportedly banning players who run emulators in retail mode", url: "https://hitmarker.net/news/xbox-is-reportedly-banning-players-who-run-emulators-in-the-consoles-retail-mode-519791" }
      ]
    },
    {
      date: "2024-03",
      dateLabel: "2024年3月",
      title: "AMD 4800S BIOS 转储泄漏",
      category: "硬件漏洞",
      exploit: "AMD 4800S 主/备份 BIOS、ROM 与 Fuse 转储泄漏",
      cve: "",
      firmware: "AMD 4800S（Xbox Series X APU 的桌面套件版本）",
      description: "2024-03-07 前后，匿名安全研究者公开了 AMD 4800S 套件的主 BIOS、备份 BIOS、ROM 与 Fuse 相关转储文件。4800S 本质是屏蔽 GPU 的 Series X APU 桌面版，这些转储让外界第一次较系统地看到与 Series X 同源的固件、熔丝与启动配置细节，可用于探索硬件故障与固件层攻击。报道同时指出使用 4700S 套件的 PS5 面临同类风险。这是本世代少见的真正触及 Series X 硬件的安全研究材料，但至今没有据此产生公开的整机利用链。",
      sources: [
        { title: "IT之家：影响 XSX 和 PS5 游戏主机安全，AMD 4800S 套件 BIOS 文件泄露", url: "https://www.ithome.com/0/754/159.htm" },
        { title: "Windows Report: Online leak exposes AMD 4800S BIOS", url: "https://windowsreport.com/leak-exposes-amd-4800s-bios/" }
      ]
    },
    {
      date: "2025-07",
      dateLabel: "2025年7月起",
      title: "Dev Mode 激活转免费",
      category: "工具与生态",
      exploit: "Xbox Dev Mode（取消一次性费用，新增身份验证）",
      cve: "",
      firmware: "Xbox One / Series X|S 零售机",
      description: "自 2025 年 7 月下旬起，微软开始分阶段取消 Dev Mode 所需个人开发者账号的一次性费用（此前约 20 美元），到 2025 年 11 月已大范围可用，激活开发者模式事实上变为免费，但为免费个人账号加入了身份验证要求。微软同时重申 Dev Mode 只用于软件开发，把它当作模拟器或自制软件平台使用违反合作伙伴计划条款，可能导致账号被停用。免硬改通道因此门槛更低、同时也更可追溯，对 Series X|S 来说这仍是零售机上运行未签名代码的唯一合法途径。",
      sources: [
        { title: "Playground.ru: Активация режима разработчика на Xbox Series X|S стала бесплатной", url: "https://www.playground.ru/misc/news/aktivatsiya_rezhima_razrabotchika_na_xbox_series_x_s_stala_besplatnoj-1803964" },
        { title: "XboxLand: Перевести Xbox Series X|S в режим разработчика теперь можно бесплатно", url: "https://www.xboxland.net/forum/topic/173905-perevesti-xbox-series-x-s-v-rezhim-razrabotchika-teper-mozhno-besplatno/" },
        { title: "Reddit r/xbox: I can confirm dev mode is free now", url: "https://www.reddit.com/r/xbox/comments/1ous1mo/i_can_confirm_dev_mode_is_free_now/" }
      ]
    },
    {
      date: "2025-11",
      dateLabel: "2025年11月",
      title: "五年无 modchip / ODE / 光驱方案",
      category: "硬破",
      exploit: "无（无直读芯片、无 ODE、无光驱固件刷写、无烧录卡）",
      cve: "",
      firmware: "Xbox Series X|S 零售机全系",
      description: "到 2025 年 11 月 Series X|S 上市满五年，市面上依然没有任何面向零售机的直读芯片、ODE 光驱模拟器、烧录卡或光驱固件刷写方案：Series X 的 4K UHD 光驱与内部存储都走签名校验，Series S 没有光驱，NVMe 扩展卡也带专有认证。同期唯一被公开验证的物理攻击是 2013 款初代 Xbox One 的电压毛刺，需要焊接单片机、移除电容并进行百万级重启调参，成本与风险让 Series 世代无法复制成商业改机方案。对改机产业来说，Series X|S 是罕见的硬破空白机型。",
      sources: [
        { title: "GBAtemp: Xbox series s/x software hack progress", url: "https://gbatemp.net/threads/xbox-series-s-x-software-hack-progress.675167/" },
        { title: "DigitalToday: Xbox One security compromised as unhackable myth collapses", url: "https://www.digitaltoday.co.kr/en/view/41710/xbox-one-security-compromised-unhackable-myth-collapses" }
      ]
    },
    {
      date: "2026-02",
      dateLabel: "2026年2月",
      title: "Dev Mode 上的 Switch 模拟与 4K60 Mario Kart 引发争议",
      category: "工具与生态",
      exploit: "Ryujinx / Dolphin（Dev Mode UWP 侧载）",
      cve: "",
      firmware: "Xbox Series X|S（Developer Mode）",
      description: "2026-02，Xbox 模拟社区把注意力转向 Nintendo Switch：社区投票显示 Ryujinx 是玩家最希望在 Series X|S 上看到的下一个目标，Windows Central 于 2 月 4 日报道这台主机「可能很快就能跑 Switch 模拟器」，并指出 Nintendo 近年对模拟器态度强硬（如 Yuzu 案），而微软对 Dev Mode 的开放立场让局面变得微妙。2 月 16 日，用户 @YellingMadman 又公开了在 Series X 的 Dev Mode 中以 4K 60fps 运行 Mario Kart Wii（Dolphin 核心）的录像，等于直接挑衅 Nintendo 法务。这些演示完全没有触碰主机安全模型：没有漏洞、没有固件修改，全部依赖官方开发者模式侧载未签名 UWP，因此微软随时可以用政策与账号手段收回，风险主要集中在 ROM 的合法性上。",
      sources: [
        { title: "Windows Central: Xbox gamers may soon get Ryujinx Switch emulator", url: "https://www.windowscentral.com/gaming/xbox/xbox-gamers-may-soon-get-ryujinx-switch-emulator" },
        { title: "PPE.pl: Mario Kart na Xboxie w 4K? Gracz rzuca wyzwanie Nintendo（引用 2026-02-16 录像）", url: "https://www.ppe.pl/news/400555/mario-kart-na-xboxie-w-4k-gracz-rzuca-wyzwanie-nintendo.html" },
        { title: "The Xbox Guide: 转述 Windows Central 报道（2026-02-04）", url: "https://thexboxguide.com/xbox-gamers-may-soon-get-access-to-a-switch-emulator-nintendo-lawyers-wont-be-happy-to-see-ryujinx-on-series-xs/" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "Bliss 电压毛刺攻破 Xbox One",
      category: "硬件漏洞",
      exploit: "Bliss（dual voltage glitch / fault injection，crowbar 攻击）",
      cve: "",
      firmware: "2013 款初代 Xbox One（One S / One X / Series X|S 不受影响）",
      description: "在 RE//verse 2026 上，Markus Doom Gaasedelen 以演讲 Hacking the Xbox One 公布 Bliss：他用自研侧信道观测工具（功耗、I/O、eFuse 读取）定位 PSP Boot ROM 的执行时序，先以约 1% 成功率用电压毛刺跳过配置 MPU 的循环，再在读取 SP1 引导头部的 memcpy 处二次毛刺劫持程序计数器，最终在 Boot ROM 上下文取得 supervisor 权限并解密全部固件。两步组合成功率约为万分之一，需要约百万次重启调参、焊接单片机并移除电容。由于缺陷位于出厂固化的硅片 ROM，微软无法通过软件更新修补，这是 Xbox One 上市约 12 年后第一次信任根级失守。",
      sources: [
        { title: "Tom's Hardware: Microsoft's unhackable Xbox One has been hacked by Bliss", url: "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level" },
        { title: "Semiconductor Engineering: Breaking The Unhackable Xbox One", url: "https://semiengineering.com/breaking-the-unhackable-xbox-one/" },
        { title: "YouTube (RE//verse 2026): Hacking Xbox One - Markus doom Gaasedelen", url: "https://www.youtube.com/watch?v=FTFn4UZsA5U" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "Bliss 被确认不影响 Series X|S",
      category: "硬件漏洞",
      exploit: "Bliss 影响范围界定（仅 2013 款 Xbox One）",
      cve: "",
      firmware: "Xbox One S / One X / Series X|S 均不受影响",
      description: "Gigazine、DigitalToday、Kotaku 等媒体的报道与研究者说明都指出，Bliss 只适用于 2013 年首发的初代 Xbox One：One S、One X 以及 Series X|S 使用更新后的 SoC、安全处理器与修正过的启动链，不在影响范围内。也就是说本世代 Xbox 的信任根在这次风波中依然完好，零售机仍然没有可用的软破或硬破路径。对 Series X|S 而言，Bliss 的意义更多是方法论警告：如果未来出现同类硅片缺陷，同样无法靠 OTA 修补，只能靠硬件修订。",
      sources: [
        { title: "GIGAZINE: The Xbox One has finally been breached using Bliss", url: "https://gigazine.net/gsc_news/en/20260318-xbox-one-hacked/" },
        { title: "DigitalToday: Xbox One security compromised as unhackable myth collapses", url: "https://www.digitaltoday.co.kr/en/view/41710/xbox-one-security-compromised-unhackable-myth-collapses" },
        { title: "Kotaku: Unhackable Xbox One Finally Hacked, 12 Years After Release", url: "https://kotaku.com/xbox-one-hack-jailbreak-2000679120" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "Series 内核与 hypervisor 无公开漏洞",
      category: "软件漏洞",
      exploit: "无公开的内核、hypervisor 或 UWP 沙箱逃逸漏洞",
      cve: "",
      firmware: "Xbox Series X|S 零售机（含 Developer Mode）",
      description: "与 Xbox One 最终靠硬件故障注入被攻破不同，Series X|S 至今没有被公开的内核、hypervisor 或 Dev Mode 沙箱逃逸漏洞。Dev Mode 下可运行的未签名 UWP 被限制在用户态沙箱中，无法访问底层硬件与安全处理器，社区研究（如 Xbox One Research 公开的资料）也主要停留在 Dev Mode 可见面与硬件拆解层面。加上 Xbox Live 服务端校验与强制更新，即便本地被攻破，也难以在不被封禁的前提下使用在线功能。因此 Series X|S 的未破解状态既来自硬件加固，也来自服务端与账号体系的牵制。",
      sources: [
        { title: "Semiconductor Engineering: Breaking The Unhackable Xbox One", url: "https://semiengineering.com/breaking-the-unhackable-xbox-one/" },
        { title: "GBAtemp: Xbox series s/x software hack progress", url: "https://gbatemp.net/threads/xbox-series-s-x-software-hack-progress.675167/" },
        { title: "GitHub: xboxoneresearch repositories", url: "https://github.com/orgs/xboxoneresearch/repositories" }
      ]
    },
    {
      date: "2026-06",
      dateLabel: "2026年6月",
      title: "业界复盘：故障注入威胁信任根",
      category: "硬件漏洞",
      exploit: "Keysight 对 Bliss 的技术复盘（fault injection 测试）",
      cve: "",
      firmware: "PSP / Boot ROM 类信任根（含 Xbox 世代）",
      description: "2026-06-04，Keysight 的 Jasper van Woudenberg 在 Semiconductor Engineering 发表对 Bliss 的技术复盘，指出 Xbox One 的双签名校验、MPU、ECC 指令保护与调试接口封锁本身都是有效设计，但整个安全模型押在「Boot ROM 不会被物理干扰」这一假设上。文章认为故障注入测试必须像密码学验证一样被纳入流程，否则再现代的信任根也可能被 crowbar 攻击逐字节绕过。对仍在服役的 Series X|S 来说，这篇复盘是理解其硬件安全边界目前最完整的一份公开材料。",
      sources: [
        { title: "Semiconductor Engineering: Breaking The Unhackable Xbox One", url: "https://semiengineering.com/breaking-the-unhackable-xbox-one/" },
        { title: "Tom's Hardware: Xbox One hacked by Bliss via voltage glitching", url: "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月",
      title: "PS5 模拟器 Kyty 移植到 Series X",
      category: "工具与生态",
      exploit: "PS5X（KytyPS5 的 Dev Mode UWP 移植）",
      cve: "",
      firmware: "Xbox Series X（Developer Mode）",
      description: "2026-09-21 前后，开发者 Devran Cosmo Uenal 通过开发者模式把开源 PS5 模拟器 KytyPS5 移植到 Xbox Series X，项目命名为 PS5X，能够运行 Quake II、Jak 三部曲等少量作品，帧率约 25 至 45fps。主要难点在于 PC 版使用 Vulkan 渲染，而 Xbox 不原生支持 Vulkan，需要把渲染翻译到 DirectX 12，因此 PC 端的改进无法自动继承。它再次证明 Dev Mode 是本世代唯一能调用主机算力运行未签名软件的正规通道，同时也暴露了该通道在图形 API 与性能上的硬限制。",
      sources: [
        { title: "网易/3DM：PS5X已让Xbox Series X运行少量PS5游戏", url: "https://www.163.com/dy/article/L7BL255H0526D8LR.html" },
        { title: "4Gamers：開發者成功將PS5模擬器移植到XBOX Series X", url: "https://www.4gamers.com.tw/news/detail/82180/developer-put-ps5-simulatro-to-xbox-series-x" },
        { title: "Windows Report: Xbox Series X Just Ran PS5 Games via KytyPS5 Emulator Port", url: "https://windowsreport.com/xbox-series-x-just-ran-ps5-games-thanks-to-an-experimental-kytyps5-emulator-port/" }
      ]
    }
  ]
});
