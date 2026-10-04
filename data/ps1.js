window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps1",
  name: "PlayStation (PS1)",
  family: "PlayStation",
  released: "1994-12",
  status: "截至 2026 年 10 月，PS1 依旧是最彻底的经典主机之一：一张特制记忆卡（FreePSXBoot）或一张存档加一张正版引导盘（tonyhax / TonyHax International）就能免焊接启动 CD-R，直读芯片与 PSIO/xStation 光驱模拟器分别满足硬改与免光盘需求，漏洞位于不可更新的掩膜 ROM，官方无从封堵。社区仍在维护：tonyhax 于 2026 年 1 月发布 v1.5，TonyHax International 在 2026 年 3-4 月推进到 v1.6.3；2026 年 7 月还出现了 2MB→16MB 的内存改造，把索尼原本只为街机硬件准备的双 8MB 存储体带到了零售机。",
  summary: "PS1 的破解史几乎与家用机防盗版史同步：1995 年的换盘法与 1996 年出现的直读芯片确立了“总线时序注入”这条硬件主线，2000 年代的诉讼则在英国与澳大利亚给出截然相反的判决。由于 PS1 没有可更新的固件，防护完全依赖 BIOS 与 CD 控制器的 SCEX 摆动信号，漏洞一旦被发现就永久存在。真正的转折发生在 2021 年：tonyhax 用游戏存档漏洞、FreePSXBoot 仅凭一张记忆卡就让几乎所有型号运行任意代码，把 PS1 从“必须焊接”变成“一张卡即可破解”，此后生态重心转向 Unirom、TonyHax International 等加载器与 ODE 光驱模拟器。",
  events: [
    {
      date: "1995",
      dateLabel: "1995年（换盘法出现的时间，一说延续至1996年）",
      title: "换盘法 (swap trick) 被发现",
      category: "软破",
      exploit: "Disc swap trick / spring trick",
      cve: "",
      firmware: "主要适用于带机械舱门的初代机型 (SCPH-1000/3000/5000 等)",
      description: "PS1 的防盗版检查只在开机阶段读取光盘导入区的 SCEX 摆动信号，通过之后便不再复查，这给时序绕过留下了空间。玩家先用正版光盘开机通过校验，再用回形针或弹簧压住舱盖传感器，在光驱仍转动时把盘换成刻录的 CD-R，BIOS 便会在不知情的情况下从 CD-R 启动。该方法不需要焊接、不需要任何附加芯片，是 PS1 最早的免硬改方案，但要求光驱机械结构允许通电开盖，2000 年的 PSone 薄机基本不适用。官方后来在 BIOS 与游戏中加入二次检测来对抗，不过换盘法借助 CD 播放器或金手指卡一直沿用至今，也仍是 FreePSXBoot 安装流程中的备用手段。",
      sources: [
        { title: "XDA Developers: How a paperclip enabled piracy on the original PlayStation", url: "https://www.xda-developers.com/how-paperclip-enabled-piracy-original-playstation/" },
        { title: "Instructables: How to Disc Swap on PS1 or PSX（被 FreePSXBoot 官方文档引用的方法说明）", url: "https://www.instructables.com/How-to-Disc-Swap-on-PS1-or-PSX/" }
      ]
    },
    {
      date: "1996",
      dateLabel: "1996年（年份确定，月份未定）",
      title: "PS1 防拷机制 SCEX 摆动信号被逆向",
      category: "硬件漏洞",
      exploit: "SCEX wobble / disc lead-in injection",
      cve: "",
      firmware: "全系机型（BIOS 启动阶段由 CD 控制器校验）",
      description: "PS1 正版光盘在导入区 (lead-in) 写入一段被称为 SCEX 的特殊摆动凹槽 (wobble groove) 信号，由 CD 控制器解码后交给 BIOS 判断，只有读到合法序列才允许从光盘启动。逆向者发现这段信号并非加密数据，而是一段可预测的时序串，只要在主机内部的 CD 数据总线上按相同时序注入，就能骗过 BIOS 而无需真正读取光盘。这一设计缺陷是所有 PlayStation 直读芯片的共同基础，也解释了为何破解着力点始终在硬件总线而不是软件签名上。Sony 在后续机型中调整了 CD 控制器与 BIOS 的配合方式并增加二次检查，但基本原理一直没变，直读芯片只需跟着更新注入时序即可。",
      sources: [
        { title: "PsNee Wiki: Wobbling Mechanism and Evolution（SCEX 摆动信号与注入原理）", url: "https://github.com/kalymos/PsNee/wiki/Wobbling-Mechanism-and-Evolution" },
        { title: "ConsoleMods Wiki: PS1:Modchips（防盗版检查机制与芯片原理）", url: "https://consolemods.org/wiki/PS1:Modchips" }
      ]
    },
    {
      date: "1996",
      dateLabel: "1996年（首批直读芯片出现的年份）",
      title: "首批 PlayStation 直读芯片 (modchip) 出现",
      category: "硬破",
      exploit: "Modchip (SCEX injection)",
      cve: "",
      firmware: "SCPH-1000 至 PU-8/PU-18 主板",
      description: "在 SCEX 机制被吃透之后，1996 年前后出现了最早的一批直读芯片：通常是一颗 8 脚单片机 (如 PIC12C508) 焊在主板 CD 控制器相关引脚上，开机时向总线注入 SCEX 序列，让 BIOS 误以为读到了正版盘。安装需要拆机焊接数根细线，会失去保修，但一次性解决全区播放与 CD-R 启动两大需求，很快在亚洲和欧洲形成产业与渠道。Sony 随后让 BIOS 和游戏在启动后再次校验、并检查芯片响应延迟来识别改机，直接催生了下一代 stealth 隐蔽型直读芯片。",
      sources: [
        { title: "PsNee Wiki: PlayStation 1 modchip history", url: "https://github.com/kalymos/PsNee/wiki/PlayStation-1-modchip-history" },
        { title: "PSX-Place 论坛: Who created first PSX modchip?", url: "https://www.psx-place.com/threads/who-created-first-psx-modchip.36239/" }
      ]
    },
    {
      date: "1997-06",
      dateLabel: "1997年6月",
      title: "GameShark / Action Replay 金手指与引导卡",
      category: "工具与生态",
      exploit: "GameShark / Pro Action Replay cheat cartridge",
      cve: "",
      firmware: "并口扩展口设备，适用于各型号",
      description: "Datel 的 Pro Action Replay 与 InterAct 的 GameShark 在 1996 至 1997 年间相继上市，插在 PS1 背部的并口扩展口上，通过金手指码在游戏运行时改写内存，实现无敌、解锁隐藏内容等功能。这类卡带后来加入 Import Player 之类的引导功能，配合换盘法即可启动 CD-R 与外区游戏，实际上成了不需要焊接的破解入口。Sony 无法远程封堵已售出的卡带，只能在游戏中加入检测并口设备的代码；而 Unirom 等项目后来正是把这些老卡带刷写成自制代码载体，让金手指卡在破解史中获得了第二次生命。",
      sources: [
        { title: "IGN (1997-06-11): Interact Baits Gamers with GameShark", url: "https://www.ign.com/articles/1997/06/11/interact-baits-gamers-with-gameshark" },
        { title: "GameHacking.org Wiki: Action Replay (PlayStation)", url: "https://wiki.gamehacking.org/index.php?title=Action_Replay_(PlayStation)" }
      ]
    },
    {
      date: "1997-07",
      dateLabel: "1997年7月",
      title: "Sony 官方自制套件 Net Yaroze 发售",
      category: "工具与生态",
      exploit: "Net Yaroze (official homebrew kit)",
      cve: "",
      firmware: "DTL-H3000 系列开发机（零售版 DTL-H3001/3002/3003）",
      description: "Net Yaroze 是 Sony 面向爱好者发行的官方开发套件，包含一台黑色开发用 PS1、引导光盘、串口线与 PC 端工具链，用户可在 PC 上编译程序再经串口下载到主机运行。它没有完整开发机的硬件调试能力，但提供了合法渠道让爱好者接触 PS1 硬件，孕育了最早的一批自制软件社群。全球仅发售约一万台、价格高昂，因此在破解生态中更多是象征与教育意义，而非主流的绕过手段。",
      sources: [
        { title: "Wikipedia: Net Yaroze", url: "https://en.wikipedia.org/wiki/Net_Yaroze" },
        { title: "The New York Times (1997-08-29): Console Lets Buyers Build A Better Mortal Kombat（Wayback 存档）", url: "https://web.archive.org/web/20260201053851/https://archive.nytimes.com/www.nytimes.com/library/cyber/week/082997yarouze.html" },
        { title: "Internet Archive: Net Yaroze Documents（官方文档合集）", url: "https://archive.org/details/net-yaroze-documents" }
      ]
    },
    {
      date: "1999",
      dateLabel: "1999年（年份确定，月份未定）",
      title: "PIC 通用直读与 stealth 隐蔽直读普及",
      category: "硬破",
      exploit: "12C508-based modchip / stealth modchip",
      cve: "",
      firmware: "PU-7 / PU-8 / PU-18 等主流主板，含 PSone",
      description: "随着直读电路被公开成电路图与烧录文件，基于 PIC12C508/12C509 的通用直读芯片在 1999 年前后大规模普及，成本降到几美元，任何人只要有编程器就能自行烧录。为对抗 Sony 的二次检测，厂商推出 stealth 版本：平时保持静默，等 BIOS 完成校验、游戏开始运行后才按需注入，甚至在游戏复查光驱状态时伪装成未改机状态。这场猫鼠游戏使直读芯片从简单的时序注入器演变为带状态机的小型 MCU 固件，也奠定了后来 PsNee 等开源实现的技术基础。",
      sources: [
        { title: "GitHub: kalymos/PsNee（开源 stealth modchip，含历代直读原理说明）", url: "https://github.com/kalymos/PsNee" },
        { title: "PsNee Wiki: PlayStation 1 modchip history", url: "https://github.com/kalymos/PsNee/wiki/PlayStation-1-modchip-history" }
      ]
    },
    {
      date: "1999",
      dateLabel: "1999年（诉讼起始年份）",
      title: "Sony 起诉 Connectix：VGS 模拟器案",
      category: "法律与产业",
      exploit: "Connectix Virtual Game Station",
      cve: "",
      firmware: "",
      description: "Connectix 于 1999 年 1 月发布 Mac 版 Virtual Game Station，用纯软件方式运行 PS1 游戏，Sony 随即以著作权与商标侵权起诉并取得初步禁令。Connectix 上诉后，美国联邦第九巡回上诉法院于 2000 年 2 月认定其为开发兼容程序而进行的中间复制属于合理使用，撤销了禁令，这一判决成为模拟器与逆向工程合法性的重要判例。2001 年 Sony 收购 VGS 资产，Connectix 停止销售，硬件厂商借诉讼而非技术手段清场的做法由此定型。",
      sources: [
        { title: "The Register (1999-01-05): PlayStation emulator launched for Mac", url: "https://www.theregister.com/1999/01/05/playstation_emulator_launched_for_mac/" },
        { title: "U.S. Copyright Office: Sony Computer Entertainment v. Connectix Corp.（第九巡回法院 2000 年判决摘要）", url: "https://copyright.gov/fair-use/summaries/sony-connectix-9thcir2000.pdf" },
        { title: "Wired (1999-03): Sony Snubbed Again By SF Court", url: "https://www.wired.com/1999/03/sony-snubbed-again-by-sf-court/" }
      ]
    },
    {
      date: "2001-11",
      dateLabel: "2001年11月",
      title: "Bleem! 在诉讼消耗战中停运",
      category: "法律与产业",
      exploit: "Bleem! emulator",
      cve: "",
      firmware: "",
      description: "Bleem! 是 1999 年推出的商业 PS1 模拟器，Sony 迅速提起诉讼，双方围绕游戏截图的合理使用、逆向工程与 DMCA 条款缠讼多年。Bleem 虽在部分争点上获胜，但高昂的律师费拖垮了公司，2001 年 11 月宣布停止运营并关闭站点，成为“技术上合法、商业上难以存活”的典型案例。此案与 Connectix 案一起，确立了 2000 年代初模拟器开发在美国的法律空间。",
      sources: [
        { title: "BBC News: PlayStation foe sinks（Bleem 停运报道）", url: "http://news.bbc.co.uk/2/hi/business/1665566.stm" },
        { title: "Wikipedia: Bleem!", url: "https://en.wikipedia.org/wiki/Bleem!" }
      ]
    },
    {
      date: "2002",
      dateLabel: "2002年（诉讼年份）",
      title: "Sony 在香港起诉 Lik-Sang 销售改机芯片",
      category: "法律与产业",
      exploit: "Modchip distribution lawsuit",
      cve: "",
      firmware: "",
      description: "香港邮购商 Lik-Sang 是 2000 年代初欧美玩家购买直读芯片与日版游戏的主要渠道，Sony 于 2002 年前后在香港对其提起侵权诉讼，法院判令 Lik-Sang 停止销售改机相关产品并承担赔偿责任。此后 Sony 又在英国以 PSP 进口与商标侵权为由继续诉讼，使 Lik-Sang 的跨境业务难以为继。该案显示硬件破解的法律风险主要落在销售渠道而非终端用户身上，也促使玩家转向论坛与团购等更分散的渠道。",
      sources: [
        { title: "Wikipedia: Lik-Sang", url: "https://en.wikipedia.org/wiki/Lik-sang" },
        { title: "Game Developer: Hong Kong Exporter Lik-Sang Closes, Citing Sony Litigation", url: "https://www.gamedeveloper.com/game-platforms/hong-kong-exporter-lik-sang-closes-citing-sony-litigation" }
      ]
    },
    {
      date: "2004-07",
      dateLabel: "2004年7月",
      title: "英国高等法院裁定直读芯片违法",
      category: "法律与产业",
      exploit: "SCEE v. modchip sellers (Sony v. Ball)",
      cve: "",
      firmware: "",
      description: "SCEE 在英国起诉销售 PlayStation 直读芯片的商家，2004 年 7 月英国高等法院认定直读芯片属于规避有效技术措施的设备，销售行为构成侵权，Sony 一方胜诉。判决把直读芯片与盗版工具归为同类，使英国境内的改机生意转入地下，零售商开始下架相关商品。这一结果与次年澳大利亚高等法院的判决方向相反，凸显各国对同一技术措施的法律定性存在巨大分歧。",
      sources: [
        { title: "Eurogamer (2004-07-21): SCEE wins case against mod chip sales", url: "https://www.eurogamer.net/news210704modchips" },
        { title: "Pinsent Masons Out-Law: Mod chips illegal in UK, says court", url: "https://www.pinsentmasons.com/out-law/news/mod-chips-illegal-in-uk-says-court" }
      ]
    },
    {
      date: "2005-10",
      dateLabel: "2005年10月6日",
      title: "澳大利亚高等法院：直读芯片不违法",
      category: "法律与产业",
      exploit: "Stevens v. Kabushiki Kaisha Sony Computer Entertainment",
      cve: "",
      firmware: "",
      description: "澳大利亚商人 Eddy Stevens 因销售与安装 PlayStation 直读芯片被 Sony 起诉，案件一路上诉至澳大利亚高等法院。2005 年 10 月 6 日，高等法院终审判定 PS1 的防拷机制不符合《版权法》对技术保护措施的定义，Stevens 的销售与安装行为不构成侵权，Sony 败诉。该判决被视为直读芯片合法性的标志性案例，与英国 2004 年的结论形成鲜明对比，也影响了此后各国围绕规避技术措施的立法讨论。",
      sources: [
        { title: "Wikipedia: Stevens v Kabushiki Kaisha Sony Computer Entertainment", url: "https://en.wikipedia.org/wiki/Stevens_v_Kabushiki_Kaisha_Sony_Computer_Entertainment" },
        { title: "AustLII: Stevens v Kabushiki Kaisha Sony Computer Entertainment [2005] HCA 58（判决全文）", url: "https://www7.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2005/58.html" }
      ]
    },
    {
      date: "2006-10",
      dateLabel: "2006年10月",
      title: "Lik-Sang 因 Sony 诉讼结业",
      category: "法律与产业",
      exploit: "Lik-Sang closure",
      cve: "",
      firmware: "",
      description: "在多年诉讼之后，Lik-Sang 于 2006 年 10 月宣布立即停业，公开声明把原因归于 Sony 在多个司法辖区提起的诉讼，其中包括英国法院就 PSP 主机进口作出的判决。这家以销售日版主机、直读芯片与周边闻名的香港出口商就此消失，成为主机破解产业链被法律手段压缩的代表性事件。它的倒闭也说明，针对销售渠道的诉讼比针对终端用户更有效，此后改机市场进一步碎片化。",
      sources: [
        { title: "Game Developer: Hong Kong Exporter Lik-Sang Closes, Citing Sony Litigation", url: "https://www.gamedeveloper.com/game-platforms/hong-kong-exporter-lik-sang-closes-citing-sony-litigation" },
        { title: "Eurogamer: Lik-Sang resurfaces after lawsuits", url: "https://www.eurogamer.net/article-46838" },
        { title: "Wikipedia: Lik-Sang", url: "https://en.wikipedia.org/wiki/Lik-sang" }
      ]
    },
    {
      date: "2016",
      dateLabel: "2016年（2012年公布，2016年前后开始发货）",
      title: "PSIO 光驱模拟器开始发货",
      category: "硬破",
      exploit: "PSIO (Cybdyn Systems)",
      cve: "",
      firmware: "全系 PS1，需按主板型号选择排线/适配板",
      description: "PSIO 由澳大利亚 Cybdyn Systems 开发，2012 年公布原型、历经多次延期后在 2016 年前后开始向预订用户发货。它通过 PS1 背部的并口扩展口接入 SD 卡，用 FPGA 与微控制器模拟光驱的 SCEX 握手和数据流，让主机直接从镜像文件启动，从而摆脱老化停产的激光头与刻录盘。代价是需要拆机焊接排线或使用转接板，对部分主板型号的时序兼容性也有限，但它开启了 PS1 光驱模拟器 (ODE) 的时代。",
      sources: [
        { title: "PSIO 官方站点 About 页（Cybdyn Systems）", url: "http://psio.cybdyn-systems.com.au/about/" },
        { title: "Hackinformer: The Original Playstation 1 gets the optical drive emulator treatment", url: "https://hackinformer.com/the-original-playstation-1-gets-the-optical-drive-emulator-treatment/" }
      ]
    },
    {
      date: "2017-06",
      dateLabel: "2017年6月",
      title: "开源直读芯片 PsNee 发布",
      category: "硬破",
      exploit: "PsNee (open source stealth modchip)",
      cve: "",
      firmware: "基于 Arduino/AVR，覆盖主要 PU 系列主板",
      description: "PsNee 用 Arduino/AVR 平台重新实现了经典 stealth 直读芯片的 SCEX 注入时序，源码以 Unlicense 公开，任何人可自行编译烧录。它支持多种主板接线方式与 stealth 模式，把原本黑盒化、依赖厂商固件的直读芯片变成可审计、可移植的开源硬件，也常被用来替代停产的成品芯片。项目仓库于 2017 年 6 月建立，其 wiki 至今仍是研究 PS1 直读原理与防盗版历史的重要资料。",
      sources: [
        { title: "GitHub: kalymos/PsNee（开源 stealth modchip for PS1）", url: "https://github.com/kalymos/PsNee" },
        { title: "PsNee Wiki: PlayStation 1 modchip history", url: "https://github.com/kalymos/PsNee/wiki/PlayStation-1-modchip-history" }
      ]
    },
    {
      date: "2018-12",
      dateLabel: "2018年12月",
      title: "PCSX-Redux 成为 PS1 逆向与自制平台",
      category: "工具与生态",
      exploit: "PCSX-Redux",
      cve: "",
      firmware: "",
      description: "PCSX-Redux 项目于 2018 年 12 月建立，在 PCSX 模拟器基础上发展出带调试器、GDB server、内存断点与硬件扩展设计的完整开发环境，并提供 PIODev 并口开发板等硬件用于真机调试。它让研究者可以在可重复的环境里单步分析 BIOS 与游戏代码，FreePSXBoot、tonyhax 等项目的开发都受益于这类工具。此后它成为 2020 年代 PS1 自制软件与漏洞研究的事实标准平台之一。",
      sources: [
        { title: "GitHub: grumpycoders/pcsx-redux", url: "https://github.com/grumpycoders/pcsx-redux" },
        { title: "PCSX-Redux 官方文档站", url: "https://pcsx-redux.consoledev.net" }
      ]
    },
    {
      date: "2020",
      dateLabel: "2020年（年份确定，月份未定）",
      title: "xStation 等新一代 ODE 上市",
      category: "硬破",
      exploit: "xStation (ODE by rama)",
      cve: "",
      firmware: "PU-7 / PU-8 / PU-18 等主板，需对应安装板",
      description: "由开发者 rama 设计的 xStation 于 2020 年前后上市，安装板直接串接在 PS1 的 CD 控制器与主板之间，用 SD 卡镜像替代光驱，兼容性与启动速度明显优于占用并口的 PSIO。同期 Terraonion 也为 MODE 推出 PlayStation 安装套件，形成多家 ODE 竞争的局面。这类方案不依赖直读芯片的 SCEX 注入，而是从物理层取代光驱，使激光头停产多年的老主机仍能长期服役。",
      sources: [
        { title: "psXtools.de: [release] xStation - Playstation 1 ODE by rama", url: "https://psxtools.de/forum/index.php?thread/82560-release-xstation-playstation-1-ode-by-rama/" },
        { title: "ResetEra: XStation - An Optical Drive Emulator for the PS1", url: "https://www.resetera.com/threads/xstation-an-optical-drive-emulator-for-the-ps1.261774/" },
        { title: "Stone Age Gamer: MODE Comes to PlayStation", url: "https://stoneagegamer.com/blog/mode-comes-to-playstation/" }
      ]
    },
    {
      date: "2020-04",
      dateLabel: "2020年4月",
      title: "Unirom 8：把金手指卡变成破解平台",
      category: "工具与生态",
      exploit: "Unirom 8 bootdisc & firmware",
      cve: "",
      firmware: "Xplorer / Action Replay / Caetla 等兼容卡带",
      description: "Unirom 8 于 2020 年 4 月发布，提供可烧录进老式 Xplorer/Action Replay 卡带的固件与一张引导盘，实现免改机启动（通过 nocash unlock 或换盘法）、外区游戏引导、PAL/NTSC 软切换、记忆卡管理、串口上传 ELF 与内存调试。它默认搭载 Caetla 0.38 作为第二固件，并能安装 FreePSXBoot、向记忆卡写入镜像，实际上把二手金手指卡改造成了可编程的自制软件载体。该项目让大量没有直读芯片的主机获得了运行任意代码的能力，是软破与硬改之间的枢纽工具。",
      sources: [
        { title: "GitHub: JonathanDotCel/unirom8_bootdisc_and_firmware_for_ps1", url: "https://github.com/JonathanDotCel/unirom8_bootdisc_and_firmware_for_ps1" },
        { title: "GitHub Releases: Unirom 8 版本发布记录", url: "https://github.com/JonathanDotCel/unirom8_bootdisc_and_firmware_for_ps1/releases" }
      ]
    },
    {
      date: "2021-03",
      dateLabel: "2021年3月",
      title: "tonyhax 存档漏洞实现免改机启动",
      category: "软破",
      exploit: "tonyhax (savegame exploit)",
      cve: "",
      firmware: "需对应区域的正版引导游戏，覆盖欧/美 PS1 与早期 PS2",
      description: "socram8888 于 2021 年 3 月发布 tonyhax，利用 Tony Hawk's Pro Skater、Brunswick Circuit Pro Bowling 等游戏读取记忆卡存档时缺乏边界检查的缺陷，让特制存档在游戏进程中取得代码执行，再打补丁去掉 BIOS 的 SCEX 与区域校验，从而启动 CD-R 与外区光盘。用户只需一张写好存档的记忆卡和一张对应区域的正版游戏，无需焊接或直读芯片，CD 音轨与多碟游戏也能正常工作。Hackaday 在 2021 年 3 月 15 日报道后，它迅速成为最受关注的 PS1 软破方案，并直接启发了 FreePSXBoot 等后续项目。",
      sources: [
        { title: "GitHub: socram8888/tonyhax（PS1 savegame exploit）", url: "https://github.com/socram8888/tonyhax" },
        { title: "tonyhax 官方主页（Socram's site，含各种启动方法与媒体列表）", url: "https://lacerta.es/tonyhax/" },
        { title: "Hackaday (2021-03-15): PlayStation Unlocked With New Software Hack", url: "https://hackaday.com/2021/03/15/playstation-unlocked-with-new-software-hack/" },
        { title: "GBAtemp: Tonyhax is a new softmod backup loader for the PlayStation 1", url: "https://gbatemp.net/threads/tonyhax-is-a-new-softmod-backup-loader-for-the-playstation-1.584717/" }
      ]
    },
    {
      date: "2021-04",
      dateLabel: "2021年4月18日（v1.0 发布）",
      title: "FreePSXBoot：只用一张记忆卡启动代码",
      category: "软破",
      exploit: "FreePSXBoot",
      cve: "",
      firmware: "覆盖 BIOS 1.0 至 4.5，SCPH-1000 至 SCPH-103",
      description: "brad-lin 于 2021 年 4 月发布 FreePSXBoot，这是第一个完全不需要游戏光盘的 PS1 软破：把特制镜像写入记忆卡，开机进入记忆卡管理界面即触发漏洞并加载 payload。它利用 BIOS 读取记忆卡目录时对文件大小与链块索引缺乏边界检查的缺陷，配合 PS1 内存镜像 (0x80200000 与 0x80000000 互为镜像) 改写 RAM 中的函数指针获得执行，再打补丁绕过防盗版检查并载入 Unirom，从 CD-R 启动游戏。v1.0 于 2021 年 4 月 18 日发布，之后迅速扩展到全部主流 BIOS 版本；由于漏洞位于不可更新的 BootROM 中，官方无从封堵。",
      sources: [
        { title: "GitHub: brad-lin/FreePSXBoot", url: "https://github.com/brad-lin/FreePSXBoot" },
        { title: "GitHub Releases: FreePSXBoot v1.0（2021-04-18）", url: "https://github.com/brad-lin/FreePSXBoot/releases/tag/v1.0" },
        { title: "ConsoleMods Wiki: PS1:FreePSXBoot", url: "https://consolemods.org/wiki/PS1:FreePSXBoot" }
      ]
    },
    {
      date: "2021-04",
      dateLabel: "2021年4月（技术文档随漏洞公开）",
      title: "PS1 BIOS 记忆卡解析缺陷被公开",
      category: "软件漏洞",
      exploit: "ReadMemCardDirectory missing bounds check",
      cve: "",
      firmware: "SCPH-9002 BIOS 上被详细分析，各版本均受影响",
      description: "FreePSXBoot 附带的技术文档系统披露了这一缺陷：BIOS 的 ReadMemCardDirectory 例程遍历记忆卡目录项时，直接信任存档条目中的文件大小与下一块索引，不做任何边界检查，攻击者可用 next_index 在受限范围内对任意 32 位内存做受控自增。由于 PS1 的 2MB RAM 被镜像四次，0x80200000 实际指向 0x80000000，研究者据此改写 RAM 开头的 allow_new_card 函数指针，把执行流引向刚从记忆卡读入的 128 字节 payload。该攻击面不依赖任何游戏，只依赖 BIOS 自身的代码缺陷，与 tonyhax 使用的存档解析问题同源，成为 PS1 生态中最有复用价值的软破基础。",
      sources: [
        { title: "FreePSXBoot 技术细节文档 exploit/EXPLOIT.md（缺陷分析与利用步骤）", url: "https://github.com/brad-lin/FreePSXBoot/blob/master/exploit/EXPLOIT.md" },
        { title: "FreePSXBoot 项目仓库（brad-lin）", url: "https://github.com/brad-lin/FreePSXBoot" }
      ]
    },
    {
      date: "2021-05",
      dateLabel: "2021年5月",
      title: "TonyHax International 扩展到全系机型",
      category: "软破",
      exploit: "TonyHax International",
      cve: "",
      firmware: "SCPH-1000 至 SCPH-103，以及 PS2 SCPH-10000 至 SCPH-39004",
      description: "Alex Free 与 MottZilla 在 2021 年 5 月建立 tonyhax 的分支 TonyHax International，把引导点扩展到日、美、欧数百款游戏，支持全部 PS1 机型以及早期 PS2 的 PS1 模式，并提供 GameShark 码生成器、作弊卡刷写、xStation 专用 ROM 与自动防盗版补丁。它还能与 FreePSXBoot 记忆卡配合启动，使没有直读芯片的主机在功能上接近 stealth 改机主机，包括运行带防盗版检查的游戏。该项目至今仍在维护，是 PS1 软破生态中最活跃的分支之一。",
      sources: [
        { title: "GitHub: alex-free/tonyhax（TonyHax International）", url: "https://github.com/alex-free/tonyhax" },
        { title: "TonyHax International 官方主页", url: "https://alex-free.github.io/tonyhax-international/" }
      ]
    },
    {
      date: "2022-09",
      dateLabel: "2022年9月19日",
      title: "FreePSXBoot 2.1 强化兼容性与假卡支持",
      category: "软破",
      exploit: "FreePSXBoot v2.1 + Unirom 8.0.K",
      cve: "",
      firmware: "覆盖 BIOS 1.0 至 4.5 全部受支持版本",
      description: "2022 年 9 月 19 日发布的 FreePSXBoot 2.1 捆绑 Unirom 8.0.K，在镜像中重复存放 payload，使容量被虚标的 64KB 假记忆卡也能正常运行，并修复了 slot 2 镜像的内核补丁——改为模拟记忆卡不存在，避免部分游戏因异常握手而卡死。这些更新说明该漏洞已从一次性研究转为长期可用的工具，重点转向硬件兼容性与用户体验。由于 PS1 早已停产、漏洞又位于掩膜 ROM 中，Sony 无法通过固件更新修复。",
      sources: [
        { title: "GitHub Releases: FreePSXBoot v2.1（2022-09-19）", url: "https://github.com/brad-lin/FreePSXBoot/releases/tag/v2.1" },
        { title: "GitHub: brad-lin/FreePSXBoot（README 变更记录）", url: "https://github.com/brad-lin/FreePSXBoot" }
      ]
    },
    {
      date: "2025-09",
      dateLabel: "2025年9月18日",
      title: "tonyhax 仍在维护：v1.4.6 发布",
      category: "工具与生态",
      exploit: "tonyhax v1.4.6",
      cve: "",
      firmware: "全系 PS1",
      description: "2025 年 9 月 18 日，原作者 socram8888 发布 tonyhax v1.4.6 维护版，修复 Thunder Force V、Echo Night、King's Field、Jikkyou Powerful Pro Yakyuu '95 等游戏在加载器下的兼容性问题，说明存档漏洞方案仍在持续打磨。此时 PS1 的破解生态已稳定为三条路线：记忆卡或存档漏洞软破、直读芯片硬破，以及 PSIO/xStation 等 ODE 替代光驱；而 2021 年披露的 BootROM 记忆卡缺陷无法通过官方更新修复，成为永久性的后门。",
      sources: [
        { title: "GitHub Releases: tonyhax v1.4.6（2025-09-18）", url: "https://github.com/socram8888/tonyhax/releases/tag/v1.4.6" },
        { title: "GitHub: socram8888/tonyhax（项目主页与说明）", url: "https://github.com/socram8888/tonyhax" }
      ]
    },
    {
      date: "2026-01",
      dateLabel: "2026年1月13日",
      title: "tonyhax v1.5 发布",
      category: "工具与生态",
      exploit: "tonyhax v1.5",
      cve: "",
      firmware: "全系 PS1（需对应区域的正版引导游戏）",
      description: "2026 年 1 月 13 日，socram8888 发布 tonyhax v1.5，这是继 2025 年 9 月的 v1.4.6 之后的又一次维护更新，继续打磨存档漏洞加载器在各种冷门游戏与记忆卡上的兼容性。原版 tonyhax 仍是最轻量的软破路径：一张写好存档的记忆卡加一张对应区域的正版引导盘即可启动 CD-R 与外区光盘，不需要烙铁，也不需要刷写任何固件。它在 2021 年首发后一直保持低频但不断的维护，说明“不可修补的存档解析漏洞”这一路线在 2026 年依然有人照看。",
      sources: [
        { title: "GitHub Releases: tonyhax v1.5（2026-01-13）", url: "https://github.com/socram8888/tonyhax/releases/tag/v1.5" },
        { title: "GitHub: socram8888/tonyhax（PS1 savegame exploit）", url: "https://github.com/socram8888/tonyhax" },
        { title: "tonyhax 官方主页（Socram's site，含启动方法与媒体列表）", url: "https://lacerta.es/tonyhax/" }
      ]
    },
    {
      date: "2026-04",
      dateLabel: "2026年4月12日（v1.6.3）",
      title: "TonyHax International 推进到 v1.6.3",
      category: "工具与生态",
      exploit: "TonyHax International v1.6.0-v1.6.3",
      cve: "",
      firmware: "SCPH-1000 至 SCPH-103，以及 PS2 SCPH-10000 至 SCPH-39004",
      description: "Alex Free 维护的 TonyHax International 在 2026 年进入 1.6.x 系列：v1.6.0 于 3 月 5 日发布，随后 3 月 9 日 v1.6.1、3 月 22 日 v1.6.2，4 月 12 日到 v1.6.3。作为 tonyhax 的功能扩展分支，它把引导点覆盖到日、美、欧数百款游戏，支持全部 PS1 机型以及早期 PS2 的 PS1 兼容模式，并提供 GameShark 码生成器、作弊卡刷写、xStation 专用 ROM 与自动防盗版补丁。高频的小版本迭代说明这条“存档漏洞 + 自动补丁”的路线在 2026 年仍是 PS1 软破生态中最活跃的分支。",
      sources: [
        { title: "GitHub Releases: alex-free/tonyhax v1.6.3i（2026-04-12）", url: "https://github.com/alex-free/tonyhax/releases/tag/v1.6.3i" },
        { title: "TonyHax International 官方主页与更新日志", url: "https://alex-free.github.io/tonyhax-international/changelog.html" },
        { title: "GitHub: alex-free/tonyhax（Universal PS1 backup loader fork）", url: "https://github.com/alex-free/tonyhax" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月上旬（Macho Nacho 视频与媒体报道）",
      title: "PS1 内存改造：从 2MB 解锁到 16MB",
      category: "硬破",
      exploit: "TunerTom 的 16MB RAM mod（双 8MB 存储体）",
      cve: "",
      firmware: "多数机型可用，尤以 PU-8 主板的 SCPH-5500 系列为佳",
      description: "2026 年 7 月，改装者 TunerTom 在 PSX.Dev Discord 社区协助下做出初代 PlayStation 的 16MB 内存改造，并由 Macho Nacho Productions 的 Tito Perez 在视频中实测。初代机原本只有四颗 512KB 芯片组成的 2MB 内存，而索尼的街机基板支持双 8MB 存储体，这一能力从未在零售机上启用。改造需要拆掉原内存颗粒，换上八颗取自旧 PC 内存条的 2MB EDO RAM，其中四颗装在原位、四颗堆叠其上，并使用自制快速焊接板、精密飞线与电阻来启用双存储体。商业游戏兼容性参差——有些游戏因固件仍以为只有 2MB 而无法启动——但对自制软件意义重大，为更大规模的项目与更完整的街机移植提供了空间。",
      sources: [
        { title: "Outlook Respawn: Original PlayStation Mod Unlocks Hidden 16MB RAM Support（2026-07-11）", url: "https://respawn.outlookindia.com/gaming/gaming-news/original-playstation-mod-unlocks-hidden-16mb-ram-support" },
        { title: "TweakTown: Modders upgrade the original PlayStation's RAM from 2MB to 16MB", url: "https://www.tweaktown.com/news/112589/modders-upgrade-the-original-playstations-ram-from-2mb-to-16mb/index.html" },
        { title: "17173：发售 30 多年后被解锁：索尼初代 PS1 原来支持 16MB 内存（2026-07-12）", url: "https://news.17173.com/content/07122026/080203117.shtml" }
      ]
    }
  ]
});
