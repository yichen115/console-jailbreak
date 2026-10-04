window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps2",
  name: "PlayStation 2",
  family: "PlayStation",
  released: "2000-03",
  status: "截至 2026 年 10 月，PS2 在软件层面早已完全攻破：FreeDVDBoot + MechaPwn + ProtoPwn 覆盖了从初代 SCPH-10000 到末代 SCPH-90000 的全部型号，多数机器无需焊接即可运行 Open PS2 Loader 并从 USB、HDD、MX4SIO 或 SMB 加载游戏，OPL 官方仓库仍在活跃更新（滚动 latest 版本于 2026 年 10 月 3 日刷新）。最后一块硬件空白也在 2026 年 9 月被补上：研究者耗时四年完成了 MechaCon（CXP102064）安全芯片的固件 dump 与逆向，为低层模拟、故障机修复与未来的 MechaCon 替代模块打开大门，但可直接替换光驱的 ODE 仍缺关键信息。",
  summary: "PS2 的破解史呈现出\"先硬后软、最后全线回归软件\"的罕见曲线：2001-2005 年靠直读芯片与 DVD-R 刻录盘，2003 年 Independence 漏洞首次让记忆卡成为入口，2008 年 Free McBoot 把软破带入主流。真正的转折出现在 2019-2020 年，CTurt 用 Yabasic 与 DVD 播放器漏洞证明连刻录光盘都能触发任意代码执行；2021 年的 MechaPwn 从 MechaCon 安全协处理器侧改写区域，2021-2022 年的 Fortuna/FunTuna 补上 SCPH-90000 这块最后的空白，2025 年的 ProtoPwn 则让最早期原型机也能从记忆卡引导。",
  events: [
    {
      date: "2000-03",
      dateLabel: "2000年3月",
      title: "PS2 发售，DVD 光盘认证成为主战场",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "SCPH-10000（日本首发）",
      description: "PlayStation 2 于 2000 年 3 月在日本发售，北美为同年 10 月，主机内置 DVD-ROM 光驱，是当时最便宜的 DVD 播放设备之一。正版盘认证由主板上的 MechaCon 安全协处理器负责，它通过读取盘片物理特征（摆动沟槽等）区分正版压盘与刻录盘，从硬件层阻断了 CD-R/DVD-R 备份。由于 MechaCon 是独立芯片且固件加密，此后二十年的所有破解路线——直读芯片、DVD 播放器漏洞、MechaPwn——本质上都是在与这块芯片及其配套授权链博弈。PS2 最终售出约 1.55 亿台，成为史上销量最高的家用主机，庞大的存量也让它长期是破解研究的重点目标。",
      sources: [
        { title: "Sony Computer Entertainment America: Network Adapter for PlayStation 2 Planned for Release In North America This Year（官方新闻稿，含 PS2 发售与销量信息）", url: "https://sony.mediaroom.com/2001-05-16-Network-Adapter-for-Playstation-2-Planned-for-Release-In-North-America-This-Year" },
        { title: "Eurogamer: Lik Sang abandons Neo（早期改装生态报道）", url: "https://www.eurogamer.net/article-45462" }
      ]
    },
    {
      date: "2001-11",
      dateLabel: "2001年11月",
      title: "Neo4 直读芯片：首个免 Swap 的 PS2 modchip",
      category: "硬破",
      exploit: "Neo4 modchip",
      cve: "",
      firmware: "SCPH-10000 至 SCPH-30000 系列（厚机）",
      description: "CDRInfo 于 2001 年 11 月 6 日报道了 Neo4 模块：它可以直接引导所有 PS1 与 PS2 备份盘，唯一的例外是 PS2 DVD-R 拷贝仍需与一张正版 DVD 做一次换盘。Neo4 的意义在于它是第一款不需要 Action Replay、GameShark 或 Region X 等附加盘的 PS2 直读芯片，此前市面上的 Neo 2.5（PS2 X-Key）等方案必须依赖这些工具盘绕过区域与授权检查。这类芯片通常需要焊接数十根细线到主板，通过向 MechaCon 注入伪造的认证响应或直接旁路光驱的碟片检测信号来工作。它同时解锁全区 DVD 播放并关闭 Macrovision 保护，奠定了此后 Magic 3、DMS3、Matrix Infinity 等一大批克隆芯片的技术路线。",
      sources: [
        { title: "CDRInfo: PlayStation2 - Neo4 non-swap modchip（2001-11-06）", url: "https://www.cdrinfo.com/Sections/News/Print.aspx?NewsId=5840" },
        { title: "Eurogamer: Lik Sang abandons Neo（早期 modchip 市场与渠道报道）", url: "https://www.eurogamer.net/article-45462" }
      ]
    },
    {
      date: "2003-05",
      dateLabel: "2003年（年份确定，月份未定）",
      title: "厚机直读芯片普及与 DVD-R 刻录生态",
      category: "硬破",
      exploit: "Magic 3 / DMS3 / Matrix Infinity 等",
      cve: "",
      firmware: "SCPH-30000 / SCPH-39000 / SCPH-50000",
      description: "2002 到 2004 年间，PS2 直读芯片进入百花齐放阶段：DMS3、Magic 3、Matrix Infinity、Modbo 等方案在功能上逐步追平并超越早期的 Neo4，普遍支持直接从 DVD±R 启动 PS2 备份、免换盘、全区播放以及关闭反盗版检测。芯片通常焊在主板 BIOS 与光驱控制芯片之间，或直接加装到 MechaCon 的通信线上，通过拦截并篡改认证握手来骗过安全处理器；每台主机的安装需要数十个焊点，失败可能直接报废主板。与之配套的是 DVD 刻录机与 DVD-R 媒价的快速下降，使得\"买一盘+R 刻录机\"成为当时中国、意大利等地区最主流的改机消费模式。索尼通过后续主板改版（缩小焊盘、改用 BGA 封装、更新 MechaCon 固件）不断抬高焊接难度，但始终无法从原理上根除。",
      sources: [
        { title: "CDRInfo: PlayStation2 - Neo4 non-swap modchip（同一生态的同期一手报道）", url: "https://www.cdrinfo.com/Sections/News/Print.aspx?NewsId=5840" },
        { title: "ZDNet: Sony cracks down on PlayStation2 chipping", url: "https://www.zdnet.com/article/sony-cracks-down-on-playstation2-chipping/" }
      ]
    },
    {
      date: "2003-08",
      dateLabel: "2003年8月15日",
      title: "Independence 漏洞：记忆卡首次成为入口",
      category: "软破",
      exploit: "Independence / Executor（作者 Marcus R. Brown 等）",
      cve: "",
      firmware: "SCPH-10000 至 SCPH-50000 系列（带记忆卡槽的厚机）",
      description: "Independence 于 2003 年 8 月 15 日发布，是 PS2 上第一个被广泛使用的免焊接软件漏洞。它利用主机在插入特定 PS1 游戏盘时读取记忆卡内伪造存档目录 BADATA-SYSTEM/BEDATA-SYSTEM 的机制：存档文件夹名与内容被替换为特制 BOOT.ELF，主机在启动 PS1 兼容模式时误将其当作可执行文件加载，从而获得任意 ELF 执行权限。使用前提是玩家拥有一张触发用的 PS1 原版盘（如 MechWarrior、007 等）以及把存档写入记忆卡的工具（Action Replay、SharkPort、EMS 适配器或已改机的主机）。它直接催生了 MCLoader 等引导菜单，让玩家从记忆卡启动 uLaunchELF、PS2Link 等自制程序。索尼在后续机型中封堵了这一路径：SCPH-90000 精简版取消了 PS1 兼容模式下的相关加载行为，使 Independence 及依靠它的早期引导方案失效。",
      sources: [
        { title: "PS2 Save Tools: PS2 Independence Exploit（工具合集与存档格式，作者 Marcus R. Brown 等）", url: "https://www.ps2savetools.com/downloads/ps2-independence-exploit/" },
        { title: "Sony Computer Entertainment America v. Divineo, Inc.（涉及记忆卡/存档改装工具的同期诉讼）", url: "https://www.courtlistener.com/opinion/2388295/sony-computer-entertainment-america-inc-v-divineo-inc/" }
      ]
    },
    {
      date: "2003-09",
      dateLabel: "2003年9月1日",
      title: "Lik Sang 与索尼和解，承诺不再销售直读芯片",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "美联社 2003 年 9 月 1 日报道，香港公司 Lik Sang International 就直读芯片侵权诉讼与索尼达成和解，支付了未公开金额的赔偿，公司及董事承诺永不再销售 modchip。此前索尼于 2002 年 9 月在香港起诉 Lik Sang，2003 年 3 月法院判决索尼胜诉并要求赔偿，Lik Sang 上诉后又放弃上诉。Lik Sang 董事 Alex Kampl 辩称大多数买家只是用它玩进口游戏，因为 PS2 与 Xbox 都有区域锁定。这起案件是亚洲渠道商在主机破解产业中最早的标志性败诉之一，也预示了此后索尼在美国、欧洲对 Divineo 等改机设备经销商的连环诉讼。",
      sources: [
        { title: "Deseret News / AP: Hong Kong firm settles PlayStation piracy lawsuit（2003-09-01）", url: "https://www.deseret.com/2003/9/1/19745321/hong-kong-firm-settles-playstation-piracy-lawsuit/" },
        { title: "ZDNet: Sony cracks down on PlayStation2 chipping", url: "https://www.zdnet.com/article/sony-cracks-down-on-playstation2-chipping/" }
      ]
    },
    {
      date: "2004-06",
      dateLabel: "2004年（年份确定，月份未定）",
      title: "HD Loader：硬盘启动游戏，改机转向内置存储",
      category: "软破",
      exploit: "HD Loader / HDAdvance",
      cve: "",
      firmware: "带 HDD 扩展槽的厚机（SCPH-30000 至 SCPH-50000）+ Network Adaptor",
      description: "HD Loader 是一套商业发行的引导程序，配合 PS2 厚机的 Network Adaptor（带 IDE 接口，2001 年 11 月上市）与 3.5 英寸硬盘，把游戏镜像安装到硬盘的 APA/PFS 分区中直接从硬盘启动，彻底摆脱对光驱读盘的依赖。它最初需要 Action Replay 之类工具盘或直读芯片来引导，安装到硬盘后则会自我复制到记忆卡与 HDD 引导区。随之出现的 HDAdvance 是功能相近的克隆版本，两者共同推动了\"改机 + 加硬盘\"的形态。这一路线后来被开源项目接续：如今 Open PS2 Loader 与 hdl-dump 仍在使用相同的 HDLoader 镜像格式，使这批二十年前的安装包至今仍能直接运行。",
      sources: [
        { title: "ps2homebrew/hdl-dump: Install games in HDLoader format to APA-formatted hard drive", url: "https://github.com/ps2homebrew/hdl-dump" }
      ]
    },
    {
      date: "2006-08",
      dateLabel: "2006年8月",
      title: "Sony v. Divineo 判决：直读芯片销售违法",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "美国加州北区联邦地方法院在 Sony Computer Entertainment America v. Divineo, Inc.（457 F. Supp. 2d 957）中作出有利于索尼的判决，认定销售 PS2 直读芯片及相关设备构成对 DMCA 反规避条款的违反。判决把 modchip 定性为\"主要用途为规避技术保护措施\"的设备，从而在美国法域内确立了改机芯片经销的违法性。这一判例与同期香港 Lik Sang 案相互呼应，直接压缩了欧美正规渠道销售直读芯片的空间，也是此后改机产业转向灰色跨境电商与个人代购的重要法律背景。",
      sources: [
        { title: "CourtListener: Sony Computer Entertainment America, Inc. v. Divineo, Inc., 457 F. Supp. 2d 957 (N.D. Cal. 2006)", url: "https://www.courtlistener.com/opinion/2388295/sony-computer-entertainment-america-inc-v-divineo-inc/" },
        { title: "ZDNet: Sony cracks down on PlayStation2 chipping", url: "https://www.zdnet.com/article/sony-cracks-down-on-playstation2-chipping/" }
      ]
    },
    {
      date: "2008-05",
      dateLabel: "2008年5月23日（按 psdevwiki 记录）",
      title: "Free McBoot 发布：记忆卡引导成为主流软破",
      category: "软破",
      exploit: "Free McBoot (FMCB) / DVD Player Update 漏洞（jimmikaelkael，协助者 Neme）",
      cve: "",
      firmware: "SCPH-10000 至 SCPH-70000 系列；SCPH-90000 不支持",
      description: "Free McBoot 由 jimmikaelkael 与 Neme 等 ps2dev 社区成员开发，2008 年以\"Beta homebrew MC hack\"名义在 SKSApps 论坛公开（psdevwiki 将 DVD Player Update 漏洞记为 2008-05-23）。它伪装成索尼官方的 DVD 播放器更新包写入记忆卡的 B?EXEC-SYSTEM 目录：主机开机时 OSD 会扫描记忆卡上的系统更新文件并执行其中的加密 KELF，而 FMCB 通过替换更新包内的可执行模块，让主机在启动阶段加载自制的 BOOT.ELF。与 Independence 不同，它不需要任何触发光盘，只要记忆卡插着就能自动引导，因此迅速成为 PS2 软破的标准方案，并衍生出 uLaunchELF、OPL 等一整套生态。首次安装仍需借助已破解主机（Independence、直读芯片或购买预装记忆卡），安装完成后即可在任意兼容机型上引导；索尼在 SCPH-90000 上移除了记忆卡系统更新加载路径，使 FMCB 无法在新机上直接使用。",
      sources: [
        { title: "GitHub: TnA-Plastic/FreeMcBoot — 'Free MemoryCard Boot' for PS2", url: "https://github.com/TnA-Plastic/FreeMcBoot" },
        { title: "israpps/Funtuna-Fork: old FreeMcBoot package for ps2 models incompatible with system updates（说明 FMCB 在后期机型上的不兼容）", url: "https://github.com/israpps/funtuna-fork" }
      ]
    },
    {
      date: "2008-12",
      dateLabel: "2008年（年份确定，月份未定）",
      title: "Free HDBoot 发布：把引导搬进内置硬盘",
      category: "软破",
      exploit: "Free HDBoot (FHDB)",
      cve: "",
      firmware: "带 HDD 扩展槽的厚机 + Network Adaptor / 官方硬盘",
      description: "Free HDBoot 是 Free McBoot 的硬盘版本，把同样的 DVD Player Update 伪装包写入 APA 格式硬盘的 __system 分区，使厚机在开机时不依赖记忆卡也能引导自制 BOOT.ELF。它与 FMCB 共享安装器与文件布局，玩家通常两者同时安装以获得冗余。FHDB 在记忆卡容量紧张或记忆卡槽损坏时尤其重要，也让装了硬盘的厚机可以把整条引导链完全放在内部存储上。这一思路后来被 PlayStation 2 的 HDD-OSD 用户沿用，如今 Open PS2 Loader 与 wLaunchELF 也都支持从内置硬盘引导。",
      sources: [
        { title: "GitHub: TnA-Plastic/FreeMcBoot — 'Free MemoryCard Boot' for PS2（FMCB/FHDB 同一代码库）", url: "https://github.com/TnA-Plastic/FreeMcBoot" }
      ]
    },
    {
      date: "2009-06",
      dateLabel: "2009年（年份确定，月份未定）",
      title: "Open PS2 Loader 诞生，统一 USB/HDD/SMB 加载",
      category: "工具与生态",
      exploit: "Open PS2 Loader (OPL)",
      cve: "",
      firmware: "全部可通过 FMCB/FHDB/FunTuna 或直读引导的机型",
      description: "Open PS2 Loader 由 ps2homebrew 社区在 2009 年前后启动，目标是把当时各自为政的 USB Advance、HD Loader、SMB 网络加载等方案统一到一个开源引导器里。它支持从 USB 大容量存储、内置硬盘（HDLoader/APA 格式与 PFS 分区）、SMB 网络共享甚至 i.LINK 读取游戏镜像，并能对每个游戏单独配置兼容模式、宽屏补丁、虚拟记忆卡与金手指。OPL 逐渐取代了闭源的 HD Loader 与 USB Advance，成为 PS2 自制生态中最核心的应用，其 GitHub 仓库至今仍在活跃更新（v1.0.0 于 2021-01-06，v1.1.0 于 2021-09-09 并首次实验性加入 MX4SIO 支持）。",
      sources: [
        { title: "Open PS2 Loader 项目主页（GitHub 仓库与 Wiki）", url: "https://ps2homebrew.github.io/Open-PS2-Loader/" },
        { title: "GitHub: ps2homebrew/Open-PS2-Loader v1.1.0 发布说明（首次加入 MX4SIO 实验支持）", url: "https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/v1.1.0" }
      ]
    },
    {
      date: "2010-09",
      dateLabel: "2010年9月",
      title: "PS2SDK 迁移到 GitHub，自制开发走向现代",
      category: "工具与生态",
      exploit: "ps2sdk / ps2link",
      cve: "",
      firmware: "全部机型（开发工具链）",
      description: "ps2sdk 仓库于 2010 年 9 月建立，标志着 PS2 自制软件工具链从早期的 CVS/SVN 与零散补丁包转向公开、可协作的现代开发流程。ps2sdk 提供 EE/IOP 双核的交叉编译环境、内核与 IOP 模块接口、文件系统驱动和图形库，是所有 PS2 自制程序（OPL、wLaunchELF、模拟器）的公共基础；ps2link 则通过网线把 PC 与主机连接，实现远程上传并运行 ELF、抓取调试输出。工具链的成熟让 PS2 自制软件在官方停产多年后仍持续产出，也让 FreeDVDBoot、MechaPwn、ProtoPwn 等后续漏洞利用能快速转化为可用工具。",
      sources: [
        { title: "GitHub: ps2dev/ps2sdk — Homebrew PS2 SDK", url: "https://github.com/ps2dev/ps2sdk" },
        { title: "GitHub: ps2dev/ps2link — PS2-side boot loader", url: "https://github.com/ps2dev/ps2link" }
      ]
    },
    {
      date: "2019-10",
      dateLabel: "2019年10月19日",
      title: "Yabasic 漏洞：用演示盘打字实现任意代码执行",
      category: "软破",
      exploit: "PS2 Yabasic Exploit（CTurt）",
      cve: "",
      firmware: "2000-2003 年 PAL 区随主机附赠的 Yabasic 演示盘（PBPX-95204/95205/95506）",
      description: "CTurt 发现索尼为规避进口税而在 2000-2003 年随 PAL 区 PS2 附赠的演示盘内置了开源 BASIC 解释器 Yabasic，并从中找到 dim 命令的整数溢出：请求超大的数组维度会让分配大小回绕成极小值，同时由于 ntotal 与循环变量都是有符号整数，初始化循环被跳过，使攻击者获得对整个虚拟地址空间的相对读写能力。进一步利用 sscanf 的 %lg 格式串可被内存写覆盖，把 double 解析改为原生整数解析，从而绕过 IEEE 754 编码限制直接写入任意地址，最终劫持 doarray 的返回地址执行 shellcode。这是第一个仅依靠官方随附硬件与可自行输入的代码即可触发的 PS2 软件入口，但受限于必须用手柄或键盘敲入 payload、且仅限 PAL 区，实用性有限。CTurt 本人随后将其视为不实用方案，转向开发 FreeDVDBoot。",
      sources: [
        { title: "CTurt: Hacking the PS2 with Yabasic（原始研究文章，2019-10-19）", url: "https://cturt.github.io/ps2-yabasic.html" },
        { title: "Exploit Database 47499: Hacking the PS2 with Yabasic", url: "https://www.exploit-db.com/raw/47499" },
        { title: "GitHub: CTurt/PS2-Yabasic-Exploit", url: "https://github.com/CTurt/PS2-Yabasic-Exploit" }
      ]
    },
    {
      date: "2020-06",
      dateLabel: "2020年6月27日",
      title: "FreeDVDBoot 公布：一张刻录 DVD 攻破光驱认证",
      category: "硬破",
      exploit: "FreeDVDBoot（CTurt）",
      cve: "",
      firmware: "DVD 播放器 3.10/3.11/3.04/3.03/3.02，后续扩展至 2.10-3.11 全系列",
      description: "FreeDVDBoot 利用 PS2 内置 DVD 播放器解析 VIDEO_TS.IFO 时的缓冲区溢出：播放器只校验 DVD 规范允许的最大长度，却未禁止超长字段，导致 getDiscData 以受控长度向静态缓冲区 0x0140bdd4 连续拷贝最多 0x17FFE8 字节，溢出范围覆盖大量内部状态。CTurt 通过篡改 fpIndex 与 currentDiscBytePointer，让播放器跳入被溢出内容控制的地址（3.10 上为 0x1500014）执行 stage1，再从 IFO 尾部加载 stage2 的 ELF 加载器，从而实现\"插盘即启动自制程序\"。由于刻录 DVD-Video 是被 MechaCon 认可的合法盘型，这一攻击无需直读芯片、无需记忆卡或硬盘，也不需要任何用户交互，被认为是 PS2 复制保护体系的彻底击破。发布后 CTurt 又陆续移植到 3.11、3.04、3.03、3.02 等版本，覆盖了从最早原型机之后的绝大多数 PS2。",
      sources: [
        { title: "CTurt: FreeDVDBoot - Hacking the PlayStation 2 through its DVD player（原始研究文章，2020-06-27）", url: "https://cturt.github.io/freedvdboot.html" },
        { title: "GitHub: CTurt/FreeDVDBoot — PlayStation 2 DVD Player Exploit", url: "https://github.com/CTurt/FreeDVDBoot" },
        { title: "Wololo.net: FreeDVDBoot gets support for DVD Player 3.04 & 3.11（2020-06-30）", url: "https://wololo.net/2020/06/30/playstation-2-freedvdboot-gets-support-for-dvd-player-3-04-3-11-the-final-dvd-player-version-is-now-supported/" }
      ]
    },
    {
      date: "2021-01",
      dateLabel: "2021年1月6日",
      title: "Open PS2 Loader 1.0.0 发布，现代加载器成型",
      category: "工具与生态",
      exploit: "Open PS2 Loader v1.0.0",
      cve: "",
      firmware: "全部可引导自制程序的机型",
      description: "OPL v1.0.0 是项目走向成熟的分水岭版本，引入游戏列表缓存加快设备扫描、新的 APPS 应用目录结构、把 GSM 视频模式补丁/金手指/虚拟记忆卡/儿童锁合并进同一分支，并加入 PADEMU 以支持 DualShock 3/4 无线手柄。它同时改写了设备选择与配置存储逻辑，并大幅修正了 SMB 网络加载与 USB 传输的性能与稳定性。此后 2021 年 9 月的 v1.1.0 换用 gcc 11 工具链、加入 NBD 传输服务与 MX4SIO 实验支持，使 PS2 可以通过插在记忆卡槽的 SD 卡转接器读取游戏，为 SCPH-90000 这类无硬盘、无 FMCB 的机型提供了新的存储方案。",
      sources: [
        { title: "GitHub: Open PS2 Loader v1.0.0 发布说明", url: "https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/v1.0.0" },
        { title: "GitHub: ps2homebrew/Open-PS2-Loader（项目仓库）", url: "https://github.com/ps2homebrew/Open-PS2-Loader" }
      ]
    },
    {
      date: "2021-01",
      dateLabel: "2021年1月21日",
      title: "Fortuna/OpenTuna：补上最后一批 PS2 机型",
      category: "软破",
      exploit: "Fortuna / OpenTuna（记忆卡图标 RLE 解压漏洞）",
      cve: "",
      firmware: "SCPH-90000 系列等不支持 DVD Player Update 的机型",
      description: "Fortuna 针对的是记忆卡存档图标（icon.sys 与图标纹理）的解压流程：OSD 在渲染存档图标时对 RLE 压缩数据缺乏边界校验，攻击者可构造恶意存档，让解压结果覆盖到本不该写的内存，从而在浏览记忆卡时执行任意代码。与 Free McBoot 依赖 DVD Player Update 不同，Fortuna 完全走记忆卡图标路径，因此能覆盖索尼移除了系统更新加载机制的 SCPH-90000 末期机型。它通常与 OpenTuna 配合使用：OpenTuna 是负责从记忆卡加载 BOOT.ELF 的 payload 端，Fortuna 提供触发漏洞的存档本体。israpps 维护的 Funtuna-Fork 把 Fortuna 与 FMCB 的文件布局整合成可直接刷入记忆卡的包，使 SCPH-90000 用户也能获得与 FMCB 几乎一致的自动引导体验。",
      sources: [
        { title: "GitHub: ps2homebrew/opentuna-payload", url: "https://github.com/ps2homebrew/opentuna-payload" },
        { title: "GitHub: israpps/Funtuna-Fork — old FreeMcBoot package for ps2 models incompatible with system updates", url: "https://github.com/israpps/Funtuna-Fork" }
      ]
    },
    {
      date: "2021-04",
      dateLabel: "2021年4月1日",
      title: "MechaPwn 首发：从 MechaCon 侧改写主机区域",
      category: "硬件漏洞",
      exploit: "MechaPwn（balika011 / MechaResearch）",
      cve: "",
      firmware: "MechaCon 5.x-6.2 等版本，SCPH-50000 至 SCPH-90000 系列",
      description: "MechaPwn 由 balika011 与 AKuHAK 等人在 MechaResearch 组织下开发，2021 年 4 月 1 日发布 1.00 首个公开版本。它运行在已可通过 FMCB/FunTuna/FreeDVDBoot 执行自制程序的主机上，通过逆向 MechaCon 安全协处理器的串行/调试接口，直接向这块独立安全芯片写入经修补的固件（KELF），从而修改主机的 DVD 区域、解锁跨区光盘识别并改变机型行为，无需任何焊接。由于 MechaCon 固件与主 BIOS 相互校验，MechaPwn 会先备份 NVRAM，并在不兼容的机型/配置上自我阻断，1.03 加入 SCPH-550xx 支持，2.00 加入 Force Unlock（让所有 CD/DVD 都被识别为 PS2 盘）与墨西哥特别版 MechaCon 5.06 支持。3.0 RC3/RC4 又扩展到 PSX DESR 一体机并改进区域与视频模式处理；它同时成为部分机型运行 PS1 备份盘与自制程序读取光盘的关键前置条件。",
      sources: [
        { title: "GitHub: MechaResearch/MechaPwn — MechaPwn 1.00 首个公开版本（2021-04-01）", url: "https://github.com/MechaResearch/MechaPwn/releases/tag/1.00" },
        { title: "GitHub: MechaPwn 项目仓库（README 与支持机型说明）", url: "https://github.com/MechaResearch/MechaPwn" }
      ]
    },
    {
      date: "2021-09",
      dateLabel: "2021年9月9日",
      title: "OPL 1.1.0 引入 MX4SIO 记忆卡槽 SD 卡加载",
      category: "工具与生态",
      exploit: "MX4SIO + Open PS2 Loader v1.1.0",
      cve: "",
      firmware: "SCPH-70000 至 SCPH-90000 等无硬盘机型",
      description: "OPL v1.1.0 首次实验性加入 MX4SIO（Memory Expansion for SIO）支持，即通过插在记忆卡槽（SIO2 接口）的 SD 卡转接器读取游戏镜像。此前 SCPH-90000 既没有硬盘扩展槽，也不支持 FMCB，只能依赖 USB 1.1 的缓慢传输或 SMB 网络；MX4SIO 绕开了 USB 控制器的带宽瓶颈，在开源的 DIY 转接板与量产适配器普及后，成为末期薄机最常用的存储方案。该版本同时换用 gcc 11 工具链、加入 NBD 网络传输服务、新的 USB 大容量存储驱动与 i.LINK 实验支持，体现了 PS2 自制生态在硬件层面继续被挖掘的活力。",
      sources: [
        { title: "GitHub: Open PS2 Loader v1.1.0 发布说明（experimental MX4SIO support）", url: "https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/v1.1.0" },
        { title: "GitHub: 021bld/DIY_MX4SIO_Adapter（在 SCPH-90004 上通过 Funtuna + OPL 使用 MX4SIO 的实践）", url: "https://github.com/021bld/DIY_MX4SIO_Adapter" }
      ]
    },
    {
      date: "2022-04",
      dateLabel: "2022年4月30日",
      title: "MechaPwn 3.0 RC3：扩展机型与区域策略重做",
      category: "硬件漏洞",
      exploit: "MechaPwn 3.0 RC3/RC4",
      cve: "",
      firmware: "SCPH-1xxxx/3xxxxx 有限支持，SCPH-50000 至 SCPH-90000 全支持，含 PSX DESR",
      description: "MechaPwn 3.0 RC3 于 2022 年 4 月 30 日发布（RC4 为 2022 年 10 月 7 日），把 MechaCon 固件改写从\"仅支持 USA 区域\"扩展为可自由选择区域，并加入 PSX DESR 一体机支持、PS1 NTSC4.43 视频修正、USB 硬盘关机支持，以及更为安全的 NVRAM 备份机制（只创建一次、按主机唯一、无法恢复时可通过\"Restore Factory Default\"卸载 Force Unlock）。RC4 进一步加入对 Dragon 之前机型（SCPH-1xxxx、SCPH-3xxxxx）的受限支持，并修正 PAL/NTSC 视频模式切换逻辑。发布说明同时明确警告：强制解锁会破坏 FreeDVDBoot 与 PS1 游戏兼容性，且 70k 机型在 MechaCon 6.02 下会无法引导 FreeDVDBoot，说明这一层改写属于对安全协处理器固件的持久性修改，需要谨慎操作。",
      sources: [
        { title: "GitHub: MechaPwn 3.0 发布候选版（RC1-RC4）下载与说明", url: "https://github.com/MechaResearch/MechaPwn/releases" },
        { title: "GitHub: MechaPwn 项目仓库（README 与机型兼容性说明）", url: "https://github.com/MechaResearch/MechaPwn" }
      ]
    },
    {
      date: "2025-06",
      dateLabel: "2025年6月11日",
      title: "ProtoPwn 发布：最早期原型机也能记忆卡引导",
      category: "软破",
      exploit: "ProtoPwn（pcm720）",
      cve: "",
      firmware: "Protokernel 机型：SCPH-10000、SCPH-15000、DTL-H10000(S)",
      description: "ProtoPwn 由 pcm720 开发，2025 年 6 月 11 日发布 v1.0.0，针对的是采用 Protokernel（早期原型级 BIOS）的 SCPH-10000/SCPH-15000 与开发机 DTL-H10000(S)。这类主机既不能使用 Free McBoot（缺少 DVD Player Update 机制），也难以直接套用 Fortuna，因而长期是 PS2 破解版图上最后一块空白。ProtoPwn 利用 OSDSYS 浏览器更新代码中的缺陷获得任意代码执行，并可从记忆卡的 mc0:/BIEXEC-SYSTEM/BOOT.ELF（v1.0.1 起增加 mc1: 的 UMCS 变体）加载 payload，标志着 PS2 全系机型（发售 25 年后）均获得了无需焊接的记忆卡软件入口。",
      sources: [
        { title: "GitHub: pcm720/protopwn — Protokernel PS2 exploit（SCPH-10000/15000/DTL-H10000(S)）", url: "https://github.com/pcm720/protopwn" },
        { title: "GitHub: protopwn v1.0.0 首个发布（2025-06-11）", url: "https://github.com/pcm720/protopwn/releases/tag/v1.0.0" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月17日前后",
      title: "MechaCon 安全芯片被完整逆向并 dump",
      category: "硬件漏洞",
      exploit: "CXP102064 逆向（化学开盖 + 光学读出 + Libby 发现的软件提取漏洞）",
      cve: "",
      firmware: "初代厚机（Fat）所用 CXP102064；Slim 使用不同型号芯片",
      description: "2026 年 9 月，加拿大复古硬件研究者 DiscoStarslayer 宣布耗时四年完成 PS2 的 MechaCon 安全芯片（CXP102064，1999 年随初代厚机出货）的固件提取与逆向，合作者 Libby 在其中找到了关键的软件提取漏洞。此前唯一的路径是化学开盖后靠显微镜逐层光学读出 ROM，代价是每 dump 一次就毁掉一台主机；找到软件漏洞后可以在不止损硬件的前提下读取芯片内容。MechaCon 负责光驱与闪存管理，同时承担 MagicGate 记忆卡解密、KELF 可执行文件解密与光盘认证，一旦损坏主机即变砖，因此它是这台主机最后一块无人能替换、修复或正确模拟的黑箱。拿到固件后社区已经描述了 MechaCon 上的任意代码执行（可在任意地址读写与执行的后门），对 PCSX2 Reliquary 等低层模拟项目意义重大；该芯片也见于 Namco System 246/256 与 Konami Python 1 街机基板。需要说明的是，仅凭这些 dump 还不足以合成光驱侧的完整应答，真正的 ODE 仍待更多工作，可行性更高的是做一块“替代 MechaCon”的模块。",
      sources: [
        { title: "TechPowerUp: Modder Finally Cracks PS2's MechaCon Security Chip After Four Years of Reverse Engineering（2026-09-17）", url: "https://www.techpowerup.com/352777/modder-finally-cracks-ps2s-mechacon-security-chip-after-four-years-of-reverse-engineering" },
        { title: "Hardware Busters: The PS2 MechaCon Is Dumped After Four Years, and the Dumps Still Can't Build a Drive Emulator（2026-09-17）", url: "https://hwbusters.com/news/the-ps2-mechacon-is-dumped-after-four-years-and-the-dumps-still-cant-build-a-drive-emulator/" },
        { title: "TweakTown: After 26 years, Sony's PlayStation 2 security chip has finally been cracked", url: "https://www.tweaktown.com/news/113598/after-26-years-sonys-playstation-2-security-chip-has-finally-been-cracked/index.html" }
      ]
    }
  ]
});
