window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps5",
  name: "PlayStation 5",
  family: "PlayStation",
  released: "2020-11",
  status: "截至 2026 年 10 月，公开可越狱的固件上限已从早期几年的 4.03-4.51 一举推到 13.60：2026 年 9 月底公开的 Relapse 链（WebKit 用户态 + aio_multi_wait UAF 内核）同时覆盖 PS5 与 PS5 Pro 的 7.00-13.60，几秒内即可取得内核读写并注入自制程序，但属关机即失效的临时越狱。2026 年 9 月 16 日发布的 14.00 固件修复了该内核漏洞，10 月推送的 26.06-14.10.00 更被《GTA 6》强制要求，因此只有停留在 13.60 及以下的机器可破。低版本机型另有 ps5-linux 路线，可在 3.00-7.61 的原版与 Slim 上启动完整 Linux；2025 年 12 月 39C3 的 AMD PSP 电压毛刺研究与随后流传的 BootROM 密钥属于不可通过固件修补的硬件层。",
  summary: "PS5 的防线由三层组成：WebKit/BD-J 等用户态入口、FreeBSD 派生的内核，以及运行在 AMD Secure Processor 上的 hypervisor 与 XOM 只读代码保护——后者才是 PS5 破解长期停滞的真正瓶颈。2022 年 10 月的 4.03 内核链与 TheFloW 的 BD-J 沙箱逃逸奠定了早期生态，此后近三年公开进展缓慢，低固件主机成为稀缺资源。2025 年末形势突变：39C3 公开的 AMD PSP/BootROM 电压毛刺研究导致 BootROM 密钥外泄，并引发社区漏洞抢发潮；2026 年的 Relapse 链把可用内核读写推高到 13.60。",
  events: [
    {
      date: "2020-11",
      dateLabel: "2020年11月",
      title: "PlayStation 5 正式发售",
      category: "工具与生态",
      exploit: "",
      cve: "",
      firmware: "出厂固件 1.00/1.01",
      description: "PS5 于 2020 年 11 月在北美、日本等地发售，分为搭载 Ultra HD Blu-ray 光驱的标准版与无光驱的数字版。主机使用定制的 AMD Oberon APU（Zen 2 + RDNA 2），运行基于 FreeBSD 改造的 Orbis OS，并在 AMD Secure Processor（ASP）上运行 hypervisor，配合 eXecute Only Memory（XOM）保护内核代码。由于首发批次长期停留在低版本固件，这批机器后来成为破解社区最抢手的对象。",
      sources: [
        { title: "Wikipedia: PlayStation 5", url: "https://en.wikipedia.org/wiki/PlayStation_5" },
        { title: "IGN: PlayStation 5 Review", url: "https://www.ign.com/articles/playstation-5-review" }
      ]
    },
    {
      date: "2021",
      dateLabel: "2021年",
      title: "TheFloW 私密披露 PS5 内核漏洞",
      category: "软件漏洞",
      exploit: "HackerOne 私密披露（TheFloW）",
      cve: "",
      firmware: "受影响固件覆盖至 8.03 一档，后续固件修复",
      description: "安全研究员 TheFloW（Andy Nguyen）通过 PlayStation 的 HackerOne 漏洞赏金项目提交了影响 PS4 与 PS5 的内核漏洞，Sony 随后在新固件中将其修复。该漏洞一度被称为「PS5 首个内核级漏洞」，但因采用私密披露、未公开利用代码，对当时的破解生态没有直接推动。它确立了 Sony 用赏金计划吸收高危内核漏洞、再以固件更新封堵的应对模式。",
      sources: [
        { title: "Notebookcheck: PS5 jailbreak seems inevitable as double hack reveals PS5 root keys and debug settings", url: "https://www.notebookcheck.net/PlayStation-5-jailbreak-seems-inevitable-as-double-hack-reveals-PS5-root-keys-and-debug-settings.577947.0.html" },
        { title: "TheFloW (Andy Nguyen) GitHub", url: "https://github.com/TheOfficialFloW" }
      ]
    },
    {
      date: "2021-11",
      dateLabel: "2021年11月",
      title: "PS5 root keys 与调试设置被公开",
      category: "软件漏洞",
      exploit: "root keys 泄露 / debug settings 解锁",
      cve: "",
      firmware: "PS5 早期固件（约 4.03 及以下）",
      description: "研究者在 2021 年下半年公开了 PS5 的对称 root keys 并在早期固件上解锁了调试设置（Debug Settings）菜单，被视为「PS5 破解似乎不可避免」的信号。root keys 本身不能直接执行代码，但让研究者可以解密与分析系统固件与软件包结构，调试菜单则暴露出零售机被隐藏的诊断能力。Sony 随后通过固件更新轮换密钥并收紧调试入口。",
      sources: [
        { title: "Notebookcheck: PS5 jailbreak seems inevitable as double hack reveals PS5 root keys and debug settings", url: "https://www.notebookcheck.net/PlayStation-5-jailbreak-seems-inevitable-as-double-hack-reveals-PS5-root-keys-and-debug-settings.577947.0.html" }
      ]
    },
    {
      date: "2021-12",
      dateLabel: "2021年12月",
      title: "PS5 上复用 PS4 漏洞链，4.03 可用",
      category: "软破",
      exploit: "pOOBs4（PS4 用户态链移植）",
      cve: "",
      firmware: "PS5 4.03 及以下（与 PS4 9.00 同源）",
      description: "破解社区把面向 PS4 9.00 的 pOOBs4 等用户态漏洞链移植到 PS5，在 4.03 固件的 PS5 上取得了用户态代码执行与调试菜单访问，证明 PS5 的 PS4 兼容层与部分共享系统组件会继承 PS4 的漏洞。由于当时缺少可用的 PS5 内核漏洞，这一步只能拿到有限权限，但它是 2022 年完整内核链的技术基础。",
      sources: [
        { title: "Vice: Sony Reintroduced a PS4 Bug on PS5 Which Could Have Led to a Jailbreak", url: "https://www.vice.com/en/article/sony-reintroduced-a-ps4-bug-on-ps5-which-could-have-led-to-a-jailbreak/" },
        { title: "GitHub: hz128/pOOBs4", url: "https://github.com/hz128/pOOBs4" }
      ]
    },
    {
      date: "2022",
      dateLabel: "2022年",
      title: "IPv6 UAF 被用作 3.00-4.51 的内核原语",
      category: "软件漏洞",
      exploit: "IPV6_2292PKTOPTIONS UaF（CVE-2020-7457）",
      cve: "CVE-2020-7457",
      firmware: "PS5 3.00-4.51",
      description: "PS5 内核沿用 FreeBSD 网络栈，其中 IPV6_2292PKTOPTIONS 的释放后使用（UAF）漏洞（CVE-2020-7457）在 3.00 至 4.51 固件上仍可利用，配合用户态入口即可获得稳定、可重复的内核任意读写。它取代了 4.03 专用的旧内核漏洞，成为早期 PS5 破解生态（BD-J HEN、etaHEN）的公共内核原语，直到 5.00 固件通过同步 FreeBSD 补丁将其修复。",
      sources: [
        { title: "GitHub: LightningMods/PS5-IPV6-Kernel-Exploit", url: "https://github.com/LightningMods/PS5-IPV6-Kernel-Exploit" },
        { title: "psdevwiki: PS5 Vulnerabilities", url: "https://www.psdevwiki.com/ps5/index.php?title=Vulnerabilities" }
      ]
    },
    {
      date: "2022-06",
      dateLabel: "2022年6月",
      title: "TheFloW 公开 BD-J 蓝光沙箱逃逸",
      category: "软破",
      exploit: "BD-JB（Blu-ray Disc Java sandbox escape）",
      cve: "",
      firmware: "PS3/PS4/PS5 蓝光播放器；PS5 6.00 以下可直接逃逸",
      description: "TheFloW 在 hardwear.io 会议上公开 BD-JB：利用 Blu-ray Disc Java（BD-J）Xlet 环境中的原生代码执行缺陷，从蓝光播放器沙箱逃逸到用户态，全程不依赖浏览器、不需要联网，只需要一张可刻录的 BD-RE 光盘。这是 PS5 上少见的非浏览器入口，也是 3.00-4.51 机器启动 payload 的主力方式；Sony 在 6.00 固件上收紧 BD-J 沙箱，使该路径在更高版本上失效。",
      sources: [
        { title: "GitHub: TheOfficialFloW/Presentations（2022-hardwear-io-bd-jb.pdf）", url: "https://github.com/TheOfficialFloW/Presentations" },
        { title: "BD-JB 演讲稿存档（web.archive.org）", url: "http://web.archive.org/web/20220613000234if_/https://raw.githubusercontent.com/TheOfficialFloW/Presentations/master/2022-hardwear-io-bd-jb.pdf" },
        { title: "psdevwiki: PS5 Vulnerabilities", url: "https://www.psdevwiki.com/ps5/index.php?title=Vulnerabilities" }
      ]
    },
    {
      date: "2022-08",
      dateLabel: "2022年8月",
      title: "Sony 提高 PS4/PS5 漏洞赏金上限",
      category: "法律与产业",
      exploit: "PlayStation Bug Bounty 提额",
      cve: "",
      firmware: "（政策事件）",
      description: "Sony 在其漏洞赏金项目中上调了 PS4/PS5 相关漏洞的奖金，尤其是可导致盗版游戏或完整破解的漏洞，最高档位被报道为 200 万日元以上级别。此举被视为对公开破解进展的直接回应：用经济激励把最有价值的内核与 hypervisor 漏洞留在私密披露通道，而不是流入社区。此后数年间，多个 PS5 高危漏洞以赏金形式被 Sony 收入并随固件更新封堵。",
      sources: [
        { title: "Gigazine: Researchers who discover a vulnerability that allows them to play pirated games on PS4 and PS5 will be rewarded", url: "https://gigazine.net/gsc_news/en/20220620-ps4-ps5-vulnerabilities" }
      ]
    },
    {
      date: "2022-10",
      dateLabel: "2022年10月",
      title: "PS5 首个公开 4.03 内核漏洞利用",
      category: "软破",
      exploit: "WebKit 漏洞 + 内核 chain（SpecterDev / EchoStretch）",
      cve: "",
      firmware: "PS5 4.03（4.50/4.51 部分适用，5.00 起修复）",
      description: "SpecterDev 与 EchoStretch 公开了面向 PS5 4.03 的完整利用链：先用 WebKit 漏洞拿到浏览器进程的读写原语，再串接内核漏洞获得内核内存任意读写（Arb. R/W）与调试菜单访问。这是 PS5 发售以来第一个公开可用的内核级利用，但入口仍依赖浏览器、需要借助 PC 投放 payload，稳定性差且不提供持久化。Sony 随后在 5.00 固件封堵该内核漏洞，4.03/4.50 成为此后数年最受追捧的「黄金固件」。",
      sources: [
        { title: "GitHub: Cryptogenic/PS5-4.03-Kernel-Exploit", url: "https://github.com/Cryptogenic/PS5-4.03-Kernel-Exploit" },
        { title: "wololo.net: Released - PS5 kernel exploit & WebKit vulnerability for firmware 4.03", url: "https://wololo.net/2022/10/03/released-ps5-kernel-exploit-webkit-vulnerability-for-firmware-4-03/" },
        { title: "Notebookcheck: The PlayStation 5 has been successfully jailbroken; firmware version 4.03 or lower required", url: "https://www.notebookcheck.net/The-PlayStation-5-has-been-successfully-jailbroken-firmware-version-4-03-or-lower-required.659204.0.html" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "BD-JB 与 IPv6 漏洞组成 3.00-4.51 免刻录链",
      category: "软破",
      exploit: "BD-JB + IPv6 UAF（CVE-2020-7457）",
      cve: "CVE-2020-7457",
      firmware: "PS5 3.00-4.51",
      description: "社区把 TheFloW 的 BD-J 沙箱逃逸与 IPv6 内核漏洞组合成 Homebrew Enabler：从蓝光播放器逃逸后直接获得内核任意读写，无需浏览器、也无需把主机联网。ps5-payload-dev 与 LightningMods 等团队提供了自动化打包与 autoloader，使 3.00-4.51 的机器可以一键注入 payload。随着 5.00 之后内核漏洞被修复、高版本 BD-J 沙箱被加固，这条路线对更新固件彻底关闭。",
      sources: [
        { title: "GitHub: ps5-payload-dev/bdj-ipv6-hen", url: "https://github.com/ps5-payload-dev/bdj-ipv6-hen" },
        { title: "GitHub: LightningMods/IPV6-BDJ-etaHEN", url: "https://github.com/LightningMods/IPV6-BDJ-etaHEN" },
        { title: "GitHub: ps5-payload-dev/bdj-ipv6-hen README（固件 3.00-4.51）", url: "https://github.com/ps5-payload-dev/bdj-ipv6-hen" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "etaHEN 一体化 Homebrew Enabler 出现",
      category: "工具与生态",
      exploit: "etaHEN",
      cve: "",
      firmware: "PS5 1.00-4.51（随后续版本扩展）",
      description: "etaHEN 把用户态入口、内核漏洞、调试设置、payload 注入与 FTP/远程安装等功能打包成一个 All-in-One Homebrew Enabler，成为 PS5 破解生态的事实标准。它让 4.03/4.51 用户不再需要手工拼接多个脚本，推动了 PS4 游戏转储、自制应用与模拟器的实际使用；后续版本持续跟进新的固件范围与 payload 注入方式。",
      sources: [
        { title: "GitHub: etaHEN/etaHEN", url: "https://github.com/etaHEN/etaHEN" },
        { title: "PSX-Place: [Update v1.8B] etaHEN - AIO Homebrew enabler for the PS5", url: "https://www.psx-place.com/threads/update-v1-8b-etahen-aio-homebrew-enabler-for-the-ps5.42050/" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "ps5-payload-dev SDK 与 websrv 形成工具链",
      category: "工具与生态",
      exploit: "ps5-payload-dev SDK / websrv",
      cve: "",
      firmware: "已破解固件（1.00-4.51）",
      description: "ps5-payload-dev 发布了支持动态链接的 PS5 payload SDK，以及用于向已越狱主机投放 payload 的 websrv（监听 8080 端口的简易 HTTP 服务）。这套工具把 PS5 自制软件从零散脚本推进到可编译、可分发的工程化阶段，成为后续 BD-J autoloader、etaHEN 插件与 PS5 Linux loader 的共同基础设施。",
      sources: [
        { title: "GitHub: ps5-payload-dev/sdk", url: "https://github.com/ps5-payload-dev/sdk" },
        { title: "GitHub: ps5-payload-dev/websrv", url: "https://github.com/ps5-payload-dev/websrv" }
      ]
    },
    {
      date: "2024",
      dateLabel: "2024年",
      title: "UMTX 越狱把公开上限推到 7.60",
      category: "工具与生态",
      exploit: "UMTX Jailbreak / umtx2",
      cve: "CVE-2024-43102",
      firmware: "PS5 7.60 附近；umtx2 覆盖更宽固件区间",
      description: "围绕 umtx 系统调用缺陷的公开越狱实现（PS5-UMTX-Jailbreak）把可用范围从 4.51 之后的空窗期首次推进到 7.xx，随后 idlesauce 的 umtx2 以 WebKit 漏洞加内核漏洞的方式覆盖更多固件。这类实现通常需要把主机 DNS 指向本地服务器、再打开内置浏览器或用户指南页面来投放 payload，稳定性与持久化仍然有限，属于临时性越狱。",
      sources: [
        { title: "GitHub: PS5Dev/PS5-UMTX-Jailbreak", url: "https://github.com/PS5Dev/PS5-UMTX-Jailbreak" },
        { title: "GitHub: idlesauce/umtx2", url: "https://github.com/idlesauce/umtx2" },
        { title: "NVD: CVE-2024-43102", url: "https://nvd.nist.gov/vuln/detail/CVE-2024-43102" }
      ]
    },
    {
      date: "2024-08",
      dateLabel: "2024年8月",
      title: "TheFloW 获 Sony 1 万美元漏洞赏金",
      category: "法律与产业",
      exploit: "PlayStation HackerOne 赏金项目",
      cve: "",
      firmware: "披露时最新固件（随后修复）",
      description: "psdevwiki 的漏洞条目记录：2024 年 8 月 29 日 TheFloW 因私密披露一个影响新固件的 PS5 漏洞而获得 Sony 1 万美元赏金。该事件说明 Sony 仍在用现金激励研究者走私密披露通道，把高危漏洞从公开破解链中抽走；同时也反映出厂商与破解社区之间长期存在的「收买漏洞」博弈，直接影响公开 jailbreak 的可用固件上限。",
      sources: [
        { title: "psdevwiki: PS5 Vulnerabilities", url: "https://www.psdevwiki.com/ps5/index.php?title=Vulnerabilities" },
        { title: "TheFloW (Andy Nguyen) GitHub", url: "https://github.com/TheOfficialFloW" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "Byepervisor：PS5 hypervisor 首次被公开攻破",
      category: "硬件漏洞",
      exploit: "Byepervisor",
      cve: "",
      firmware: "PS5 hypervisor 固件 1.xx-2.50",
      description: "SpecterDev 在 hardwear.io Netherlands 2024 发表 Byepervisor，公开两个此前未披露的 hypervisor 固件漏洞，可用于完全攻陷 hypervisor 并绕过 eXecute Only Memory（XOM）保护，从而执行自定义代码、解密系统库。这是 PS5 安全架构最核心的一层首次被公开击穿，但受影响范围仅限极早期 1.xx-2.50 固件，且需要先具备内核级权限作为前置条件。",
      sources: [
        { title: "hardwear.io: Byepervisor - How We Broke the PS5 Hypervisor", url: "https://hardwear.io/talks/byepervisor-how-we-broke-the-ps5-hypervisor/" },
        { title: "GitHub: PS5Dev/Byepervisor（hypervisor exploit for 1.xx-2.xx，含演讲稿与代码）", url: "https://github.com/PS5Dev/Byepervisor" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "欧盟法院裁定修改软件不侵权",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "（不影响固件范围）",
      description: "欧盟法院（CJEU）就 Sony Computer Entertainment Europe 诉 Datel Design and Development 案作出判决，认定 Datel 为 PlayStation 游戏提供的修改（cheat）软件不构成对游戏程序著作权的侵权。该判决成为主机修改工具在欧洲的标杆性先例，对破解工具、存档修改器与训练器类产品的合法性讨论具有直接参考价值。",
      sources: [
        { title: "CURIA: Judgment of the Court (C-159/23, Sony Computer Entertainment Europe v Datel)", url: "https://curia.europa.eu/juris/liste.jsf?num=C-159/23" },
        { title: "EUR-Lex: Judgment C-159/23", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:62023CA0159" }
      ]
    },
    {
      date: "2025",
      dateLabel: "2025年",
      title: "Byepervisor 公开仓库与 HV 利用代码",
      category: "工具与生态",
      exploit: "PS5Dev/Byepervisor",
      cve: "",
      firmware: "PS5 1.xx-2.xx",
      description: "演讲之后，研究方在 GitHub 上以 PS5Dev/Byepervisor 名义公开了 hypervisor 漏洞利用实现，项目描述为「针对 1.xx-2xx 固件的 PS5 hypervisor exploit」。它把 hypervisor 层研究从演讲材料变成可复现代码，让早期固件机器可以执行自定义代码并解密系统库，也直接支撑了随后出现的 PS5 Linux 项目。",
      sources: [
        { title: "GitHub: PS5Dev/Byepervisor", url: "https://github.com/PS5Dev/Byepervisor" },
        { title: "hardwear.io: Byepervisor talk", url: "https://hardwear.io/talks/byepervisor-how-we-broke-the-ps5-hypervisor/" }
      ]
    },
    {
      date: "2025-12",
      dateLabel: "2025年12月",
      title: "39C3 公开 AMD PSP/BootROM 电压毛刺攻击",
      category: "硬件漏洞",
      exploit: "电压毛刺（voltage glitching）+ DMA 提取 BootROM",
      cve: "",
      firmware: "PS5/PS5 Pro 及 AMD Zen 2 衍生 SoC",
      description: "在汉堡第 39 届混沌通讯大会（39C3）上，研究报告公开了针对 AMD Platform Security Processor（PSP）的硬件攻击：团队用 AMD 4700S/4800S 桌面套件（GPU 有缺陷的 PS5 同款 APU）作为廉价替身，介入电压调节器反馈回路实施精确电压毛刺，配合 DMA 提取 BootROM，并公布 PSP BootROM 缺陷、TOCTOU、非安全 MMIO、SlotHax 密钥转储等问题。由于 BootROM 固化在芯片内，这类缺陷无法通过固件更新修补，对 Sony 与 AMD 构成长期隐患。",
      sources: [
        { title: "media.ccc.de: 39C3 - Opening pAMDora's box and unleashing a thousand paths...", url: "https://media.ccc.de/v/39c3-opening-pamdora-s-box-and-unleashing-a-thousand-paths-on-the-journey-to-play-beatsaber-custom-songs" },
        { title: "cyberq.tw：駭客為了玩Beat Saber改機 意外攻破PS5處理器核心安全防線", url: "https://cyberq.tw/2026/01/03/ps5-bootrom-hack-beat-saber/" },
        { title: "King of Computer: German security researchers bypassed the PS5's security mechanisms", url: "https://en.kocpc.com.tw/archives/3616" }
      ]
    },
    {
      date: "2026-01",
      dateLabel: "2025年12月31日起流传，2026年1月初被媒体广泛报道",
      title: "PS5 ROM Keys 外泄，硬件信任根曝光",
      category: "硬件漏洞",
      exploit: "PS5 ROM Keys 泄露",
      cve: "",
      firmware: "全系 PS5 机型（不可修补）",
      description: "跨年前后，标记为「PS5 ROM Keys」的密钥材料被加入 PS5 Developer Wiki 并在社交媒体大量传播，内容对应主机启动早期的 BootROM 校验与解密流程。密钥本身不提供代码执行能力，也不能绕过游戏授权校验，但让启动链分析从黑盒变为可研究状态，外界普遍认为它与 39C3 的 BootROM 研究直接相关。由于属于硬件层材料，Sony 无法通过固件更新回收。",
      sources: [
        { title: "VideoCardz: PS5 \"ROM keys\" show up on PS5 Dev Wiki, but this is not (yet) a jailbreak", url: "https://videocardz.com/newz/ps5-rom-keys-show-up-on-ps5-dev-wiki-but-this-is-not-yet-a-jailbreak" },
        { title: "psdevwiki: PS5 Keys", url: "https://www.psdevwiki.com/ps5/Keys" }
      ]
    },
    {
      date: "2026-04",
      dateLabel: "2026年4月",
      title: "PS5-Linux loader 开源，hypervisor 漏洞跑起 Linux",
      category: "工具与生态",
      exploit: "ps5-linux-loader（HV exploits + umtx2）",
      cve: "",
      firmware: "PS5 3.00-7.61（Phat/Slim，Pro 尚不支持）",
      description: "Andy Nguyen（TheFloW）等人开源的 ps5-linux-loader 串联多个 hypervisor 漏洞（每个只影响特定固件），把 PS5 变成可运行完整 Linux 的机器：8 核 16 线程 CPU、GPU、USB 与 4K60 输出均可用，覆盖 3.00 至 7.61 的多个固件，此后又加入 PS5 Slim 与内置蓝牙支持。payload 通过 umtx2 配合伪造 manuals.playstation.net 的 DNS 投放，仍属实验性质：无双系统、每次开机需重新利用、待机不可用。",
      sources: [
        { title: "GitHub: ps5-linux/ps5-linux-loader", url: "https://github.com/ps5-linux/ps5-linux-loader" },
        { title: "Korben: PS5-Linux - Andy Nguyen releases his hack", url: "https://korben.info/en/ps5-linux-andy-nguyen-releases-hack.html" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月（v2.4，7 月 25 日前后的更新）",
      title: "ps5-linux-loader 加入 PS5 Slim 与内置蓝牙支持",
      category: "工具与生态",
      exploit: "ps5-linux-loader v2.4（umtx2 / Y2JB + lapse.js）",
      cve: "",
      firmware: "PS5 3.00-7.61（Phat 与 Slim，Pro 仍不支持）",
      description: "2026 年 7 月，ps5-linux-loader 更新至 v2.4，在原有 Phat 机型之外加入 PS5 Slim 支持，固件范围扩展到 7.61，并补上内置蓝牙（可用 DualSense）与 M.2 SSD 作为 Linux 专用分区等能力。3.00-5.50 通过 umtx2 伪造 manuals.playstation.net 的 DNS 投放 payload，6.00-7.61 则改用 Y2JB 加 lapse.js 的内核漏洞；系统仍属软改：不能双系统、待机不可用、每次开机都要重新利用。9 月 5 日发布的 v2.5 继续修补兼容性，此时项目已由其他贡献者接手维护。",
      sources: [
        { title: "GitHub: ps5-linux/ps5-linux-loader（README 与固件支持列表）", url: "https://github.com/ps5-linux/ps5-linux-loader" },
        { title: "GitHub Releases: ps5-linux-loader v2.4（2026-07-06）", url: "https://github.com/ps5-linux/ps5-linux-loader/releases/tag/v2.4" },
        { title: "Korben: PS5-Linux - The Slim can finally run Linux", url: "https://korben.info/en/ps5-linux-slim-firmware-linux-support.html" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月15日",
      title: "TheFloW 因 hypervisor 漏洞被提前上报 Sony 而退出 PS5 社区",
      category: "法律与产业",
      exploit: "hypervisor 漏洞私密上报（HackerOne 赏金项目）",
      cve: "",
      firmware: "披露时最新固件（范围未公开，随后被修复）",
      description: "2026 年 9 月 15 日，Andy Nguyen（TheFloW）宣布退出 PS5 破解社区并停止 ps5-linux 的全部工作，原定 2027 年的 PS5 Pro 支持计划就此作废。起因是他掌握的一个在当时最新固件上仍然有效的 hypervisor 漏洞，被另一位研究者 Jordy 用 AI 辅助方式独立发现后，不到一天就上报给 Sony 的 HackerOne 漏洞赏金项目——而此前双方约定至少等到《GTA 6》发售，让玩家有机会合法购买游戏并顺带享受 Linux。他公开批评社区里“用 LLM 写自己都看不懂的代码”的风气，称这些人为 slop kiddies。项目仓库仍以 GPL 3.0 开源，loader 由其他贡献者继续维护并推进到 v2.5。",
      sources: [
        { title: "It's FOSS: The Famed PS5 Linux Project Lead Quits Over a Premature Exploit Report to Sony（2026-09-17）", url: "https://itsfoss.com/news/ps5-linux-lead-quits/" },
        { title: "SourceTrail: Andy Nguyen Leaves PS5 Linux Project After Premature Exploit Report（2026-09-16）", url: "https://www.sourcetrail.com/software/andy-nguyen-leaves-ps5-linux-project-after-premature-exploit-report/" },
        { title: "TweakTown: Developer abandons PS5 Linux project after people found a Hypervisor bug and reported it to Sony", url: "https://www.tweaktown.com/news/113593/developer-abandons-ps5-linux-project-after-people-found-a-hypervisor-bug-and-reported-it-to-sony/index.html" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月30日",
      title: "Relapse 越狱把内核读写扩展到 13.60",
      category: "软破",
      exploit: "Relapse Exploit",
      cve: "",
      firmware: "PS5 / PS5 Pro 7.00-13.60（14.00 修复）",
      description: "Relapse 利用用户指南内置浏览器中的 WebKit 漏洞串接内核漏洞，首次把公开的内核读写能力覆盖到 7.00 至 13.60，并把旧方案（P2JB）动辄数十分钟的成功时间压缩到数秒。按作者公开的链条，用户态用 JSC 信息泄露配合 structured clone 的对象池错配破坏 TypedArray，内核态再用地址泄露加 aio_multi_wait 的 UAF 竞态建立任意读写（Kernel Exploit：Sonic_Iso；WebKit 漏洞：Jordy；漏洞开发：ntfargo、ufm42）。利用方式是把主机 DNS 指向第三方服务器后打开隐藏的浏览器页面，成功后 ELF loader 监听 9021 端口，属于临时性越狱：关机即失效、部分用户报告崩溃或内核 panic，暂不支持安装 Linux。2026 年 9 月 16 日发布的 14.00 固件修复了该内核漏洞。",
      sources: [
        { title: "GitHub: ntfargo/Relapse-Exploit", url: "https://github.com/ntfargo/Relapse-Exploit" },
        { title: "Korben: Relapse - The jailbreak that frees almost every PS5", url: "https://korben.info/en/relapse-jailbreak-frees-almost-every-ps5.html" },
        { title: "TweakTown: New PS5 jailbreak means almost every console can now be unlocked, with one catch", url: "https://www.tweaktown.com/news/113841/new-ps5-jailbreak-means-almost-every-console-can-now-be-unlocked-with-one-catch/index.html" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月",
      title: "slopkit 等工具覆盖 7.00-12.70 的 WebKit 越狱",
      category: "工具与生态",
      exploit: "slopkit / Y2JB / Remote Lua Loader",
      cve: "",
      firmware: "PS5 7.00-12.70（存档与 YouTube 应用入口范围各异）",
      description: "Relapse 引发抢发潮同期，社区出现了 slopkit 等工具，声称可在 7.00 至 12.70 固件上从 WebKit 入口完成越狱。它们与此前基于 PS4 游戏存档（Remote Lua Loader 一类存档注入）和 YouTube 应用（Y2JB）的用户态入口形成互补，说明 12.xx 世代的攻击面已经回到浏览器与应用沙箱，而不是早期的主机内核漏洞。",
      sources: [
        { title: "GitHub: itsPLK/slopkit", url: "https://github.com/itsPLK/slopkit" },
        { title: "GitHub: Gezine/Y2JB", url: "https://github.com/Gezine/Y2JB" }
      ]
    },
    {
      date: "2026-10",
      dateLabel: "2026年10月初",
      title: "14.10.00 固件与《GTA 6》的强制更新门槛",
      category: "法律与产业",
      exploit: "（官方反制：强制最新固件 + 密钥轮换）",
      cve: "",
      firmware: "PS5 14.00（2026-09-16）→ 26.06-14.10.00（2026 年 10 月）",
      description: "继 9 月 16 日的 14.00 固件修掉 Relapse 所用的内核漏洞后，Sony 在 10 月继续推送版本号 26.06-14.10.00 的系统更新，官方说明仍以“提升系统性能与安全性”为主。与此同时数据挖掘者发现，《GTA 6》在 PS5 上会强制要求主机具备最新固件，等于用一款现象级游戏把大部分玩家推向已封堵越狱的版本，这也是自 2025 年底 BootROM 密钥外泄以来官方最直接的一次反制。由于 14.00 之后的内核漏洞尚未公开，截至 10 月初仍停留在 13.60 及以下的机器才是可越狱存量，社区普遍提醒关闭自动更新并断开 PSN。",
      sources: [
        { title: "Notebookcheck: GTA 6 blocks PS5 jailbreak and piracy on release date, requiring 14.10.00 firmware", url: "https://www.notebookcheck.net/GTA-6-blocks-PS5-jailbreak-and-piracy-on-release-date-requiring-14-10-00-firmware.1414828.0.html" },
        { title: "ixbt.games: Для запуска GTA VI потребуется свежая прошивка PlayStation 5（2026-10-03）", url: "https://ixbt.games/news/2026/10/03/dlia-zapuska-gta-vi-potrebuetsia-svezaia-prosivka-playstation-5-datamainer-predupredil-ob-ogranicenii.html" },
        { title: "ZOL: 索尼为 PS5 推送 26.06-14.10.00 固件更新", url: "https://diy.zol.com.cn/1255/12552588.html" }
      ]
    }
  ]
});
