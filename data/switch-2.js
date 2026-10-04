window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "switch-2",
  name: "Nintendo Switch 2",
  family: "Switch",
  released: "2025-06",
  status: "截至 2026 年 10 月，Switch 2 依然没有被破解：没有任何公开可用的软破、硬破、自制固件或引导器，官方固件已从首发的 19.x 推进到 23.x，而内核与 hypervisor 依旧零突破——Atmosphère 1.12.0（2026 年 9 月 27 日）只跟进 Switch 1 的 23.0.0，明确不为 Switch 2 提供支持。全部公开成果都停在 userland 层面：2025 年首发日的 Switch 1 存档漏洞与 comex 的 WebKit 任意读写，2026 年 7 月 Gezine 公开的不依赖 WebKit 与存档、可完全离线触发的通用 userland 漏洞，以及 9 月用 HDMI 采集卡把游戏运行内存编码成画面外带的方法；这些都无法访问 SD 卡或提权，不能盗版也不能跑自制系统。硬件防护同样没有被攻破，任天堂一侧则继续以封禁与诉讼施压，包括 9 月的大规模误封事件（官方称为系统临时故障）、荷兰法院对 MIG Switch 欧洲销售的违法认定与 450 万美元级的盗版判决。",
  summary: "Switch 2 是游戏机史上安全设计最保守的一代首发机型：它沿用 Switch 1 那套被反复审计、公认没有可利用漏洞的 Horizon 微内核，SoC（NVIDIA T239）又加入 Pointer Authentication、内存加密、熔丝防降级与抗毛刺（anti-glitching）设计。首发当天 retr0id 展示的“破解”其实是把 Switch 1 的存档漏洞搬过来，只能拿到受限的 userland 权限；2025 年 8 月 comex 又在浏览器 WebKit 中拿到任意读写，但内核与 hypervisor 始终没有人攻破，Atmosphère 主开发者 SciresM 更公开表示即使 Switch 2 被破解也不会为其开发自制固件。2026 年的进展全部集中在这条 userland 线上：7 月 Gezine 公开了不依赖 WebKit 与存档漏洞、可完全离线触发且兼容所有固件的通用漏洞，9 月又用 HDMI 采集卡把游戏运行内存编码成画面帧外带出来，两者都不构成越狱。因此这一代的主线不是破解技术突破，而是任天堂的封禁与诉讼：MIG 烧录卡用户被大规模 Ban 机、MIG 厂商以 200 万美元和解并被永久禁售、日本首次对改机销售者作出有罪判决，2026 年又叠加了荷兰法院对 MIG Switch 欧洲销售的违法认定、一次性下架 400 余个 Switch 模拟器仓库，以及对盗版社区运营者 Archbox 的 450 万美元缺席判决。",
  events: [
    {
      date: "2018-03",
      dateLabel: "2018年3月",
      title: "任天堂修复 Switch 1 最后的纯软件漏洞 Caffeine",
      category: "软破",
      exploit: "Caffeine",
      cve: "",
      firmware: "Switch 1 系统 4.1.0 及更低版本",
      description: "Caffeine 是 Switch 1 上最后一个不依赖硬件改机的漏洞链，利用系统服务中的缺陷取得 userland 与内核代码执行，从而运行自制程序，适用系统版本为 4.1.0 及以下。任天堂在 2018 年 3 月的系统更新中将其彻底封堵，此后 Switch 1 只在出厂较早的 Erista 机型上还能依靠 BootROM 硬件缺陷改机。该漏洞的技术说明与利用工具由开发者 liuervehc 以 Caffeine 名称公开在 GitHub 上。对 Switch 2 而言，Caffeine 的封堵意味着继承自 Horizon 的软件层已经没有可复用的现成入口，这也是 2025 年研究者判断“Switch 2 不会有软破”的重要论据之一。",
      sources: [
        { title: "GitHub - liuervehc/caffeine: a rude awakening", url: "https://github.com/liuervehc/caffeine" },
        { title: "More details on why the Nintendo Switch 2 may not be hacked - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/06/03/more-details-on-why-the-nintendo-switch-2-may-not-be-hacked/" }
      ]
    },
    {
      date: "2018-04",
      dateLabel: "2018年4月",
      title: "Fusée Gelée 硬件漏洞公开：Switch 1 的经典 RCM 软破",
      category: "硬件漏洞",
      exploit: "Fusée Gelée",
      cve: "CVE-2018-6242",
      firmware: "Switch 1 V1（Erista，Tegra X1）全固件版本",
      description: "Fusée Gelée 是 fail0verflow 与 ReSwitched 团队在 2018 年 4 月公开的 Tegra X1 BootROM 缺陷，攻击者把主机置于 RCM（Recovery Mode）后通过 USB 发送畸形数据，即可在 BootROM 层面执行任意代码，完全绕过签名校验，而且不需要焊接改机。由于漏洞位于只读的 BootROM，任天堂无法通过系统更新修复，只能在 2018 年年中以后生产的 Mariko 机型中更换芯片版本，V1 老机型至今仍可注入 payload。这一事件也是理解 Switch 2 的关键对照：Switch 2 换用 NVIDIA T239，BootROM 与启动链被重新设计，同类公开缺陷没有出现。",
      sources: [
        { title: "NVD - CVE-2018-6242 Detail", url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6242" },
        { title: "More details on why the Nintendo Switch 2 may not be hacked - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/06/03/more-details-on-why-the-nintendo-switch-2-may-not-be-hacked/" }
      ]
    },
    {
      date: "2025-01",
      dateLabel: "2025年1月",
      title: "Switch 2 正式公布，社区被泼冷水",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "",
      description: "任天堂在 2025 年 1 月 16 日正式公布 Nintendo Switch 2，硬件与系统细节留待 4 月的专场直面会。公布后社区立刻开始讨论能否破解，自制软件开发者 ihaveahax 在 1 月 24 日发文指出：Switch 1 早已没有任何纯软件漏洞，最后一次免硬改的 RCM 漏洞只存在于 2018 年 6 月前生产的机型；而 Horizon 微内核与 EL3 secure monitor 体量极小、被反复重写与审计，SciresM 也认为其中不存在安全缺陷。文章的核心判断是——不要指望 Switch 2 会有容易的自制软件方案，这一判断在 2025 年全年没有被推翻。",
      sources: [
        { title: "Don't get your hopes up for Nintendo Switch 2 homebrew - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/01/24/dont-get-your-hopes-up-for-nintendo-switch-2-homebrew/" }
      ]
    },
    {
      date: "2025-04-02",
      dateLabel: "2025年4月2日",
      title: "任天堂确认 Switch 2 于 6 月 5 日发售",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "",
      description: "在 4 月 2 日的 Nintendo Direct 上，任天堂公布 Switch 2 将于 2025 年 6 月 5 日发售，并在官方新闻稿中同步给出日期与地区安排。直面会同时推出 Game-Key Card（游戏钥匙卡）：卡带本身不含完整游戏数据，只作为联网下载的许可凭证，官方支持页明确说明首次启动需要联网下载、之后可离线游玩但必须插卡。这一设计被视为针对烧录卡与盗版 dump 的防盗版手段，因为它把实体卡的授权与在线校验绑定，让单纯复制卡带数据无法直接运行游戏。Switch 2 使用 microSD Express 存储卡，也间接抬高了改造与备份的门槛。",
      sources: [
        { title: "News Release: April. 2, 2025 \"Nintendo Switch 2 to be released on June 5, 2025\"", url: "https://www.nintendo.co.jp/corporate/release/en/2025/250402.html" },
        { title: "Nintendo Switch 2 Game-Key Card Overview - Support - Nintendo", url: "https://www.nintendo.com/au/support/articles/nintendo-switch-2-game-key-card-overview/" },
        { title: "Nintendo's Switch 2 has big shoes to fill - at a much higher price | CNN Business", url: "https://www.cnn.com/2025/04/02/tech/nintendo-switch-2-release-date-announced/index.html" }
      ]
    },
    {
      date: "2025-04",
      dateLabel: "2025年4月",
      title: "直面会后错误信息泛滥，研究者逐条澄清",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "",
      description: "4 月直面会后关于 Switch 2 的错误说法集中爆发，ihaveahax 在 4 月 6 日撰文逐条纠正，涉及 Game-Key Card 是否等于下载码、游戏定价、microSD Express 是否任天堂专有、Switch 1 游戏是否以模拟器运行等。其中与破解直接相关的一条是：社区流传“任天堂会因为你改机而把 Switch 2 变砖”，作者指出用户协议针对的是账号服务封禁，而非蓄意破坏硬件。这类澄清在 2025 年反复出现，说明 Switch 2 发售前后围绕破解与封禁的传言远多于真实技术进展，也构成了研判事件真伪时必须区分信息噪声的背景。",
      sources: [
        { title: "Let's correct some Nintendo Switch 2 misinformation - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/04/06/lets-correct-some-nintendo-switch-2-misinformation/" }
      ]
    },
    {
      date: "2025-05",
      dateLabel: "2025年5月",
      title: "Nintendo Account 用户协议新增“永久无法使用”条款",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "发售前夕，任天堂更新 Nintendo Account 用户协议，新增“若违反上述限制，任天堂可使 Nintendo Account 服务及/或相应 Nintendo 设备永久无法使用（全部或部分）”的表述，被媒体与玩家概括为“有权把主机变砖”。该条款并不区分改机、使用备份还是第三方配件，且针对设备而非账号，意味着即使转手他人，封禁依然有效。自由软件基金会后来在 2025 年冬季公报中把这套机制称为 Nintendo 的新 DRM，并批评其让用户为一个自己拥有的设备向厂商“求情”。这条协议是 2025 年 6 月 Ban 机潮与后续法律行动的制度基础。",
      sources: [
        { title: "Nintendo Account 利用規約（EULA）", url: "https://accounts.nintendo.com/term/eula/US?lang=en-US" },
        { title: "Nintendo is not going to brick your Switch just for modding it - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/05/14/nintendo-is-not-going-to-brick-your-switch-just-for-modding-it/" }
      ]
    },
    {
      date: "2025-05-14",
      dateLabel: "2025年5月14日",
      title: "研究者解读“变砖条款”：实际是账号与联网封禁",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "针对新 EULA 引发的恐慌，ihaveahax 在 5 月 14 日给出技术性解读：条款的实际后果是账号服务被封——联网对战、eShop 等依赖 Nintendo Account 的功能失效，而单机离线功能仍然保留；真正蓄意把硬件弄坏在多数国家会触犯法律，任天堂不太可能这样做。文章同时提醒，系统更新导致改机设备无法启动不属于“蓄意变砖”，这在 Wii 与 3DS 时代就有先例。一个月后 Switch 2 实际发生的封禁（错误代码 2124-4508，主机被禁联网但账号可用）与该解读基本吻合，也说明这一阶段的社区认知比传言更准确。",
      sources: [
        { title: "Nintendo is not going to brick your Switch just for modding it - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/05/14/nintendo-is-not-going-to-brick-your-switch-just-for-modding-it/" },
        { title: "变砖警告：任天堂 Switch 2 主机因使用 MIG 烧录卡遭在线服务封禁 - IT之家", url: "https://www.ithome.com/0/861/665.htm" }
      ]
    },
    {
      date: "2025-06-03",
      dateLabel: "2025年6月3日",
      title: "发售前技术分析：为何 Switch 2 难以被破解",
      category: "硬件漏洞",
      exploit: "",
      cve: "",
      firmware: "",
      description: "发售前两天，ihaveahax 发布迄今关于 Switch 2 安全状况最系统的公开分析：软件面上 Horizon 内核与 secure monitor 已被 SciresM、hexkyz、plutoo 等多人完整审计并重写，未发现可利用缺陷，游戏侧则因 ASLR 与沙箱限制，即使拿到游戏内漏洞也无法访问 SD 卡等资源；硬件面上 Switch 2 使用 NVIDIA T239，具备抗毛刺（anti-glitching）等物理攻击防护，作者引用 NVIDIA 关于 Tegra 安全的主题演讲作为依据。文章还记录 SciresM 在直播中表态：即使 Switch 2 出现可获得完整系统权限的漏洞，他也不会为其开发自制固件。该文在 7 月与 9 月两次更新，补充了 userland 漏洞与游戏沙箱的说明。",
      sources: [
        { title: "More details on why the Nintendo Switch 2 may not be hacked - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/06/03/more-details-on-why-the-nintendo-switch-2-may-not-be-hacked/" }
      ]
    },
    {
      date: "2025-06-05",
      dateLabel: "2025年6月5日",
      title: "Switch 2 发售，需首发更新才能完整使用",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "Switch 2 首发系统版本",
      description: "Switch 2 于 2025 年 6 月 5 日在全球多数地区发售。首发当天需要下载系统更新才能启用完整功能：向下兼容 Switch 1 游戏、Nintendo Switch Online、Virtual Game Cards 与 eShop 等均依赖该更新，microSD Express 支持也在其中。任天堂官方维护着 Switch 2 的系统更新历史页面，逐版本记录改动，是核查各阶段固件状态的一手依据。对破解研究而言，首发更新把联网激活与固件校验绑定在一起，进一步压缩了离线降级与旧版本漏洞利用的空间。",
      sources: [
        { title: "System Update History for Nintendo Switch 2 - Nintendo Support", url: "https://www.nintendo.com/en-za/Support/Nintendo-Switch-2/System-Update-History-for-Nintendo-Switch-2-2856139.html" },
        { title: "Nintendo Switch 2 Day 1 Update Required for Backwards Compatibility, Nintendo Switch Online, Virtual Game Cards, eShop, More - IGN", url: "https://www.ign.com/articles/nintendo-switch-2-day-1-update-required-for-backwards-compatibility-nintendo-switch-online-virtual-game-cards-eshop-more" }
      ]
    },
    {
      date: "2025-06-05",
      dateLabel: "2025年6月5日",
      title: "首发日演示：把 Switch 1 存档漏洞搬上 Switch 2",
      category: "软破",
      exploit: "Switch 1 存档/游戏内 userland 漏洞迁移",
      cve: "",
      firmware: "Switch 2 首发固件，运行 Switch 1 兼容游戏",
      description: "发售当天，安全研究者 David Buchanan（retr0id）公开演示在 Switch 2 上利用一个 Switch 1 游戏的存档漏洞运行自定义代码，画面显示出自制图形程序，这是 Switch 2 上第一个公开的自制代码执行案例。其原理并非发现 Switch 2 新漏洞，而是 Switch 2 通过软硬件混合方式运行 Switch 1 游戏，旧游戏的漏洞随之被带入新主机。由于游戏运行在严格沙箱中且受 ASLR 保护，该 userland 权限无法访问 SD 卡等系统资源，也不能提权到内核，因此不构成可用于盗版或自制固件的破解。任天堂随后可通过更新兼容层或封堵该游戏入口来应对。",
      sources: [
        { title: "retr0id 的原始公开帖（Bluesky）", url: "https://bsky.app/profile/retr0.id/post/3lqtwrndzf22w" },
        { title: "Wololo.net: First usermode exploit and more – Nintendo Switch 2 had a busy (hacking) week for its launch", url: "https://wololo.net/2025/06/06/first-usermode-exploit-and-more-nintendo-switch-2-had-a-busy-hacking-week-for-its-launch/" }
      ]
    },
    {
      date: "2025-06-17",
      dateLabel: "2025年6月17日",
      title: "MIG 烧录卡用户遭 Ban 机，防改机机制见效",
      category: "硬破",
      exploit: "MIG Switch 烧录卡",
      cve: "",
      firmware: "Switch 2 发售初期固件",
      description: "Switch 2 发售不到两周，多名用户报告因使用 MIG Switch 烧录卡而被封禁，主机出现错误代码 2124-4508，被永久禁止访问在线服务，包括联机对战、eShop、YouTube 与云存档，仅系统更新不受限。MIG Switch 通过模拟卡带唯一标识符让备份 ROM 冒充正版卡运行，任天堂依靠重复标识符检测盗版，因此即便用户声称使用“完全合法的备份”，主机仍被判定为异常并封禁；封禁对象是主机而非账号，换账号无效。相关报道同时提到，尝试对 Switch 2 进行改机的玩家很快也遭到 Ban 机，显示新主机具备有效的改机检测能力。",
      sources: [
        { title: "变砖警告：任天堂 Switch 2 主机因使用 MIG 烧录卡遭在线服务封禁 - IT之家", url: "https://www.ithome.com/0/861/665.htm" },
        { title: "Nintendo reportedly bans players using MIG cartridges for pirated games on Switch 2 - GamesIndustry.biz", url: "https://www.gamesindustry.biz/nintendo-reportedly-bans-players-using-mig-cartridges-for-pirated-games-on-switch-2" },
        { title: "Nintendo banea los primeros Nintendo Switch 2 en un intento mas por frenar la pirateria - LEVEL UP", url: "https://www.levelup.com/noticias/nintendo-banea-los-primeros-nintendo-switch-2-en-un-intento-mas-por-frenar-la-pirateria/" }
      ]
    },
    {
      date: "2025-06",
      dateLabel: "2025年6月",
      title: "日本首例改机销售者获刑：2 年缓刑",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "日本一名 58 岁男子因销售加装 modchip 的改装 Switch 主机，被判处 2 年有期徒刑、缓期执行，成为日本首例针对 Switch 改机销售的刑事定罪。涉案行为包括收购二手主机、焊接破解芯片并转售以运行盗版游戏，法院认定其违反商标法等相关法规。与任天堂在美国民事诉讼中动辄数百万美元的赔偿相比，本案未判处巨额罚金，但确立了改机销售在日本可被追究刑事责任这一先例。对 Switch 2 而言，这意味着即便未来出现硬破方案，销售与安装环节也将面临明确的刑事风险。",
      sources: [
        { title: "Nintendo Switch modder handed down suspended prison sentence in Japan for the first time - AUTOMATON WEST", url: "https://automaton-media.com/en/news/nintendo-switch-modder-handed-down-suspended-prison-sentence-in-japan-for-the-first-time/" },
        { title: "Japanese man receives suspended 2-year prison sentence for selling modified Switch consoles - Polygon", url: "https://www.polygon.com/news/558268/japan-conviction-switch-modifying-hacking-prison-sentence-fine/" },
        { title: "Japan's First Switch Modder Court Ruling Ends With A Fraction Of Nintendo's Full Wrath - Nintendo Life", url: "https://www.nintendolife.com/news/2025/04/japans-first-switch-modder-court-ruling-ends-with-a-fraction-of-nintendos-full-wrath" }
      ]
    },
    {
      date: "2025-07",
      dateLabel: "2025年7月",
      title: "改装机检测升级：轻微改动也触发封禁",
      category: "硬破",
      exploit: "",
      cve: "",
      firmware: "Switch 2 2025 年 7 月固件",
      description: "封禁潮之后，社区反馈显示 Switch 2 的检测并不只针对烧录卡：即使只是对硬件或系统做轻微改动，也可能触发主机级别的封禁，导致无法联网，部分用户甚至出现在标题画面卡死、游戏无法正常游玩的情况。同期任天堂更新 EULA 的执行被实际落实，官方明确对未经授权的硬件或软件修改保留“变砖”处理权且无解除义务。这一阶段没有出现任何可用的直读芯片、光驱模拟器或烧录卡方案能够绕过检测，硬破路线在 Switch 2 上等同于“被封禁”，而不是“成功运行自制系统”。",
      sources: [
        { title: "变砖警告：任天堂 Switch 2 主机因使用 MIG 烧录卡遭在线服务封禁 - IT之家", url: "https://www.ithome.com/0/861/665.htm" }
      ]
    },
    {
      date: "2025-08",
      dateLabel: "2025年8月",
      title: "comex 称在 Switch 2 浏览器取得任意读写",
      category: "软件漏洞",
      exploit: "WebKit userland exploit（浏览器）",
      cve: "",
      firmware: "Switch 2 2025 年 8 月前后固件",
      description: "2025 年 8 月，开发者 comex 表示他已在 Switch 2 的浏览器中取得任意读写能力，利用的是 WebKit 引擎的 userland 漏洞——浏览器是 Switch 2 上少见的攻击面之一，这类漏洞只能提供用户态代码执行，是完整利用链的第一步，还需要一个内核漏洞才能真正控制主机。SciresM 随后确认他与 Hexkyz 等人也在研究浏览器缺陷，但同时强调 WebKit 存在 bug 并不新鲜，并且他已经把完整标注的内核逆向数据库交给 comex，希望更多人参与审计，不过由他本人及至少五名研究者反复审阅过的内核没有任何发现。研究者普遍选择不公开细节，以免任天堂在下一版固件中封堵。",
      sources: [
        { title: "Playground: Новый эксплойт для взлома Nintendo Switch и Switch 2 может быть в разработке", url: "https://www.playground.ru/misc/news/novyj_eksplojt_dlya_vzloma_nintendo_switch_i_switch_2_mozhet_byt_v_razrabotke-1785439" },
        { title: "Wololo.net: First usermode exploit and more – Nintendo Switch 2 had a busy (hacking) week for its launch", url: "https://wololo.net/2025/06/06/first-usermode-exploit-and-more-nintendo-switch-2-had-a-busy-hacking-week-for-its-launch/" }
      ]
    },
    {
      date: "2025-08",
      dateLabel: "2025年8月",
      title: "SciresM 确认内核无发现，且不为 Switch 2 做 CFW",
      category: "软件漏洞",
      exploit: "",
      cve: "",
      firmware: "Switch 2 全固件",
      description: "在 GBAtemp 的讨论中，Atmosphère 主开发者 SciresM 回应外界对浏览器漏洞的期待：他已邀请更多有能力的人参与研究，但 Horizon 内核约 600 个函数、八小时可完整审阅，由他本人、hexkyz、plutoo 以及至少五名收到其逆向数据库的研究者反复检查后没有任何发现，因此“大概率什么都不会被找到”，同时重申不会为 Switch 2 开发自制固件。ihaveahax 也在分析中引用其 2020 年的表态：secure monitor 与内核都已用开源方式重写过两遍，不存在可利用缺陷，软件破解只能寄望于 NVIDIA 在 BootROM 中犯错。这意味着即使浏览器漏洞仍然有效，Switch 2 也缺乏把 userland 提升为完整破解的关键环节。",
      sources: [
        { title: "What's the switch 2 modding status? - GBAtemp.net", url: "https://gbatemp.net/threads/whats-the-switch-2-modding-status.673852/page-3" },
        { title: "More details on why the Nintendo Switch 2 may not be hacked - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/06/03/more-details-on-why-the-nintendo-switch-2-may-not-be-hacked/" }
      ]
    },
    {
      date: "2025-08",
      dateLabel: "2025年8月",
      title: "假破解视频与 BlueNX 骗局被社区揭穿",
      category: "工具与生态",
      exploit: "BlueNX（虚假自制工具）",
      cve: "",
      firmware: "",
      description: "Switch 2 超高关注度催生大量伪造的破解演示与所谓自制工具。GBAtemp 出现专门帖文汇总“更多关于 NS2 漏洞的虚假说法”，社区逐条指出这些视频或工具并无真实的内核级利用，只是播放动画、修改界面或纯粹的骗局；另有名为 BlueNX 的项目宣称可在 Switch 2 上运行游戏，被核实为伪造。这些事件本身没有技术突破，但构成 2025 年 Switch 2 破解话题的重要噪声来源：在缺少真实漏洞的情况下，虚假宣称与“很快就会破解”的传闻不断消耗社区信任，也使得对进展的判断必须以可复现的技术证据为准。",
      sources: [
        { title: "[larping] more false claims of NS2 exploits - GBAtemp.net", url: "https://gbatemp.net/threads/larping-more-false-claims-of-ns2-exploits.676854/" }
      ]
    },
    {
      date: "2025-09-07",
      dateLabel: "2025年9月7日",
      title: "MIG Switch 厂商以 200 万美元和解并遭永久禁售",
      category: "法律与产业",
      exploit: "MIG Switch / Modded Hardware",
      cve: "",
      firmware: "",
      description: "任天堂与生产 MIG Switch 等产品的 Modded Hardware（经营者 Ryan Daly）达成和解：对方须支付 200 万美元，法院同时下达永久禁令，禁止其销售任何 MIG Switch 闪存卡、破解芯片或其他规避任天堂反盗版措施的设备，任天堂还将没收相关产品与网站。案件由美国西雅图地方法院审理（Nintendo of America Inc v. Daly，案号 2:24-cv-00958），法院认定相关产品违反 DMCA 的版权保护规定。这是任天堂 2025 年针对 Switch 2 盗版生态最直接的一次法律胜利，也与此前的 Yuzu（240 万美元和解）一脉相承。",
      sources: [
        { title: "任天堂法务部的又一次胜利：MiG Switch 制造商败诉并将支付 200 万美元和解金 - IT之家", url: "https://www.ithome.com/0/880/984.htm" },
        { title: "Docket updates for Nintendo of America Inc v. Daly, 2:24-cv-00958 - CourtListener", url: "https://www.courtlistener.com/docket/68901471/feed/" }
      ]
    },
    {
      date: "2025-11-03",
      dateLabel: "2025年11月3日",
      title: "switchbrew 整理 T239 硬件安全特性",
      category: "硬件漏洞",
      exploit: "",
      cve: "",
      firmware: "",
      description: "Nintendo Switch Brew 维基在 2025 年 11 月更新 Switch 2 的 Tegra T239 页面，记录该定制 SoC 的规格与安全设计：八核 ARM Cortex-A78C、4MB 共享 L3、12GB LPDDR5X、1536 核心 Ampere GPU；安全方面支持 Armv8.3-A 指针认证（PAC）与 Armv8.6-A 增强版 PAC，并对部分 carveout 内存区域启用内存加密，使外部内存总线嗅探只能看到密文，但由于没有内存认证，物理篡改会导致读回乱码而非可控数据。这些特性正是硬破路线难以推进的原因：glitch、电压毛刺与总线嗅探等针对老 Tegra 的手法，在 T239 上被针对性削弱。",
      sources: [
        { title: "Switch 2: Tegra T239 - Nintendo Switch Brew", url: "https://switchbrew.org/wiki/Switch_2:_Tegra_T239" }
      ]
    },
    {
      date: "2025-11",
      dateLabel: "2025年11月",
      title: "熔丝布局公开：防降级与抗毛刺设计曝光",
      category: "硬件漏洞",
      exploit: "ratchet fuses（防降级熔丝）",
      cve: "",
      firmware: "",
      description: "switchbrew 的 Switch 2 熔丝页面整理出 T23x 的 0x1000 字节熔丝块布局，其中与破解直接相关的是防降级机制：ReservedOdm 的 4-7 号 bank 被明确标注为 ratchet fuses，用于阻止系统固件回滚到存在漏洞的旧版本，因此“降级后用旧漏洞”的经典路线在 Switch 2 上被硬件层面掐断，SysFwRatchet 等字段同样承担版本棘轮作用。熔丝还包含 ArmJtagDisable、NvJtagProtectionEnable、DebugAuthentication 等调试封锁位，以及记录安全启动公钥哈希的 PublicKeyHash 与保护后半段熔丝的 H2 CRC32 校验。这些内容由社区从 Linux4Tegra 的 fskp_t234.bin 逆向得到，说明研究者对硬件防护的评价是“设计上就为抵抗物理攻击而生”。",
      sources: [
        { title: "Switch 2: Fuses - Nintendo Switch Brew", url: "https://switchbrew.org/wiki/Switch_2:_Fuses" }
      ]
    },
    {
      date: "2025-12-08",
      dateLabel: "2025年12月8日",
      title: "FSF 批评 Switch 2 封禁机制，用户被迫申诉",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "自由软件基金会在 2025 年冬季公报中系统批评任天堂的 DRM 与封禁政策：新用户协议让任天堂可以单方面让设备“永久无法使用”，而实践中确有用户受害——有人买到已开封的退货 Switch 2，硬件完好却无法运行大量游戏；也有人因为在数字市场购买二手卡带更新而遭封禁，最终只能向任天堂举证购买记录才获解封。文章指出封禁跟随设备而非账号，影响 eShop、在线游玩、已购游戏下载与安全更新，甚至波及 Game-Key Card 游戏。这份批评虽是立场性文件，但它记录的时间与案例为“Switch 2 时代厂商与用户围绕改机与盗版的对抗”提供了独立佐证。",
      sources: [
        { title: "New Nintendo DRM bans consoles, makes users beg for forgiveness - Free Software Foundation", url: "https://www.fsf.org/bulletin/2025/winter/new-nintendo-drm-bans-consoles-makes-users-beg-for-forgiveness" }
      ]
    },
    {
      date: "2025-12",
      dateLabel: "2025年12月",
      title: "2025 年终盘点：Switch 2 仍无任何可用破解",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "Switch 2 2025 年底最新固件",
      description: "截至 2025 年底，Switch 2 没有任何公开可用的破解方案：没有自制固件或引导器，没有可用的 modchip、烧录卡或 ODE，也没有内核或 hypervisor 级别的公开漏洞，Atmosphère 明确不为该平台提供支持。已知的全部成果只有 userland 层面的两类入口——首发日迁移过来的 Switch 1 存档漏洞，以及 8 月 comex 报告的 WebKit 浏览器任意读写，二者都无法访问 SD 卡或提权到内核，因而不能用于盗版或运行自制系统。加上熔丝防降级、内存加密、指针认证与抗毛刺设计，多数研究者判断 Switch 2 有可能在整个生命周期内都维持未被破解的状态。需要指出的是，此后半年的进展主要集中在这条 userland 线上（2026 年 7 月的离线通用漏洞与 9 月的 HDMI 内存外带），内核与 hypervisor 依然零突破。",
      sources: [
        { title: "More details on why the Nintendo Switch 2 may not be hacked - ihaveahax's thing", url: "https://blog.ihaveahax.net/2025/06/03/more-details-on-why-the-nintendo-switch-2-may-not-be-hacked/" },
        { title: "System Update History for Nintendo Switch 2 - Nintendo Support", url: "https://www.nintendo.com/en-za/Support/Nintendo-Switch-2/System-Update-History-for-Nintendo-Switch-2-2856139.html" },
        { title: "Switch 2: Tegra T239 - Nintendo Switch Brew", url: "https://switchbrew.org/wiki/Switch_2:_Tegra_T239" }
      ]
    },
    {
      date: "2026-07-20",
      dateLabel: "2026年7月20日",
      title: "Gezine 公开通用的离线 userland 漏洞：不靠 WebKit、不靠存档",
      category: "软破",
      exploit: "Gezine 通用 userland 漏洞（ARM64 ROP，非 WebKit、非存档）",
      cve: "",
      firmware: "Switch 2 全固件版本（离线可触发）",
      description: "安全研究者 Gezine（gezine_dev，此前以 PS5 安全研究知名）在 X 上宣布，他为 Switch 1 与 Switch 2 做出了一个既不是 WebKit、也不是存档注入的 userland 漏洞。这两点回避恰好对应 Switch 2 上原有入口的两个死结：一是 WebKit 已用 ARM PAC（指针认证码）加固，ROP 链基本被堵死；二是存档注入必须通过 Nintendo Switch Online 传存档，等于强迫用户升级到最新固件、反而会封掉后续漏洞。新入口完全离线可用、兼容所有固件版本，利用以 ARM64 ROP 实现受限用户进程内的任意代码执行，可弹出可验证的效果。但它仍只是应用沙箱内的原语：不能运行自制固件、不能玩备份游戏、不能取得完整系统权限。社区反应分裂——有人认为这是自制软件真正可落地的起点（本地存档备份、掌机复古模拟器），也有人指出任天堂在漏洞公开后数小时内打补丁的历史，实际可用性仍取决于是否能接上内核漏洞。",
      sources: [
        { title: "Notebookcheck: Switch 2 – Developer unveils a universal exploit that works entirely offline", url: "https://www.notebookcheck.net/Switch-2-Developer-unveils-a-universal-exploit-that-works-entirely-offline.1347373.0.html" },
        { title: "Gezine 的原始公开推文（X）", url: "https://x.com/gezine_dev/status/2074894225460822503" },
        { title: "GBAtemp: New Switch 2 Userland Exploit found", url: "https://gbatemp.net/threads/new-switch-2-userland-exploit-found.682996/" }
      ]
    },
    {
      date: "2026-09-07",
      dateLabel: "2026年9月7日",
      title: "大规模“误封机”事件：任天堂称系系统临时故障并自动解封",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "Switch 2 2026 年 9 月固件",
      description: "9 月 5 日晚起，全球多地 Switch 2 玩家在社交媒体报告主机被 Ban（无法使用绝大多数联网功能），一度被解读为任天堂针对烧录卡、改机或黑卡的又一轮清理。由于许多被 Ban 用户明确表示从未使用烧录卡、修改存档或第三方礼品卡，事件迅速演变为对封禁判定标准的质疑；随后大批机器自动恢复正常，任天堂客服向用户解释本次为系统临时故障。这条事件对破解史的意义不在于技术，而在于它揭示了两点：一是 Switch 2 的封禁确实跟随硬件而非账号，二手交易风险因此被反复提醒；二是厂商侧的自动化风控一旦误判，普通用户几乎没有申诉手段——这正是 FSF 在 2025 年冬季公报中批评的那套机制在现实中的一次预演。",
      sources: [
        { title: "IT之家：任天堂回应 Switch 2 游戏机大规模 Ban 机事件——系统临时故障", url: "https://www.ithome.com/0/999/210.htm" },
        { title: "The News: Nintendo Switch 2 bans lifted after mass 'false ban' incident", url: "https://www.thenews.com.pk/amp/1415205-nintendo-switch-2-bans-lifted-after-mass-false-ban-incident" }
      ]
    },
    {
      date: "2026-09-17",
      dateLabel: "2026年9月17日",
      title: "HDMI 采集卡当信道：把 Switch 2 游戏运行内存搬出主机",
      category: "硬件漏洞",
      exploit: "游戏内 userland Bug + HDMI 画面编码外带（屏幕→采集卡→解码）",
      cve: "",
      firmware: "Switch 2 2026 年 9 月固件",
      description: "9 月 17 日，Gezine 公布了一项绕过所有常规导出通道的成果：他利用某个 Switch 2 游戏自身的 userland Bug，在游戏进程内读取本来无法导出的运行时内存，再把每批内存字节映射成屏幕上的像素、色块与图案，通过 HDMI 采集卡录制视频帧，最后在电脑上按约定规则把像素还原为字节，多次显示、采集、拼接、校验后得到可逆向的二进制，过程耗时一个多小时。它的意义在于证明了“即使没有调试接口、文件系统导出或内核权限，也能把主机内部数据搬到外部”，为 Switch 2 的逆向工程提供了全新信道；但本质上仍是被沙箱限制的 userland 能力，既不构成越狱，也不能运行自制系统或盗版游戏。",
      sources: [
        { title: "IT之家：逆向任天堂 Switch 2 新突破——研究者靠 HDMI 画面“搬运”游戏运行内存数据", url: "https://m.ithome.com/html/1003894.htm" },
        { title: "Gezine 的原始公开推文（X）", url: "https://x.com/gezine_dev/status/2074894225460822503" }
      ]
    },
    {
      date: "2026-09-28",
      dateLabel: "2026年9月28日",
      title: "缺席判决 450 万美元：Archbox 网站与社媒账号被强制关停",
      category: "法律与产业",
      exploit: "Nintendo of America v. Archbox（缺席判决）",
      cve: "",
      firmware: "",
      description: "美国华盛顿西区联邦地区法院批准任天堂的缺席判决动议，认定被告 Archbox（一名曾在 Reddit 上运营大型 Switch 盗版社区、并销售盗版游戏与相关硬件的用户）未出庭应诉，判令其支付任天堂主张的全部 450 万美元赔偿，并立即关停其运营的所有网站以及与这些网站关联的社交媒体账号。此前的 2025 年，FBI 已查封过 Switch 盗版站点 NSw2u，显示任天堂在美国对内容分发端（盗版站、ROM 社区）的追诉与对设备端（modchip、MIG Switch）的追诉是并行推进的。对 Switch 2 生态而言，这类判决不改变技术现状，但它持续抬高了“公开经营盗版内容或规避设备”的法律成本。",
      sources: [
        { title: "GamesIndustry.biz: Nintendo of America awarded $4.5m in lawsuit from Redditor for pirating Switch hardware and software", url: "https://www.gamesindustry.biz/nintendo-of-america-awarded-45m-in-lawsuit-from-redditor-for-pirating-switch-hardware-and-software" },
        { title: "IGN: Nintendo Wins $4.5 Million From Reddit Mod Who Sold Pirated Switch Games", url: "https://pk.ign.com/nintendo-switch-3/261647/nintendo-wins-45-million-from-reddit-mod-who-sold-pirated-switch-games" }
      ]
    },
    {
      date: "2026-10",
      dateLabel: "2026年10月（现状）",
      title: "现状：仍未被破解，内核与 hypervisor 零突破，成果全部停在 userland",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "Switch 2 系统固件 23.0.1（2026 年内已从 21.x 推进到 23.x）",
      description: "截至 2026 年 10 月，Switch 2 依然没有被破解：没有任何公开可用的自定义固件、引导器、modchip、烧录卡或 ODE 方案，也没有任何公开的内核或 hypervisor 级别漏洞，Atmosphère 1.12.0（2026 年 9 月 27 日）只跟进 Switch 1 的 23.0.0，明确不为 Switch 2 提供支持。全部公开成果都停留在 userland：2025 年首发日迁移的 Switch 1 存档漏洞与 comex 的 WebKit 任意读写，2026 年 7 月 Gezine 的离线通用 userland 漏洞，以及 9 月用 HDMI 采集卡把游戏运行内存编码成画面外带的方法。这几项都无法访问 SD 卡、无法提权，也都不构成可用于盗版或自制系统的破解。硬件侧同样没有突破：T239 的指针认证、部分 carveout 内存加密、ratchet 熔丝防降级与抗毛刺设计，使针对老 Tegra 的 glitch、电压毛刺与总线嗅探等手法难以直接复用；社区对 Switch 2 modchip 攻击面的资料收集（GBAtemp 相关专帖）持续多年，仍停留在“数据收集”阶段。与此同时，任天堂的封禁与诉讼没有停手：9 月的大规模误封事件虽被解释为系统临时故障并自动解除，但主机级封禁机制本身依旧生效，荷兰海牙地方法院 9 月对 MIG Switch 欧洲销售的违法认定、8 月对 400 余个 Switch 模拟器 GitHub 仓库的下架，以及 9 月底对 Archbox 的 450 万美元缺席判决，共同构成了这一年“技术无突破、法务全面收紧”的格局。",
      sources: [
        { title: "Notebookcheck: Switch 2 – Developer unveils a universal exploit that works entirely offline", url: "https://www.notebookcheck.net/Switch-2-Developer-unveils-a-universal-exploit-that-works-entirely-offline.1347373.0.html" },
        { title: "Nintendo Life: Nintendo Wins Court Case Ruling The Sale Of Switch \"Circumvention Devices\" Unlawful", url: "https://www.nintendolife.com/news/2026/09/nintendo-wins-court-case-ruling-the-sale-of-switch-circumvention-devices-unlawful" },
        { title: "GBAtemp: Switch 2 – data gathering for possible modchip attack vectors", url: "https://gbatemp.net/threads/switch-2-data-gathering-for-possible-modchip-attack-vectors.668520/" },
        { title: "Switch 2: Tegra T239 - Nintendo Switch Brew", url: "https://switchbrew.org/wiki/Switch_2:_Tegra_T239" }
      ]
    }
  ]
});
