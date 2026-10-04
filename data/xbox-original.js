window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "xbox-original",
  name: "Xbox（初代）",
  family: "Xbox",
  released: "2001-11",
  status: "截至 2026 年 10 月，初代 Xbox 早已没有任何官方支持，整条破解链完全由开源社区维持：硬破用 ModXO（RP2040/RP2350，2026-09-30 更新至 V1.0.17）与 OpenXenium，芯片固件用 PrometheOS（2026-10-02 发布 V1.6.0）与 Cerbios，自制开发用 nxdk/RXDK。Insignia 重建的 Xbox Live 1.0 已支持 204 款游戏、注册用户约 3.5 万，是 2010 年官方关服后唯一的联机方案。2026 年该平台没有出现新的软破或硬件漏洞，微软也不再对其做任何反破解动作。",
  summary: "初代 Xbox 是主机破解史上第一个被完整拆解安全链的平台：微软用 MCPX BootROM 的 RSA 签名校验、签名 XBE 与写保护的 TSOP flash 构建信任根，却在零售主板保留了 LPC 调试总线，使 2002 年起的直读芯片成为最稳定的绕过方式。2003 年《007: Agent Under Fire》的存档溢出证明纯软件路径同样可行，随后 MechAssault 等游戏漏洞与 UDE、Ndure 一键安装器让软破普及，微软只能用 Xbox Live 封禁与主板改版反制。2010 年官方联机关停后，破解动力从盗版转向媒体中心与自制软件；2020 年代 OpenXenium、ModXO、PrometheOS、nxdk/RXDK 与 Insignia 让该平台彻底社区化。",
  events: [
    {
      date: "2001-11",
      dateLabel: "2001年11月",
      title: "Xbox 发售与 MCPX 安全链",
      category: "硬件漏洞",
      exploit: "MCPX X2/X3 BootROM + RSA 签名校验链",
      cve: "",
      firmware: "所有初代 Xbox（v1.0–v1.6）",
      description: "2001-11-15 Xbox 在北美发售，安全模型把信任根放在 MCPX 芯片内的 BootROM：上电后它从主板 TSOP flash 中读取 512KB BIOS 镜像的前段引导块（2bl）并做 RSA 签名校验，内核随后只加载签名过的 XBE 可执行文件。但零售主板为了生产调试保留了 LPC 总线，TSOP 的写保护也只由板上焊点与走线实现，两者都停留在硬件层，无法通过在线更新收回。Andrew「bunnie」Huang 在 2002 年逆向并公开了这条引导链的细节，成为之后所有直读芯片与软件破解的共同起点。",
      sources: [
        { title: "Wikipedia: Xbox (console)", url: "https://en.wikipedia.org/wiki/Xbox_(console)" },
        { title: "Hacking the Xbox 全文（Internet Archive）", url: "https://archive.org/stream/HackingTheXboxAnIntroductionToReverseEngineering/HackingTheXboxAnIntroductionToReverseEngineering_djvu.txt" },
        { title: "XboxDev Wiki: Hardware Revisions", url: "https://xboxdevwiki.net/index.php?title=Hardware_Revisions" }
      ]
    },
    {
      date: "2002",
      dateLabel: "2002年",
      title: "首批 LPC 直读芯片问世",
      category: "硬破",
      exploit: "X-ecuter / Enigmah-X / Matrix 等 modchip",
      cve: "",
      firmware: "v1.0–v1.5（v1.6 需 LPC 重建）",
      description: "2002 年起，X-ecuter（后来的 Xecuter）、Enigmah-X、Matrix 等直读芯片陆续出现，做法是把 CPLD 与 flash 焊在主板 LPC 调试总线上，在 MCPX 取得引导代码之前抢先给出自己的 BIOS，使主机整体跳过 RSA 签名校验。装上芯片后即可运行未签名 XBE、读取刻录盘、更换硬盘，配合第三方 BIOS 还能自定义启动流程，因此成为初代 Xbox 生命周期内最稳定的破解方式。微软无法通过在线手段收回该能力，只能在后续主板改版中削弱可焊性并增加直读兼容难度，芯片生态一直延续到 2020 年代的开源复刻。",
      sources: [
        { title: "TechCrunch: The random endorsement: modchips", url: "https://techcrunch.com/2007/11/07/the-random-endorsement-modchips/" },
        { title: "ZDNet: Mod squad hacks away at Xbox", url: "https://www.zdnet.com/article/mod-squad-hacks-away-at-xbox/" },
        { title: "ConsoleMods Wiki: Xbox Scene History", url: "https://consolemods.org/wiki/Xbox:Scene_History" }
      ]
    },
    {
      date: "2002",
      dateLabel: "2002年",
      title: "EvolutionX 仪表盘建立生态",
      category: "工具与生态",
      exploit: "EvolutionX（EvoX）dashboard",
      cve: "",
      firmware: "已改机主机（任意 BIOS）",
      description: "改机之后必须替换原厂仪表盘才能方便地运行自制软件，2002 年出现的 EvolutionX 提供了内置 FTP 服务、从硬盘启动 XBE 与刷写 BIOS 的图形界面，很快成为事实标准。它与 EvoX M8、Xecuter X2 等第三方 BIOS 搭配，形成「BIOS + dashboard + FTP」的完整自制环境，也让 XBMC 这类媒体中心软件有了分发与自启动入口。微软的反制落在网络侧而非主机侧：2004 年起开始封禁改机主机登录 Xbox Live。",
      sources: [
        { title: "ConsoleMods Wiki: Xbox Scene History", url: "https://consolemods.org/wiki/Xbox:Scene_History" },
        { title: "ZDNet: Black-market tool for Xbox mod squad", url: "https://www.zdnet.com/article/black-market-tool-for-xbox-mod-squad/" },
        { title: "Slayer's Evox Auto-Installer（PDF）", url: "https://digiex.net/attachments/slayers_evox_auto-installer_v2-7final-pdf.13926/" }
      ]
    },
    {
      date: "2002-12",
      dateLabel: "2002年12月",
      title: "Xbox Linux 无改机悬赏延长",
      category: "工具与生态",
      exploit: "Xbox Linux Project bounty（Michael Robertson 出资）",
      cve: "",
      firmware: "零售未改机 Xbox",
      description: "Lindows 创始人 Michael Robertson 为 Xbox Linux Project 的无改机挑战提供奖金，分两阶段各 10 万美元、共 20 万美元，要求在完全不改硬件的零售 Xbox 上运行 Linux。原定 2002-12-31 截止的期限被出资方延长，The Register 于 2003-01-02 报导了这次延期，Ziff Davis 也以「Lindows CEO 资助破解竞赛」为题跟进。悬赏把研究者的注意力从焊接芯片引向纯软件路径，为三个月后的存档溢出突破提供了直接动机。",
      sources: [
        { title: "The Register: Xbox Linux donor extends prize offer", url: "https://www.theregister.com/software/2003/01/02/xbox-linux-donor-extends-prize-offer/1067944" },
        { title: "ZDNet: Lindows CEO funds hacking contest", url: "https://www.zdnet.com/article/lindows-ceo-funds-hacking-contest/" },
        { title: "Folha Online: Hacker vence desafio e instala o Linux no Xbox", url: "https://www1.folha.uol.com.br/folha/informatica/ult124u12590.shtml" }
      ]
    },
    {
      date: "2003",
      dateLabel: "2003年",
      title: "TSOP 写保护短路刷 BIOS",
      category: "硬件漏洞",
      exploit: "TSOP write-protect 焊点桥接（TSOP split）",
      cve: "",
      firmware: "v1.0–v1.5（v1.6 起 TSOP 被集成 ROM 取代）",
      description: "初代 Xbox 的 BIOS 存放在主板上的 512KB TSOP flash 中，出厂时写保护引脚被固定在保护电平，但这一保护只由板上两个焊点/走线实现。社区发现短接或切断对应焊点即可解除写保护，再借助直读芯片或存档软破启动主机运行刷写工具，把 EvoX M8、Xecuter X2、iND-BIOS 等第三方 BIOS 直接写入 TSOP，从而实现「无芯片」的永久破解。这是典型的硬件级保护实现缺陷，代价是需要动烙铁，微软最终在 v1.6 主板上取消独立 TSOP 以封堵该路径。",
      sources: [
        { title: "ConsoleMods Wiki: Xbox TSOP Flashing", url: "https://consolemods.org/wiki/Xbox:TSOP_Flashing" },
        { title: "XboxDev Wiki: Hardware Revisions", url: "https://xboxdevwiki.net/index.php?title=Hardware_Revisions" },
        { title: "ConsoleMods Wiki: Xbox Scene History", url: "https://consolemods.org/wiki/Xbox:Scene_History" }
      ]
    },
    {
      date: "2003",
      dateLabel: "2003年",
      title: "《Hacking the Xbox》出版",
      category: "法律与产业",
      exploit: "《Hacking the Xbox》(Andrew bunnie Huang)",
      cve: "",
      firmware: "初代 Xbox 硬件与 BootROM",
      description: "MIT 研究生 bunnie Huang 在 2001–2002 年系统逆向 Xbox 的 MCPX 引导链与签名机制，其书稿原出版方在微软方面的法律压力下放弃出版，最终由 No Starch Press 于 2003 年出版《Hacking the Xbox: An Introduction to Reverse Engineering》。这是第一本公开讲解主机签名校验、LPC 总线与改机合法性的著作，成为主机逆向工程与 mod 社群的教科书，也让「破解是否为合理使用」进入公共讨论。2013 年 bunnie 为纪念 Aaron Swartz 将全书免费公开，使其长期可核查。",
      sources: [
        { title: "Wikipedia: Andrew Huang (hacker)", url: "https://en.wikipedia.org/wiki/Andrew_Huang_(hacker)" },
        { title: "Hacking the Xbox 全文（Internet Archive）", url: "https://archive.org/stream/HackingTheXboxAnIntroductionToReverseEngineering/HackingTheXboxAnIntroductionToReverseEngineering_djvu.txt" }
      ]
    },
    {
      date: "2003-03",
      dateLabel: "2003年3月",
      title: "007 存档溢出拿下悬赏",
      category: "软破",
      exploit: "007: Agent Under Fire 存档解析缓冲区溢出（habibi_xbox / David Jilli）",
      cve: "",
      firmware: "零售 Xbox（任意主板与光驱版本）",
      description: "2003-03-29，化名 Habibi-Xbox 的 David Jilli 公布：用 Xbox 能识别的 USB 存储设备把改造过的《007: Agent Under Fire》存档写入主机，游戏在载入存档时发生缓冲区溢出，攻击者代码借已签名的游戏进程获得执行权，从而绕开 XBE 的 RSA 校验并启动自制负载与精简版 Linux。该成果完成了 Xbox Linux Project 的无改机挑战（20 万美元奖金），CNET、LWN 与 Folha 在 2003-03-31 至 04-01 相继报导。因为漏洞存在于已发售的零售游戏而非主机固件，微软无法修补，只能转向网络侧封禁，这也确立了「游戏存档溢出」作为初代 Xbox 标准软破路径的地位。",
      sources: [
        { title: "LWN: Hacker cracks Xbox challenge (News.com)", url: "https://lwn.net/Articles/27382/" },
        { title: "CNET: Hacker cracks Xbox challenge", url: "https://www.cnet.com/tech/gaming/hacker-cracks-xbox-challenge/" },
        { title: "ConsoleMods Wiki: Xbox Scene History（2003-03-29 条目）", url: "https://consolemods.org/wiki/index.php?title=Xbox:Scene_History&diff=37332&oldid=23891" }
      ]
    },
    {
      date: "2004",
      dateLabel: "2004年",
      title: "MechAssault 存档软破扩散",
      category: "软破",
      exploit: "MechAssault（MechInstaller）等游戏存档溢出",
      cve: "",
      firmware: "零售 Xbox（需要对应游戏与记忆卡写入器）",
      description: "继 007 之后，社群把同类的存档/配置解析溢出扩展到更多零售游戏，最著名的是《MechAssault》，xbox-linux 邮件列表在 2004 年初已在讨论 MechInstaller 方案，之后 Splinter Cell、Tony Hawk's Pro Skater 4 等游戏也被列为可用入口。这些漏洞的共性是游戏读取存档时缺少边界检查，攻击者通过记忆卡或 FTP 投递特制文件即可在游戏进程内执行代码，再加载内核级负载。多入口的存在让用户能按手头拥有的游戏选择方案，也让微软难以从网络侧逐一识别。",
      sources: [
        { title: "xbox-linux 邮件列表: MechInstaller idea", url: "https://sourceforge.net/p/xbox-linux/mailman/xbox-linux-user/thread/brltcd%24ft3%241%40sea.gmane.org/" },
        { title: "ConsoleMods Wiki: Xbox Game Save Exploit", url: "https://consolemods.org/wiki/Xbox:Game_Save_Exploit" },
        { title: "Wikipedia: Softmod", url: "https://en.wikipedia.org/wiki/Softmod" }
      ]
    },
    {
      date: "2004-03",
      dateLabel: "2004年3月",
      title: "Mega X-Key 降低软破门槛",
      category: "硬破",
      exploit: "Mega X-Key / Action Replay（Xbox 记忆卡 USB 读写器）",
      cve: "",
      firmware: "零售 Xbox（无需焊接）",
      description: "2004-03 前后社群记录到 Mega X-Key 等游戏作弊/存档设备的出现，它与 Action Replay 一样是 Xbox 记忆卡的 USB 读写器，让玩家能在 PC 上把改造过的存档写进记忆卡再插入主机触发溢出。在此之前，把恶意存档放进主机通常需要直读芯片加 FTP，或依赖主机上已有的破解环境；这类读写器把软破的前置条件压缩成「买一个 USB 设备」。此后 Ndure、SID 等软破工具链都默认用户拥有记忆卡写入器，免焊接破解由此成为主流路径。",
      sources: [
        { title: "ConsoleMods Wiki: Xbox Scene History（Mega X-Key 条目）", url: "https://consolemods.org/wiki/index.php?title=Xbox:Scene_History&diff=37332&oldid=20010" },
        { title: "Wikipedia: Softmod", url: "https://en.wikipedia.org/wiki/Softmod" },
        { title: "ConsoleMods Wiki: Xbox Game Save Exploit", url: "https://consolemods.org/wiki/Xbox:Game_Save_Exploit" }
      ]
    },
    {
      date: "2004-05",
      dateLabel: "2004年5月",
      title: "UDE 利用仪表盘更新提权",
      category: "软件漏洞",
      exploit: "Ultimate Dashboard Exploit（UDE），PedrosPad 与 Rmenhal",
      cve: "",
      firmware: "各版本零售仪表盘（dash）",
      description: "Xbox 支持随游戏光盘分发并在主机上运行仪表盘更新包，这一流程对更新内容的校验与权限约束不足，属于主机系统软件层面的信任缺陷。PedrosPad 与 Rmenhal 据此做出 Ultimate Dashboard Exploit（UDE），把自制负载借由仪表盘更新流程执行，从而获得接近官方固件的权限，不依赖某一款特定游戏的存档 bug，因此对内核版本与光驱状态更不敏感。UDE 的思路后来被 Ndure、SID 等一站式安装器吸收，成为 2005 年后软破的通用底座。",
      sources: [
        { title: "ConsoleMods Wiki: Xbox Scene History（UDE 条目）", url: "https://consolemods.org/wiki/index.php?title=Xbox:Scene_History&diff=prev&oldid=52889" },
        { title: "xboxscene.org 论坛: The ultimate Dashboard Exploit Aka Ude", url: "https://forums.xboxscene.org/index.php?topic=90159.msg743598.html" },
        { title: "ConsoleMods Wiki: Xbox Scene History", url: "https://consolemods.org/wiki/Xbox:Scene_History" }
      ]
    },
    {
      date: "2004-11",
      dateLabel: "2004年11月",
      title: "微软封禁改机主机上 Live",
      category: "法律与产业",
      exploit: "Xbox Live ban wave（配合 Halo 2 上线）",
      cve: "",
      firmware: "已改机/刷 BIOS/使用刻录盘的主机",
      description: "2004-11《Halo 2》发售前后，微软开始大规模封禁被判定为改机或使用盗版盘的主机，被拉黑的机器无法再登录 Xbox Live，社群称之为 ban wave，Engadget 从 2004-11-14 起连续报导。封禁依据是主机 EEPROM 中的唯一标识以及 BIOS、光驱特征，属于账号与网络侧反制，能打击联机与盗版体验，却无法阻止离线破解。这是初代 Xbox 时代微软最有效也最具争议的反破解手段，也解释了为何后续软破工具普遍强调「离线使用」与屏蔽仪表盘更新。",
      sources: [
        { title: "Engadget: More on Xbox Live bans (2004-11-14)", url: "https://www.engadget.com/2004-11-14-more-on-xbox-live-bans.html" },
        { title: "CNET: Is Microsoft using Halo 2 to thwart Xbox hackers?", url: "https://www.cnet.com/tech/gaming/is-microsoft-using-halo-2-to-thwart-xbox-hackers/" },
        { title: "ITPro Today: Microsoft Uses Halo 2 to Catch Xbox Pirates", url: "https://www.itprotoday.com/microsoft-windows/microsoft-uses-halo-2-to-catch-xbox-pirates" }
      ]
    },
    {
      date: "2004-12",
      dateLabel: "2004年12月",
      title: "ATA 硬盘锁与 hotswap",
      category: "硬件漏洞",
      exploit: "hotswap + EEPROM HDD key 提取",
      cve: "",
      firmware: "全部零售主板（v1.0–v1.6）",
      description: "Xbox 用 ATA Security 给内置硬盘上锁，解锁口令由主板 EEPROM 中的 HDD key 派生，开机时自动解锁，而该密钥既没有安全芯片保护，也能通过 I2C 读取 EEPROM 获得。玩家因此有两种免直读芯片的换盘方式：读取 EEPROM 复现密钥，或在主机运行中把 IDE 线切到 PC 实施 hotswap，直接读写已解锁的硬盘；2004-12 的 xbox-linux 邮件列表已在讨论 v1.6 上的 hotswap 流程。这一密钥存储与解锁时机上的硬件设计缺陷，后来被 Chimp、Slayer's Auto-Installer 等工具标准化，使大容量硬盘升级成为软破主机的常规操作。",
      sources: [
        { title: "xbox-linux 邮件列表: Hotswap help needed, V1.6", url: "https://sourceforge.net/p/xbox-linux/mailman/xbox-linux-user/thread/200412251948.18148.dmp%40davidmpye.dyndns.org/" },
        { title: "ConsoleMods Wiki: Xbox Scene History", url: "https://consolemods.org/wiki/Xbox:Scene_History" }
      ]
    },
    {
      date: "2005-08",
      dateLabel: "2005年8月",
      title: "Ndure 一键软破安装器",
      category: "软破",
      exploit: "Krayzie Ndure Installer",
      cve: "",
      firmware: "零售 Xbox + 007/MechAssault/Splinter Cell/THPS4 等触发游戏",
      description: "2005-08 前后社群发布 Ndure 游戏存档式安装器，把「投递存档 → 触发溢出 → 加载负载 → 重写仪表盘或刷写 TSOP」整合成图形化的一键流程，并支持多款触发游戏。它把软破从需要读文档、手工拼装文件的实验，变成普通玩家可以照着做的操作，直接推动了 2005–2008 年软破主机的普及。此后的 SID（Softmod Installer Deluxe）等打包工具沿用同一思路，进一步把安装、备份 EEPROM 与硬盘升级合并到一个安装盘里。",
      sources: [
        { title: "xboxscene.org 论坛: Krayzie Ndure Installer (Gamesave Style)", url: "https://forums.xboxscene.org/index.php/topic,91113.msg761586.html" },
        { title: "ConsoleMods Wiki: Xbox Game Save Exploit", url: "https://consolemods.org/wiki/Xbox:Game_Save_Exploit" },
        { title: "Wikipedia: Softmod", url: "https://en.wikipedia.org/wiki/Softmod" }
      ]
    },
    {
      date: "2006-11",
      dateLabel: "2006年11月",
      title: "XBMC 2.0.1 媒体中心成熟",
      category: "工具与生态",
      exploit: "XBMC（Xbox Media Center，Kodi 前身）",
      cve: "",
      firmware: "已改机主机（BIOS + dashboard 环境）",
      description: "源自 2002 年 Xbox Media Player、2003 年更名的 XBMC，在 2006-11-12 发布 2.0.1，是初代 Xbox 上最成功的自制软件：它把一台破解主机变成能播放 DivX、访问网络共享与收听网络的客厅媒体中心，并成为后来 Kodi 的直接前身。XBMC 的流行让「软破一台初代 Xbox」在 Xbox 360 时代仍有明确用途，即便盗版与联机已不是主要动机。这条生态线说明破解的长期驱动力往往来自媒体播放与自制软件，而非单纯的游戏镜像。",
      sources: [
        { title: "Kodi Wiki: Kodi（XBMC 历史）", url: "https://kodi.wiki/index.php?title=Kodi" },
        { title: "Kodi Wiki: Archive XBMC 1.0.0 point release", url: "https://kodi.wiki/index.php?title=Archive:XBMC_1.0.0_point_release" }
      ]
    },
    {
      date: "2010-04",
      dateLabel: "2010年4月",
      title: "Xbox Live 1.0 关停",
      category: "法律与产业",
      exploit: "Xbox Live for original Xbox 终止服务",
      cve: "",
      firmware: "全部零售主机",
      description: "微软于 2010-02-05 宣布停止为初代 Xbox 及其游戏提供 Xbox Live 服务，并于 2010-04-15 正式关闭，官方理由是把资源转向 Xbox 360 的 Live 平台。此后初代 Xbox 的联机只能依靠 XLink Kai 之类的局域网隧道工具，官方服务器彻底消失，直到 2020 年代的 Insignia 才重新补位。官方服务退场反而把社群推向完全自建后端，也让破解主机的价值从「联机」转向媒体播放与自制软件。",
      sources: [
        { title: "Xbox Wire: Xbox LIVE being discontinued for Original Xbox", url: "https://news.xbox.com/en-us/2010/02/05/xbox-live-being-discontinued-for-original-xbox-consoles-and-games/" },
        { title: "Eurogamer: Xbox Live for Xbox 1 officially killed", url: "https://www.eurogamer.net/xbox-live-for-xbox-1-officially-killed" }
      ]
    },
    {
      date: "2015-12",
      dateLabel: "2015年12月",
      title: "nxdk 开源开发套件启动",
      category: "工具与生态",
      exploit: "nxdk（XboxDev 组织）",
      cve: "",
      firmware: "已改机主机（运行自制 XBE）",
      description: "2015-12 建立的 nxdk 用现代 LLVM/Clang 工具链替代 2000 年代的官方 XDK，提供标准库、SDL、网络与 XISO 打包等支持，让初代 Xbox 自制开发不再依赖盗版 XDK 和 Windows XP 环境。它与 xboxdevwiki 等公开逆向文档一起，把该平台的硬件与内核知识从论坛帖子整理成可持续维护的资料。nxdk 是 2020 年代「初代 Xbox 复活」的技术底座之一，后来的 RXDK 等项目则在其思路上提供更现代的框架。",
      sources: [
        { title: "GitHub: XboxDev/nxdk", url: "https://github.com/XboxDev/nxdk" },
        { title: "XboxDev Wiki: Historical Xbox Linux", url: "https://xboxdevwiki.net/index.php?title=Historical_Xbox_Linux" }
      ]
    },
    {
      date: "2019-09",
      dateLabel: "2019年9月",
      title: "OpenXenium 开源直读芯片",
      category: "硬破",
      exploit: "OpenXenium（Ryzee119）",
      cve: "",
      firmware: "Xbox v1.0–v1.6（Xenium 类芯片位）",
      description: "2019-09 Ryzee119 公开 OpenXenium，用当时仍可采购的 CPLD 与 flash 复刻 Team Xodus 的 Xenium 直读芯片，并保持与 Xenium OS 的兼容，使初代 Xbox 硬破不再依赖二手市场上的老芯片。项目也暴露出原厂 Xenium OS 内建的克隆保护会误判第三方硬件、甚至把芯片刷成砖，从而催生了对开源替代固件的需求。OpenXenium 与 XeniumTools 等工具共同构成 2020 年代硬破的基础设施，是 PrometheOS 等固件出现的前提。",
      sources: [
        { title: "GitHub: Ryzee119/OpenXenium", url: "https://github.com/Ryzee119/OpenXenium" },
        { title: "Xbox-Scene: PrometheOS V1.0.0 Released", url: "https://www.xbox-scene.info/articles/prometheos-v100-released-a-replacement-open-source-os-for-xenium-based-mods-r31" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "Team Xecuter 成员被捕",
      category: "法律与产业",
      exploit: "United States v. Team Xecuter（DOJ 起诉）",
      cve: "",
      firmware: "初代 Xbox Xecuter 直读芯片、Nintendo Switch 破解芯片",
      description: "2020-10-02 美国司法部公布对 Team Xecuter 成员的起诉，指控其制造并销售用于 Nintendo Switch 等主机的破解芯片与配套软件，涉及盗版与欺诈共谋，包括 Gary Bowser 在内的成员被捕，The Verge 等媒体同日报导。该团队最初正是以初代 Xbox 的 Xecuter 直读芯片成名，此案把主机破解硬件从灰色销售推入跨国刑事执法视野。案件对商业 modchip 产业形成强震慑，也间接推动初代 Xbox 生态转向开源硬件与开源固件。",
      sources: [
        { title: "DOJ: Two members of Team Xecuter in custody", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" },
        { title: "The Verge: Team Xecuter arrested and charged", url: "https://www.theverge.com/2020/10/2/21499297/team-xecuter-selling-nintendo-hacks-arrested-charged-fraud" },
        { title: "Wikipedia: Team Xecuter", url: "https://en.wikipedia.org/wiki/Team_Xecuter" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Bowser 案判刑 40 个月",
      category: "法律与产业",
      exploit: "US v. Bowser 量刑（Team Xecuter 案）",
      cve: "",
      firmware: "跨平台破解硬件（含初代 Xbox 芯片业务背景）",
      description: "2022-02，Gary Bowser 因参与 Team Xecuter 的破解芯片生意被判处 40 个月监禁并承担巨额赔偿，美国司法部发布量刑新闻稿，Nintendo Life、Eurogamer 等媒体跟进。判决把销售主机破解硬件明确定性为刑事共谋，对依赖商业销售的 modchip 厂商形成寒蝉效应。此后初代 Xbox 的硬破明显转向 OpenXenium、ModXO 这类开源硬件与 PrometheOS、Cerbios 这类开源固件，以规避商业销售带来的法律风险。",
      sources: [
        { title: "DOJ: Team Xecuter salesperson sentenced to 3+ years", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "Nintendo Life: Gary Bowser sentenced to three years", url: "https://www.nintendolife.com/news/2022/02/nintendo-hacker-gary-bowser-sentenced-to-three-years-in-jail" },
        { title: "Eurogamer: It's game over for Gary Bowser", url: "https://www.eurogamer.net/its-game-over-for-nintendo-switch-hacker-gary-bowser" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "Insignia 复活官方联机",
      category: "工具与生态",
      exploit: "Insignia（Xbox Live 1.0 替代后端）",
      cve: "",
      firmware: "已改机主机 + 修改后的仪表盘与网络配置",
      description: "社群自建的 Insignia 通过 DNS 重定向与自研服务器替换已关停的 Xbox Live 1.0，让《Halo 2》等初代 Xbox 游戏重新可以联机，2023 年前后开放玩家注册并持续扩充支持的游戏列表。它依赖软破或直读主机上可修改的仪表盘与网络设置，是把破解生态从单机自制延伸到在线服务重建的代表项目。与 2010 年官方关服形成对照：初代 Xbox 的在线寿命最终由社群而非微软决定。",
      sources: [
        { title: "Wikipedia: Insignia (Xbox)", url: "https://en.wikipedia.org/wiki/Insignia_(Xbox)" },
        { title: "GameSpot: The OG Xbox Live Is Back From The Dead", url: "https://www.gamespot.com/articles/the-og-xbox-live-is-back-from-the-dead-this-is-the-team-making-it-happen/1100-6515605/" },
        { title: "PureXbox: Insignia 新闻汇总", url: "https://www.purexbox.com/tags/insignia" }
      ]
    },
    {
      date: "2024-01",
      dateLabel: "2024年1月",
      title: "PrometheOS 1.0 发布",
      category: "工具与生态",
      exploit: "PrometheOS（Team Resurgent 与 Team Cerbios）",
      cve: "",
      firmware: "Xenium / OpenXenium 系直读芯片（Xbox v1.0–1.6）",
      description: "2024-01-20，Team Resurgent 与 Team Cerbios 发布 GPLv3 开源的 PrometheOS V1.0.0，取代闭源、内建克隆保护且多年未更新的 Xenium OS：支持在芯片上刷写、删除与自动启动 BIOS，内置 FTP 与 HTTP 管理界面，可备份恢复 EEPROM、管理硬盘锁与大容量分区。项目起因是 OpenXenium 复刻芯片被 Xenium OS 的克隆保护误刷成砖、而原厂代码不开源，社群因此决定从零重写芯片操作系统。此后 PrometheOS 成为 Xenium 类芯片的主要固件选择，恢复了芯片级自制固件的可维护性。",
      sources: [
        { title: "Xbox-Scene: PrometheOS V1.0.0 Released", url: "https://www.xbox-scene.info/articles/prometheos-v100-released-a-replacement-open-source-os-for-xenium-based-mods-r31" },
        { title: "GitHub: Team-Resurgent/PrometheOS-Firmware", url: "https://github.com/Team-Resurgent/PrometheOS-Firmware" },
        { title: "ConsoleMods Wiki: Xbox PrometheOS", url: "https://consolemods.org/wiki/Xbox:PrometheOS" }
      ]
    },
    {
      date: "2024-08",
      dateLabel: "2024年8月",
      title: "ModXO 开源 RP2040 直读",
      category: "硬破",
      exploit: "ModXO（Team Resurgent，RP2040）",
      cve: "",
      firmware: "Xbox v1.0–v1.6",
      description: "2024-08 Team Resurgent 发布 ModXO，用售价几美元的 Raspberry Pi RP2040 微控制器实现完整的 LPC 直读功能，把第三方 BIOS 存入板载 flash 并由 LPC 总线向主机提供引导，并可在 RP2040 的 BOOTSEL 模式下经 USB 直接刷新固件与 BIOS。它把 2002 年需要专用 CPLD 与 flash 的硬破压缩到一块通用开发板上，硬件设计与固件全部开源，显著降低了改机成本与门槛。ModXO 与 OpenXenium、PrometheOS 一起构成初代 Xbox 当前的现代硬破方案组合，也催生了多种社区载板与套件。",
      sources: [
        { title: "GitHub: Team-Resurgent/Modxo", url: "https://github.com/Team-Resurgent/Modxo" },
        { title: "GitHub: XeniumMods/XeniumFirmware", url: "https://github.com/XeniumMods/XeniumFirmware" }
      ]
    },
    {
      date: "2024-12",
      dateLabel: "2024年12月",
      title: "RXDK 复活自制开发链",
      category: "工具与生态",
      exploit: "RXDK（Team Resurgent）",
      cve: "",
      firmware: "已改机主机（自制 XBE 开发与运行）",
      description: "2024-12 Team Resurgent 公开 RXDK，目标是用现代 C/C++ 工具链与开源库替代停更二十年的官方 XDK，与 XboxDev 的 nxdk 一起构成初代 Xbox 的自制开发路径。它的意义是把「复活初代 Xbox」从运行老游戏扩展到持续产出新软件，并与 Insignia 的在线服务恢复形成配套。至此该平台的破解链条——硬破（ModXO/OpenXenium）、芯片固件（PrometheOS/Cerbios）、开发（nxdk/RXDK）、在线（Insignia）——基本由开源社区接管。",
      sources: [
        { title: "GitHub: Team-Resurgent/RXDK", url: "https://github.com/Team-Resurgent/RXDK" },
        { title: "GitHub: XboxDev/nxdk", url: "https://github.com/XboxDev/nxdk" }
      ]
    },
    {
      date: "2026",
      dateLabel: "2026年",
      title: "Insignia 支持游戏增至 204 款",
      category: "工具与生态",
      exploit: "Insignia（Xbox Live 1.0 替代后端）",
      cve: "",
      firmware: "原装与已改机主机 + 修改后的仪表盘与网络配置",
      description: "到 2026 年，社群自建的 Insignia 已把初代 Xbox 的官方联机恢复到相当完整的规模：官网当时显示注册用户 35,277 人、支持游戏 204 款，Halo 2、Tom Clancy's Rainbow Six 3、Forza Motorsport、Phantasy Star Online Episode I & II、Conker: Live & Reloaded 等作品均可联机，并保留排行榜与用户生成内容。它通过 DNS 重定向与自研服务器接管微软 2010 年关闭的 Xbox Live 1.0，注册需要在主机仪表盘里申请订阅码，对原装机与改机同样开放，且承诺永久免费。这让初代 Xbox 上「破解」的长期价值集中在在线复活与自制软件，而不只是盗版游戏。",
      sources: [
        { title: "Insignia 官方网站（注册用户、支持游戏数量与在线状态）", url: "https://insignia.live/" },
        { title: "Wikipedia: Insignia (Xbox)", url: "https://en.wikipedia.org/wiki/Insignia_(Xbox)" },
        { title: "XboxDev Wiki: Insignia", url: "https://xboxdevwiki.net/Insignia" }
      ]
    },
    {
      date: "2026-10",
      dateLabel: "2026年10月",
      title: "PrometheOS V1.6.0 发布",
      category: "工具与生态",
      exploit: "PrometheOS V1.6.0（Team Resurgent）",
      cve: "",
      firmware: "Xenium / OpenXenium / ModXO 系直读芯片（Xbox v1.0–1.6）",
      description: "2026-10-02，Team Resurgent 发布 PrometheOS V1.6.0，继续扩充这款 GPLv3 芯片操作系统的功能——自 2024-01 的 V1.0.0 起，它已连续迭代到 1.6 版，是 Xenium 类芯片与 ModXO 载板上的主要固件。同期 ModXO 也保持活跃：2026-09-30 的 V1.0.17 同时提供 RP2040（Pico、Xiao、Zero）与 RP2350（Pico 2、WeAct RP2350B）等多款通用开发板的固件，把 2002 年需要专用 CPLD 与 flash 的硬破彻底变成几美元级的开源方案。两者组合——RP2040/RP2350 直读芯片加开源芯片固件，再配 Cerbios 第三方 BIOS——是 2026 年初代 Xbox 改机的标准配置。",
      sources: [
        { title: "GitHub: Team-Resurgent/PrometheOS-Firmware V1.6.0（2026-10-02）", url: "https://github.com/Team-Resurgent/PrometheOS-Firmware/releases/tag/V1.6.0" },
        { title: "Logic-Sunrise: PrometheOS V1.6.0 发布报道", url: "https://www.logic-sunrise.com/forums/topic/109415-xo-prometheos-v160-le-nouvel-os-des-modchips-xbox-s%E2%80%99enrichit-de-nombreuses-fonctions/" },
        { title: "GitHub: Team-Resurgent/Modxo V1.0.17（2026-09-30）", url: "https://github.com/Team-Resurgent/Modxo/releases/tag/V1.0.17" }
      ]
    }
  ]
});
