window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "xbox-one",
  name: "Xbox One",
  family: "Xbox",
  released: "2013-11",
  status: "截至 2026 年 10 月，Xbox One 零售机的安全第一次被真正打破，但仍停留在研究者层面：2026 年 3 月 Markus \"doom\" Gaasedelen 公开 BLISS 电压毛刺攻击，首次在初代 Xbox One（Greybull 主板）的安全处理器 BootROM 上取得任意代码执行，可在各级别运行未签名代码，且因属出厂固化的硅片缺陷无法靠补丁修复。2026 年 8 月又出现 Coldforest 这类开源毛刺硬件项目（双微控制器 + XOCore 引导环境，估算成本约 40–60 美元），但至今没有可复现的完整攻击链，也没有量产 modchip。One S、One X 与 Series X|S 不在 BLISS 影响范围内，普通用户改机仍然只能走官方 Dev Mode。",
  summary: "Xbox One 是微软把「可改机」需求官方化的主机：Hyper-V 派生的三虚拟机架构（HostOS/SystemOS/ERA）、安全启动与代码签名让零售机在整个世代内没有出现可用的软破或硬破。破解生态几乎全部转入官方 Dev Mode 与 UWP 侧载，微软则通过商店政策与封禁持续收紧（尤其针对模拟器）。技术研究长期停留在 Edge/Chakra、File Explorer 符号链接、内核竞态等孤立漏洞，直到 2026 年 3 月 Markus \"doom\" Gaasedelen 以 BLISS 电压故障注入攻破初代机的 AMD 安全处理器 BootROM，才第一次证明零售机也能运行任意未签名代码。",
  events: [
    {
      date: "2013-06",
      dateLabel: "2013年6月",
      title: "微软撤销 Xbox One 强制联网与二手限制",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "发售前政策（未上市机型）",
      description: "Xbox One 原定的 DRM 方案要求主机每 24 小时联网签到一次，并对二手/借出光盘施加授权限制；这套方案遭到玩家与媒体的强烈反对，直接影响了预订与口碑。2013 年 6 月 19 日微软宣布撤销该方案：光盘可自由转让、离线游戏不再受限制，主机也不需要定期联网。这是 Xbox One 历史上第一次由官方政策压力改变主机的运行规则，也为其后「官方开放开发能力」的路线埋下伏笔。",
      sources: [
        { title: "Your Feedback Matters – Update on Xbox One (Xbox Wire, 2013-06-19)", url: "https://news.xbox.com/en-us/2013/06/19/update/" },
        { title: "Xbox One - Wikipedia", url: "https://en.wikipedia.org/wiki/Xbox_One" }
      ]
    },
    {
      date: "2013-11",
      dateLabel: "2013年11月",
      title: "Xbox One 发售：三 OS 虚拟化安全架构",
      category: "工具与生态",
      exploit: "HostOS / SystemOS / ERA 三虚拟机 + 代码签名",
      cve: "",
      firmware: "零售首发机型（Greybull 主板）",
      description: "Xbox One 于 2013 年 11 月 22 日发售，采用基于 Hyper-V 分支的虚拟化架构：HostOS 直接管理硬件，SystemOS 运行应用与仪表盘，ERA/TitleOS 运行游戏，各层之间通过 XVIO 共享内存环缓冲通信。安全上由 AMD 平台安全处理器（PSP）承接启动链，密钥烧录在熔丝中并按零售/开发两个 keyslot 分别加载，配合安全启动与代码签名使零售机几乎无法执行未签名代码。这一设计是后续十余年「无法破解」结论的技术基础，也决定了破解研究只能从 Hypervisor 层以上或硬件层寻找突破。",
      sources: [
        { title: "Xbox One Research Wiki - FAQ (OS sandboxes / keyslots)", url: "https://xboxoneresearch.github.io/wiki/faq/" },
        { title: "Xbox One - Wikipedia", url: "https://en.wikipedia.org/wiki/Xbox_One" }
      ]
    },
    {
      date: "2014-07",
      dateLabel: "2014年7月",
      title: "微软反复：零售机充当开发机计划先否后认",
      category: "工具与生态",
      exploit: "Retail dev kit 计划",
      cve: "",
      firmware: "零售机（未开放）",
      description: "在 ID@Xbox 计划推进期间，微软曾表示零售版 Xbox One 可以像开发机一样用于游戏开发；2014 年 7 月媒体报道称该计划被放弃，微软随即出面否认并重申承诺。这一反复说明当时零售机尚未开放任何开发者能力，第三方只能在受管的 ID@Xbox 硬件上开发。该计划最终演化为 2016 年的 Dev Mode（开发者模式），即由官方而非漏洞提供「改机」入口。",
      sources: [
        { title: "Microsoft reaffirms commitment to let retail Xbox One units be used as developer consoles (Polygon)", url: "https://www.polygon.com/2014/7/9/5884689/microsoft-xbox-one-retail-developer-consoles-plans-dropped/" },
        { title: "Microsoft has abandoned plans for Xbox One consoles to double as dev kits (Eurogamer)", url: "https://www.eurogamer.net/microsoft-has-abandoned-plans-for-all-xbox-one-retail-units-to-double-as-dev-kits" },
        { title: "Xbox One retail units acting as development kits still 'in the roadmap' (Engadget)", url: "https://www.engadget.com/2014-08-14-xbox-one-dev-kit-retail.html" }
      ]
    },
    {
      date: "2016-03",
      dateLabel: "2016年3月",
      title: "微软开放 Dev Mode 开发者模式预览",
      category: "工具与生态",
      exploit: "Xbox Dev Mode（官方开发者模式）",
      cve: "",
      firmware: "零售 Xbox One（需加入预览计划）",
      description: "在 Build 2016 上微软宣布任何零售 Xbox One 都能切换为开发者模式，3 月 30 日先向预览用户开放，夏季向所有用户推送。开启方式是安装商店中的 Xbox Dev Mode 应用、在 Partner Center 注册开发者账号并用激活码绑定主机，之后可在零售模式与开发模式间切换。开发模式由 Hypervisor 在最底层设定启动槽（bootslot A/B），与零售模式共享极少的用户与配置文件，加载的是开发 keyslot 而非零售密钥，因此即便在开发模式下获得高权限也无法解密零售内容。这是 Xbox One 破解史上最重要的转折：官方自己提供了「运行自制软件」的合法通道。",
      sources: [
        { title: "Starting today, anyone can turn their Xbox One into a dev kit for free (Polygon)", url: "https://www.polygon.com/2016/3/30/11318568/xbox-one-dev-kit/" },
        { title: "Any Xbox One can now be a dev kit for universal Windows apps (The Verge)", url: "https://on.theverge.com/2016/3/30/11331366/xbox-one-dev-mode-windows-apps" },
        { title: "Retail Xbox Ones to finally double as dev kits this summer (Eurogamer)", url: "https://www.eurogamer.net/retail-xbox-ones-to-finally-double-as-dev-kits-this-summer" }
      ]
    },
    {
      date: "2016-09",
      dateLabel: "2016年9月",
      title: "Nesbox 模拟器被微软封禁",
      category: "法律与产业",
      exploit: "Universal Emulator (Nesbox)",
      cve: "",
      firmware: "开发者模式 UWP 环境",
      description: "开发者模式开放后，Nesbox 的 Universal Emulator 通过 UWP 侧载让零售 Xbox One 运行 NES/SNES/Mega Drive 等老游戏，被视为「不用破解就能玩模拟器」的范例。2016 年 9 月微软以不符合 UWP 应用规范与应用商店政策为由封禁该应用，主机上已安装的副本也无法再运行。此事件首次确立了微软对「用官方通道跑模拟器」的态度，此后模拟器长期只能在开发模式下以侧载方式存在。",
      sources: [
        { title: "Microsoft Blocks NESBox Emulator On Xbox One (Nintendo Life)", url: "https://www.nintendolife.com/news/2016/09/microsoft_blocks_nesbox_emulator_on_xbox_one" },
        { title: "Nesbox emulator blocked on Xbox One (MCV/DEVELOP)", url: "https://mcvuk.com/business-news/nesbox-emulator-blocked-on-xbox-one/" }
      ]
    },
    {
      date: "2017-03",
      dateLabel: "2017年3月",
      title: "Xbox Live Creators Program 上线",
      category: "工具与生态",
      exploit: "Xbox Live Creators Program",
      cve: "",
      firmware: "SystemOS（UWP 应用通道）",
      description: "微软推出 Xbox Live Creators Program，个人开发者无需 ID@Xbox 审批即可把 UWP 应用/游戏发布到 Xbox One 与 Windows 10 商店。该计划降低了自制软件进入零售模式的门槛，也让 RetroArch 等模拟器前端一度看到上架可能。但发布权仍在微软手中，随后被用于封禁模拟器类应用，说明「官方通道」的开放性完全取决于平台政策而非技术限制。",
      sources: [
        { title: "Indie devs can publish on Xbox without Microsoft's help (Engadget)", url: "https://www.engadget.com/2017-03-02-xbox-live-creators-program.html" }
      ]
    },
    {
      date: "2017-03",
      dateLabel: "2017年3月",
      title: "Edge/Chakra 漏洞 CVE-2016-7200 被移植到 Xbox One",
      category: "软件漏洞",
      exploit: "ms-xb1-edge-exp（Chakra 类型混淆）",
      cve: "CVE-2016-7200",
      firmware: "SystemOS 10.0.14393.2152（rs1_xbox_rel_1610 161208-1218）",
      description: "CVE-2016-7200 是 Microsoft Edge 的 Chakra JavaScript 引擎内存破坏/类型混淆漏洞，可被网页触发实现远程代码执行，微软已在 2016 年 11 月的 MS16-129 中修复。研究者 unknownv2 把它移植为 Xbox One 的 PoC（SeeMirra/ms-xb1-edge-exp），针对 2016 年 12 月的 SystemOS 版本 10.0.14393.2152，可在 Edge 的 AppContainer 内获得代码执行能力用于信息泄露与沙箱内利用。由于 Edge 虽然在 UWP 沙箱内拥有较高权限，但只有在检测到有效 Xbox Live 连接、且主机运行最新强制系统更新时才允许联网，因此该漏洞无法在离线、不更新系统的主机上利用，实际影响被大幅削弱。",
      sources: [
        { title: "Microsoft Edge - Chakra Exploit - CVE 2016-7200 (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/ms-edge-exploit-cve-2016-7200/" },
        { title: "CVE-2016-7200 Detail (NVD)", url: "https://nvd.nist.gov/vuln/detail/CVE-2016-7200" },
        { title: "SeeMirra/ms-xb1-edge-exp (GitHub)", url: "https://github.com/SeeMirra/ms-xb1-edge-exp" }
      ]
    },
    {
      date: "2017-04",
      dateLabel: "2017年4月",
      title: "微软正式禁止商店上架模拟器",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "Xbox 与 Windows 10 商店政策",
      description: "微软更新应用商店政策，明确禁止发布「在设备上模拟游戏系统或游戏平台」的应用，适用于 Xbox 与 Windows 10 商店。此举把 2016 年对 Nesbox 的单点封禁升级为成文规则，直接堵死了模拟器通过 Creators Program 等官方通道进入零售模式的路径。此后在 Xbox 上玩模拟器的合法方式只剩开发模式侧载，模拟器与官方政策的对抗成为 Xbox 平台长期现象。",
      sources: [
        { title: "Microsoft formally bans emulators on Xbox, Windows 10 download shops (Ars Technica)", url: "https://arstechnica.com/gaming/2017/04/microsoft-formally-bans-emulators-on-xbox-windows-10-download-shops/" }
      ]
    },
    {
      date: "2017-06",
      dateLabel: "2017年6月",
      title: "File Explorer 符号链接漏洞读写受保护卷",
      category: "软件漏洞",
      exploit: "xsymlink（符号链接穿越）",
      cve: "",
      firmware: "SystemOS 10.0.15063.2022（RS2_RELEASE_XBOX_1704.170501-1052）及以前",
      description: "研究者 xenomega 发现 Xbox One 自带的 File Explorer 在解析路径时不检查目标是否为符号链接，攻击者可用 Windows Server 2003 Resource Kit 的 linkd 工具在 U 盘上预置指向 \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeN 的链接，插上主机后即可通过文件浏览器浏览、读取甚至写入本应受限的卷，包括主机为存档等内容挂载的加密虚拟硬盘（XVD）。按负责任披露流程，微软在 2017 年 5 月 5 日随系统版本 10.0.15063.2022 修复了该问题。",
      sources: [
        { title: "File Explorer - Symbolic links vulnerability (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/file-explorer-symbolic-links/" },
        { title: "Xenomega/xsymlink (GitHub)", url: "https://github.com/Xenomega/xsymlink" }
      ]
    },
    {
      date: "2017-09",
      dateLabel: "2017年9月",
      title: "Edge 文件系统暴露漏洞",
      category: "软件漏洞",
      exploit: "Edge Browser - File System Exposure",
      cve: "",
      firmware: "SystemOS（Edge/AppContainer 环境）",
      description: "研究者发现 Xbox One 上的 Microsoft Edge 在特定条件下可被用来访问本不应暴露的文件系统路径，属于沙箱边界与浏览器文件访问控制组合出的漏洞。该问题与 Chakra 漏洞同属零售机软件攻击面的一部分，同样受限于 Edge 必须联网且主机需要保持最新系统更新才能触发网络能力。它未演化为可用的越狱链，但被 Xbox One Research 收录为零售模式下的已知攻击面之一。",
      sources: [
        { title: "Xbox Edge Browser - File System Exposure (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/Edge-Browser-File-System-Exposure/" }
      ]
    },
    {
      date: "2017-11",
      dateLabel: "2017年11月",
      title: "Xbox One X 发售并延续 Dev Mode",
      category: "工具与生态",
      exploit: "Xbox Dev Mode",
      cve: "",
      firmware: "Xbox One X / One S",
      description: "Xbox One X 于 2017 年 11 月 7 日发售，硬件性能大幅提升，但安全模型与初代机一致：仍然由 PSP 承接安全启动、按 keyslot 加载密钥。微软继续在 One S/One X 上提供开发者模式与 UWP 侧载能力，使 Dev Mode 成为跨整个 One 世代的通用「自制软件平台」，模拟器与自制应用随之转向这两款机型。由于架构相同，BLISS 之类的初代机硬件攻击并未直接适用于 One S/One X。",
      sources: [
        { title: "Xbox One - Wikipedia", url: "https://en.wikipedia.org/wiki/Xbox_One" },
        { title: "Xbox Developer Mode activation (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/previous-versions/windows/uwp/xbox-apps/devkit-activation" }
      ]
    },
    {
      date: "2018-09",
      dateLabel: "2018年9月",
      title: "Dev Mode 经 VSProfilingAccount 提权到 SYSTEM",
      category: "软破",
      exploit: "devtoolslauncher + bootsh 注册表劫持",
      cve: "",
      firmware: "开发者模式 SystemOS（10.0.17134.4056 等版本）",
      description: "在开发者模式下，已 SSH 登录的 DevToolsUser 可以调用 devtoolslauncher 的 LaunchForProfiling 参数，以 VSProfilingAccount 身份启动「略高权限」进程并在 24 端口开出 telnet；利用该身份改写 bootsh 服务的注册表 Xrun 参数，即可拉起监听 23 端口的完整 SYSTEM 权限 telnet 守护进程。这属于开发模式内部的提权链，是 Dev Mode 自制生态的关键一环：拿到 SYSTEM shell 后可以改写系统服务、部署非 UWP 程序，但仍在开发 keyslot 与开发启动槽内，无法解密零售内容或运行零售游戏备份。微软后续版本修补了相关路径。",
      sources: [
        { title: "SystemOS Elevation of privileges via VSProfiling account (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/devmode-priv-escalation-vsprofiling/" },
        { title: "Microsoft Learn - Xbox Developer Mode activation (SSH/DevToolsUser)", url: "https://learn.microsoft.com/en-us/previous-versions/windows/uwp/xbox-apps/devkit-activation" }
      ]
    },
    {
      date: "2019-06",
      dateLabel: "2019年6月",
      title: "UnattendedUtilities 提权漏洞",
      category: "软破",
      exploit: "UnattendedUtilities / UnattendedSetup",
      cve: "",
      firmware: "开发者模式 SystemOS 10.0.18362.4006（19H1）等",
      description: "开发者模式的 Device Portal 暴露了 UnattendedSetup 系列接口（apply/default/configure/test），原本用于在开发机上配置开机自动运行的脚本。研究者发现可通过这些接口注入并执行任意脚本，从而在 SystemOS 内提升权限、获得更高等级的代码执行。该漏洞是 2018—2019 年间 Dev Mode 多条提权链之一，说明官方开发者接口本身构成了持续的攻击面。Xbox One Research 将其与 VSProfiling 提权并列为开发模式的典型提权手法。",
      sources: [
        { title: "SystemOS - Elevation of privileges via UnattendedUtilities (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/devmode-unattended-utilities/" }
      ]
    },
    {
      date: "2019-07",
      dateLabel: "2019年7月",
      title: "System.xvd 读写覆盖漏洞",
      category: "软破",
      exploit: "System.xvd read/write overlay",
      cve: "",
      firmware: "开发者模式 SystemOS 10.0.18362.4006 等",
      description: "Xbox One Research 公开了在开发模式下对 SystemOS 的核心镜像 System.xvd 建立读写覆盖层的方法：SystemOS 分区通常以只读方式从闪存挂载，但通过开发模式提供的文件与挂载能力可以叠加可写覆盖，从而在不改动原始分区的前提下替换系统文件。结合提权漏洞，这使研究者能够修改仪表盘与系统组件、调试系统行为，是理解 SystemOS 启动与挂载机制的重要工具性成果。",
      sources: [
        { title: "SystemOS Read/Write overlay for System.xvd (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/devmode-systemxvd-read-write/" }
      ]
    },
    {
      date: "2019-09",
      dateLabel: "2019年9月",
      title: "外置 VBI 加载：硬盘上放文件即可引导",
      category: "软破",
      exploit: "External VBI Loading（system.vbi / era.vbi）",
      cve: "",
      firmware: "HostOS XVMM 驱动（2017 年 7 月 1 日已修补的旧版本）",
      description: "Xbox One Research 披露：HostOS 中的 XVMM 驱动在启动时会检查硬盘用户内容分区（E: 盘）根目录下是否存在 system.vbi 或 era.vbi，若存在且为有效二进制，则优先使用它来引导对应的虚拟机，而不是使用 OS XVD 用户数据区中的 VBI（Virtual Boot Image）。攻击者只要能把自定义 VBI 放到该分区（例如拆下硬盘用 PC 写入），插回主机重启即可让主机加载自选引导镜像，属于典型的「免焊接、免漏洞利用」的物理接触型软破路径。该缺陷在 2017 年 7 月 1 日已被修补。",
      sources: [
        { title: "External VBI Loading (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/external-vbi-loading/" }
      ]
    },
    {
      date: "2019-12",
      dateLabel: "2019年12月",
      title: "ECC Curveball (CVE-2020-0601) 影响 Xbox 证书校验",
      category: "软件漏洞",
      exploit: "ECC Curveball（CryptoAPI.dll ECC 证书欺骗）",
      cve: "CVE-2020-0601",
      firmware: "SystemOS CryptoAPI（2020 年 1 月已修补）",
      description: "CVE-2020-0601 是 Windows CryptoAPI（Crypt32.dll）校验椭圆曲线（ECC）证书时的欺骗漏洞：攻击者可用伪造的代码签名证书给恶意程序签名，使其看起来来自受信任来源，同样可用于绕过依赖 ECC 证书校验的 TLS 等场景，微软在 2020 年 1 月的更新中修复。Xbox One 的 SystemOS 同样使用该 CryptoAPI.dll，因此该漏洞在主机上具备利用价值，可用于欺骗证书链、配合中间人劫持或影响依赖证书校验的组件。Xbox One Research 将其列入零售模式攻击面，但它本身不构成完整的越狱链。",
      sources: [
        { title: "ECC Curveball - Cryptoapi.dll ECC certificate spoofing (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/ecc-curveball-cve-2020-0601/" },
        { title: "CVE-2020-0601 Detail (NVD)", url: "https://nvd.nist.gov/vuln/detail/CVE-2020-0601" }
      ]
    },
    {
      date: "2020-11",
      dateLabel: "2020年11月",
      title: "Xbox Series X|S 发售：Dev Mode 成为模拟器主阵地",
      category: "工具与生态",
      exploit: "Xbox Dev Mode + UWP 模拟器",
      cve: "",
      firmware: "Xbox Series X|S（延续 Xbox One 安全架构）",
      description: "Xbox Series X|S 于 2020 年 11 月 10 日发售，继续沿用同一套虚拟化安全架构与开发者模式机制，零售机同样没有出现破解。由于零售模式禁止模拟器上架，媒体与社区普遍把开发者模式当作在新主机上运行 RetroArch 等模拟器的标准做法：缴纳开发者账号费用、激活 Dev Mode、通过 Device Portal 侧载应用。这一时期的共识是 Xbox 平台的「改机」等于「合法开发者模式」，与索尼/任天堂的越狱路线形成鲜明对比。",
      sources: [
        { title: "How to turn your Xbox Series X/S into an emulation powerhouse (Ars Technica)", url: "https://arstechnica.com/gaming/2020/11/how-to-turn-your-xbox-series-x-s-into-an-emulation-powerhouse/" },
        { title: "Xbox Developer Mode activation (Microsoft Learn)", url: "https://learn.microsoft.com/en-us/previous-versions/windows/uwp/xbox-apps/devkit-activation" }
      ]
    },
    {
      date: "2023-04",
      dateLabel: "2023年4月",
      title: "微软封禁用零售模式运行的模拟器",
      category: "法律与产业",
      exploit: "Retail mode UWP emulators",
      cve: "",
      firmware: "零售模式 SystemOS（2023 年 4 月更新后）",
      description: "多年来部分模拟器以「隐藏式 UWP 应用」形式绕过商店审核，在零售模式下运行。2023 年 4 月，微软在未做大规模公告的情况下让这些已安装的零售模式模拟器全部失效，社区反馈多数模拟器（含 RetroArch 相关发行渠道）立即无法启动。官方立场仍是模拟器不得进入零售环境，用户若要用模拟器必须走开发者模式。此事再次确认了 Xbox 生态中零售模式的封闭性：即使能短暂侧载，平台也能通过服务端与系统更新远程收回。",
      sources: [
        { title: "Microsoft crackdown disables emulators downloaded to Xbox consoles (Ars Technica)", url: "https://arstechnica.com/gaming/2023/04/microsoft-crackdown-disables-emulators-downloaded-to-xbox-consoles/" },
        { title: "Microsoft Disables Game Emulators Downloaded on Xbox (PCMag)", url: "https://www.pcmag.com/news/microsoft-disables-game-emulators-downloaded-on-xbox" }
      ]
    },
    {
      date: "2023-09",
      dateLabel: "2023年9月",
      title: "Artifice：Dev Mode 权限提升获得 admin 账户",
      category: "软破",
      exploit: "Artifice（OpenSSH 服务漏洞）",
      cve: "",
      firmware: "开发者模式 SystemOS（修补于 2024 年 8 月，10.0.26100.1968 xb_flt_2408ge.240821-1830）",
      description: "研究者 Kudayasu 发布 Artifice 自动化工具，利用开发者模式中 OpenSSH 服务的漏洞实现完整的权限提升：从 PC 远程连接主机执行利用后，SystemOS 中会被创建名为 admin、密码为 admin 的账户，可直接 SSH 登录并进一步通过 bootsh 注册表劫持取得 SYSTEM shell。该工具把此前繁琐的手工提权步骤自动化，成为 Dev Mode 自制软件生态的常用组件；微软在 2024 年 8 月 28 日的系统版本中修补。",
      sources: [
        { title: "Artifice / Devmode privilege escalation exploit (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/artifice-devmode-elevation/" },
        { title: "An autopsy of Artifice (Kudayasu)", url: "https://kudayasu.github.io/an-autopsy-of-artifice/" },
        { title: "Kudayasu/Artifice releases (GitHub)", url: "https://github.com/Kudayasu/Artifice/releases/latest" }
      ]
    },
    {
      date: "2024-06",
      dateLabel: "2024年6月",
      title: "Collateral Damage：Game Script 应用实现代码执行",
      category: "软件漏洞",
      exploit: "Collateral Damage + Solstice（Game Script UWP 应用）",
      cve: "CVE-2024-30088",
      firmware: "零售 SystemOS 10.0.25398.4910（2024 年 7 月已修补）",
      description: "carrot_c4k3 与 landaire 在 2024 年 6 月披露：微软商店中的 Game Script 应用允许用户编写自定义脚本语言，而该语言暴露了任意内存读写原语，可借此实现任意原生代码执行，配合 PE 加载器 Solstice 即可从 UWP 沙箱内获得内核级执行能力。其后他们进一步用 Windows 内核 TOCTOU 竞态漏洞 CVE-2024-30088（已在 2024 年 6 月补丁中修复）搭建完整的 SystemOS 内核利用链，仓库命名为 collateral-damage。这是近年为数不多针对零售模式的公开 Xbox 内核漏洞利用研究，微软在 2024 年 7 月 15 日随 10.0.25398.4910 封堵了 Game Script 侧的入口。",
      sources: [
        { title: "Collateral Damage - Code Execution via Game Script UWP App (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/game-script-code-exec/" },
        { title: "exploits-forsale/collateral-damage (GitHub)", url: "https://github.com/exploits-forsale/collateral-damage" },
        { title: "CVE-2024-30088 Detail (NVD)", url: "https://nvd.nist.gov/vuln/detail/CVE-2024-30088" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "BLISS：电压毛刺攻破初代机安全处理器",
      category: "硬件漏洞",
      exploit: "BLISS（NB_CORE 电压故障注入）",
      cve: "",
      firmware: "初代 Xbox One（Greybull 主板 + Zorro B0 SoC），One S/One X 与 Series X|S 不受影响",
      description: "在 RE//verse 2026 会议上，Markus \"doom\" Gaasedelen 公开了 BLISS 攻击：对主板的 NB_CORE 供电轨施加电压毛刺，在安全处理器（AMD PSP）的 BootROM 阶段做两次故障注入——第一次绕过 MPU 权限设置，第二次在读取头部时劫持执行流，最终以 supervisor 权限在该安全处理器内执行任意代码。由于是硅层面的硬件缺陷，微软无法通过补丁修复，只能在新硅片上缓解；攻击成功后即可在 hypervisor、HostOS、SystemOS 等所有层级运行未签名代码，并能访问安全处理器以解密固件与内容。代价是需要焊接微控制器、拆除若干电容并具备 ARM 汇编与调试能力，且仅适用于 2013 年初代机，属于研究者级别的硬破，而非面向普通用户的直读芯片方案。",
      sources: [
        { title: "Microsoft's 'unhackable' Xbox One has been hacked by 'Bliss' (Tom's Hardware)", url: "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level" },
        { title: "BLISS Hack (Xbox One Research Wiki)", url: "https://xboxoneresearch.github.io/wiki/exploits/bliss/" },
        { title: "RE//verse 2026: Hacking Xbox One - Markus 'doom' Gaasedelen (YouTube)", url: "https://www.youtube.com/watch?v=FTFn4UZsA5U" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "BLISS 复现研究与开源 modchip 立项",
      category: "工具与生态",
      exploit: "BLISS 复现教程 + GFL_Tech 开源 modchip + GodmodeONE",
      cve: "",
      firmware: "初代 Xbox One（Greybull 主板）",
      description: "BLISS 公开后，社区立即转向复现与工具化：torushyperv 发布「Achieving Bliss」系列教程，讲解如何重新启用安全处理器的 POST 码以调试毛刺时序；GBAtemp 上出现由 GFL_Tech 主导的 Xbox One BLISS 开源 modchip 开发讨论，目标是把手动焊接与微控制器打毛刺的流程做成可复制的改机硬件；同期 GitHub 出现 GodmodeONE 等自制补丁工具项目。这些工作目前仍处于原型与研究阶段，尚未形成稳定、面向普通用户的整机破解方案，但已使初代 Xbox One 第一次拥有真实的硬件级自制软件路径。",
      sources: [
        { title: "Achieving Bliss Part 1: Reenabling 0SP POST codes (torushyperv)", url: "https://torushyperv.github.io/reproducing-bliss-hack-part1/reproing_bliss_part_1.html" },
        { title: "Xbox One \"Bliss Hack\" Open-Source Modchip in Development by GFL_Tech (GBAtemp)", url: "https://gbatemp.net/threads/xbox-one-bliss-hack-open-source-modchip-in-development-by-gfl_tech.682365/" },
        { title: "RNTPX/GodmodeONE (GitHub)", url: "https://github.com/RNTPX/GodmodeONE" }
      ]
    },
    {
      date: "2026-08",
      dateLabel: "2026年8月",
      title: "Coldforest：面向初代 Xbox One 的开源毛刺硬件项目",
      category: "硬破",
      exploit: "Coldforest（电压毛刺 + XOCore 引导环境）",
      cve: "",
      firmware: "初代 Xbox One 型号 1540（2013–2014 年早期批次）",
      description: "2026 年 8 月，社区出现名为 Coldforest 的开源硬件项目，试图把 BLISS 式的电压毛刺从实验室搬到可复制的板卡上：目标机型是 2013–2014 年的初代 Xbox One（型号 1540），板载一颗负责精确时序与 glitch 的主控（RP2350 系列）加一颗负责固件更新、远程管理与界面的 ESP32，对外提供 USB、网页与可选 2.8 英寸触摸屏三种控制方式，并规划了名为 XOCore 的自定义引导环境（基于 coreboot），用于在拿到底层执行权后初始化 SoC 与内存。项目还包含 eFuse 读取、eMMC/SDIO 通信、POST 码检测与 SoC 供电监测等子模块，Lite 版估算成本约 40 美元、完整版约 60 美元，硬件与软件计划开源。但截至 2026 年 10 月它仍是原型：从毛刺到任意代码执行的完整链条尚未被公开演示，也无法像历史上的直读芯片那样买来即用。",
      sources: [
        { title: "GenerationAmiga: Coldforest could bring a new hardware exploit to Xbox One（2026-08-07）", url: "https://www.generationamiga.com/2026/08/07/coldforest-could-bring-a-new-hardware-exploit-to-xbox-one/" },
        { title: "BiteYourConsole: Coldforest, il misterioso chip glitch per Xbox One（2026-08-06）", url: "https://www.biteyourconsole.net/2026/08/06/coldforest-il-misterioso-chip-glitch-per-xbox-one-che-potrebbe-riaccendere-la-scena-homebrew/" },
        { title: "Logic-Sunrise: Coldforest, le projet de glitch chip open source pour la Xbox One", url: "https://www.logic-sunrise.com/forums/topic/109197-xbo-coldforest-le-projet-de-glitch-chip-open-source-pourrait-ouvrir-la-voie-au-hack-de-la-xbox-one/" }
      ]
    }
  ]
});
