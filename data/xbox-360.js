window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "xbox-360",
  name: "Xbox 360",
  family: "Xbox",
  released: "2005-11",
  status: "截至 2026 年 10 月，Xbox 360 的两条破解路线都已稳定：硬破仍是 RGH 3.0（2021，无需脉冲芯片），2025-09 又出现面向难改 Phat 主机的 RGH 1.3；软破则是 2025 年 BadUpdate 的持续打磨，2026-08-05 的 1.3 版把漏洞触发改进到近乎瞬时、理论上 100% 成功，并加入启动动画恢复模式。代价是最新版只保留 Rock Band Blitz 一个入口，且依然重启即失效、只支持 17559 这一个系统版本。微软已停产（2016）并关闭 Xbox 360 商店（2024），官方封堵完全停止，社区维护与几美元级改装是当前的全部内容。",
  summary: "Xbox 360 是“软件极难、硬件极脆”的典型：128KB hypervisor 加逐级签名启动链把纯软件攻击面压到几乎为零，二十年里只有 CVE-2007-1220 这一个真正被广泛利用的 hypervisor 缺陷，以及 2025 年 BadUpdate 找到的加密内存设计缺陷。破解史因此呈现三条主线——光驱固件刷写（Xtreme 到 iXtreme LT/LT+）绕开光盘校验、硬件故障注入（2009 年 JTAG/SMC、2011 年 Reset Glitch Hack 及其 RGH 1.2/2.0/3.0）直接让启动链的哈希校验失效、游戏与存档漏洞（King Kong、Tony Hawk's Pro Strcpy）提供软件入口。关键转折是 2009 年微软用 eFuse 熔断封杀 JTAG，以及 2011 年 RGH 证明 CB_A 不检查撤销熔丝、官方再也无法通过更新封堵。",
  events: [
    {
      date: "2005-11",
      dateLabel: "2005年11月",
      title: "Xbox 360 发售与安全启动链",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "初代 Xenon 主板（基准内核 1888）",
      description: "微软在北美发售 Xbox 360（欧洲与日本 12 月跟进），首次采用 IBM Xenon 三核 CPU 与统一内存架构的 Xenos GPU。其启动链为 1BL（CPU 内 32KB BootROM）→ CB（2BL）→ CD（4BL）→ CF/CG，逐级做 RSA 签名与 SHA 哈希校验，运行时由 hypervisor 对可执行内存做实时加密与 W^X 保护。这套设计把纯软件攻击面压到极小，此后二十年的破解几乎都依赖硬件缺陷、游戏/存档漏洞或故障注入。",
      sources: [
        { title: "Xbox 360 — Wikipedia", url: "https://en.wikipedia.org/wiki/Xbox_360" },
        { title: "Architecture of the Xbox 360（Architecture-of-consoles 章节原文）", url: "https://github.com/flipacholas/Architecture-of-consoles/blob/master/articles/xbox-360.Rmd.md" }
      ]
    },
    {
      date: "2006-05",
      dateLabel: "2006年5月",
      title: "Xtreme 光驱固件：首个破解",
      category: "硬破",
      exploit: "Xtreme firmware (c4eva / commodore4eva)",
      cve: "",
      firmware: "Toshiba-Samsung TS-H943 等 2005-2007 年光驱",
      description: "2006 年 5 月（PS3 上市之前），c4eva（commodore4eva）发布 Xtreme 固件，通过刷写 DVD 光驱固件绕过光盘媒体识别与区域校验，让备份盘能在零售主机上直接启动。这条路线完全不触碰 CPU 与 hypervisor，只需拆机、连接光驱并重刷固件，成为此后 iXtreme/LT 系列的起点。它也让微软把反盗版重心放到光驱固件与光盘格式（AP25、XGD3）上，形成持续数年的军备竞赛。",
      sources: [
        { title: "Architecture of the Xbox 360（记录 2006 年 5 月 Xtreme Firmware）", url: "https://github.com/flipacholas/Architecture-of-consoles/blob/master/articles/xbox-360.Rmd.md" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2007",
      dateLabel: "2007年",
      title: "free60 成立与 XeLL 生态",
      category: "工具与生态",
      exploit: "free60 / XeLL / libxenon",
      cve: "",
      firmware: "",
      description: "2007 年 free60 项目成立，目标是把 Linux 与自制代码带上 Xbox 360，团队公开了 1BL/CB/CD 启动链的逆向资料、NAND 读写工具以及 XeLL（Xenon Linux Loader）payload，并维护 free60.org 与 Free60Project/wiki。XeLL 后来发展为 XeLL Reloaded，成为 JTAG 与 RGH 主机上事实标准的加载器，libxenon 则提供跨平台的自制软件编译环境。这个生态为之后所有漏洞提供了可以落地的 payload，也是 2025 年 BadUpdate 依然复用它作为启动目标的原因。",
      sources: [
        { title: "Free60 — Wikipedia", url: "https://en.wikipedia.org/wiki/Free60" },
        { title: "Free60Project/wiki（free60 官方维基源码库）", url: "https://github.com/Free60Project/wiki" },
        { title: "Free60.org Wiki", url: "https://free60.org/" }
      ]
    },
    {
      date: "2007-03",
      dateLabel: "2007年3月",
      title: "Hypervisor 系统调用校验缺陷",
      category: "软件漏洞",
      exploit: "Hypervisor syscall dispatcher 参数校验缺失",
      cve: "CVE-2007-1220, CVE-2007-1221",
      firmware: "kernel 4532 / 4548（缺陷随 4532 更新引入）",
      description: "该漏洞位于 hypervisor 的 syscall 分发器：由内核态传入的偏移与参数未被正确校验，攻击者据此可把执行流重定向到 hypervisor 空间的任意位置。CVE 于 2007 年 3 月公开（CVSS 2.0 6.2，需要本地/物理访问），是 4532/4548 内核上所有早期软破（King Kong、JTAG/SMC）共同依赖的核心缺陷。微软的应对不是修补 hypervisor，而是在后续 2BL 中撤销这两个内核使其无法加载，因此该漏洞只能在未被熔断 eFuse 的老主机上使用。",
      sources: [
        { title: "CVE-2007-1220 — NVD", url: "https://nvd.nist.gov/vuln/detail/CVE-2007-1220" },
        { title: "NVD: CVE-2007-1221", url: "https://nvd.nist.gov/vuln/detail/CVE-2007-1221" },
        { title: "The JTAG / SMC Hack — free60 wiki（引用 SecurityFocus 公告并解释该缺陷）", url: "https://free60.org/Hacks/SMC_Hack/" }
      ]
    },
    {
      date: "2007-12",
      dateLabel: "2007年12月",
      title: "King Kong 着色器漏洞链",
      category: "软破",
      exploit: "King Kong (KK) shader exploit + XeLL",
      cve: "",
      firmware: "零售《Peter Jackson's King Kong》+ 已刷光驱；kernel 4532/4548",
      description: "free60 社区（Crawler360、xorloser 等）利用 King Kong 中未签名的着色器，通过 GPU 的 memory export 把数据写进物理内存，先改写 idle 线程上下文取得寄存器控制，再借 hypervisor 的 syscall 缺陷跳进 hypervisor 空间执行自定义 loader。由于补丁只修改游戏镜像的 shader.bin，玩家需要先刷光驱固件才能启动打过补丁的刻录盘，随后可引导 XeLL、Linux LiveCD 或经串口上传代码。它证明了“游戏内数据 + hypervisor 缺陷”的软破路径，但强依赖老内核，2009 年后被 JTAG/SMC 取代。",
      sources: [
        { title: "King Kong Hack — free60 wiki", url: "https://free60.org/Hacks/King_Kong_Hack/" },
        { title: "The JTAG / SMC Hack（详细描述 KK exploit 的内存利用步骤）", url: "https://free60.org/Hacks/SMC_Hack/" }
      ]
    },
    {
      date: "2008",
      dateLabel: "2008年",
      title: "Timing Attack 降级内核",
      category: "硬件漏洞",
      exploit: "Timing Attack (TA) / memcmp 时序差异",
      cve: "",
      firmware: "2BL 1920 及更早（修复于 2BL 1921 等 TA fix 版本）",
      description: "free60 发现启动链中逐字节比较的哈希/配对校验存在时序差异，可借此绕过 2BL 对 4532/4548 内核的检查，把主机的更新序列回退到 1888 基准内核，从而在老内核上重新获得可利用的 hypervisor 缺陷。微软随后在 2BL 1921 等版本里把 memcmp 换成常数时间的 memdiff 修补了这条路线，这就是社区所称的 TA fix。不过已泄漏的 4BL 仍被用来构造零配对（zero-pairing）镜像，使几乎所有主板都能被引导进 4532 内核，为 JTAG/SMC hack 铺路。",
      sources: [
        { title: "Timing Attack — free60 wiki", url: "https://free60.org/Timing_Attack/" },
        { title: "The JTAG / SMC Hack（解释 TA fix 把 memcmp 换成 memdiff）", url: "https://free60.org/Hacks/SMC_Hack/" }
      ]
    },
    {
      date: "2009",
      dateLabel: "2009年",
      title: "JTAG/SMC hack 取得自制启动",
      category: "硬破",
      exploit: "JTAG / SMC Hack (free60)",
      cve: "CVE-2007-1220",
      firmware: "kernel ≤ 7371（未被 2009 年夏季更新熔断 eFuse 的主机）",
      description: "free60 公开 JTAG/SMC hack：主板上的 CPU、GPU、南桥 JTAG 测试点未被熔断，只需焊接 3 个点位并具备 SPI 读写 NAND 的能力，就能用 GPU JTAG 改写 NAND 控制器的 DMA 目标地址，再借 SMC 触发一次 DMA 读，把 payload 写进 idle 线程上下文与 hypervisor 偏移表。启动时借 CVE-2007-1220 跳入 hypervisor 空间加载 XeLL，通常 30 秒内进入自制环境，比 King Kong 更快、更可靠且支持全部主板型号。它的前提是主机仍能加载 4532/4548 内核，因此微软选择用 eFuse 熔断而非打补丁来封堵。",
      sources: [
        { title: "The JTAG / SMC Hack — free60 wiki", url: "https://free60.org/Hacks/SMC_Hack/" },
        { title: "Xbox 360: Exploit Chart — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Exploit_Chart" },
        { title: "Fusesets — free60 wiki", url: "https://free60.org/Hardware/Fusesets/" }
      ]
    },
    {
      date: "2009",
      dateLabel: "2009年",
      title: "XBReboot 与 freeBOOT 出现",
      category: "工具与生态",
      exploit: "XBReboot (XBR) / freeBOOT (ikari) / xeBuild",
      cve: "",
      firmware: "JTAG 主机（7371、8955 等内核）",
      description: "XBReboot（XBR）与随后由 ikari 主导的 freeBOOT 把“绕过校验的启动链”变成可刷写的自制内核：以零配对镜像启动被 patch 的内核，允许运行未签名 xex，并加载 XeLL 与 Dash Launch。2009 年底 XBReboot v0.05 与 freeBOOT v0.02 相继放出（GBAtemp 的发布帖把两者并列报道），此后 xeBuild 等工具把“合成自制 NAND”流程自动化。这一层工具链是 JTAG 主机从“能跑 payload”走向“日常可用自制系统”的关键。",
      sources: [
        { title: "freeBOOT v0.02 and XBReboot v0.05 released — GBAtemp", url: "https://gbatemp.net/threads/freeboot-v0-02-and-xbreboot-v0-05-released.193887/" },
        { title: "XeUnshackle README（致谢 ikari – freeBOOT、cOz – xeBuild/Dashlaunch）", url: "https://github.com/Byrom90/XeUnshackle" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2009-08",
      dateLabel: "2009年8月",
      title: "eFuse 熔断封堵 JTAG",
      category: "硬破",
      exploit: "eFuse 熔断（2.0.8498 系统更新）",
      cve: "",
      firmware: "2.0.8498 及以后的 dashboard",
      description: "2009 年夏季（8 月）微软推送 2.0.8498 更新，通过熔断 eFuse 提升 2BL 的撤销版本，使主机不再加载 4532/4548 内核，JTAG/SMC hack 与 King Kong 路线同时失效。硬件社区随即给出对抗手段：拔掉 R6T3 电阻可切断 eFuse 熔断所需的电压，让更新无法真正熔断，代价是丧失保修并必须依赖离线更新。这也是破解路线转向 glitch 攻击的直接原因——硬件熔断无法被后续更新逆转，而不检查撤销熔丝的 CB_A 更是永久缺口。",
      sources: [
        { title: "849x System Update — free60 wiki", url: "https://free60.org/System-Software/849x_System_Update/" },
        { title: "Fusesets — free60 wiki", url: "https://free60.org/Hardware/Fusesets/" },
        { title: "R6T3 — free60 wiki（拔除电阻阻止 eFuse 熔断）", url: "https://free60.org/Hardware/R6T3/" }
      ]
    },
    {
      date: "2010",
      dateLabel: "2010年",
      title: "Dash Launch 启动配置层",
      category: "工具与生态",
      exploit: "Dash Launch (cOz / Team Xedev)",
      cve: "",
      firmware: "freeBOOT / JTAG 以及后续 RGH 主机",
      description: "由 cOz 与 Team Xedev 推出的 Dash Launch 在系统启动早期介入，负责选择默认启动项、屏蔽系统更新与区域/媒体检查，并加载各类插件（stealth 服务、xbdm 等）。它让自制主机不必每次手动进入 XeLL 就能直接启动 FreeStyle Dash 或游戏，成为 JTAG/RGH 时代装机必装组件。其 launch.ini 插件机制一直沿用，2025 年 XeUnshackle 仍会把修改版 launch.xex（Dash Launch）载入 BadUpdate 的临时环境。",
      sources: [
        { title: "XeUnshackle README（载入 launch.xex / Dashlaunch）", url: "https://github.com/Byrom90/XeUnshackle" },
        { title: "Dash Launch v0.01 — iBotModz 论坛帖", url: "https://ibotmodz.net/topic/17676-dash-launch-v001/" }
      ]
    },
    {
      date: "2010-01",
      dateLabel: "2010年1月",
      title: "iXtreme LT 光驱固件发布",
      category: "硬破",
      exploit: "iXtreme LT (Lite Touch)，c4eva / Team Jungle",
      cve: "",
      firmware: "Lite-On 74850 / 83850v1 / 83850v2 / 93450 等光驱",
      description: "2010 年 1 月 20 日 c4eva 与 Team Jungle（由 Team Xecuter 支持）发布 iXtreme LT（Lite Touch）：代码完全重写、只对固件做最小补丁并保留整段原厂数据，同时新增模拟原厂响应时间的 timing 引擎、默认启用 stealth 与 split-vid。它要求用户先用 abgx 校验镜像的 SS/PFI/DMI，否则“LT 不保证不被封号”，标志着光驱破解从“改数据”转向“伪装成原厂行为”。LT 之后又衍生出 LT+、LT+ 2.0、LT+ 3.0 等针对 AP25/XGD3 的版本。",
      sources: [
        { title: "C4Eva's ixtreme LT released（2010-01-20 发布帖）— DigitalWorldz", url: "https://www.digitalworldz.co.uk/threads/c4evas-ixtreme-lt-released.227242/" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2010-11",
      dateLabel: "2010年11月",
      title: "AP25 反盗版与 LT+ 固件",
      category: "硬破",
      exploit: "AP25 (AntiPiracy 2.5) / iXtreme LT+",
      cve: "",
      firmware: "2010 年底起的 dashboard（Kinect 版 12611 起）与启用 AP25 的游戏",
      description: "2010 年底微软随 Kinect 版 dashboard 引入 AP25 挑战-响应校验，光驱必须对特定游戏原盘中的隐藏数据在限定时间内作出正确响应，单纯刷固件随即失效。c4eva 的 LT+ 固件通过从原盘（社区俗称“激活盘”）读取数据来重新学习应对，用户必须先持有对应原盘才能运行备份。这轮军备竞赛显著抬高了“刷光驱+刻盘”的成本与门槛，也使 2011 年出现的 ODE 光驱模拟器与 RGH 更受关注。",
      sources: [
        { title: "Wasabi 360 Ultra User Guide（解释 AP25 校验机制）— consolemods.org", url: "https://consolemods.org/wiki/images/7/7c/Wasabi_360_Ultra_User_Guide_v1.3-0.pdf" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2011",
      dateLabel: "2011年",
      title: "xk3y 光驱模拟器（ODE）上市",
      category: "硬破",
      exploit: "xk3y (X360Key) ODE；Wasabi 360 Ultra",
      cve: "",
      firmware: "多数原厂光驱主机（需先取得光驱 firmware key）",
      description: "ODE（光驱模拟器）方案在 2011 年前后上市，代表产品是 xk3y（又称 X360Key）与 Wasabi 360 Ultra：用一块模拟板替代原光驱的盘片响应，把 ISO 放在 USB 硬盘上直接“喂”给主机，因此完全绕开 AP25 与 XGD3 的刻盘与校验限制，也无需刷写光驱固件。它需要先用原光驱的 firmware key 让模拟器伪造合法光驱身份，属于纯硬件改装而非法固件刷写。随着 RGH 成本下降与在线封号风险上升，ODE 逐渐边缘化，但其源码与手册仍是研究 360 光盘校验的重要资料。",
      sources: [
        { title: "DerfJagged/xk3y：XK3Y ODE 源码（GitHub）", url: "https://github.com/DerfJagged/xk3y" },
        { title: "Xbox 360: XK3Y ODE — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:XK3Y_ODE" },
        { title: "Wasabi 360 Ultra User Guide — consolemods.org", url: "https://consolemods.org/wiki/images/7/7c/Wasabi_360_Ultra_User_Guide_v1.3-0.pdf" }
      ]
    },
    {
      date: "2011-08",
      dateLabel: "2011年8月",
      title: "Reset Glitch Hack 公布",
      category: "硬件漏洞",
      exploit: "Reset Glitch Hack (RGH)，GliGli 与 Tiros",
      cve: "",
      firmware: "Fat 主板（glitch CB）与 Slim 主板（glitch CB_A 以运行自定义 CB_B）",
      description: "GliGli 与 Tiros 在 2011 年 8 月公开 RGH：先断言 CPU_PLL_BYPASS 把 CPU 时钟降到约 520kHz，再在启动链做哈希 memcmp 的 POST 39（fat）或 POST DA（slim）窗口内发出 100ns／20ns 的 CPU_RESET 脉冲，使比较函数错误地返回“无差异”，让哈希不匹配的 CD 或 CB_B 引导器继续执行。Slim 主板无法引出 PLL_BYPASS，改用 HANA 芯片的 I2C PLL 寄存器降频。单次成功率约 25%，靠修改过的 SMC 无限重启重试，通常 30 秒内启动 XeLL；由于被 glitch 的 CB_A 根本不检查撤销熔丝，这是官方无法通过系统更新彻底封堵的硬件级缺陷。",
      sources: [
        { title: "The Xbox 360 reset glitch hack（GliGli 原始技术文档，GitHub）", url: "https://github.com/gligli/tools/blob/master/reset_glitch_hack/reset_glitch_hack.txt" },
        { title: "Reset Glitch Hack (RGH) — free60 wiki", url: "https://free60.org/Hacks/Reset_Glitch_Hack/" }
      ]
    },
    {
      date: "2011-12",
      dateLabel: "2011年12月",
      title: "iXtreme LT+ 3.0 应对 XGD3",
      category: "硬破",
      exploit: "iXtreme LT+ 3.0 (c4eva)",
      cve: "",
      firmware: "XGD3 格式游戏 + 2011 年后的 dashboard（Lite-On 等光驱）",
      description: "微软在 2011 年启用 XGD3 光盘格式与更严格的校验，备份镜像必须完整写入 AP25 响应数据与 split-vid，否则无法启动。c4eva 于 2011 年 12 月（12 月 6 日之后）发布 LT+ 3.0，用户还需配合 abgx 校验与特定刻录机/固件才能完成镜像制作，这是光驱破解路线的最后一个大版本。此后光驱刷写逐步被 RGH 与 ODE 取代，转为收藏与怀旧路线。",
      sources: [
        { title: "iXtreme LT+ v3.0 to be Released After December 6 — GBAtemp", url: "https://gbatemp.net/threads/ixtreme-lt-v3-0-to-be-released-after-december-6.314625/" },
        { title: "iXtreme LT+ v3.0, nuevo firmware para lectores Xbox 360（2011-12-26）", url: "https://www.muycomputer.com/2011/12/26/ixtreme-lt-v3-0-nueo-firmware-para-lectores-xbox-360/" }
      ]
    },
    {
      date: "2012-02",
      dateLabel: "2012年2月",
      title: "RGH 2.0 让全系 Phat 可破",
      category: "硬破",
      exploit: "RGH 2.0 / CoolRunner / J-Runner (Team Xecuter)",
      cve: "",
      firmware: "所有 Phat 主板（含 14717/14719 新 CB 与 4577/5772/6752 split CB）及 Trinity slim",
      description: "2012 年 2 月 26 日 Team Xecuter 的 RGH 开发组公布 RGH 2.0：采用新的 glitch 时序与 JED 文件，可破解升级到 14717/14719 之后的新 CB，以及翻新机的 split CB（Zephyr 4577、Falcon/Opus 5772、Jasper 6752、Trinity 9230），并且不再需要事先的 NAND dump 或 CPU key。Team Xecuter 同步调整 CoolRunner 脉冲板设计并把这些改动并入 J-Runner 工具链，使“买板子+焊线+一键合成 NAND”成为主流装机流程。这一版本奠定了 2012-2021 年 360 改机的硬件形态。",
      sources: [
        { title: "Team Xecuter Presents RGH 2.0（2012-02-26 发布）— 1Emulation", url: "https://www.1emulation.com/forums/topic/34074-team-xecuter-presents-rgh-20/" }
      ]
    },
    {
      date: "2015",
      dateLabel: "2015年",
      title: "RGH 1.2 提升稳定性",
      category: "硬破",
      exploit: "RGH 1.2 (15432)",
      cve: "",
      firmware: "Corona / Trinity 等 Slim 与多数 Phat 主板",
      description: "15432 在 RGH 2.0 的基础上重新整理 glitch 时序与接线方式，形成 RGH 1.2：更短的 PLL/RST 走线搭配更宽容的脉冲参数，使 Corona、Trinity 等主板的开机成功率与稳定性明显提高。社区文档（如 consolemods 的 RGH/RGH1.2 页面）把它整理成标准教程，成为 2015 年之后改机的主流方案。它也是后来用树莓派 Pico 等廉价硬件复刻脉冲破解（如 RPicoRGH 项目）的参考基础。",
      sources: [
        { title: "Xbox 360: RGH / RGH1.2 — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:RGH/RGH1.2" },
        { title: "RGH 1.2 por 15432 — ElOtroLado 论坛帖", url: "https://www.elotrolado.net/hilo_rgh-1-2-por-15432_2090769" }
      ]
    },
    {
      date: "2016-04",
      dateLabel: "2016年4月",
      title: "微软停产 Xbox 360",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2016 年 4 月微软宣布停止生产 Xbox 360，硬件平台进入存量时代，破解社区的工作重心转向维护自制系统、修复老主机与延长在线服务寿命。停产也意味着主板形态不再变化，Corona 之后的 Winchester 成为最后的硬件批次，而系统软件的终点是 2019 年 11 月 12 日发布的 17559——它后来成为 2025 年 BadUpdate 唯一支持的版本。",
      sources: [
        { title: "Xbox 360 games console discontinued by Microsoft — BBC News", url: "https://www.bbc.co.uk/news/technology-36097461" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "DOJ 起诉 Team Xecuter",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2020 年 10 月，美国司法部与 ICE 宣布对 Team Xecuter 成员的指控（Max Louarn、Yuanning Chen 与 Gary Bowser），罪名包括共谋规避技术保护措施与贩售规避设备。Team Xecuter 是 Xbox 360 时代最知名的改机硬件商之一，长期销售 RGH 用的 CoolRunner 脉冲板与 Xecuter DemoN 等产品，后来又因 Switch 的 SX OS/SX Pro 而成为众矢之的。该案是主机破解产业迄今规模最大的刑事追诉，直接冲击了硬件改机供应链。",
      sources: [
        { title: "Two members of notorious videogame piracy group Team Xecuter in custody — U.S. DOJ", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" },
        { title: "ICE investigation leads to the arrest of 2 members of Team Xecuter — ICE", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" },
        { title: "Team Xecuter Presents RGH 2.0（CoolRunner 等 360 改机硬件）", url: "https://www.1emulation.com/forums/topic/34074-team-xecuter-presents-rgh-20/" }
      ]
    },
    {
      date: "2021",
      dateLabel: "2021年",
      title: "RGH 3.0：无需脉冲芯片",
      category: "硬破",
      exploit: "RGH 3.0（chipless glitching）",
      cve: "",
      firmware: "Corona / Waitsburg 等 Slim 与多数 Phat 主板",
      description: "2021 年社区发布 RGH 3.0（GBAtemp 上以“chipless glitching”讨论）：不再需要 CoolRunner、Matrix Glitcher 等外部 CPLD 脉冲板，只用一颗电阻加一只二极管把 PLL_BYPASS 相关信号接到主板对应点位，由主机自身而非外置芯片完成 glitch 时序控制。装机成本因此降到只需几元钱，但成功率与走线质量关系极大，仍需先用 NAND 写入 ECC 并配合 J-Runner 等工具的 RGH3 配置。由于不再依赖早已停产的 CPLD 芯片，RGH 3.0 成为此后最主流的持久化改机方式，也是 2025 年前 360 场景的默认方案。",
      sources: [
        { title: "RGH3 Chipless Glitching!! — GBAtemp 讨论帖", url: "https://gbatemp.net/threads/rgh3-chipless-glitching.602237/" },
        { title: "Xbox 360 security in details: the long way to RGH3 — Positive Technologies", url: "https://swarm.ptsecurity.com/xbox-360-security-in-details-the-long-way-to-rgh3/" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Gary Bowser 获刑 40 个月",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2022 年 2 月，作为 Team Xecuter 对外发言人兼主要销售者的 Gary Bowser 被判处 40 个月监禁，并被要求支付赔偿。判决把“销售规避设备”从民事侵权层面推向重罪量刑，对 360 与 Switch 时代的改机硬件供应链产生长期抑制作用。其后果之一，是社区资源进一步向开源、非商业化的自制软件（XeLL、xeBuild、RGH 3.0 教程）集中。",
      sources: [
        { title: "Public voice and principal salesperson for notorious videogame piracy group sentenced to 3+ years — U.S. DOJ", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "Nintendo Hacker Gary Bowser Sentenced To Three Years In Jail — Nintendo Life", url: "https://www.nintendolife.com/news/2022/02/nintendo-hacker-gary-bowser-sentenced-to-three-years-in-jail" }
      ]
    },
    {
      date: "2024",
      dateLabel: "2024年",
      title: "Tony Hawk's Pro Strcpy 漏洞",
      category: "软件漏洞",
      exploit: "Tony Hawk's Pro Strcpy（THAW 存档溢出）",
      cve: "",
      firmware: "零售《Tony Hawk's American Wasteland》Xbox 360 版（NTSC/PAL/RF）",
      description: "grimdoomer（Ryan Miceli）公开了《Tony Hawk's American Wasteland》存档解析中的 strcpy 类缓冲区溢出：使用一份特制存档即可在完全零售的主机上取得内核态代码执行，不需要任何硬件改动或光驱刷写。它最初是独立研究成果，随后成为 BadUpdate 漏洞链的第一环——先用存档漏洞进入内核态，再利用 hypervisor 的加密内存设计缺陷完成提权。2025 年该入口因兼容性（区域/版本识别）问题被官方标注为 Deprecated，由 Rock Band Blitz 与 dashboard 头像存档漏洞接替。",
      sources: [
        { title: "Tony Hawk's Pro Strcpy — I Code 4 Coffee", url: "https://icode4.coffee/?p=954" },
        { title: "Tony Hawk's Pro Strcpy（2024-09-03 存档快照）— Wayback Machine", url: "https://web.archive.org/web/20240903175016/https://icode4.coffee/?p=954" },
        { title: "Xbox360BadUpdate README（THAW 入口已弃用，改用 Rock Band Blitz）", url: "https://github.com/grimdoomer/Xbox360BadUpdate" }
      ]
    },
    {
      date: "2024-07",
      dateLabel: "2024年7月",
      title: "Xbox 360 商店关闭",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2024 年 7 月 29 日，微软按 2023 年 8 月的公告停止 Xbox 360 Store 与 Xbox 360 Marketplace 的新内容购买，Microsoft Movies & TV 应用也随之在 360 上失效，已购买内容仍可下载与游玩。数字商店的关闭使离线保存、自制系统与备份光盘的价值被重新讨论，也让 RGH 主机上的 FreeStyle Dash、ISO 运行等能力在社区中重新活跃。",
      sources: [
        { title: "The Xbox 360 Store Will Close July 2024 — Xbox Wire", url: "https://news.xbox.com/en-us/2023/08/17/xbox-360-store-will-close-july-2024/" },
        { title: "Xbox 360: Scene History — consolemods.org", url: "https://consolemods.org/wiki/Xbox_360:Scene_History" }
      ]
    },
    {
      date: "2025-02",
      dateLabel: "2025年2月",
      title: "BadUpdate 纯软件破解发布",
      category: "软破",
      exploit: "BadUpdate (grimdoomer / Ryan Miceli)",
      cve: "",
      firmware: "dashboard 2.0.17559（全机型，含 Winchester；需 FAT32 U 盘 + 支持的触发游戏）",
      description: "2025 年 2 月 grimdoomer 发布 BadUpdate：先用游戏存档漏洞（THAW，后改为 Rock Band Blitz）从用户态进入内核态，再攻击 hypervisor 的加密内存机制——通过 HvxEncryptedReserveAllocation 与 HvxEncryptedEncryptAllocation 为同一物理页建立“加密/明码双视图”，从而为任意明文生成对应密文，并用 HvxKeysExGetKey 与 HvxKeysExSetKey 组成任意地址的 memcpy 原语。由于每页加密所用的 whitening 值只有 10 bit（1024 种可能），可以暴力枚举命中后用 DMA 覆盖只读的内核代码页（例如 bootanim.xex 的代码段），最终取得 hypervisor 级代码执行并运行未签名的 default.xex。它只支持 17559 这一个（也是最后一个）系统版本，且严格非持久化：关机或重启后必须重新触发，作者本人称其为 proof of concept，明确不建议用它替代 RGH。",
      sources: [
        { title: "grimdoomer/Xbox360BadUpdate（README：17559、非持久化、Winchester 可用）", url: "https://github.com/grimdoomer/Xbox360BadUpdate" },
        { title: "Hacking the Xbox 360 Hypervisor Part 2: The Bad Update Exploit（2025-03-03）", url: "https://icode4.coffee/?p=1081" },
        { title: "Bad Update Hack — free60 wiki（2025 年 2 月发布、三种存档入口）", url: "https://free60.org/Hacks/Bad_Update_Hack/" }
      ]
    },
    {
      date: "2025-03",
      dateLabel: "2025年3月",
      title: "BadUpdate 工具链成熟",
      category: "工具与生态",
      exploit: "FreeMyXe / ABadAvatar / DaTArrest / XeUnshackle",
      cve: "",
      firmware: "dashboard 2.0.17559",
      description: "2025 年 3 月起社区迅速补齐 BadUpdate 的易用性：InvoxiPlayGames 的 FreeMyXe 提供加载器界面与提示，shutterbug2000 的 ABadAvatar 用 dashboard 头像存档做入口（不再需要实体游戏光盘），RBEnhanced 与 ihatecompvir 的 DaTArrest 则利用 Rock Band Blitz 试玩版。Byrom90 的 XeUnshackle 进一步把 xeBuild 风格的 HV+kernel 补丁集、Dash Launch 与插件加载、CPUKey/DVDKey 显示、甚至 2TB 存储解锁打包进这套临时环境，TheVisu 等人也维护了改进分支。于是“软破 + 完整自制体验”在 17559 上第一次变得可用，尽管每次开机仍需重新触发漏洞。",
      sources: [
        { title: "Byrom90/XeUnshackle（BadUpdate 用的完整补丁与 Dashlaunch 环境）", url: "https://github.com/Byrom90/XeUnshackle" },
        { title: "shutterbug2000/ABadAvatar（dashboard 头像存档入口）", url: "https://github.com/shutterbug2000/ABadAvatar" },
        { title: "TheVisu/Xbox360BadUpdateUpdate（社区改进分支）", url: "https://github.com/TheVisu/Xbox360BadUpdateUpdate" }
      ]
    },
    {
      date: "2025-09",
      dateLabel: "2025年9月",
      title: "RGH 1.3 改善 Phat 主机开机成功率",
      category: "硬破",
      exploit: "RGH 1.3（wurthless-elektroniks）",
      cve: "",
      firmware: "Fat 主板（Falcon、Jasper 等难改批次）",
      description: "2025-09-29 社区发布 RGH 1.3：针对 RGH 3.0 在部分 Phat 主机（尤其 Falcon、Jasper 等「难改」批次）上开机成功率低、需要反复重启的问题，改用更激进的 glitch 时序与更精细的监测逻辑，让这些机器也能快速稳定启动。项目在 GitHub 上以开源工具与配置的形式发布，并持续更新到 2026 年 9 月。它说明 360 的硬破并没有在 RGH 3.0 之后停步，而是转向「榨干最后一批顽固主板」的调优工作。",
      sources: [
        { title: "GitHub: wurthless-elektroniks/RGH1.3（Aggressive glitching for fat Xbox 360s）", url: "https://github.com/wurthless-elektroniks/RGH1.3" },
        { title: "BiteYourConsole: Rilasciato RGH1.3 per Xbox 360 Fat（2025-09-29）", url: "https://www.biteyourconsole.net/2025/09/29/scena-xbox-360-rilasciato-rgh1-3-per-xbox-360-fat-glitch-piu-rapidi-e-affidabili-per-console-difficili/" },
        { title: "Logic-Sunrise: RGH1.3 pour Xbox 360 Fat, plus rapide et plus fiable", url: "https://www.logic-sunrise.com/forums/topic/107543-xb360-rgh13-pour-xbox-360-fat-plus-rapide-et-plus-fiable/" }
      ]
    },
    {
      date: "2026-08",
      dateLabel: "2026年8月",
      title: "BadUpdate 1.3：漏洞触发近乎瞬时并加入恢复模式",
      category: "软破",
      exploit: "BadUpdate v1.3（grimdoomer，第三阶段改进来自 kmx360）",
      cve: "",
      firmware: "dashboard 2.0.17559（全机型，需 FAT32 U 盘 + Rock Band Blitz 正式版或试玩版）",
      description: "2026-08-05 grimdoomer 发布 BadUpdate v1.3：采用 kmx360 的第三阶段改进、把第二阶段 ROP 链重写为密文查表、新增 hypervisor 覆写完成检测，使漏洞触发「瞬时完成、理论上 100% 可靠」，基本消除了 1.0/1.2 时代需要反复等待或重试的问题。新版还加入启动动画恢复模式：如果用户曾把 bootanim.xex 换成未签名文件导致 BadUpdate 再也无法运行，工具会检测到这一情况并在重启时用内置的干净副本覆盖，恢复了软件侧的自救能力。代价是彻底放弃 Tony Hawk's American Wasteland 入口，只保留 Rock Band Blitz；同期社区提供 BadStick V2.1（2026-03）等一键装机工具，明显改善了这套非持久化软破的开箱体验。",
      sources: [
        { title: "GitHub: Xbox360BadUpdate v1.3 发布说明（2026-08-05）", url: "https://github.com/grimdoomer/Xbox360BadUpdate/releases/tag/BadUpdate-v1.3" },
        { title: "GenerationAmiga: Xbox 360 Bad Update 1.3 delivers an instant exploit and recovery mode", url: "https://www.generationamiga.com/2026/08/06/xbox-360-bad-update-1-3-delivers-an-instant-exploit-and-recovery-mode/" },
        { title: "GitHub: LxcyDr0p/BadStick V2.1-Stable（BadUpdate 自动装机工具）", url: "https://github.com/LxcyDr0p/BadStick" }
      ]
    }
  ]
});
