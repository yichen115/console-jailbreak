window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "switch-v1",
  name: "Nintendo Switch（V1 / Erista）",
  family: "Switch",
  released: "2017-03",
  status: "截至 2026 年 10 月，未做过 ipatch 的早期 V1（Erista）依然是 Switch 家族唯一可以纯软件、免焊接永久破解的机型，且与系统固件版本无关；2018 年年中以后出厂的机器只能依靠焊接芯片或 MiG Switch 这类硬件方案。软件侧仍在持续更新：Atmosphère 1.12.0 于 2026 年 9 月 27 日发布，已支持 Switch 1 的最新系统固件 23.0.0（该版本同时修掉了 CVE-2026-82079），Hekate 也在 2026 年 9 月同步维护。与此同时，2026 年 7 月出现了不依赖 WebKit 与存档漏洞、可离线触发的通用 userland 漏洞（同时适用于 Switch 1/2），但它仍止步于应用沙箱，无法提权到内核；对 V1 而言，实际主流玩法仍是 RCM 注入 payload → Hekate → emuMMC 上的 Atmosphère。",
  summary: "Switch V1 的破解史呈现罕见的两极结构：2017 年发售后十余天就出现浏览器软破（PegaSwitch），2018 年 4 月公开的 Fusée Gelée（CVE-2018-6242）更是 SoC 级 BootROM 缺陷，无法通过固件更新修补，使早期 Erista 成为“永久可破”的机型。任天堂只能用硬件修订应对——2018 年年中的 ipatch 与 2019 年的 Mariko 相继封堵，此后新机型只能依赖 SX Core、HWFLY、Picofly 等故障注入芯片。软件路线上，围绕 ipatched 机型留下了 Jamais vu、Déjà Vu、Caffeine、Nereba 等 TrustZone/warmboot 利用链，但适用范围始终止步于 4.1.0。生态与法律两条线同时推进：Atmosphère、Hekate、emuMMC 构成开源标准，SX OS 代表商业化，而 Team Xecuter 案与 Bowser 的判刑则成为整个破解产业的转折点。这条主线一直延伸到 2026 年：任天堂把打击重点转向烧录卡、模拟器仓库与盗版站点，而 V1 用户只需等待 Atmosphère 跟上最新固件（2026 年 9 月已适配 23.0.0）即可继续沿用同一套流程。",
  events: [
    {
      date: "2017-03",
      dateLabel: "2017年3月",
      title: "Switch V1（Erista）发售，Tegra X1 埋下伏笔",
      category: "工具与生态",
      exploit: "NVIDIA Tegra X1 (T210) / RCM 恢复模式",
      cve: "",
      firmware: "1.0.0 首发固件",
      description: "2017 年 3 月 3 日任天堂发售初代 Nintendo Switch（型号 HAC-001，后来被社区称为 V1 或 Erista），SoC 为 NVIDIA Tegra X1（T210）。Tegra 芯片自带一个 USB 恢复模式（RCM），用于产线烧录与救砖，正常情况下只接受签名镜像。这个恢复模式在一年后成为整台机器破解史的起点：缺陷位于 BootROM，任天堂无法用系统更新修补，只能更换硬件。2019 年 7 月上市的续航加强版改用 Tegra X1+（Mariko），才从芯片层面把这条路径封死。",
      sources: [
        { title: "Wikipedia: Nintendo Switch", url: "https://en.wikipedia.org/wiki/Nintendo_Switch" },
        { title: "hacks.guide: Nintendo Switch 机型与破解概览", url: "https://wiki.hacks.guide/wiki/Nintendo_Switch" }
      ]
    },
    {
      date: "2017-03",
      dateLabel: "2017年3月",
      title: "PegaSwitch 公开：首个浏览器 WebKit 软破链",
      category: "软破",
      exploit: "PegaSwitch",
      cve: "CVE-2016-4657",
      firmware: "1.0.0 – 3.0.0",
      description: "发售仅十余天后，ReSwitched 团队（SciresM 等）就公开了 PegaSwitch 工具包，其仓库创建于 2017 年 3 月 14 日。它利用 Switch 内置浏览器 / 网页小程序（web applet）里的 WebKit 漏洞实现用户态代码执行，需要把主机的 DNS 指向攻击者搭建的服务器，诱导浏览器访问恶意页面。PegaSwitch 本身不能直接启动自制程序，但它把网页变成了稳定入口，为后续的内核与 TrustZone 利用提供了第一级跳板。任天堂在 3.0.0 之后的固件中修补了该漏洞，这条路线的适用范围被永久限定在早期固件上。",
      sources: [
        { title: "reswitched/pegaswitch (GitHub)", url: "https://github.com/reswitched/pegaswitch" },
        { title: "SwitchBrew: Homebrew Exploits（Switch 漏洞与自制入口清单）", url: "https://switchbrew.org/wiki/Homebrew_Exploits" },
        { title: "NVD: CVE-2016-4657", url: "https://nvd.nist.gov/vuln/detail/CVE-2016-4657" }
      ]
    },
    {
      date: "2018-01",
      dateLabel: "2018年1月",
      title: "Jamais vu：1.0.0 的 TrustZone 代码执行漏洞",
      category: "软件漏洞",
      exploit: "Jamais vu",
      cve: "",
      firmware: "1.0.0",
      description: "ReSwitched 团队公开了 Jamais vu，一个针对 1.0.0 固件的 TrustZone 热启动（warmboot）漏洞，可以在安全监控器（Secure Monitor）层面取得代码执行。它能覆盖的只有最初发售的固件，实用价值有限，但首次证明 Switch 的 TrustZone 存在可被用户态链条利用的缺陷。这条“warmboot 路线”后来被 Déjà Vu 与 Caffeine 发扬光大，成为被封堵机型唯一的软破希望。",
      sources: [
        { title: "r/SwitchHacks: Jamais vu, a 1.0.0 TrustZone code execution exploit", url: "https://www.reddit.com/r/SwitchHacks/comments/7rq0cu/jamais_vu_a_100_trustzone_code_execution_exploit/" },
        { title: "SwitchBrew: Homebrew Exploits（Switch 漏洞与自制入口清单）", url: "https://switchbrew.org/wiki/Homebrew_Exploits" }
      ]
    },
    {
      date: "2018-01",
      dateLabel: "2018年1月",
      title: "Atmosphère 项目公开，开源 CFW 路线确立",
      category: "工具与生态",
      exploit: "Atmosphère",
      cve: "",
      firmware: "全部机型（后续版本覆盖 ipatched 与 Mariko）",
      description: "SciresM 主导的 Atmosphère 项目于 2018 年 1 月 18 日公开仓库，定位是“定制固件组件集合”：不修改系统分区，而是通过引导器加载并在运行时打补丁，因此保留可回退、可审计的特性。它明确不内置商业游戏备份加载功能，与后来商业化的 SX OS 形成路线对比。此后 emuMMC、Daybreak 等关键组件都由该项目产出，Atmosphère 逐渐成为 Switch 破解事实上的标准固件。",
      sources: [
        { title: "Atmosphere-NX/Atmosphere (GitHub)", url: "https://github.com/Atmosphere-NX/Atmosphere" },
        { title: "hacks.guide: Nintendo Switch", url: "https://wiki.hacks.guide/wiki/Nintendo_Switch" }
      ]
    },
    {
      date: "2018-02",
      dateLabel: "2018年2月",
      title: "Homebrew Menu 与 NRO 加载器登场",
      category: "工具与生态",
      exploit: "nx-hbmenu / nx-hbloader",
      cve: "",
      firmware: "3.0.0 及以后",
      description: "Switchbrew 团队的 nx-hbmenu 仓库创建于 2018 年 2 月 11 日，nx-hbloader 创建于 2018 年 5 月 2 日，两者共同定义了 Switch 自制程序的标准形态：以 .nro 文件分发，由宿主进程（hbloader）加载，再由图形菜单（hbmenu）启动。这套约定后来被 Atmosphère 直接捆绑分发，成为所有自定义固件的标配组件。它让自制软件生态摆脱了对单一漏洞的依赖，把社区注意力从“如何进入系统”转向“进入系统后能做什么”。",
      sources: [
        { title: "switchbrew/nx-hbmenu (GitHub)", url: "https://github.com/switchbrew/nx-hbmenu" },
        { title: "switchbrew/nx-hbloader (GitHub)", url: "https://github.com/switchbrew/nx-hbloader" }
      ]
    },
    {
      date: "2018-04",
      dateLabel: "2018年4月",
      title: "Fusée Gelée（CVE-2018-6242）公开：不可修补的 RCM 软破",
      category: "硬件漏洞",
      exploit: "Fusée Gelée",
      cve: "CVE-2018-6242",
      firmware: "全部 Erista 机型（2018 年年中 ipatch 之前的批次）",
      description: "Tegra X1 的 BootROM 在 RCM 恢复模式处理 USB 控制传输时，对超长传输的长度校验存在缺陷，可造成越界写入，使攻击者在任何签名校验之前执行任意代码。ReSwitched 的 Kate Temkin 与 fail0verflow 各自独立发现该缺陷，前者按 90 天披露流程向 NVIDIA / Google 报备；由于有第三方提前公开，漏洞于 2018 年 4 月 23 日左右全面曝光。利用条件是“进入 RCM + 由 USB 主机发送 payload”，所以被算作软破，但每次开机都要重新注入，属于典型的 tethered 方案。由于缺陷位于 BootROM，任天堂无法通过固件更新修补，只能修改后续硬件；该漏洞还能导出全部设备密钥、解密 NAND、启动 Linux，并且在不动 eMMC 的情况下几乎不留痕迹。",
      sources: [
        { title: "NVD: CVE-2018-6242", url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6242" },
        { title: "fail0verflow: ShofEL2, a Tegra X1 and Nintendo Switch exploit", url: "https://fail0verflow.com/blog/2018/shofel2/" },
        { title: "Ars Technica: The 'unpatchable' exploit that makes every current Nintendo Switch hackable", url: "https://arstechnica.com/gaming/2018/04/the-unpatchable-exploit-that-makes-every-current-nintendo-switch-hackable/" }
      ]
    },
    {
      date: "2018-04",
      dateLabel: "2018年4月24日",
      title: "ShofEL2 发布：不改机运行 Linux",
      category: "软破",
      exploit: "ShofEL2",
      cve: "CVE-2018-6242",
      firmware: "全部 Erista 机型",
      description: "fail0verflow 在 2018 年 4 月 24 日的博客中发布 ShofEL2，一套基于 Tegra X1 BootROM 缺陷的引导链：coreboot → ARM Trusted Firmware → U-Boot → Linux。使用者只需用导线短接右 Joy-Con 的第 10 脚进入 RCM，再通过 USB 从电脑发送 payload，就能在完全不拆机、不改固件的情况下启动 Linux。博客同时给出可 3D 打印的 RCM 治具与 USB 大控制传输的实现细节。作者直言这个 BootROM 缺陷“太过明显”，迟早会被公开，与其被商业盗版团队抢先，不如自己开源。",
      sources: [
        { title: "fail0verflow: ShofEL2, a Tegra X1 and Nintendo Switch exploit", url: "https://fail0verflow.com/blog/2018/shofel2/" },
        { title: "fail0verflow/shofel2 (GitHub)", url: "https://github.com/fail0verflow/shofel2" }
      ]
    },
    {
      date: "2018-05",
      dateLabel: "2018年5月",
      title: "Hekate：RCM 阶段的图形化引导器",
      category: "工具与生态",
      exploit: "Hekate (CTCaer mod)",
      cve: "",
      firmware: "全部机型",
      description: "CTCaer 维护的 Hekate 仓库创建于 2018 年 5 月 1 日，它运行在 RCM 阶段，提供图形菜单、NAND 备份与还原、emuMMC 启动、熔断丝与 biskey 查看等功能。由于它先于官方引导器运行，用户可以借此跳过会烧断 eFuse 的官方升级流程，也能在系统损坏时用备份恢复。Hekate 通常作为注入的第一个 payload，再链式加载 Atmosphère 的 fusee，构成 V1 破解机的标准启动流程。",
      sources: [
        { title: "CTCaer/hekate (GitHub)", url: "https://github.com/CTCaer/hekate" },
        { title: "SwitchBrew: Switch System Flaws（系统级缺陷汇总）", url: "https://switchbrew.org/wiki/Switch_System_Flaws" }
      ]
    },
    {
      date: "2018-05",
      dateLabel: "2018年5月",
      title: "RCM 注入工具与 payload 生态成形",
      category: "工具与生态",
      exploit: "TegraRcmGUI / TegraRcmSmash / bricc",
      cve: "CVE-2018-6242",
      firmware: "全部 Erista 机型",
      description: "Fusée Gelée 公开后，围绕 RCM 迅速出现一整套注入工具：图形界面的 TegraRcmGUI（仓库创建于 2018 年 5 月 10 日）、命令行工具 TegraRcmSmash，以及能让自制 payload 常驻运行的 bricc 等。配合一个短接 Joy-Con 引脚 10 的治具（jig，可 3D 打印或用回形针自制）与一根 USB-C 数据线，普通用户也能一键注入 Hekate 或 fusee。工具链的成熟把 BootROM 漏洞从研究演示变成可复制的大众玩法，安卓手机与专用 dongle 随后也加入注入设备行列。",
      sources: [
        { title: "eliboa/TegraRcmGUI (GitHub)", url: "https://github.com/eliboa/TegraRcmGUI" },
        { title: "SwitchBrew: Switch System Flaws（系统级缺陷汇总）", url: "https://switchbrew.org/wiki/Switch_System_Flaws" }
      ]
    },
    {
      date: "2018-06",
      dateLabel: "2018年6月",
      title: "SX OS / SX Pro：首个商业化硬破方案",
      category: "硬破",
      exploit: "SX OS + SX Pro 注入器与 RCM 治具",
      cve: "CVE-2018-6242",
      firmware: "全部 Erista 机型（ipatch 之前）",
      description: "Team Xecuter 推出付费自定义固件 SX OS 与配套硬件 SX Pro（USB dongle + RCM 治具），2018 年 6 月起陆续发货，无需电脑即可完成注入并直接运行游戏备份。它把 RCM 软破包装成开箱即用的商品，售价约 35 美元，也因此引发社区道德争论：SX OS 甚至在固件里加入针对他人盗版的检测代码，被 Ars Technica 以“盗版者不希望你去盗版他们的盗版工具”为题报道。这条商业路线让 Team Xecuter 成为任天堂法律打击的首要目标。",
      sources: [
        { title: "Ars Technica: Switch pirates don't want you to pirate their piracy-enabling firmware", url: "https://arstechnica.com/gaming/2018/06/switch-pirates-dont-want-you-to-pirate-their-piracy-enabling-firmware/" },
        { title: "GBAtemp: Official Team-Xecuter SX PRO v1.1 Review", url: "https://gbatemp.net/threads/official-team-xecuter-sx-pro-v1-1-review.508528/" }
      ]
    },
    {
      date: "2018-06",
      dateLabel: "2018年6月",
      title: "官方硬件封堵：2018 年年中起出厂机器已修 BootROM",
      category: "硬件漏洞",
      exploit: "Fusée Gelée 封堵（ipatch）",
      cve: "CVE-2018-6242",
      firmware: "2018 年 6 月以后出厂的 Erista（ipatched）",
      description: "由于 BootROM 无法软件升级，任天堂改用硬件修订：2018 年年中之后出厂的 Erista 主板换上修复版 BootROM，社区称之为 ipatched 机型，这些机器无法再使用 Fusée Gelée。对它们而言，只有停留在 4.1.0 及更低固件的机器还能依靠 TrustZone / warmboot 软破路线；一旦升级到新固件，可走的路就只剩焊接芯片。2019 年 7 月上市的续航加强版改用 Tegra X1+（Mariko），从 SoC 层面彻底断绝了 RCM 软破，V1 早期机型因此成为破解圈里长期溢价的对象。",
      sources: [
        { title: "SwitchBrew: Homebrew Exploits（Fusée Gelée 仅在未修补的早期 Erista 上有效）", url: "https://switchbrew.org/wiki/Homebrew_Exploits" },
        { title: "Nintendo Life: New Standard Nintendo Switch Revision Offers Significantly Improved Battery Life", url: "https://www.nintendolife.com/news/2019/07/new_standard_nintendo_switch_revision_offers_significantly_improved_battery_life" }
      ]
    },
    {
      date: "2018-06",
      dateLabel: "2018年6月",
      title: "ChoiDujour：离线固件升级与降级工具",
      category: "软破",
      exploit: "ChoiDujour / ChoiDujourNX",
      cve: "",
      firmware: "全部机型",
      description: "rajkosto 的 ChoiDujour 仓库创建于 2018 年 6 月 15 日，作用是把官方固件更新包转换成可离线安装的镜像与文件，从而在不联网的情况下升级或降级系统。由于它绕开官方引导器，升级过程中可以避免烧断 eFuse，主机因此保留回到较低固件版本的可能，这正是“固件降级”这条免硬改路线的技术基础。后续的图形化版本 ChoiDujourNX 被写进各类破解教程，直到被 Atmosphère 自带的 Daybreak 取代。",
      sources: [
        { title: "rajkosto/ChoiDujour (GitHub)", url: "https://github.com/rajkosto/ChoiDujour" },
        { title: "switchbrew wiki: Fuses（熔断丝与防降级机制）", url: "https://switchbrew.org/wiki/Fuses" }
      ]
    },
    {
      date: "2018-07",
      dateLabel: "2018年7月",
      title: "AutoRCM：不烧熔断丝的常驻 RCM 方案",
      category: "软破",
      exploit: "AutoRCM",
      cve: "",
      firmware: "全部 Erista 机型",
      description: "Switch 用 eFuse 熔断丝记录固件版本，官方引导器会校验熔断丝数量，数量不符就拒绝启动，以此阻止降级。AutoRCM 的思路是故意破坏 eMMC 中 boot0 的一小段数据，使主机每次开机都直接进入 RCM，永远不运行官方引导器，因而也不会再烧断熔断丝。代价是每次开机都必须重新注入 payload，正常开机流程被彻底放弃。对早期 Erista 用户来说，这是一种用便利性换取“保留降级可能”的典型取舍，2018 年年中起在 Hekate 与 SX OS 中普及。",
      sources: [
        { title: "GBAtemp: AutoRCM with the Nintendo Switch 101", url: "https://gbatemp.net/threads/autorcm-with-the-nintendo-switch-101.515402/" },
        { title: "switchbrew wiki: Fuses（熔断丝与防降级机制）", url: "https://switchbrew.org/wiki/Fuses" }
      ]
    },
    {
      date: "2019-04",
      dateLabel: "2019年4月",
      title: "Nereba：免短接从官方系统重启进 payload",
      category: "软破",
      exploit: "Nereba / PegaScape",
      cve: "",
      firmware: "1.0.0 – 3.0.0",
      description: "ReSwitched 的 Stuckpixel 在 2019 年 4 月公开 Nereba，它利用 warmboot 阶段的内存访问缺陷，通过网页小程序让主机从官方系统直接重启并进入 Fusée Gelée payload，省去每次短接 Joy-Con 引脚、插拔 dongle 的麻烦。它只适用于 3.0.0 及更早固件，覆盖面有限，但后来与 PegaScape 一起被整合成网页入口方案，是“免硬改、纯软件”思路的代表。对绝大多数已经升级到 4.0.0 以上的机器来说，这条路线并不适用。",
      sources: [
        { title: "pixel-stuck/nereba (GitHub)", url: "https://github.com/pixel-stuck/nereba" },
        { title: "GBAtemp: Nereba Exploit - Reboot to Fusée Gelée payload from stock firmware", url: "https://gbatemp.net/threads/nereba-exploit-reboot-to-fusee-gelee-payload-from-stock-firmware.536409/" },
        { title: "SwitchBrew: Homebrew Exploits（Switch 漏洞与自制入口清单）", url: "https://switchbrew.org/wiki/Homebrew_Exploits" }
      ]
    },
    {
      date: "2019-04",
      dateLabel: "2019年4月",
      title: "Déjà Vu 解禁：TrustZone warmboot 漏洞公开",
      category: "软件漏洞",
      exploit: "Déjà Vu",
      cve: "",
      firmware: "1.0.0 – 4.1.0（6.0.0 起部分修补，8.x 完全修补）",
      description: "Déjà Vu 是一个早已知晓却被刻意雪藏的 TrustZone 热启动漏洞：因为任天堂没有把它完全修好，研究者担心提前公开会促使官方补齐，于是保留到 2019 年 4 月才发布。它可以在 4.1.0 及更低固件上取得安全监控器级代码执行，配合浏览器等用户态入口即可运行自定义固件。对无法使用 Fusée Gelée 的 ipatched 机型而言，这条路径意味着只要系统停留在 4.1.0 就仍然能纯软件破解，因此这批机器在二手市场上的价格长期偏高。任天堂在 8.x 固件中彻底修补了该漏洞。",
      sources: [
        { title: "SwitchBrew: Homebrew Exploits（Switch 漏洞与自制入口清单）", url: "https://switchbrew.org/wiki/Homebrew_Exploits" },
        { title: "GBAtemp 讨论帖（Déjà Vu）", url: "https://gbatemp.net/threads/496799/" }
      ]
    },
    {
      date: "2019-06",
      dateLabel: "2019年6月",
      title: "Caffeine：延续到 4.1.0 的 warmboot 利用链",
      category: "软破",
      exploit: "Caffeine",
      cve: "",
      firmware: "1.0.0 – 4.1.0（主要覆盖 2.0.0–3.0.0 与 4.0.1/4.1.0）",
      description: "SciresM 公开的 Caffeine 与 Déjà Vu 同属 warmboot 类漏洞：先用浏览器等用户态入口进入系统，再借助热启动路径中的校验缺陷接管引导流程，从而在 4.1.0 及更低固件上运行 Atmosphère。由于它不依赖 BootROM，ipatched 机型在不焊接芯片的前提下仍然可用，这使它成为封堵机型多年间最主要的软破希望。社区此后不断询问能否把它移植到更高固件，但任天堂在 5.0.0 之后逐步封堵，相关讨论延续到 2020 年代仍无公开成果。",
      sources: [
        { title: "liuervehc/caffeine (GitHub)", url: "https://github.com/liuervehc/caffeine" },
        { title: "GBAtemp: caffeine for 4.1.0 released", url: "https://gbatemp.net/threads/541826/" },
        { title: "GBAtemp: Any update on caffeine? for iPatched switches", url: "https://gbatemp.net/threads/any-update-on-caffine-for-ipatched-switches.581678/" }
      ]
    },
    {
      date: "2019-06",
      dateLabel: "2019年6月",
      title: "emuMMC 引入：破解系统搬进 SD 卡",
      category: "工具与生态",
      exploit: "emuMMC / EmuNAND",
      cve: "",
      firmware: "全部机型",
      description: "Atmosphère 0.9.0 于 2019 年 6 月 16 日发布，首次加入把 NAND 重定向到 SD 卡的功能（emummc，与 m4xw、CTCaer 合作），发布说明中明确标注为 beta/experimental。有了 emuMMC，破解环境可以完整运行在 SD 卡的独立分区或镜像里，机身内置系统保持干净，从而降低变砖与被封禁的风险。此后 V1 破解机的标准架构基本固定为“注入 payload → Hekate → emuMMC 上的 Atmosphère”。",
      sources: [
        { title: "Atmosphère 0.9.0 发布说明（引入 emuMMC）", url: "https://github.com/Atmosphere-NX/Atmosphere/releases/tag/0.9.0" },
        { title: "Atmosphere-NX/Atmosphere Releases", url: "https://github.com/Atmosphere-NX/Atmosphere/releases" }
      ]
    },
    {
      date: "2019-12",
      dateLabel: "2019年12月",
      title: "SX Core / SX Lite：针对封堵机型的注入芯片",
      category: "硬破",
      exploit: "SX Core / SX Lite modchip（故障注入）",
      cve: "",
      firmware: "ipatched Erista、Mariko、Switch Lite",
      description: "面对被封堵的机型，Team Xecuter 在 2019 年 12 月宣布焊接式 modchip：SX Core 面向已封堵的 Erista 与 Mariko，SX Lite 面向 Switch Lite。芯片通过内部排线接入主板，在启动阶段以硬件故障注入（glitch）的方式抢在已被修补的引导校验之前取得执行权，再注入 payload，使这些“软件上无解”的机器重新获得自定义固件能力。原定 2020 年出货，因疫情延期，价格与焊接门槛都很高。它开启了对封堵机型进行硬件破解的新阶段，并催生了后来的 HWFLY 克隆与开源方案。",
      sources: [
        { title: "GBAtemp: Safety and future proofness of SX-Core?", url: "https://gbatemp.net/threads/safety-and-future-proofness-of-sx-core.572522/" },
        { title: "GBAtemp: SX Core Mariko list of non-compatible tools", url: "https://gbatemp.net/threads/sx-core-mariko-list-of-non-compatible-tools.567803/" },
        { title: "华商网（2019-12-16）：任天堂 Switch 遭全线破解", url: "https://digi.hsw.cn/system/2019/1216/130998.shtml" }
      ]
    },
    {
      date: "2020",
      dateLabel: "2020年",
      title: "美国司法部起诉 Team Xecuter 核心成员",
      category: "法律与产业",
      exploit: "Team Xecuter 案",
      cve: "",
      firmware: "",
      description: "美国司法部（西华盛顿州联邦检察官办公室）公布对 Team Xecuter 领导层的刑事指控，Gary Bowser、Max Louarn 与 Yuanan Chen 被控共谋贩卖规避设备、串谋洗钱等多项重罪。Bowser 在多米尼加共和国被捕，Louarn 在坦桑尼亚被捕，Chen 一度在逃。这是游戏机破解史上最重要的刑事追诉之一，也标志着靠销售破解硬件牟利的商业模式进入高风险期。",
      sources: [
        { title: "DOJ: Two members of notorious videogame piracy group 'Team Xecuter' in custody", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" },
        { title: "CTV News: Canadian facing fraud, conspiracy charges in U.S. for alleged role in video game piracy ring", url: "https://www.ctvnews.ca/sci-tech/article/canadian-facing-fraud-conspiracy-charges-in-us-for-alleged-role-in-video-game-piracy-ring/" }
      ]
    },
    {
      date: "2021-05",
      dateLabel: "2021年5月",
      title: "任天堂胜诉 RomUniverse：判赔 210 万美元",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "任天堂对 ROM 下载站 RomUniverse 及其运营者 Matthew Storman 的诉讼在加州中区联邦法院作出判决，站点被判赔偿约 210 万美元并被永久关闭。运营者曾选择自行辩护并拒绝和解，最终赔偿金额远高于早期和解提议。该案与 Team Xecuter 刑事案共同说明，任天堂在 Switch 时代同时对硬件破解、固件工具与内容分发三条链条施压。",
      sources: [
        { title: "VGC: A ROM site owner decided to fight Nintendo in court and lost $2.1 million", url: "https://www.videogameschronicle.com/news/a-rom-site-owner-decided-to-fight-nintendo-in-court-and-lost-2-1-million/" }
      ]
    },
    {
      date: "2021-10",
      dateLabel: "2021年10月",
      title: "Bowser 认罪：Team Xecuter 的对外销售负责人",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "Gary Bowser 就共谋贩卖规避设备与串谋洗钱指控认罪，承认自己负责 Team Xecuter 面向公众的销售与宣传，是团队对外发声的主要人物。与此同时，任天堂在美国西华盛顿州联邦法院对其提起民事诉讼（案号 2:21-cv-00519），刑事与民事两条线同时推进。这类双线追诉后来成为任天堂处理破解产业人员的标准做法。",
      sources: [
        { title: "GamesIndustry.biz: Gary Bowser pleads guilty in Team Xecuter piracy case", url: "https://www.gamesindustry.biz/gary-bowser-pleads-guilty-in-team-xecuter-piracy-case" },
        { title: "CourtListener: Nintendo of America Inc v. Bowser (W.D. Wash. 2:21-cv-00519)", url: "https://www.courtlistener.com/docket/59831145/25/nintendo-of-america-inc-v-bowser/" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Bowser 被判 40 个月，须赔偿任天堂",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "西雅图联邦法院判处 Gary Bowser 40 个月监禁，并判令其向任天堂支付约 1000 万美元赔偿（连同其他受害者合计逾 1400 万美元）。检方与法院认定他是 Team Xecuter 的主要销售者与公众代言人，销售了包括 SX OS、SX Pro、SX Core 在内的整条破解产品线。判决在社区引发关于量刑比例与赔偿金额是否合理的长期争论，但客观上大幅抬高了销售破解硬件的法律成本。",
      sources: [
        { title: "DOJ: Public voice and principal salesperson for notorious videogame piracy group sentenced to 3+ years", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "The Verge: Bowser is going to prison for selling Nintendo Switch hacks", url: "https://www.theverge.com/2022/2/10/22927827/gary-bowser-sentenced-nintendo-switch-hacks-team-xecuter" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "HWFLY / Picofly：开源芯片把硬破成本压到极低",
      category: "硬破",
      exploit: "HWFLY、Picofly（RP2040 故障注入）",
      cve: "",
      firmware: "Mariko、Switch Lite、OLED、ipatched Erista",
      description: "SX Core 因法律打击与停产退出后，HWFLY 克隆芯片与基于 RP2040（树莓派 Pico）的开源项目 Picofly 迅速成为改机主流。这些方案沿用“对 SoC 施加故障注入、抢在引导校验之前执行 payload”的思路，但固件开源、硬件成本低至几美元，安装门槛与价格都大幅下降。其直接后果是 2019 年之后出厂的机型也能以较低成本运行 Atmosphère，早期 V1 机器“纯软件永久可破”的稀缺性相对被削弱。",
      sources: [
        { title: "hwfly-nx/firmware (GitHub Releases)", url: "https://github.com/hwfly-nx/firmware/releases" },
        { title: "GBAtemp: New major updates made in the $3 Pikofly Nintendo Switch modchip project", url: "https://gbatemp.net/threads/new-major-updates-made-in-the-3-pikofly-nintendo-switch-modchip-project.628960/" },
        { title: "lochotzke/picofly (GitHub)", url: "https://github.com/lochotzke/picofly" }
      ]
    },
    {
      date: "2023",
      dateLabel: "2023年",
      title: "Bowser 提前出狱，赔偿义务继续",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "Gary Bowser 在服刑约 14 个月后获释，但由于巨额赔偿判决，他此后部分收入仍需按比例支付给任天堂，形成长期债务。他在采访中表示自己无力偿还，并否认与后来出现的新一代 Switch 烧录卡产品有关。此案因此成为“刑事判决结束、民事赔偿长期化”的典型样本。",
      sources: [
        { title: "GameSpot: Nintendo Hacker Gary Bowser Released From Prison, But He Still Owes A Lot Of Money", url: "https://www.gamespot.com/articles/nintendo-hacker-gary-bowser-released-from-prison-but-he-still-owes-a-lot-of-money/1100-6513332/" }
      ]
    },
    {
      date: "2024",
      dateLabel: "2024年",
      title: "MiG Switch 烧录卡：绕过一切漏洞的硬件路线",
      category: "硬破",
      exploit: "MiG Switch flashcart",
      cve: "",
      firmware: "全部机型（含已封堵机型、Switch Lite 与 OLED）",
      description: "MiG Switch 以“卡带模拟器”的形态出现：把卡带备份写入 SD 卡，再让设备在卡槽中伪装成原装卡带，因此不需要任何漏洞、自定义固件或焊接，对已封堵机型与新款机型同样有效。它的出现把攻防焦点从“攻破系统”转移到“伪造卡带”，也直接招致任天堂在多国提起诉讼，荷兰法院裁定其销售属于规避设备、构成违法。到 2025 年前后，围绕烧录卡的法律战仍在继续，而纯软件破解的突破口依旧停留在 2018 年前出厂的 V1 机器上。",
      sources: [
        { title: "VGC: Jailed Nintendo hacker Gary Bowser denies link to new Switch flash cart", url: "https://www.videogameschronicle.com/news/jailed-nintendo-hacker-gary-bowser-denies-link-to-new-switch-flash-cart/" },
        { title: "DualShockers: Nintendo Wins Dutch Lawsuit Against MIG Switch Cartridges", url: "https://www.dualshockers.com/nintendo-wins-dutch-lawsuit-against-mig-switch-cartridges/" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月",
      title: "PegaSwitch 之外的第三条路：可离线触发的通用 userland 漏洞",
      category: "软破",
      exploit: "Gezine 通用 userland 漏洞（ARM64 ROP，非 WebKit、非存档）",
      cve: "",
      firmware: "Switch 1 全固件版本（理论上不限版本）",
      description: "安全研究者 Gezine（gezine_dev，此前以 PS5 安全研究知名）在 2026 年 7 月公开了一个同时适用于 Switch 1 与 Switch 2 的 userland 漏洞。它与此前的入口有两点本质区别：一是不依赖 WebKit 浏览器漏洞（Switch 2 的 WebKit 已用 ARM PAC 加固），二是不依赖存档注入，因此不需要通过 Nintendo Switch Online 传输存档、也就不会被“必须升级到最新固件”这一环卡住，完全离线即可触发，兼容所有固件版本。利用以 ARM64 ROP 实现受限用户进程内的任意代码执行。需要强调的是它只是 userland 原语：仍被应用沙箱与权限隔离约束，不能运行自制固件、不能玩备份游戏，必须在某个应用/进程的权限内工作，因此对 V1 用户而言它更像“多了一条不依赖网页与存档的入口”，而非取代 RCM 注入的新破解路线。",
      sources: [
        { title: "Notebookcheck: Switch 2 – Developer unveils a universal exploit that works entirely offline", url: "https://www.notebookcheck.net/Switch-2-Developer-unveils-a-universal-exploit-that-works-entirely-offline.1347373.0.html" },
        { title: "Gezine 的原始公开推文（X）", url: "https://x.com/gezine_dev/status/2074894225460822503" }
      ]
    },
    {
      date: "2026-09-10",
      dateLabel: "2026年9月10日",
      title: "CVE-2026-82079：本地无线协议栈溢出，23.0.0 修补",
      category: "软件漏洞",
      exploit: "本地无线通信栈溢出 + ROP（无需联网）",
      cve: "CVE-2026-82079",
      firmware: "23.0.0 之前的所有 Switch 1 固件",
      description: "任天堂把 CVE 编号授予自己并公开了 2026 年唯一一条 Switch 主机漏洞公告：本地无线通信（local wireless）功能中存在栈缓冲区溢出（CWE-121），处于无线信号范围内的攻击者可以用特制网络流量、借助面向返回编程（ROP）执行任意代码。CVSS 3.1 评分 8.4，CVSS 4.0 评分 7.0。任天堂官方的缓解建议颇具提示性：使用相册的“发送到智能手机”功能或《马力欧卡丁车 Live：家庭巡回赛》实体卡丁车时，不要让第三方看到或扫描主机/电视上显示的二维码，也不要使用他人的手机或卡丁车——即攻击面与二维码配对流程有关。该漏洞在 Switch 1 系统固件 23.0.0 中修复，任天堂同时建议用户尽快升级。它对破解史的意义在于：这是 Switch 1 上市九年后官方仍在为无线协议栈打补丁的最新实证。",
      sources: [
        { title: "Nintendo: Security notice for Nintendo Switch and Nintendo Switch 2", url: "https://www.nintendo.com/security-advisories/en/index.html" },
        { title: "CVE-2026-82079（Vulnerability-Lookup 记录）", url: "https://vulnerability.circl.lu/vuln/CVE-2026-82079" }
      ]
    },
    {
      date: "2026-10",
      dateLabel: "2026年10月（现状）",
      title: "现状：固件 23.0.0 与 Atmosphère 1.12.0 同步，V1 仍是唯一纯软破机型",
      category: "工具与生态",
      exploit: "Atmosphère 1.12.0 + fusee + Hekate",
      cve: "",
      firmware: "Switch 1 系统固件 23.0.0 / 23.0.1",
      description: "到 2026 年 10 月，Switch 1 的破解格局与七年前没有本质变化：只有 2018 年年中之前出厂、未做 ipatch 的 Erista（V1）能用 RCM + USB payload 的方式永久破解，且不受系统版本限制。软件维护端保持活跃——Atmosphère 1.12.0 于 2026 年 9 月 27 日发布，加入对 23.0.0 的支持，并把浏览器小程序相关补丁、42 位地址空间、ShadowStack 内存区域等 23.0.0 的新变化一并跟进；Hekate 也在 2026 年 9 月 28 日前后更新。社区提醒改机用户在 Atmosphère/Hekate 与 sysmodule 全部适配前不要急着升级 23.0.x，尤其不要在 emuMMC 上用 Daybreak 盲目更新。与此同时，硬件路线继续分流用户：MiG Switch 这类卡带级烧录卡对全机型（含 Mariko 与 Switch 2）在原理上仍然通用，但荷兰海牙地方法院 2026 年 9 月的裁定已认定面向欧洲消费者销售此类设备违法，渠道进一步收缩。",
      sources: [
        { title: "Atmosphère 1.12.0 发布说明（支持 23.0.0）", url: "https://github.com/Atmosphere-NX/Atmosphere/releases/tag/1.12.0" },
        { title: "Hacks Guide Wiki: Nintendo Switch（推荐 hekate + Atmosphère，最新版本 23.0.0）", url: "https://wiki.hacks.guide/wiki/Nintendo_Switch" },
        { title: "CTCaer/hekate (GitHub)", url: "https://github.com/CTCaer/hekate" }
      ]
    }
  ]
});
