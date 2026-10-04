window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps3",
  name: "PlayStation 3",
  family: "PlayStation",
  released: "2006-11",
  status: "截至 2026 年 10 月，PS3 的情况比“HFW + PS3HEN 全系可用”又前进了一大步：官方在 2026 年 3 月 18 日推送了 4.93 固件，社区随后给出 HFW 4.93 与 4.93.1，PS3HEN 亦更新到 3.6.0。更关键的是 2026 年初出现的 BadWDSD —— 一块基于 Raspberry Pi Pico 的硬件注入模块 —— 配合 qCFW（准自制固件），让 Slim 2500/3000 与 Super Slim 4000（NOR 与 eMMC 两种闪存）这些原本永远装不了 CFW 的机型也能跑起基于 Evilnat PEX 的自制系统，并解锁 CELL/RSX 超频、Linux/OtherOS 与 PS2 模式。2026 年 9 月，zecoxao 等人又从 Cell 处理器的残留数据中找回了 lv0ldr 引导密钥，为这些机型运行完整 CFW 留下可能性，但截至 10 月仍未实现。",
  summary: "PS3 的破解史是主机安全史上最戏剧性的一条线：官方自己提供的 OtherOS（Linux）成为第一个突破口，2010 年的 USB 狗把它变成大众生意，而 2010 年底 fail0verflow 用一次 ECDSA 随机数复用直接还原了索尼的签名私钥，等于拆掉了整条信任链的地基。此后索尼靠换密钥、强制新固件把软破逼回硬改时代（E3 Flasher、Cobra ODE），2017 年之后又以浏览器漏洞实现的 PS3Xploit/HEN 重新回到免拆机路线。围绕 OtherOS 与越狱的诉讼（SCEA v. Hotz、德国 graf_chokolo 案、OtherOS 集体诉讼）也让它成为研究自由与反规避条款之争的经典案例。",
  events: [
    {
      date: "2006-11",
      dateLabel: "2006年11月",
      title: "PS3 发售，内置 OtherOS 可装 Linux",
      category: "工具与生态",
      exploit: "OtherOS",
      cve: "",
      firmware: "固件 1.00 ~ 3.15（早期 20GB/60GB 等机型）",
      description: "PS3 首发时把 OtherOS 作为卖点之一：用户可以在硬盘上划分分区安装 Yellow Dog Linux、Fedora 等发行版，从 XMB 切换进入。出于安全考虑，索尼用 hypervisor（lv1）把 Linux 与游戏系统严格隔离，Linux 只能看到部分硬件，无法访问 RSX 图形核心，也无法触碰游戏侧的存储与密钥。这套设计本意是既做卖点又不牺牲 DRM，但正是这个官方开放的入口，成了后来一切破解的起点——包括 GeoHot 的 hypervisor 漏洞与所有早期越狱工具的前提条件。",
      sources: [
        { title: "Wikipedia: PlayStation 3", url: "https://en.wikipedia.org/wiki/PlayStation_3" },
        { title: "Wikipedia: OtherOS", url: "https://en.wikipedia.org/wiki/OtherOS" },
        { title: "Ars Technica: It no longer does everything: no more Linux on PlayStation 3", url: "https://arstechnica.com/gaming/2010/03/it-no-longer-does-everything-no-more-linux-on-playstation-3/" }
      ]
    },
    {
      date: "2009-07",
      dateLabel: "2009年7月",
      title: "PS3 浏览器 Select 对象漏洞 (CVE-2009-2541)",
      category: "软件漏洞",
      exploit: "PS3 浏览器/WebKit 的 Select.length 内存耗尽",
      cve: "CVE-2009-2541",
      firmware: "当时全系固件的内置浏览器",
      description: "研究者发现给网页中 Select 对象的 length 属性传入超大整数，会让 PS3 内置浏览器在内存分配上失控，最终导致整机卡死，NVD 将其记录为 CVE-2009-2541，并与 Safari 的 CVE-2009-1692 视为同源问题。单看影响只是拒绝服务，但它确认了一件关键的事：PS3 的浏览器是一个可由外部网页触发的、可被深入研究的攻击面。后来的 PS3Xploit/HEN 系列正是沿着这条浏览器路径先取得用户态代码执行，再提权到内核，因此这条 2009 年的记录在整条时间轴上具有前史意义。",
      sources: [
        { title: "NVD: CVE-2009-2541", url: "https://nvd.nist.gov/vuln/detail/CVE-2009-2541" },
        { title: "Exploit-DB 9160", url: "https://www.exploit-db.com/exploits/9160" }
      ]
    },
    {
      date: "2010-01",
      dateLabel: "2010年1月",
      title: "GeoHot 公布 OtherOS hypervisor 漏洞",
      category: "软件漏洞",
      exploit: "OtherOS / lv1 hypervisor 内存读写漏洞",
      cve: "",
      firmware: "固件 3.15 及以下（依赖 OtherOS 功能）",
      description: "George Hotz（GeoHot）在 2010 年 1 月公布并放出了利用代码：在 OtherOS 的 Linux 环境里，借助 hypervisor（lv1）对客户机内存映射与系统调用处理上的缺陷，取得对 lv1 内存的读写能力，从而穿透索尼设计的隔离层。利用有硬性前置条件——主机必须仍然支持并进入 OtherOS，且需要用户主动运行代码，所以它本身并不能直接运行未授权游戏，Hotz 当时也公开表示不会放出能玩备份游戏的完整方案。这条漏洞依旧直接促使索尼在下一版固件里彻底删掉 OtherOS，把技术问题变成了产业与法律事件。",
      sources: [
        { title: "Wikipedia: George Hotz（2010 年 1 月公布 OtherOS hypervisor 漏洞）", url: "https://en.wikipedia.org/wiki/George_Hotz" },
        { title: "VideoGamer: PS3 exploit published", url: "https://www.videogamer.com/news/ps3-exploit-published/" },
        { title: "Wikipedia: Sony Computer Entertainment America v. George Hotz", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" }
      ]
    },
    {
      date: "2010-03",
      dateLabel: "2010年3月",
      title: "索尼固件 3.21 移除 OtherOS",
      category: "法律与产业",
      exploit: "（索尼反制措施，非漏洞）",
      cve: "",
      firmware: "固件 3.21（2010-04-01 起推送）",
      description: "索尼以“维护系统完整性与安全性”为理由，宣布在 3.21 固件中移除 OtherOS，并于 4 月 1 日开始推送；拒绝升级的主机将无法登录 PSN、也无法播放部分新蓝光光盘。这一决定把一台宣传中“能装 Linux 的通用计算机”变回封闭游戏机，等于用固件更新收回了已经售出的功能。它直接点燃了用户与黑客社区的怒火：一方面催生了针对 OtherOS 用户的集体诉讼，另一方面也让 GeoHot 等人失去了唯一合法的代码执行入口，从此破解只能走非官方路径。",
      sources: [
        { title: "Ars Technica: It no longer does everything: no more Linux on PlayStation 3", url: "https://arstechnica.com/gaming/2010/03/it-no-longer-does-everything-no-more-linux-on-playstation-3/" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" },
        { title: "Wikipedia: OtherOS", url: "https://en.wikipedia.org/wiki/OtherOS" }
      ]
    },
    {
      date: "2010-04",
      dateLabel: "2010年4月",
      title: "OtherOS 集体诉讼提起",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "固件 3.21 及以后受影响机型",
      description: "3.21 推送后不久，美国用户以违约、虚假宣传等理由发起集体诉讼，多案合并为 In re Sony PS3 “Other OS” Litigation，在加州北区联邦法院审理。诉讼过程极其漫长：初审和解方案一度被法院驳回，之后又经历重新调解与再次申请初步批准，直到 2016 至 2018 年才以约 375 万美元的和解金收尾。它的意义超出了 PS3 本身——把“厂商能否通过固件更新删除已售出功能”变成了一个有判例压力的长期议题。",
      sources: [
        { title: "Truth in Advertising: In re Sony PS3 Other OS Litigation 法律文件", url: "https://truthinadvertising.org/wp-content/uploads/2016/10/In-Re-Sony-PS3-renewed-motion-for-pre-app-of-new-settlement.pdf" },
        { title: "Wikipedia: OtherOS", url: "https://en.wikipedia.org/wiki/OtherOS" }
      ]
    },
    {
      date: "2010-08",
      dateLabel: "2010年8月",
      title: "PS Jailbreak USB 狗问世",
      category: "硬破",
      exploit: "PS Jailbreak（USB dongle + 未鉴权 lv2 syscall payload）",
      cve: "",
      firmware: "OFW 3.41 及以下",
      description: "PS Jailbreak 是一个插在主机前置 USB 口上的加密狗，必须在开机前插入：它模拟特定 USB 设备把主机带入可利用状态，再由固化在狗里的 payload 借用未做鉴权的 lv2 系统调用（社区通称 syscall 36）取得内核级内存读写与权限修改能力，从而运行备份管理器、从硬盘直接加载游戏。它是第一个“不拆机、不焊线”的大众化 PS3 破解方案，发售价约 170 美元，短期内被炒到高价。索尼迅速在澳大利亚与美国提起侵权诉讼，法院一度下令扣押库存、禁止销售，但技术细节已经开始外流。",
      sources: [
        { title: "Ars Technica: Court halts PS Jailbreak sales, gives Sony control of inventory", url: "https://arstechnica.com/gaming/2010/08/court-halts-ps-jailbreak-sales-gives-sony-control-of-inventory/" },
        { title: "BBC News: PS3 hack ban upheld by court as free version released", url: "https://www.bbc.com/news/technology-11176441" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2010-09",
      dateLabel: "2010年9月",
      title: "PSGroove / PSFreedom 开源复刻",
      category: "硬破",
      exploit: "PSGroove / PSFreedom / PSGrade",
      cve: "",
      firmware: "OFW 3.41 及以下；3.42 起被官方封堵",
      description: "PS Jailbreak 的 payload 被逆向并重写为开源项目 PSGroove，可以跑在 Teensy、Arduino、各种 USB 开发板甚至 iPod、Android 手机上；PSFreedom 进一步把同一 payload 移植到 Linux 手机与嵌入式设备，正式进入“人人可刷”的阶段。对普通用户来说，“狗”的功能被彻底免费化，商业加密狗的暴利期迅速结束。索尼在 2010 年 9 月的 3.42 固件中修补了这个 USB 漏洞，并强制升级才能使用 PSN，使这一代方案在两周内基本失效，但开源硬件移植的做法被后续主机破解广泛继承。",
      sources: [
        { title: "Digital Foundry: Open source PSJailbreak released", url: "https://www.digitalfoundry.net/articles/digitalfoundry-opensource-psjailbreak-blog-entry" },
        { title: "BBC News: PS3 hack ban upheld by court as free version released", url: "https://www.bbc.com/news/technology-11176441" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2010-12",
      dateLabel: "2010年12月",
      title: "fail0verflow 在 27C3 还原签名私钥",
      category: "软件漏洞",
      exploit: "ECDSA nonce 复用（同一个 k 签名不同消息）",
      cve: "",
      firmware: "OFW 3.55 及以下",
      description: "在第 27 届混沌通信大会（27C3）上，fail0verflow 指出索尼用 ECDSA 为 PS3 可执行文件签名时复用了同一个随机数 k：只要拿到两段不同消息、却使用同一 k 的签名，就能联立解出私钥。他们据此还原出索尼用于签发 PS3 应用程序的 ECDSA 私钥，并顺带波及 PSP 与蓝光相关密钥——这意味着任何人都能“以索尼的身份”给自己的程序签名。索尼无法更换已经固化在主机信任链里的根锚点，只能改用在 3.56、3.60 之后生效的新密钥与吊销机制来止血，而停留在 3.55 的主机则获得了近乎无限的签名能力。",
      sources: [
        { title: "Engadget: Hackers claim discovery of PS3 private key (2010-12-29)", url: "https://www.engadget.com/2010-12-29-hackers-claim-discovery-of-ps3-private-key-enabling-unauthori.html" },
        { title: "CCC 27C3: Console Hacking（官方 wiki）", url: "https://events.ccc.de/congress/2010/wiki/Console_Hacking" },
        { title: "27C3 演讲录像（media.ccc.de）", url: "https://media.ccc.de/v/27c3-4087-en-console_hacking_2010" }
      ]
    },
    {
      date: "2011-01",
      dateLabel: "2011年1月",
      title: "CFW 3.55 爆发与刷砖事件",
      category: "工具与生态",
      exploit: "自制固件 CFW 3.55（GeoHot / Waninkoko / kmeaw）",
      cve: "",
      firmware: "OFW 3.55 基线；3.56 起被封堵",
      description: "私钥到手后，社区几乎立刻把它变成了可用产品：GeoHot、Waninkoko、kmeaw 等人先后发布经过签名的自制固件 3.55，可以安装未签名程序、备份管理器与各类自制应用，部分版本初期还能正常登录 PSN。Waninkoko 的版本因为 NOR/分区处理不当，把一部分主机刷成无法开机的砖，成为自制固件史上著名的翻车案例，也让“刷机前先备份、先确认机型”成为社区铁律。索尼随后在 3.56 与 3.60 中改用新的签名密钥并强化校验，纯粹靠软件回归 3.55 的窗口自此关闭。",
      sources: [
        { title: "The Escapist: Custom Firmware 3.55 Bricking PS3s", url: "https://www.escapistmagazine.com/custom-firmware-3-55-bricking-ps3s/" },
        { title: "Engadget: PS3 firmware 3.56 hacked in less than a day", url: "https://www.engadget.com/2011-01-29-ps3-firmware-3-56-hacked-in-less-than-a-day-sonys-lawyers-look.html" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2011-01",
      dateLabel: "2011年1月",
      title: "启动链根密钥不可撤销的设计缺陷",
      category: "硬件漏洞",
      exploit: "metldr / lv0 全机型共用密钥与不可轮换的信任链",
      cve: "",
      firmware: "全机型；补救措施自 OFW 3.60 起",
      description: "PS3 的启动链（bootldr → metldr → lv0/lv1/lv2）在全部主机上共用同一套密钥材料，而密钥被固化在主机只读区域，无法像服务器证书那样通过在线更新替换。一旦密钥被提取并公开，索尼就丧失了“让旧机器失效”的手段，只能改用新密钥并要求新固件，把老主机彻底推向硬件刷写降级。这正是 2011 年 1 月“PS3 根密钥”风波的技术本质：它不是一个可以打补丁的代码 bug，而是 SoC 与引导链层面的设计性缺陷。",
      sources: [
        { title: "Engadget: PS3 firmware 3.56 hacked in less than a day", url: "https://www.engadget.com/2011-01-29-ps3-firmware-3-56-hacked-in-less-than-a-day-sonys-lawyers-look.html" },
        { title: "Game Informer: The Saga Of The Hacked PS3 Root Key Continues (2011-01-27)", url: "https://gameinformer.com/b/news/archive/2011/01/27/the-saga-of-the-hacked-ps3-root-key-continues" },
        { title: "SiliconANGLE: Cryptography fail for Sony Playstation 3", url: "https://siliconangle.com/2011/01/03/cryptography-fail-for-sony-playstation-3/" }
      ]
    },
    {
      date: "2011-01",
      dateLabel: "2011年1月",
      title: "索尼起诉 GeoHot（SCEA v. Hotz）",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2011 年 1 月，索尼电脑娱乐美国公司（SCEA）在加州北区联邦法院起诉 George Hotz，并把 fail0verflow 相关成员列为 Doe 被告，主张其违反 DMCA 第 1201 条反规避条款与《计算机欺诈与滥用法》，同时申请临时限制令，要求禁止发布越狱工具与密钥。案件迅速成为“安全研究自由 vs. 反规避条款”的标志性事件：索尼一边在法庭上主张破解必然导致盗版，Hotz 一边强调自己只是发布信息、并未借此获利。判决之外的后果同样剧烈——Anonymous 以“OpSony”名义对索尼发起大规模网络攻击，把技术纠纷升级成产业安全事件。",
      sources: [
        { title: "Wikipedia: Sony Computer Entertainment America v. George Hotz", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" },
        { title: "Harvard JOLT Digest: Sony Computer Entm't Am. v. Hotz", url: "http://jolt.law.harvard.edu/digest/sony-computer-entmt-am-v-hotz" },
        { title: "Ars Technica: Hotz lawyer: PS3 hacking case over, DMCA and IP abuse live on", url: "https://arstechnica.com/gaming/2011/04/hotz-lawyer-ps3-hacking-case-over-dmca-and-ip-abuse-live-on/" }
      ]
    },
    {
      date: "2011-02",
      dateLabel: "2011年2月",
      title: "索尼索取 geohot.com 访客 IP",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "索尼向法院申请并取得传票，要求 YouTube、Twitter、PayPal 以及 GeoHot 网站的托管商交出相关数据，其中最受争议的一项是访问过 geohot.com 的 IP 地址，用以追查所有下载过越狱代码的人。此举被广泛批评为“用民事诉讼做大规模监控”，电子前哨基金会（EFF）出面反对，最终法院把传票范围大幅收窄。这场风波让舆论天平明显倒向黑客一侧，也成为后来讨论“下载即侵权”时最常被引用的反面案例。",
      sources: [
        { title: "Game Developer: Report: Sony Granted Right To Subpoena Hotz' Web Provider", url: "https://www.gamedeveloper.com/game-platforms/report-sony-granted-right-to-subpoena-hotz-web-provider-in-ps3-jailbreaking-case" },
        { title: "The Escapist: Judge Awards Sony With Visitor IDs of PS3 Hacker's Website", url: "https://www.escapistmagazine.com/judge-awards-sony-with-visitor-ids-of-ps3-hackers-website/" },
        { title: "Wikipedia: Sony Computer Entertainment America v. George Hotz（含索取网站访客 IP 的经过）", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" }
      ]
    },
    {
      date: "2011-02",
      dateLabel: "2011年2月",
      title: "graf_chokolo 遭搜查与百万欧元索赔",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "长期公开 PS3 hypervisor 逆向资料的德国研究者 graf_chokolo 在 2011 年 2 月被警方搜查、设备被扣押，索尼随后在德国向其提出约 100 万欧元的索赔并申请禁令，要求停止发布破解与逆向内容。他没有退让，反而把整套 PS3 逆向“圣经”——大量 hypervisor 文档、密钥与工具——公开上传，形成“越打压越扩散”的典型局面。此案与美国 SCEA v. Hotz 一起构成了索尼在 2010 至 2011 年的双线法律攻势，也让欧洲研究者开始更谨慎地处理主机逆向材料。",
      sources: [
        { title: "CNET: After raid, hacker releases 'bible' for PS3 reverse engineering", url: "https://www.cnet.com/news/privacy/after-raid-hacker-releases-bible-for-ps3-reverse-engineering/" },
        { title: "Destructoid: Sony sues PS3 hacker for 1,000,000 euros, hacker defiant", url: "https://www.destructoid.com/sony-sues-ps3-hacker-for-1000000-euros-hacker-defiant/" }
      ]
    },
    {
      date: "2011-04",
      dateLabel: "2011年4月",
      title: "Sony 与 Hotz 达成和解",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2011 年 4 月双方宣布和解：Hotz 接受永久禁令，承诺不再破解索尼产品、也不协助他人破解，索尼则撤回诉讼，案件由此终结。表面上是索尼获胜，但整个诉讼过程已经把越狱、密钥与 DMCA 反规避条款推到公众视野，EFF 与研究者普遍认为这是一次代价高昂的公关失败。Hotz 本人此后离开主机圈，转投人工智能与自动驾驶领域；而“破解自己的设备是否合法”的争论从未真正结束。",
      sources: [
        { title: "Harvard JOLT Digest: Sony Computer Entm't Am. v. Hotz", url: "http://jolt.law.harvard.edu/digest/sony-computer-entmt-am-v-hotz" },
        { title: "Ars Technica: Hotz lawyer: PS3 hacking case over, DMCA and IP abuse live on", url: "https://arstechnica.com/gaming/2011/04/hotz-lawyer-ps3-hacking-case-over-dmca-and-ip-abuse-live-on/" },
        { title: "Wikipedia: Sony Computer Entertainment America v. George Hotz", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" }
      ]
    },
    {
      date: "2011",
      dateLabel: "2011年",
      title: "Progskeet / E3 Flasher 硬降级工具",
      category: "硬破",
      exploit: "NOR/NAND 硬件刷写（硬降回 3.55）",
      cve: "",
      firmware: "OFW 3.56 及以上（含 Slim）",
      description: "3.56 之后软破路径被切断，破解者转向直接操作主板上的 NOR/NAND 闪存：Progskeet、E3 Flasher 等刷写器通过焊接飞线或测试夹连接闪存芯片，先完整备份原厂镜像，再写入修改后的固件，把主机“降”回 3.55 后重新刷入 CFW。E3 Flasher 后来还配套了针对 Slim 的免大量焊接方案，并把进入工厂/服务模式（Service Mode）安装降级固件的流程标准化，使硬降级成为 2011 至 2013 年改机店的标配服务。代价是操作门槛与风险极高，断电、夹持不良或镜像不匹配都可能让主机变砖。",
      sources: [
        { title: "ConsoleMods Wiki: PS3 E3 Flasher", url: "https://consolemods.org/wiki/PS3:E3_Flasher" },
        { title: "GBAtemp: How hard is it to install an E flasher on a fat PS3?", url: "https://gbatemp.net/threads/how-hard-is-it-to-install-an-e-flasher-on-a-fat-ps3.391273/" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2011",
      dateLabel: "2011年",
      title: "True Blue / Cobra USB 加密狗时代",
      category: "硬破",
      exploit: "True Blue dongle；Cobra USB",
      cve: "",
      firmware: "CFW 3.55 为主",
      description: "面对 3.60 之后新游戏要求更高固件的局面，第三方厂商推出新一代 USB 加密狗：True Blue 搭配专用 CFW 3.55，通过狗内的密钥与解密逻辑，让停留在 3.55 的主机运行要求 3.60 以上固件的游戏；Cobra USB 则把 CFW 功能与狗上验证结合起来，提供更完整的备份加载体验。这类方案闭源、收费，且主要服务于盗版，在自制社区内部也备受批评，被指把公共成果变成了商业牟利工具。但从结果看，它确实让“停在旧固件的硬改机”又延续了两三年寿命。",
      sources: [
        { title: "GBAtemp: True Blue (JB2)", url: "https://gbatemp.net/threads/true-blue-jb2.313743/" },
        { title: "DigitalWorldz: Cobra USB 教程", url: "https://www.digitalworldz.co.uk/threads/excellent-cobra-usb-tutorial-copied-text-not-made-by-me.287168/" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2012",
      dateLabel: "2012年",
      title: "备份管理器生态：multiMAN 与 webMAN",
      category: "工具与生态",
      exploit: "multiMAN / webMAN / IRISMAN",
      cve: "",
      firmware: "CFW 3.55 及后续各版本 CFW",
      description: "CFW 普及后，真正让普通用户用起来的是备份管理器：multiMAN 集成了从硬盘启动游戏、FTP 传输、封面与文件管理等功能，成为自制系统的“桌面”；webMAN 更进一步在 XMB 里直接挂载与启动游戏、无需进入管理器，还提供网页端控制。它们与 payload 注入工具、PC 端 pkg 签名工具一起，构成了 2011 年之后 PS3 自制生态的主体。这批工具的存在也解释了一个现象：PS3 的破解价值长期集中在“备份加载”，自制游戏与模拟器的比重远低于 Wii 等平台。",
      sources: [
        { title: "GBAtemp Wiki: List of PS3 homebrew", url: "https://wiki.gbatemp.net/wiki/List_of_PS3_homebrew" },
        { title: "Gueux Forum: multiMAN 1.17.04", url: "https://gueux-forum.net/topic/255610-multiman-11704/" }
      ]
    },
    {
      date: "2013",
      dateLabel: "2013年",
      title: "Cobra ODE 光驱模拟器登场",
      category: "硬破",
      exploit: "Cobra ODE（Optical Drive Emulator）",
      cve: "",
      firmware: "官方 OFW 与 CFW 均可，覆盖 Super Slim",
      description: "Cobra ODE 是一块串接在 PS3 光驱与主板之间的模拟器：它截获主机发往蓝光光驱的指令，用存放在 USB 硬盘或 SD 卡上的游戏镜像“冒充”正版光盘，从而在完全不修改固件的官方系统上加载备份游戏，并可用在之前无法软破的 Super Slim（4K 机型）上。代价是要拆机接线、安装调试繁琐，且是典型的盗版导向硬件；同期还有 3K3Y、E3 ODE Pro 等同类产品竞争。随着 PS3 进入生命周期尾声与数字版游戏普及，这类方案逐渐消失。",
      sources: [
        { title: "GBAtemp: Cobra ODE: First units will ship to resellers this week", url: "https://gbatemp.net/threads/cobra-ode-first-units-will-ship-to-resellers-this-week.352357/" },
        { title: "Wikipedia: PlayStation Jailbreak", url: "https://en.wikipedia.org/wiki/PlayStation_Jailbreak" }
      ]
    },
    {
      date: "2017-11",
      dateLabel: "2017年11月",
      title: "PS3Xploit 实现免硬改破解",
      category: "软破",
      exploit: "PS3Xploit（浏览器 WebKit 漏洞 + 内核漏洞链）",
      cve: "CVE-2010-1807, CVE-2010-4577",
      firmware: "OFW 4.81 / 4.82（最低版本 ≤ 3.55 的机型）",
      description: "PS3Xploit 团队发布了纯软件的攻击链：用户在 PS3 内置浏览器里打开特制页面，先用 WebKit 漏洞取得用户态代码执行，再通过配套的内核漏洞获得读写权限，最终从官方固件直接安装 CFW，全程不需要 E3 Flasher 之类的硬件。它最初只适用于“最低可降级版本不超过 3.55”的机型（多数 phat 与早期 Slim），因为这些机器才能装回 3.55 固件。这是 2013 年之后 PS3 破解领域最大的一次转折，把硬改时代重新拉回免费、可复制的软破路线。",
      sources: [
        { title: "Wololo.net: How to use PS3Xploit to hack your PS3 and go directly to Rebug 4.81.2", url: "https://wololo.net/2017/11/27/tutorial-use-ps3xploit-hack-ps3-go-directly-rebug-4-81-2-noob-friendly/" },
        { title: "GBAtemp: PS3Xploit: 4.82 OFW to CFW Hack Released", url: "https://gbatemp.net/threads/ps3xploit-4-82-ofw-to-cfw-hack-released.490263/" },
        { title: "PSX-Place: Official Firmware 4.81 Exploit - Software Downgrader & More Incoming", url: "https://www.psx-place.com/threads/official-firmware-4-81-exploit-software-downgrader-more-incoming-could-superslim-be-hacked.15389/" },
        { title: "NVD: CVE-2010-1807", url: "https://nvd.nist.gov/vuln/detail/CVE-2010-1807" },
        { title: "NVD: CVE-2010-4577", url: "https://nvd.nist.gov/vuln/detail/CVE-2010-4577" }
      ]
    },
    {
      date: "2018-03",
      dateLabel: "2018年3月",
      title: "PS3Xploit 3.0 / HAN 覆盖全机型",
      category: "软破",
      exploit: "PS3Xploit Tools 3.0（HAN：Homebrew enABler for Non-CFW capable）",
      cve: "",
      firmware: "OFW 4.81 / 4.82（含 Super Slim）",
      description: "PS3Xploit Tools 3.0 引入 HAN（Homebrew enABler for Non-CFW capable），让那些最低版本高于 3.55、永远无法安装完整 CFW 的机型（包括 Super Slim）也能在官方固件上运行自制程序与安装部分 pkg。它把能力边界说清楚了：不改变固件本体、不追求完整 CFW 权限，只做一个可反复启用的“自制使能层”，因此重启后需要重新激活。这一版本让 PS3 破解第一次做到“全机型无差别可用”，也是后来 PS3HEN 的直接前身。",
      sources: [
        { title: "Wololo.net: PS3Xploit 3.0 HAN released, compatible with all PS3s on firmwares 4.81/4.82", url: "https://wololo.net/2018/03/14/ps3xploit-3-0-han-released-compatible-ps3s-firmwares-4-81-4-82/" },
        { title: "GBAtemp: PS3Xploit Tools v3.0 released", url: "https://gbatemp.net/threads/ps3xploit-tools-v3-0-released.498797/" },
        { title: "GitHub: EternalModz/PS3Xploit（官方工具站源码）", url: "https://github.com/EternalModz/PS3Xploit" }
      ]
    },
    {
      date: "2018-03",
      dateLabel: "2018年3月",
      title: "OtherOS 集体诉讼和解与索赔截止",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "固件 3.21 之前的早期机型",
      description: "持续近八年的 In re Sony PS3 “Other OS” Litigation 最终落定：和解金约 375 万美元，曾经使用过 OtherOS 或因此受影响的美国用户可在 2018 年 4 月前后提交索赔，单人补偿约 9 至 65 美元，索尼不承认存在违法行为。媒体在截止前一个月集中提醒用户申领，让这桩旧案重新回到公众视野。它的实质影响在于确立了一个持续被引用的争议点：厂商用固件更新删除已售出功能，究竟应承担多大的消费者责任。",
      sources: [
        { title: "Polygon: PS3 Phat owners have a month left to claim OtherOS class action settlement", url: "https://www.polygon.com/linux/2018/3/18/17135994/playstation-3-otheros-settlement-lawsuit-linux/" },
        { title: "SlashGear: PS3 OtherOS Settlement Claims End Next Month", url: "https://www.slashgear.com/ps3-otheros-settlement-claims-end-next-month-18523535/" }
      ]
    },
    {
      date: "2018",
      dateLabel: "2018年",
      title: "PS3Xploit flash-writer 软刷降级",
      category: "软破",
      exploit: "PS3Xploit flash-writer（软件读写 NOR/NAND）",
      cve: "",
      firmware: "OFW / HFW 4.81 ~ 4.82",
      description: "PS3Xploit 团队把浏览器取得的内核权限继续用在闪存操作上：flash-writer 让主机在不接 E3 Flasher、不拆机不焊接的情况下直接读写自身的 NOR/NAND 闪存，可以备份与恢复固件镜像、把主机降到 3.55 后再刷 CFW。这一步补上了软破路线的最后一块短板——过去必须动烙铁的硬降级流程，被整体搬进了浏览器页面。对普通用户而言，“免硬改”从此不仅意味着能装自制程序，也意味着能做以前只有改机店才敢做的降级操作。",
      sources: [
        { title: "GitHub: PS3Xploit/flash-writer Releases", url: "https://github.com/PS3Xploit/flash-writer/releases" },
        { title: "GitHub: PS3Xploit/PS3HEN", url: "https://github.com/PS3Xploit/PS3HEN" }
      ]
    },
    {
      date: "2019",
      dateLabel: "2019年",
      title: "PS3HEN 与 HFW 扩展到 4.83–4.90",
      category: "工具与生态",
      exploit: "HFW（Hybrid Firmware）+ PS3HEN",
      cve: "",
      firmware: "HFW 4.83 ~ 4.90（含 Super Slim）",
      description: "索尼每次更新固件都会顺手修掉浏览器漏洞，PS3Xploit 团队于是改用 HFW（Hybrid Firmware）：在官方固件基础上打补丁，把被官方修掉的浏览器漏洞“还回去”，再配合 PS3HEN（Homebrew ENabler）加载自制程序，绕开主机对 CFW 的签名校验。这样即便在较新的 4.83 至 4.90 固件上，所有机型（包括锁死的 Super Slim）也能运行自制软件，只是功能弱于完整 CFW，且每次重启都要重新启用一次。官方封堵与社区跟进由此进入“你更新、我跟进”的长期循环。",
      sources: [
        { title: "GitHub: PS3Xploit/PS3HEN", url: "https://github.com/PS3Xploit/PS3HEN" },
        { title: "PurePC: PlayStation 3 złamane - jailbreak na systemie 4.84 możliwy", url: "https://www.purepc.pl/playstation-3-zlamane-jailbreak-na-systemie-w-wersji-4-84-mozliwy" },
        { title: "GitHub: PS3Xploit 组织仓库（PS3HEN / flash-writer 等工具）", url: "https://github.com/PS3Xploit" }
      ]
    },
    {
      date: "2025-03",
      dateLabel: "2025年3月",
      title: "固件 4.92 与 PS3HEN 3.4.0 跟进",
      category: "工具与生态",
      exploit: "HFW 4.92 + PS3HEN 3.4.0",
      cve: "",
      firmware: "OFW / HFW 4.92",
      description: "索尼在 2025 年 3 月为已停产多年的 PS3 推送了 4.92 固件，据媒体报道主要与蓝光播放功能相关的密钥刷新有关；社区第一时间提醒 CFW 与 HEN 用户不要升级。随后 PS3Xploit 团队的 esc0rtd3w 发布了 HFW 4.92 与 PS3HEN 3.4.0，把越狱能力继续带到最新固件上。这种官方每年维护、社区随即跟进的拉锯，已经持续了十余年，也让 PS3 成为极少数在停产后近十年仍有活跃自制生态的主机。",
      sources: [
        { title: "PSX-Place: PS3 Firmware 4.92 - Update is Live!", url: "https://www.psx-place.com/threads/ps3-firmware-4-92-update-is-live.46825/" },
        { title: "PSX-Place: PS3HEN 3.4.0 + HFW 4.92 officially released by esc0rtd3w", url: "https://www.psx-place.com/threads/ps3hen-3-4-0-hfw-4-92-officially-released-by-esc0rtd3w-of-team-ps3xploit.46959/" },
        { title: "Eurogamer: Sony's PS3 gets new system software update, 19 years after release", url: "https://www.eurogamer.net/sonys-ps3-gets-new-system-software-update-19-years-after-release" }
      ]
    },
    {
      date: "2026-01",
      dateLabel: "2026年1月22日（公布）",
      title: "BadWDSD 硬件模块搭配 qCFW 攻破 Super Slim",
      category: "硬破",
      exploit: "BadWDSD（RP2040 内存注入 modchip）+ qCFW（quasi-CFW）",
      cve: "",
      firmware: "Slim 25xx/30xx 与 Super Slim 4xxx（NOR 与 eMMC），基于 HFW 4.92 及以后",
      description: "2026 年 1 月 22 日，硬件工程师 Modyfikator89（aomsin2526）公开 BadWDSD：一块基于 Raspberry Pi Pico（RP2040）的改装模块，通过在开机阶段对主板 XDR 内存总线做硬件级注入，绕过索尼的启动校验。由于攻击发生在硬件层，官方无法用固件更新封堵。它让 25xx/30xx 与 4xxx（含 eMMC 机型）这些原本永久不支持 CFW 的机型能够启动 qCFW —— 一个以 Evilnat PEX 为基础、保留除 eid_root_key 导出外几乎全部功能的“准自制固件”，并支持 DEX 模式、降级、HDD 解密、BD/Syscon remarry、OtherOS（petitboot）与新增的 lv1 peek/poke/exec hvcalls。演示中一台 PS3 4000 的 RSX 被超频到 850MHz（默认 500MHz），也把初代机型才有的 Linux 安装与 PS2 模拟功能带回了薄机。代价是需要拆机焊接 CMD/CLK、SC_RX/SC_TX 等细线，成功率对焊接质量高度敏感。",
      sources: [
        { title: "GitHub: aomsin2526/BadWDSD（RP2040 modchip，可让非 CFW 机型启动 qCFW）", url: "https://github.com/aomsin2526/BadWDSD" },
        { title: "IT之家：硬件工程师自制索尼 PS3 薄机超频模块，还能解锁 Linux 系统安装、PS2 模拟等被砍功能（2026-01-25）", url: "https://digi.ithome.com/archiver/0/916/229.htm" },
        { title: "Notebookcheck: An 'updated' PS3 hardware mod unlocks CELL and RSX overclocking on the Super Slim using a Raspberry Pi Pico", url: "https://www.notebookcheck.net/An-updated-PS3-hardware-mod-unlocks-CELL-and-RSX-overclocking-on-the-Super-Slim-using-a-Raspberry-Pi-Pico.1211940.0.html" }
      ]
    },
    {
      date: "2026-02",
      dateLabel: "2026年2月28日（release 3）",
      title: "qCFW 进入稳定迭代，社区补齐 Super Slim 工作流",
      category: "工具与生态",
      exploit: "qCFW（基于 Evilnat PEX）+ Cobra-PS3-qCFW",
      cve: "",
      firmware: "HFW 4.92 及以后，要求 PS3HEN 3.6.0 或更高",
      description: "在 BadWDSD 硬件方案公布后，qCFW 以近乎每月的节奏迭代，2026 年 2 月 28 日的 release 3 补上了对 CMD/CLK 焊接损坏的快速失败提示（模块 LED 急闪 5 秒后关机，避免 30 秒 GLOD 误判），并完善了安装与回退流程：先用 HEN 安装 Stagex、再装模块、最后从 XMB 安装 qCFW，整个过程 10-20 分钟，出错仍可进安全模式重刷官方固件。同期还出现了 Cobra-PS3-qCFW 等配套组件，说明这条“硬件注入 + 准自制固件”的路线已经从实验走向可复制的工程流程。",
      sources: [
        { title: "GitHub Releases: BadWDSD / qCFW（含 qcfw-20260228-release-3）", url: "https://github.com/aomsin2526/BadWDSD/releases" },
        { title: "GitHub: aomsin2526/Cobra-PS3-qCFW", url: "https://github.com/aomsin2526/Cobra-PS3-qCFW" },
        { title: "PSX-Place: qCFW - Arrives to Slim (2500-3000) & SuperSlim (4000-NOR) PlayStation 3 Models", url: "https://www.psx-place.com/threads/qcfw-arrives-to-slim-2500-3000-superslim-4000-nor-playstation-3-models.49533/" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月18日（官方 4.93），社区 HFW 4.93 / 4.93.1 随后跟进",
      title: "固件 4.93 与 HFW 4.93.1、PS3HEN 跟进",
      category: "工具与生态",
      exploit: "HFW 4.93 / 4.93.1 + PS3HEN",
      cve: "",
      firmware: "OFW 4.93 → HFW 4.93 / 4.93.1",
      description: "索尼在 2026 年 3 月 18 日为近二十年机龄的 PS3 推送了 4.93 固件，官方说明依旧只有“改善系统性能”，媒体普遍认为重点仍是蓝光播放所需的密钥刷新——不更新就放不了新压制的高清影碟。社区第一时间提醒 CFW/HEN 用户不要升级，随后 PS3Xploit 团队发布 HFW 4.93，并很快更新到 4.93.1，把被官方修补的浏览器入口重新打回去，同时提供针对 HFW 4.93 的 HEN 备用安装器。官方年度维护、社区数日内跟进的节奏，至此已经持续了十六年。",
      sources: [
        { title: "SlashGear: The PS3 Just Got A New Update Two Decades After Release（2026-04-01，含 4.93 于 2026-03-18 推送）", url: "https://www.slashgear.com/2137390/sony-playstation-3-update-march-2026/" },
        { title: "PSX-Place: HFW 4.93.1 (Hybrid Firmware) Official Release", url: "https://psx-place.com/threads/hfw-4-93-1-hybrid-firmware-official-release.49792/" },
        { title: "PSX-Place: HEN Alternate Installer for HFW 4.93", url: "https://psx-place.com/resources/hen-alternate-installer-for-hfw-4-93.1689/" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月20日",
      title: "PS3HEN 3.6.0 支持 qCFW eMMC 与新开发工具",
      category: "工具与生态",
      exploit: "PS3HEN 3.6.0（含 qCFW 所需的 Stagex 安装项）",
      cve: "",
      firmware: "HFW 4.93 / 4.93.1（兼容 4.80-4.82 OFW 与 4.83+ HFW）",
      description: "2026 年 9 月 20 日，PS3Xploit 团队的 PS3HEN 更新到 3.6.0，新增面向 qCFW 的 eMMC 支持与一批开发工具，并把 Hybrid Firmware Tools 菜单里的 qCFW Options 正式纳入官方工具链。qCFW 的安装说明明确要求 PS3HEN 3.6.0 或更高版本，因此这一版把“Super Slim + BadWDSD 模块 + qCFW”的流程变成了官方推荐路径。对仍在使用 HFW + HEN 的普通用户而言，3.6.0 也带来了更完整的自制软件与插件兼容性。",
      sources: [
        { title: "Logic-Sunrise: [PS3] PS3HEN v3.6.0 disponible : le qCFW eMMC et de nouveaux outils de développement arrivent sur PS3（2026-09-20）", url: "https://www.logic-sunrise.com/forums/topic/109363-ps3-ps3hen-v360-disponible-le-qcfw-emmc-et-de-nouveaux-outils-de-developpement-arrivent-sur-ps3/" },
        { title: "GitHub: PS3Xploit/PS3HEN（Homebrew ENabler）", url: "https://github.com/PS3Xploit/PS3HEN" },
        { title: "GitHub: aomsin2526/BadWDSD（安装说明要求 PS3HEN 3.6.0+）", url: "https://github.com/aomsin2526/BadWDSD" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月27日前后",
      title: "lv0ldr 引导密钥被找回，完整 CFW 重现曙光",
      category: "硬件漏洞",
      exploit: "Cell 处理器安全操作后的残留数据（SPU glitch）",
      cve: "",
      firmware: "在 CECHL 系列（Slim）上完成验证",
      description: "2026 年 9 月，zecoxao、jestero 等 PS3 社区研究者宣布找回 lv0ldr 使用的引导密钥。lv0ldr 是 PS3 启动时最早加载的组件之一，负责校验并解密后续系统软件，其密钥存放于 Cell 处理器的受保护区域，正常情况下软件无法读取。研究者在 CECHL 系列机型上发现，处理器在执行一次安全操作后并未彻底清除敏感数据残留，据此恢复了密钥；这意味着此前只能靠 HFW+HEN 或硬件注入的 Slim 3000 与 Super Slim，理论上有机会运行安装式的完整 CFW。截至 2026 年 10 月该目标尚未实现，报道普遍强调这是里程碑而非万能钥匙。",
      sources: [
        { title: "VideoCardz: Hackers crack PS3 bootloader, opening path to custom firmware on Slim and Super Slim consoles", url: "https://videocardz.com/newz/hackers-crack-ps3-bootloader-opening-path-to-custom-firmware-on-slim-and-super-slim-consoles" },
        { title: "TheLab.gr: Ερευνητές αποκρυπτογράφησαν το κλειδί του bootloader του PS3 έπειτα από σχεδόν 20 χρόνια（2026-09-27，含 zecoxao/jestero 与 CECHL 说明）", url: "https://www.thelab.gr/news/gaming/%CE%B5%CF%81%CE%B5%CF%85%CE%BD%CE%B7%CF%84%CE%AD%CF%82-%CE%B1%CF%80%CE%BF%CE%BA%CF%81%CF%85%CF%80%CF%84%CE%BF%CE%B3%CF%81%CE%AC%CF%86%CE%B7%CF%83%CE%B1%CE%BD-%CF%84%CE%BF-%CE%BA%CE%BB%CE%B5%CE%B9%CE%B4%CE%AF-%CF%84%CE%BF%CF%85-bootloader-%CF%84%CE%BF%CF%85-ps3-%CE%AD%CF%80%CE%B5%CE%B9%CF%84%CE%B1-%CE%B1%CF%80%CF%8C-%CF%83%CF%87%CE%B5%CE%B4%CF%8C%CE%BD-20-%CF%87%CF%81%CF%8C%CE%BD%CE%B9%CE%B1-r12398/" }
      ]
    }
  ]
});
