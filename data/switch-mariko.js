window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "switch-mariko",
  name: "Switch 续航版 / Lite / OLED（Mariko）",
  family: "Switch",
  released: "2019-08",
  status: "截至 2026 年 10 月，Mariko 三机型（续航版/Lite/OLED）依然没有任何公开的软件级破解，唯一可行路线仍是焊接 Picofly、HWFLY 类 modchip 后由 Hekate 引导 Atmosphère。2026 年出现了两个值得记录的变化：7 月研究者 Gezine 公开了不依赖 WebKit 与存档漏洞、可完全离线触发的通用 userland 漏洞（同时适用于 Switch 1/2），社区一度把它视为软破希望，但它被限制在应用沙箱内、无法提权到内核，也不受固件版本限制这一点并不能改变 Mariko“无软破”的结论；软件侧 Atmosphère 1.12.0（2026 年 9 月 27 日）已支持最新的 23.0.0 固件，改机用户按社区惯例应等全套组件适配后再升级。法律侧继续收紧：荷兰海牙地方法院 2026 年 9 月裁定面向欧洲消费者销售 MIG Switch 等规避设备违法，任天堂 8 月还一次性下架了 400 多个 Switch 模拟器 GitHub 仓库。",
  summary: "Mariko 机型把 Tegra X1 换成了 Tegra X1+，BootROM 中修掉了 Fusée Gelée（CVE-2018-6242），又把 GMMU、Security Engine 等老漏洞一并堵上，因此 iPatched 时代的“RCM + 注入器”软件路线全线失效。唯一剩下的攻击面是 SoC 上电阶段的硬件故障注入（glitch），于是历史主线从软件漏洞彻底转向焊接 modchip：Team Xecuter 的 SX Core/SX Lite、开源的 Spacecraft-NX 固件、2021 年起的 HWFLY 克隆，到 2022-2023 年基于 RP2040 的低成本 Picofly。同期 Team Xecuter 被美国起诉、Gary Bowser 被判 40 个月，MIG Switch 烧录卡则在 2024 年引爆新一轮诉讼，构成“技术靠硬破、产业靠法务”的双线格局。这条格局延续到 2026 年仍未改变：官方固件已推进到 23.0.0，Atmosphère 1.12.0 同步跟进，而 Mariko 的软件入口依旧为零，攻击面只剩 SoC 上电阶段的故障注入；任天堂则把火力集中到烧录卡销售渠道与模拟器代码仓库上。",
  events: [
    {
      date: "2016-08",
      dateLabel: "2016年8月",
      title: "PegaSwitch 借 WebKit 漏洞实现浏览器攻击",
      category: "软破",
      exploit: "PegaSwitch (CVE-2016-4657)",
      cve: "CVE-2016-4657",
      firmware: "1.0.0 - 3.0.0",
      description: "ReSwitched 团队把当时 iOS 9.3.5 上被 Pegasus 间谍软件使用的 WebKit 内存破坏漏洞（CVE-2016-4657）移植到 Switch 的浏览器 applet，做出了 PegaSwitch 工具包，配合劫持 DNS 让主机访问攻击页面即可获得用户态代码执行。它本身不能直接启动自制程序，但提供了早期 homebrew 环境，并被用于后续内核 exploit 的入口。任天堂在 3.0.0 之后逐步加固浏览器与 whitelist，这条“纯软件”路线在 iPatched/Mariko 上不复存在，此后的 Switch 软破基本集中在 1.0.0-4.1.0 的老固件区间。",
      sources: [
        { title: "GitHub - ReSwitched/PegaSwitch (reswitched/pegaswitch)", url: "https://github.com/ReSwitched/PegaSwitch" },
        { title: "NVD - CVE-2016-4657", url: "https://nvd.nist.gov/vuln/detail/CVE-2016-4657" },
        { title: "SwitchBrew - Homebrew Exploits", url: "https://switchbrew.org/wiki/Homebrew_Exploits" }
      ]
    },
    {
      date: "2018-04",
      dateLabel: "2018年4月",
      title: "Fusée Gelée 公开：BootROM 级 RCM 溢出",
      category: "硬件漏洞",
      exploit: "Fusée Gelée / ShofEL2",
      cve: "CVE-2018-6242",
      firmware: "Tegra X1（HAC-001）全部固件；Mariko 已在硬件上修复",
      description: "Tegra X1 的 BootROM 在 RCM 恢复模式的 USB 栈里存在长度可控的拷贝操作，攻击者用特制 USB control transfer 即可覆盖栈并夺取 BPMP，再把任意代码送上 CCPLEX（通常以 TrustZone Secure Monitor/EL3 权限运行）。因为它位于 BootROM，只能靠硬件改版修复，fail0verflow 与 ReSwitched（Kate Temkin）分别独立发现并于 2018 年 4 月公开 ShofEL2 与 fusée gelée。Nvidia 随后在 Tegra X1+（Tegra210b01，即 Mariko）中修掉了该缺陷，这正是 Mariko 无法沿用 RCM 注入器的根本原因。",
      sources: [
        { title: "fail0verflow :: ShofEL2, a Tegra X1 and Nintendo Switch exploit", url: "https://fail0verflow.com/blog/2018/shofel2/" },
        { title: "NVD - CVE-2018-6242", url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6242" },
        { title: "SwitchBrew - Switch System Flaws", url: "https://switchbrew.org/wiki/Switch_System_Flaws" }
      ]
    },
    {
      date: "2018-12",
      dateLabel: "2018年12月",
      title: "warmboot 参数校验缺陷可任意写 BootROM",
      category: "硬件漏洞",
      exploit: "SDRAM 配置参数任意写（warmboot）",
      cve: "",
      firmware: "Tegra X1（HAC-001）；Mariko 已修复",
      description: "Tegra X1 BootROM 在解析深睡唤醒（warmboot）保存的 SDRAM 配置参数时，对 EmcBctSpareN 之类的字段既不校验地址也不校验取值，直接执行写入；同时 BootromPatch 参数也缺少相对偏移检查。只要攻击者能改写 PMC 寄存器里的这些参数并触发 warmboot，就能在 BootROM 语境拿到任意写乃至任意代码执行。Mariko 通过增加校验修掉了它，这也说明 X1+ 的硬件加固是成套的，不止 Fusée Gelée 一处。",
      sources: [
        { title: "SwitchBrew - Switch System Flaws", url: "https://switchbrew.org/wiki/Switch_System_Flaws" },
        { title: "fail0verflow :: ShofEL2, a Tegra X1 and Nintendo Switch exploit", url: "https://fail0verflow.com/blog/2018/shofel2/" }
      ]
    },
    {
      date: "2019-06",
      dateLabel: "2019年6月",
      title: "Atmosphère 0.9.0 预告对新硬件 Revision 的支持",
      category: "工具与生态",
      exploit: "Atmosphère CFW",
      cve: "",
      firmware: "Switch 全系",
      description: "SciresM 主导的 Atmosphère 在 0.9.0 版本说明中加入了对新硬件 Revision（即后来确认的 Mariko/Tegra X1+）的支持，同时统一了引导流程与内核补丁框架。它是 Mariko 上唯一长期维护的开放自制固件，此后无论 SX Core、HWFLY 还是 Picofly，社区推荐路线都是“modchip 引导 → Hekate → Atmosphère”。官方只做临时性内存补丁（不落盘），因此串号、eMMC 内容得以保持干净。",
      sources: [
        { title: "GitHub - Atmosphere-NX/Atmosphere Release 0.9.0", url: "https://github.com/Atmosphere-NX/Atmosphere/releases/tag/0.9.0" },
        { title: "GitHub - Atmosphere-NX/Atmosphere", url: "https://github.com/Atmosphere-NX/Atmosphere" }
      ]
    },
    {
      date: "2019-07",
      dateLabel: "2019年7月",
      title: "Nintendo Switch Lite 发表（Mariko 首款机型）",
      category: "硬件漏洞",
      exploit: "Nintendo Switch Lite（HDH-001）",
      cve: "",
      firmware: "预装 8.x 以上固件",
      description: "任天堂于 2019 年 7 月 10 日发表掌机专用的 Switch Lite，9 月 20 日发售，采用 Tegra X1+（Mariko）与一体化手柄设计。因为 Lite 无法进入 RCM（缺少 Joy-Con 滑轨与 RCM 触发电路）、且 BootROM 已修复，从发售起就不存在 fusée gelée 注入方案，唯一出路是主板焊接 modchip。Lite 也因此成为“焊接改机”需求最集中的机型之一，后来 Picofly 的 Lite 专用小板正是围绕它的主板布局设计的。",
      sources: [
        { title: "任天堂新闻稿：Nintendo Switch Lite 登场（2019年7月10日）", url: "https://www.nintendo.co.jp/corporate/release/2019/190710.html" }
      ]
    },
    {
      date: "2019-08",
      dateLabel: "2019年8月",
      title: "续航版上市：Tegra X1+ 封堵 Fusée Gelée",
      category: "硬件漏洞",
      exploit: "Tegra X1+ (Tegra210b01) 硬件改版",
      cve: "CVE-2018-6242",
      firmware: "HAC-001(-01) 及后续所有机型",
      description: "2019 年 8 月起出货的续航版（HAC-001(-01)）换用 Tegra X1+，同时把 GMMU DMA 限制、Security Engine 上下文保护、BootROM 参数校验与 RCM USB 栈溢出一并修好，主板代号 Mariko。这意味着此前所有依赖 RCM 的软件破解（注入器、dongle、纯软件 payload）在这一代完全失效，破解门槛直接抬升到“必须动烙铁”。任天堂也无法通过固件更新改动已流出的硬件，因此后续 Lite、OLED 沿用同一颗 SoC，攻击面始终保持“只有 glitch”这一条。",
      sources: [
        { title: "SwitchBrew - Switch System Flaws", url: "https://switchbrew.org/wiki/Switch_System_Flaws" },
        { title: "fail0verflow :: ShofEL2, a Tegra X1 and Nintendo Switch exploit", url: "https://fail0verflow.com/blog/2018/shofel2/" },
        { title: "NVD - CVE-2018-6242", url: "https://nvd.nist.gov/vuln/detail/CVE-2018-6242" }
      ]
    },
    {
      date: "2019-08",
      dateLabel: "2019年8月",
      title: "Hekate 更新支持新硬件，成为通用引导器",
      category: "工具与生态",
      exploit: "hekate",
      cve: "",
      firmware: "全机型全固件",
      description: "CTCaer 维护的 hekate 引导器在 2019 年的更新中加入了对新硬件（Mariko）的支持与对应的 emuMMC、payload 链式加载能力，此后成为 modchip 方案的标准中间层：芯片先注入 hekate，再由 hekate 启动 Atmosphère 或原厂固件。对 Mariko 用户来说，emuNAND（把系统镜像放 microSD）几乎是标配，可把改机痕迹与真实 eMMC 隔离。",
      sources: [
        { title: "GitHub - CTCaer/hekate", url: "https://github.com/CTCaer/hekate" }
      ]
    },
    {
      date: "2020-04",
      dateLabel: "2020年上半年",
      title: "SX Core / SX Lite 送测：首款 Mariko 硬破芯片",
      category: "硬破",
      exploit: "SX Core / SX Lite",
      cve: "",
      firmware: "全固件，面向 Mariko（续航版/Lite）",
      description: "Team Xecuter 在 2020 年上半年把 SX Core（续航版等 Mariko 主板用的排线版）与 SX Lite（Lite 专用小板）寄给评测者，配套 SX OS 更新提供对 Mariko 的支持。其原理不是软件漏洞，而是在 SoC 上电启动阶段对 BootROM/引导链做硬件故障注入（glitch），从而在签名校验之前接管执行。由于需要拆机焊接（Lite 更要在极小的主板上飞线），它把 Switch 破解从“插注入器”变成了门槛更高的改机生意。",
      sources: [
        { title: "GBAtemp - SX Core and SX Lite being shipped to reviewers and testers", url: "https://gbatemp.net/threads/sx-core-and-sx-lite-being-shipped-to-reviewers-and-testers-retail-packaging-revealed.564514/" },
        { title: "TechBriefly - Hacking Nintendo Switch: SX Core and SX Lite review", url: "https://techbriefly.com/2020/06/19/hacking-nintendo-switch-sx-core-and-sx-lite-review/" },
        { title: "GBAtemp - SX Core and SX Lite, test units received", url: "https://gbatemp.net/threads/sx-core-and-sx-lite-test-units-received.565210/" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "Team Xecuter 成员被捕并被起诉",
      category: "法律与产业",
      exploit: "Team Xecuter 刑事诉讼",
      cve: "",
      firmware: "",
      description: "美国司法部与 ICE/HSI 于 2020 年 10 月 2 日公布起诉书，指 Team Xecuter 是一个跨国犯罪企业，Max Louarn、Yuanning Chen、Gary Bowser 三人被控 11 项重罪，包括电信欺诈共谋、规避技术措施并贩运规避设备、洗钱共谋等；产品线涵盖 Gateway 3DS、Stargate、TrueBlue Mini、Classic2Magic 与 SX OS/SX Pro/SX Lite/SX Core。Louarn 与 Bowser 于 2020 年 9 月在境外被捕，Bowser 被从多米尼加共和国驱逐后在美国出庭。此案直接导致 SX 系列芯片停产、SX OS 停止更新。",
      sources: [
        { title: "ICE - ICE investigation leads to the arrest of 2 members of notorious \"Team Xecuter\" videogame piracy group", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" },
        { title: "justice.gov - Two members of notorious videogame piracy group \"Team Xecuter\" in custody", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" }
      ]
    },
    {
      date: "2021-01",
      dateLabel: "2021年1月",
      title: "Spacecraft-NX 开源固件替代 SX 芯片固件",
      category: "工具与生态",
      exploit: "Spacecraft-NX",
      cve: "",
      firmware: "SX Core / SX Lite 硬件",
      description: "Team Xecuter 崩盘后，社区把 SX Core/Lite 芯片重新刷成开源的 Spacecraft-NX 固件，使其不再依赖 SX OS 与授权机制，可直接输出 hekate 等 payload。它衍生出 Spacecraft-NX-Mod 等多个分支，也让“芯片硬件还能用、闭源固件被替换”成为后续 HWFLY 生态的基础。对 Mariko 用户而言，这是从“付费闭源授权”转向开放自制生态的关键一步。",
      sources: [
        { title: "GitHub - Spacecraft-NX/firmware", url: "https://github.com/Spacecraft-NX/firmware" },
        { title: "GitHub - Xnopyt/Spacecraft (Spacecraft-NX-Mod 分支)", url: "https://github.com/Xnopyt/Spacecraft" }
      ]
    },
    {
      date: "2021-10",
      dateLabel: "2021年10月",
      title: "Switch OLED 发售，硬件结构与 Mariko 同源",
      category: "硬破",
      exploit: "Nintendo Switch OLED（HEG-001）",
      cve: "",
      firmware: "预装 12.x/13.x 固件",
      description: "任天堂于 2021 年 7 月 6 日公布、10 月 8 日发售 Switch OLED，SoC 仍是 Tegra X1+（Mariko），因此同样没有 Fusée Gelée 可用，破解只能靠焊接 modchip。OLED 版主板布局与续航版不同、屏蔽罩与排线更紧凑，安装难度高于旧款，很快催生了专用安装教程与更细的排线设计。它的上市也说明任天堂在硬件层面已放弃改动，转而依赖固件与法务两条线。",
      sources: [
        { title: "任天堂（香港）公告：OLED 款式 2021年10月8日发售", url: "https://www.nintendo.com.hk/support/information/2021/210706/index_sc.html" },
        { title: "GBAtemp - Video shows OLED Nintendo Switch using HWFLY SX clone modchip, can boot Hekate", url: "https://gbatemp.net/threads/video-shows-oled-nintendo-switch-using-hwfly-sx-clone-modchip-can-boot-hekate.601198/" }
      ]
    },
    {
      date: "2021-12",
      dateLabel: "2021年12月",
      title: "HWFLY 克隆芯片接棒，成为主流 modchip",
      category: "硬破",
      exploit: "HWFLY (SX Core 克隆)",
      cve: "",
      firmware: "全固件，续航版/Lite/OLED",
      description: "SX 芯片停供后，HWFLY 系列以克隆 SX Core 硬件设计加独立固件的方式填补市场，2021 年末起已有在 OLED 上用它引导 hekate 的实测与视频。它沿用同一套 glitch 思路，通过排线在 SoC 关键测试点上做时序注入，绕过启动校验。由于价格与安装难度仍偏高、固件质量参差，社区随后推动 hwfly-nx 等开源固件统一升级路径。",
      sources: [
        { title: "GBAtemp - Video shows OLED Nintendo Switch using HWFLY SX clone modchip, can boot Hekate", url: "https://gbatemp.net/threads/video-shows-oled-nintendo-switch-using-hwfly-sx-clone-modchip-can-boot-hekate.601198/" },
        { title: "GitHub - hwfly-nx/firmware", url: "https://github.com/hwfly-nx/firmware" },
        { title: "GBAtemp - My First OLED HWFLY Installation, and a Few Thoughts", url: "https://gbatemp.net/threads/my-first-oled-hwfly-installation-and-a-few-thoughts.609301/" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Gary Bowser 被判 40 个月并赔款",
      category: "法律与产业",
      exploit: "Team Xecuter 案判决",
      cve: "",
      firmware: "",
      description: "Gary Bowser 认罪后于 2022 年 2 月被判处 40 个月监禁，并承担约 1000 万美元的判决金额（含约 450 万美元赔偿），任天堂另与其达成协议，要求其出狱后按收入的 25%-30% 长期偿还。检方称 Team Xecuter 造成的损失超过 6500 万美元，此案被广泛视为主机破解产业化的标志性判决。判决对 Mariko modchip 生态的直接效果是把业务进一步推向匿名、分散的克隆与小厂生产。",
      sources: [
        { title: "Eurogamer - Nintendo hacker Gary Bowser sentenced to over three years in jail", url: "https://www.eurogamer.net/gary-bowser-gets-more-than-three-years-in-jail" },
        { title: "justice.gov - Public voice and principal salesperson for notorious videogame piracy group sentenced to 3+ years", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "ICE - Team Xecuter 逮捕与起诉新闻稿", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" }
      ]
    },
    {
      date: "2022-06",
      dateLabel: "2022年（HWFLY 转向 RP2040）",
      title: "HWFLY 转向 RP2040，Picofly 路线成型",
      category: "硬破",
      exploit: "HWFLY RP2040 新版 / Picofly",
      cve: "",
      firmware: "续航版/Lite/OLED 全固件",
      description: "2022 年前后，HWFLY 新批次开始改用基于 RP2040 的方案，社区也出现以 RP2040-Zero 等廉价开发板运行的 Picofly 固件项目，把同一套 glitch 时序实现做成开源、可自行刷写的版本。RP2040 芯片成本极低、供货充足，使整机改造成本从上百美元降到几十美元级别，Mariko 硬破从此进入“白菜价”阶段。代价是安装对飞线长度与时序参数更敏感，翻车与变砖案例也明显增多。",
      sources: [
        { title: "GBAtemp - No more old HWFLY CHIP new rev on RP2040", url: "https://gbatemp.net/threads/no-more-old-hwfly-chip-new-rev-on-rp2040.632243/" },
        { title: "GitHub - lochotzke/picofly", url: "https://github.com/lochotzke/picofly" },
        { title: "GBAtemp - Picofly - a HWFLY switch modchip", url: "https://gbatemp.net/threads/picofly-a-hwfly-switch-modchip.622701/" }
      ]
    },
    {
      date: "2022-11",
      dateLabel: "2022年11月",
      title: "公开系统漏洞不少，却没有软破链条",
      category: "软件漏洞",
      exploit: "wifi/Bluetooth/SSL 等服务层漏洞（无完整利用链）",
      cve: "CVE-2021-43527, CVE-2017-9417, CVE-2017-0785",
      firmware: "5.0.0 - 16.0.0 区间的多个固件",
      description: "以 yellows8、hexkyz 等人维护的公开清单看，Switch 在固件与服务层积累了大量可提权或可 ROP 的缺陷：wifi 芯片固件的 Broadpwn（CVE-2017-9417）、bluetooth 服务多处栈溢出、hid/wlan 的服务越界与堆溢出、ssl 模块的 CVE-2021-43527 等，修复分散在 4.0.0 到 16.0.0 的各个版本。但这些都是单点原语：要么需要额外信息泄露与内核原语串联，要么由官方在下一版固件里直接补掉，从未形成“用户态 → 内核 → 固化 CFW”的公开链条。加上 Erista 上存在无法修补的 BootROM 漏洞，研究者普遍选择不在公开渠道发布可用的完整软破链，这也解释了为什么 Mariko 至今没有任何软件破解。",
      sources: [
        { title: "SwitchBrew - Switch System Flaws", url: "https://switchbrew.org/wiki/Switch_System_Flaws" },
        { title: "SwitchBrew - Homebrew Exploits", url: "https://switchbrew.org/wiki/Homebrew_Exploits" },
        { title: "NVD - CVE-2021-43527", url: "https://nvd.nist.gov/vuln/detail/CVE-2021-43527" },
        { title: "NVD: CVE-2017-9417", url: "https://nvd.nist.gov/vuln/detail/CVE-2017-9417" },
        { title: "NVD: CVE-2017-0785", url: "https://nvd.nist.gov/vuln/detail/CVE-2017-0785" }
      ]
    },
    {
      date: "2023-01",
      dateLabel: "2023年1月",
      title: "Picofly 走红：RP2040 低价 modchip 普及",
      category: "硬破",
      exploit: "Picofly (RP2040 glitch)",
      cve: "",
      firmware: "Mariko 全固件",
      description: "Picofly 在 2023 年初成为社区讨论与装机量最大的方案：用不到十美元的 RP2040 开发板（如 RP2040-Zero）刷入固件，焊接 DAT/CLK/CMD 等测试点后，在 SoC 上电瞬间对关键时序做故障注入，使 BootROM 跳过校验并进入 hekate。它与 HWFLY 克隆芯片共用同类攻击面，但开源且可自行编译、调参，催生了大量机型专用固件与安装指南。至此 Mariko 的“硬破”从厂家产品变成 DIY 生态。",
      sources: [
        { title: "GBAtemp - Picofly - a HWFLY switch modchip", url: "https://gbatemp.net/threads/picofly-a-hwfly-switch-modchip.622701/" },
        { title: "GitHub - lochotzke/picofly", url: "https://github.com/lochotzke/picofly" },
        { title: "GitHub - hwfly-nx/firmware", url: "https://github.com/hwfly-nx/firmware" }
      ]
    },
    {
      date: "2023-05",
      dateLabel: "2023年5月",
      title: "任天堂 DMCA 集中打击解密工具",
      category: "法律与产业",
      exploit: "DMCA takedown（Lockpick_RCM、模拟器项目）",
      cve: "",
      firmware: "",
      description: "在《塞尔达传说：王国之泪》发售前后，任天堂集中对 Switch 解密与模拟相关项目发出 DMCA 通知，Lockpick_RCM 等 key 提取工具的 GitHub 仓库被下架（访问返回 451），部分模拟器项目与聊天服务器也受波及；类似的清理在 2021 年 Lockpick 相关工具首次下架时就已开始。由于 Mariko 的改机流程普遍需要主机密钥来做 emuMMC 与固件解密，这类工具被清除会直接抬高新用户的上手成本，社区只能转向镜像与 fork。它显示任天堂对硬破生态的打击是“打工具链而非只打芯片”。",
      sources: [
        { title: "Ars Technica - Nintendo files DMCA takedowns on Switch emulation tools just before Tears debut", url: "https://arstechnica.com/gaming/2023/05/nintendo-files-dmca-takedowns-on-switch-emulation-tools-just-before-tears-debut/" },
        { title: "Ars Technica - Nintendo targets Switch-emulation chat servers, decryption tools with DMCA", url: "https://arstechnica.com/gaming/2024/04/nintendo-targets-switch-emulation-chat-servers-decryption-tools-with-dmca/" },
        { title: "GBAtemp - Nintendo reportedly issues DMCA takedown for Switch homebrew projects", url: "https://gbatemp.net/threads/nintendo-reportedly-issues-dmca-takedown-for-switch-homebrew-projects-skyline-switch-emulator-development-ceased.632406/" }
      ]
    },
    {
      date: "2023-10",
      dateLabel: "2023年10月",
      title: "固件 17.0.0 打乱 modchip 时序",
      category: "硬破",
      exploit: "Picofly/HWFLY 时序失效（错误码 2002-3539）",
      cve: "",
      firmware: "17.0.0 / 17.0.1",
      description: "2023 年 10 月推送的 17.0.0 改变了启动链的校验行为，导致大量 Picofly、HWFLY 机器在从 hekate 引导原厂固件时出现 2002-3539 报错，部分机器甚至连 OFW 都无法进入。社区通过调整固件时序参数、更新 RP2040 固件与 hekate 版本逐步恢复兼容，个别机器因参数错误或焊接问题彻底黑屏。这一事件凸显硬件 glitch 方案的软肋：攻击必须紧跟官方引导逻辑变化持续标定。",
      sources: [
        { title: "GBAtemp - Picofly Switch error code 2002-3539 in OFW (17.0.0 and 17.0.1)", url: "https://gbatemp.net/threads/picofly-switch-error-code-2002-3539-in-ofw-17-0-0-and-17-0-1.646223/" },
        { title: "GBAtemp - Error 2002-3539 when attempting to boot into OFW from Hekate", url: "https://gbatemp.net/threads/error-2002-3539-when-attempting-to-boot-into-ofw-from-hekate-switch-boots-into-ofw-when-picofly-not-connected.676929/" }
      ]
    },
    {
      date: "2024-02",
      dateLabel: "2024年2月",
      title: "MIG Switch 烧录卡首批出货",
      category: "硬件漏洞",
      exploit: "MIG Switch / MIG Dumper",
      cve: "",
      firmware: "全机型（无需改机）",
      description: "MIG Switch 是一张在卡带总线层面伪装成正版游戏卡的烧录卡，配合 MIG Dumper 把卡带转成 ROM 后即可插卡运行，无需焊接或刷固件，因此对 Mariko 全系同样有效。首批量产单元在 2024 年初寄到评测者手里，随即引发“免改机玩备份”的热潮与大量关于封号、卡带校验、盗版风险的争论。它把 Mariko 的攻击面从 SoC 启动阶段转移到了卡带认证环节，成为任天堂重点打击对象，后续批次加入固件更新与防检测设计。",
      sources: [
        { title: "GBAtemp - Initial Mig Switch flashcart units now available and being tested by reviewers", url: "https://gbatemp.net/threads/initial-mig-switch-flashcart-units-now-available-and-being-tested-by-reviewers.646656/" },
        { title: "GBAtemp - The Switch Flashcart Thread (Mig Switch etc.)", url: "https://gbatemp.net/threads/the-switch-flashcart-thread-mig-switch-etc.651852/" }
      ]
    },
    {
      date: "2024-06",
      dateLabel: "2024年6月",
      title: "任天堂起诉 MIG Switch 相关改机卖家",
      category: "法律与产业",
      exploit: "Nintendo v. Modded Hardware（MIG Switch/modchip 销售）",
      cve: "",
      firmware: "",
      description: "任天堂在美国对经营 Modded Hardware 的改机卖家提起诉讼，指控其销售 modchip 与 MIG Switch 烧录卡等规避设备、构成 DMCA 意义上的规避技术措施与贩运，并主张其助长盗版。被告公开否认指控并决定自行应诉、不再聘请律师，案件因此成为“个人对抗任天堂法务”的标志性案例。这场诉讼把 MIG Switch 这类卡带级烧录设备正式推到司法层面，也让后续卖家的域名与销售渠道面临直接风险。",
      sources: [
        { title: "VGC - Sued Switch modchip seller denies claims, will seemingly take on Nintendo without a lawyer", url: "https://www.videogameschronicle.com/news/sued-switch-modchip-seller-denies-claims-will-seemingly-take-on-nintendo-without-a-lawyer/" },
        { title: "GBAtemp - The Switch Flashcart Thread (Mig Switch etc.)", url: "https://gbatemp.net/threads/the-switch-flashcart-thread-mig-switch-etc.651852/" }
      ]
    },
    {
      date: "2025-09",
      dateLabel: "2025年9月",
      title: "MIG Switch/modchip 卖家被判赔 200 万美元",
      category: "法律与产业",
      exploit: "Nintendo v. Modded Hardware 和解与永久禁令",
      cve: "",
      firmware: "",
      description: "自行应诉的改机卖家最终败诉，与任天堂达成约 200 万美元的和解，并被下达永久禁令：不得再逆向、制造或销售规避设备，不得链接相关资源，同时放弃了相关网站域名。任天堂把这起案件与荷兰法院关于 MIG Switch 的裁定一并宣传为对规避设备销售的胜利。判例效果是进一步压缩了 modchip 与烧录卡的公开销售渠道，把它们推向更隐蔽的小圈子与灰色市场。",
      sources: [
        { title: "GamesIndustry.biz - Nintendo wins $2 million settlement and permanent injunction against Switch pirate", url: "https://www.gamesindustry.biz/nintendo-wins-2-million-settlement-and-permanent-injunction-against-switch-pirate" },
        { title: "Ars Technica - Switch modder owes Nintendo $2 million after representing himself in court", url: "https://arstechnica.com/gaming/2025/09/switch-modder-who-acted-as-his-own-lawyer-now-owes-nintendo-2-million/" },
        { title: "TweakTown - MIG Switch seller who took on Nintendo without a lawyer loses case", url: "https://www.tweaktown.com/news/107659/mig-switch-seller-who-took-on-nintendo-without-a-lawyer-loses-case-will-settle-for-dollars2-million/index.html" }
      ]
    },
    {
      date: "2025-10",
      dateLabel: "2025年10月（现状）",
      title: "现状：只靠硬破，生态与法务双线并行",
      category: "工具与生态",
      exploit: "Atmosphère + hekate + Picofly/HWFLY",
      cve: "",
      firmware: "全固件（Mariko 全机型）",
      description: "到 2025 年，Mariko 三机型的破解结论没有变化：Tegra X1+ 的 BootROM 缺陷无法用固件修补，官方也堵住了软件层入口，唯一可行路线仍是焊接 modchip（Picofly/HWFLY）+ hekate + Atmosphère 的组合。社区持续为最新固件更新签名补丁与时序参数，emuMMC、SD 卡安装与卡带备份成为标准流程；与此同时任天堂的诉讼、DMCA 与账号封禁不断压缩销售渠道，使整个生态维持在灰色地带。",
      sources: [
        { title: "GitHub - Atmosphere-NX/Atmosphere", url: "https://github.com/Atmosphere-NX/Atmosphere" },
        { title: "SwitchBrew - Switch System Flaws", url: "https://switchbrew.org/wiki/Switch_System_Flaws" },
        { title: "GBAtemp - Picofly - a HWFLY switch modchip", url: "https://gbatemp.net/threads/picofly-a-hwfly-switch-modchip.622701/" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月",
      title: "离线通用 userland 漏洞公开，但仍不构成 Mariko 软破",
      category: "软破",
      exploit: "Gezine 通用 userland 漏洞（ARM64 ROP，非 WebKit、非存档）",
      cve: "",
      firmware: "Switch 1 全固件版本（含 Mariko 三机型）",
      description: "2026 年 7 月，安全研究者 Gezine 公开了一个同时适用于 Switch 1 与 Switch 2 的 userland 漏洞。之所以在 Mariko 社区引发关注，是因为它绕开了此前所有 userland 入口的两个死结：不依赖 WebKit（Switch 2 的 WebKit 已用 ARM PAC 拦住 ROP 链），也不依赖存档注入（后者必须通过 Nintendo Switch Online 传输存档，等于强制升级到最新固件）。该入口完全离线可用，且兼容所有固件版本，因此至少是一个稳定的研究起点，理论上可用于备份本地存档、运行复古模拟器一类受限用途。但它只是应用沙箱内的代码执行，无法提权到内核、不能运行自定义固件或备份游戏，所以 Mariko 的“只有硬破”结论没有任何变化——真正缺的仍然是一个内核或 secure monitor 级别的漏洞。",
      sources: [
        { title: "Notebookcheck: Switch 2 – Developer unveils a universal exploit that works entirely offline", url: "https://www.notebookcheck.net/Switch-2-Developer-unveils-a-universal-exploit-that-works-entirely-offline.1347373.0.html" },
        { title: "Gezine 的原始公开推文（X）", url: "https://x.com/gezine_dev/status/2074894225460822503" }
      ]
    },
    {
      date: "2026-08",
      dateLabel: "2026年8月",
      title: "任天堂一次性下架 400 余个 Switch 模拟器仓库",
      category: "法律与产业",
      exploit: "DMCA takedown（Switch 模拟器代码仓库）",
      cve: "",
      firmware: "",
      description: "2026 年 8 月，任天堂在 24 小时内让 GitHub 上 400 多个与 Switch 模拟器相关的代码仓库下线，被媒体形容为一次“扫荡式”DMCA 行动，理由仍与非法提供解密密钥、规避技术措施有关。这延续了 2023 年《王国之泪》发售前后针对 Lockpick_RCM 等解密工具的打击逻辑——Lockpick_RCM 的仓库至今返回 HTTP 451（因法律要求不可用），本文件与前一份文件里引用的相关工具链接因此都已失效。对 Mariko 改机用户的实际影响是：emuMMC 与固件解密所需的密钥提取工具只能从镜像、fork 或社区缓存中获取，新用户上手成本被抬高，任天堂的打击对象也从芯片、烧录卡延伸到了开源代码托管层。",
      sources: [
        { title: "VGC: Nintendo wipes out 400 more Switch emulator repositories on GitHub as it continues its fight on piracy", url: "https://www.videogameschronicle.com/news/nintendo-wipes-out-400-more-switch-emulator-repositories-on-github-as-it-continues-its-fight-on-piracy/" },
        { title: "Yahoo Tech: Nintendo takes down over 400 GitHub repositories for Switch emulators in one go", url: "https://tech.yahoo.com/gaming/articles/nintendo-takes-down-over-400-100000167.html" }
      ]
    },
    {
      date: "2026-09-02",
      dateLabel: "2026年9月（荷兰判决）",
      title: "海牙地方法院裁定：面向欧洲销售 MIG Switch 违法",
      category: "法律与产业",
      exploit: "Nintendo v. MIG Switch 欧洲经销商（荷兰海牙地方法院）",
      cve: "",
      firmware: "",
      description: "荷兰海牙地方法院（Rechtbank Den Haag）就任天堂起诉多家欧洲销售网站一案作出裁定，认定 MIG Switch 及其他同类设备在面向欧洲消费者、以运行未授权游戏为用途销售时属于规避技术措施，其商业化行为违法。这是任天堂在欧洲针对烧录卡取得的最明确一次胜利，也是 2026 年对 Mariko 硬破生态影响最直接的法律事件——因为 MIG Switch 这类卡带级设备本来是对 Mariko 全系（以及 Switch 2）都有效的“免焊接”方案。需要说明的是，判决由荷兰法院作出，并不自动等同于全欧盟范围的禁令，类似设备在其他欧洲国家的合法性仍需由当地法院逐案判断。任天堂同期还在美国取得针对 MIG Switch 卖家 Modded Hardware 的 200 万美元和解与永久禁令。",
      sources: [
        { title: "Nintendo Life: Nintendo Wins Court Case Ruling The Sale Of Switch \"Circumvention Devices\" Unlawful", url: "https://www.nintendolife.com/news/2026/09/nintendo-wins-court-case-ruling-the-sale-of-switch-circumvention-devices-unlawful" },
        { title: "Infobae: Nintendo gana una batalla legal en Europa contra los dispositivos que permiten piratear juegos de Switch", url: "https://www.infobae.com/tecno/2026/09/12/nintendo-gana-una-batalla-legal-en-europa-contra-los-dispositivos-que-permiten-piratear-juegos-de-switch/" }
      ]
    },
    {
      date: "2026-10",
      dateLabel: "2026年10月（现状）",
      title: "现状未变：Mariko 仍无软破，固件 23.0.0 由 Atmosphère 1.12.0 接住",
      category: "工具与生态",
      exploit: "Atmosphère 1.12.0 + hekate + Picofly/HWFLY",
      cve: "",
      firmware: "Switch 1 系统固件 23.0.0 / 23.0.1（Mariko 全机型）",
      description: "截至 2026 年 10 月，Mariko 三机型的结论与 2025 年完全一致：Tegra X1+ 的 BootROM 与启动链加固无法用固件绕过，官方也堵死了所有公开的软件层入口，唯一路线仍是焊接 modchip（Picofly/HWFLY）+ hekate + Atmosphère。官方固件已推进到 23.0.0/23.0.1，Atmosphère 1.12.0 于 2026 年 9 月 27 日发布并加入对 23.0.0 的支持，Hekate 也在同期更新；社区惯例是先确认 Atmosphère、Hekate、补丁与 sysmodule 全部适配，再用 Daybreak 更新 emuMMC，否则容易进不了系统。2026 年的新变量有两个：一是可离线触发的通用 userland 漏洞（7 月），它让 Mariko 首次拥有了不依赖网页与存档的入口，但仍然打不穿沙箱；二是法务端持续收紧，荷兰法院 9 月的裁定与 8 月的模拟器仓库清理，让烧录卡与工具链的分发都变得更隐蔽。",
      sources: [
        { title: "Atmosphère 1.12.0 发布说明（支持 23.0.0）", url: "https://github.com/Atmosphere-NX/Atmosphere/releases/tag/1.12.0" },
        { title: "Hacks Guide Wiki: Nintendo Switch（Mariko 三机型均无法软破）", url: "https://wiki.hacks.guide/wiki/Nintendo_Switch" },
        { title: "GBAtemp: Picofly - a HWFLY switch modchip", url: "https://gbatemp.net/threads/picofly-a-hwfly-switch-modchip.622701/" }
      ]
    }
  ]
});
