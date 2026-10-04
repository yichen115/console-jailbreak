window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps-vita",
  name: "PlayStation Vita",
  family: "PlayStation",
  released: "2011-12",
  status: "截至 2026 年 10 月，PS Vita 的状态与 2022 年 3.74 停更时基本一致：Sony 已在 2019 年停产、最后固件停在 3.74，全版本固件（含 3.74）都有公开软破方案，3.65 及以下可用 Enso 永久破解，其余版本先以 HENlo（3.65-3.74）或 h-encore² 取得临时 HEN，再用 modoru 降级到 3.60/3.65 安装 Enso，社区以 HENlo + Enso + SD2Vita 为事实标准。生态重心已从“能不能破”转向应用层：2026 年 7 月出现的 GreenVita 让破解后的 Vita 能串流 Xbox Cloud Gaming 的 Game Pass 游戏，VitaDeploy 等工具箱仍在更新。",
  summary: "PS Vita 的破解史可分为三段：2012-2015 年只能靠 PSP 模拟器漏洞（VHBL/ARK）运行 PSP 自制程序，并短暂出现开发者模式的 Rejuvenate 原生方案；2016 年 Team Molecule 的 HENkaku 用 WebKit 加内核链首次实现免费原生自制程序，2017 年 Enso 把破解前移到启动引导器实现永久 CFW；2018 年后 TheFloW 以 h-encore、Trinity、modoru 和 h-encore²/HENlo 覆盖了直到 3.74 的全部固件。官方封堵始终是“堵入口、不堵漏洞”的打地鼠模式，加上一张自研高价记忆卡，最终把 SD2Vita 这类硬件卡套变成了刚需。",
  events: [
    {
      date: "2011-12",
      dateLabel: "2011年12月",
      title: "PS Vita 日本首发，破解史起点",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "首发固件 1.00-1.03",
      description: "PS Vita 于2011年12月17日在日本发售，2012年2月起在欧美上市，分为 OLED 的 PCH-1000 与后续 LCD 的 PCH-2000，以及 2013 年的 PlayStation TV（PSTV/Vita TV）。主机采用 ARM Cortex-A9 四核、PowerVR SGX543MP4+ GPU，并额外集成一颗 MIPS 处理器用于运行 PSP 模拟器，这颗 MIPS 核心与 HLE 的 Kermit RPC 通信层后来成为 Trinity 漏洞链的核心攻击面。零售机出厂固件为 1.00-1.03，早期固件 WebKit 版本极旧（WebKit 531.22.8），直接沿用了 2010 年就已公开的 iOS/Safari 漏洞。",
      sources: [
        { title: "Vita Development Wiki - Vulnerabilities（含各固件 WebKit 版本与 CVE 对照）", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" },
        { title: "Vita Development Wiki 主页", url: "https://wiki.henkaku.xyz/vita/Main_Page" }
      ]
    },
    {
      date: "2012-03",
      dateLabel: "2012年3月",
      title: "VHBL 借 PSP 游戏存档漏洞登陆 Vita",
      category: "软破",
      exploit: "VHBL (Vita Half-Byte Loader) + PSP 模拟器存档溢出",
      cve: "",
      firmware: "PS Vita 1.6x 及以下，通过 PSP 模拟器",
      description: "VHBL 由 wololo 开发，本质是把 PSP 时代的 Half-Byte Loader 搬到 PS Vita 的 PSP 模拟器（ePSP）里：用户在《MotorStorm: Arctic Edge》《Everybody's Tennis》等 PSP 游戏中放入特制存档，触发模拟器内游戏解析存档时的栈/内存破坏，从而加载未签名的 PSP 自制程序。它并不触及 PS Vita 原生系统，因此只能运行 PSP 自制软件，用户还必须先购买对应的 PSN 游戏；Sony 的对策是直接从 PlayStation Store 下架受影响游戏（而且换用了不同地区的版本）。这类“可破解游戏”路线在 2012 年至少出现了 8 个，2014 年更被一次性泄露 50 多个，构成了 Vita 破解史的前半段。",
      sources: [
        { title: "The Verge: Sony combats PS Vita security exploits by removing PSP titles", url: "https://www.theverge.com/2012/3/27/2907416/sony-ps-vita-security-exploits-psp-title-removal" },
        { title: "Wololo.net - Vita Custom Firmware and Hack History", url: "https://wololo.net/vita-custom-firmware-and-hack-history/" }
      ]
    },
    {
      date: "2012-10",
      dateLabel: "2012年10月",
      title: "WebKit 2.x 用户态利用与 CVE-2012-3748",
      category: "软件漏洞",
      exploit: "JavaScriptCore JSArray::sort 堆缓冲区溢出",
      cve: "CVE-2012-3748",
      firmware: "PS Vita 2.00-3.20（3.30 修复）",
      description: "Vita 浏览器使用的 WebKit 536.26 中，JavaScriptCore 的 JSArray::sort 方法允许用户传入自定义比较函数，如果在比较过程中缩短数组长度，尾部元素会写到 m_storage->m_vector[] 缓冲区之外，形成堆内存破坏。该漏洞原本是 Safari 的公开漏洞（PSA-2013-09-03-1），被社区移植到 Vita 上用于浏览器内代码执行，Davee 也给出了针对固件 2.60 的实现。它标志着 Vita 破解从“买特定 PSP 游戏”转向“打开浏览器就能触发”，也是后续所有 WebKit 入口的先声；Sony 在 3.30 固件更新中修复。",
      sources: [
        { title: "Vita Development Wiki - WebKit exploits（含 CVE 与利用代码链接）", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" },
        { title: "Packet Storm - Apple Safari JSArray::sort heap buffer overflow", url: "http://packetstormsecurity.com/files/123088/" }
      ]
    },
    {
      date: "2013-09",
      dateLabel: "2013年9月",
      title: "Sony 为 PSP 模拟器与内核打上整套缓解措施",
      category: "工具与生态",
      exploit: "内核 ASLR / SMEP-SMAP 等效保护 / 用户态模块加载限制",
      cve: "",
      firmware: "3.00 之后逐步引入，3.30 起显著加强",
      description: "在接连的 WebKit 与模拟器漏洞后，Sony 开始系统性加固：WebKit 与各模块启用 ASLR（约 9 bit 熵），内核引入 SMEP/SMAP 等效机制阻止内核直接读写用户内存，并在浏览器中加入 sceKernelInhibitLoadingModule()，使浏览器进程无法再动态加载模块、也就无法拿到额外的 syscall。这些改动直接改变了破解策略——此后利用必须完成“信息泄露 + ASLR 绕过 + ROP 迁移”的完整链条，并促使 TheFloW 在 2018 年放弃 WebKit 入口、改用静态链接、无 ASLR 的老游戏存档漏洞。",
      sources: [
        { title: "Vita Development Wiki - 内核与用户态漏洞清单", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" },
        { title: "xyz: Exploiting WebKit on Vita 3.60（含 ASLR/ROP/栈迁移缓解分析）", url: "https://blog.xyz.is/2016/webkit-360.html" }
      ]
    },
    {
      date: "2015-06",
      dateLabel: "2015年6月",
      title: "Rejuvenate 发布：首个原生 Vita 自制程序方案",
      category: "软破",
      exploit: "Rejuvenate (PSM Dev Assistant / PSM+ 开发者凭证)",
      cve: "",
      firmware: "3.00-3.51（后续 3.52 失效）",
      description: "Rejuvenate 由 Yifan Lu 发布，是 PS Vita 上第一个真正运行原生（ARM）自制程序的方案。它并不利用内存破坏漏洞，而是滥用 Sony 官方的 PSM（PlayStation Mobile）开发者流程：用户需持有 PSM Publisher 许可证（后由 PSM+ 绕过），在主机上安装 PSM Dev Assistant，再通过 USB/网络用 VitaDefiler 客户端推送 .elf 或 .velf，从而在受签名保护的沙箱内执行自己的代码。限制非常明显——必须装 PSM 开发助手、仅支持 3.00-3.51、无法做内核级修改；Sony 在 3.52 固件中直接禁止 PSM Dev Assistant 运行，终结了这条路线，但其 .velf 格式与工具链被 HENkaku 时代继承。",
      sources: [
        { title: "Wololo.net: Vita Hack Rejuvenate - How to run your first homebrew", url: "https://wololo.net/2015/06/21/vita-hack-rejuvenate-how-to-run-your-first-homebrew/" },
        { title: "Yifan Lu: Hacking the PS Vita（PSM Mono 提权分析）", url: "https://yifan.lu/2015/06/21/hacking-the-ps-vita/" }
      ]
    },
    {
      date: "2015",
      dateLabel: "2015年（具体月份不详）",
      title: "JSArray::sortCompactedVector UAF 被发现",
      category: "软件漏洞",
      exploit: "JSArray::sortCompactedVector use-after-free",
      cve: "",
      firmware: "3.30-3.60（3.61 修复）",
      description: "一位匿名研究者在 2015 年发现：当被排序的数组中含带自定义 toString 的对象，而 toString 触发数组扩容（push）导致底层存储被 realloc 时，sortCompactedVector 仍把已排序元素写回旧的、已释放的 data 指针，形成堆 use-after-free，可把越界写变成任意读写。Team Molecule 把它用在了 HENkaku 的 3.60 攻击链中。Sony 在 3.61 的补丁非常直接：在写回前后各调用一次 storage<>() 重新取指针，这也是 3.61 之后 HENkaku 只能提示“请重启浏览器”的原因。",
      sources: [
        { title: "xyz: Exploiting WebKit on Vita 3.60（含 3.60/3.61 官方源码 diff）", url: "https://blog.xyz.is/2016/webkit-360.html" },
        { title: "henkaku/henkaku 源码（webkit/exploit.js）", url: "https://github.com/henkaku/henkaku" }
      ]
    },
    {
      date: "2016-07-29",
      dateLabel: "2016年7月29日",
      title: "HENkaku 发布：首个免费原生自制程序启用器",
      category: "软破",
      exploit: "HENkaku（WebKit UAF + 内核链 + molecularShell）",
      cve: "",
      firmware: "3.60（3.61 起修复 WebKit 入口）",
      description: "Team Molecule（Yifan Lu、Davee、Proxima、xyz）发布 HENkaku，Vita 首次获得免费、无需购买特定游戏的原生自制程序环境：用户在 3.60 主机的浏览器访问 henkaku.xyz 点击安装，即可获得内核级补丁并装上 molecularShell（FTP/VPK 安装器），随后可运行 .vpk 自制程序。其攻击链是浏览器 WebKit UAF 取得用户态任意读写、绕过 ASLR 与栈迁移保护，再用 ROP 链完成内核提权并加载 taiHEN 框架。它是临时性（tethered）破解，每次冷启动都要重新触发，且明确不支持 3.61 以上固件——这直接把 3.60 变成了社区公认的“黄金固件”。",
      sources: [
        { title: "HENkaku 官方网站", url: "https://henkaku.xyz/" },
        { title: "Wololo.net: Release - PS Vita 3.60 Homebrew Enabler HENkaku", url: "https://wololo.net/2016/07/29/release-ps-vita-3-60-homebrew-enabler-henkaku/" },
        { title: "henkaku/henkaku GitHub 仓库", url: "https://github.com/henkaku/henkaku" }
      ]
    },
    {
      date: "2016-08",
      dateLabel: "2016年8月",
      title: "taiHEN 框架与手动升级到 3.60 的实践",
      category: "工具与生态",
      exploit: "taiHEN、QCMA 降级/升级、HENkaku 更新服务器",
      cve: "",
      firmware: "3.60 及以下",
      description: "HENkaku 发布后出现了两个生态支柱。其一，Yifan Lu 的 taiHEN 作为 CFW 框架，提供内核模块/插件（.suprx）加载机制，让 VitaShell、Adrenaline、插件体系得以建立，并成为后来 Enso 的启动组件。其二，由于 Sony 的自动更新会把主机升到 3.61/3.63，社区搭建了 DNS 劫持方式的手动更新服务（把 DNS 指向 HENkaku 服务器即可只更新到 3.60），并用 QCMA 在本地推送 PSP2UPDAT.PUP 完成离线升级。这两项实践确定了此后多年“先钉在特定固件、再用官方更新文件升/降级”的社区操作范式。",
      sources: [
        { title: "Wololo.net: 如何手动更新到 PS Vita 固件 3.60", url: "https://wololo.net/2016/08/09/manually-update-ps-vita-firmware-3-60/" },
        { title: "yifanlu/taiHEN GitHub 仓库", url: "https://github.com/yifanlu/taiHEN" }
      ]
    },
    {
      date: "2016-08",
      dateLabel: "2016年8月",
      title: "HENkaku 离线安装器：借邮件应用注入",
      category: "工具与生态",
      exploit: "HENkaku Offline Installer（Email 应用 + SQLite 注入）",
      cve: "",
      firmware: "3.60",
      description: "在线版 HENkaku 依赖 go.henkaku.xyz 下发按 ASLR 基址重定位后的 ROP 载荷，而大体积 ROP 链在浏览器中的成功率只有约 30%。xyz 给出的离线方案是把自制的 SQLite 移植到 Vita，向邮件应用数据库写入一个新的账号和预置 HTML 邮件：邮件应用会执行邮件内的 JavaScript，且其 WebKit 可以访问 photo0:（ux0:picture）；利用者在这里放入可重定位的 stage1/stage2，并用“ROP 重定位 ROP”的循环解决 ASLR 问题。该方案无需联网即可安装 HENkaku，并顺带暴露了邮件应用的沙箱边界问题，是 Vita 上“离线持久化入口”的重要思路。",
      sources: [
        { title: "xyz: On HENkaku offline installer", url: "https://blog.xyz.is/2016/henkaku-offline-installer.html" },
        { title: "henkaku/offline-installer（代码引用见于 xyz 文章）", url: "https://github.com/henkaku/henkaku" }
      ]
    },
    {
      date: "2016-11",
      dateLabel: "2016年11月",
      title: "VitaShell 与 Adrenaline 奠定生态工具链",
      category: "工具与生态",
      exploit: "VitaShell、Adrenaline（ePSP 6.61 CFW）",
      cve: "",
      firmware: "3.60（后续扩展至更高固件）",
      description: "TheFloW 的 VitaShell 在 HENkaku 发布后不久上线，提供文件管理、USB/FTP 传输、VPK 安装与存档管理，成为整个 Vita 自制生态的“基础设施”，至今仍是安装所有后续工具的前提。2017 年他又发布 Adrenaline，把 PSP 的 6.61 自定义固件移植进 Vita 的 ePSP 模拟器，让用户可以原生运行 PSP 游戏、自制程序与插件，取代了早期 ARK、TN-V 等方案。这两件工具的意义在于：HENkaku 只解决了“能不能跑代码”，而 VitaShell 与 Adrenaline 才让破解真正可用，也让后续基于“bubble + VPK 安装”的安装流程（h-encore、Trinity 都沿用）成为标准。",
      sources: [
        { title: "TheOfficialFloW/VitaShell GitHub 仓库", url: "https://github.com/TheOfficialFloW/VitaShell" },
        { title: "TheOfficialFloW/Adrenaline GitHub 仓库", url: "https://github.com/TheOfficialFloW/Adrenaline" }
      ]
    },
    {
      date: "2017-01",
      dateLabel: "2017年1月",
      title: "PSVSD 与 SD2Vita 绕开原厂记忆卡",
      category: "硬破",
      exploit: "PSVSD（替换 3G 模块）/ SD2Vita（游戏卡槽 microSD 卡套）",
      cve: "",
      firmware: "需 3.60 HENkaku（后续 3.65+ 亦可）",
      description: "PS Vita 使用昂贵的专有记忆卡，容量与价格长期被诟病。Yifan Lu 的 PSVSD 方案针对 PCH-1000 的 3G 型号，拆机后用一个 PCB 替换 3G 模块并把 microSD 挂到内部总线上，需要焊接与拆机，属于典型的硬改；而 SD2Vita 则由社区在 xyz 的设计（后由 Gadoarch 简化）基础上做成插进游戏卡槽的免焊接卡套，配主机固件内的 storage 插件把 microSD 挂载为 ux0: 或 uma0:。两者都只是存储层绕过、不提供代码执行，必须配合 HENkaku 使用，但极大降低了使用成本，成为 Vita 破解生态中最普及的“硬件配件”。",
      sources: [
        { title: "Yifan Lu: PSVSD - custom Vita microSD card adapter", url: "https://yifan.lu/2017/08/22/psvsd-custom-vita-microsd-card-adapter/" },
        { title: "Hackaday: PS Vita Hacked To Accept Micro SD Instead Of Costly Memory Cards", url: "https://hackaday.com/2017/05/30/ps-vita-hacked-to-accept-micro-sd-instead-of-costly-memory-cards/" },
        { title: "Wololo.net: SD2Vita adapters available for order", url: "https://wololo.net/2017/07/20/sridents-sd2vita-adapters-available-order-ebay-batches-new-batches-daily/" }
      ]
    },
    {
      date: "2017-02",
      dateLabel: "2017年",
      title: "TrustZone 与 DMAC 密码引擎缺陷被公开",
      category: "硬件漏洞",
      exploit: "SMC 0x12F 参数未校验、DMAC5 分块密钥覆写、Bigmac 中间态泄漏",
      cve: "",
      firmware: "与固件版本关系较小，约 1.80 后修复部分缺陷",
      description: "这一阶段的研究把攻击面推进到 SoC 内部。Yifan Lu 在 2017 年 1 月 1 日发现 TrustZone 的 SMC 0x12F（sceSblSmSchedGetStatusMonitorCall）未校验 req_id 与 area 两个参数，可先做 8 字节的 TrustZone 任意读再写回，最终指向 SMC 分发表实现安全域代码执行（Proxima 实现了利用，SKGleba 的 broombroom 中可见完整链）。同年还公开了 DMAC5 密码引擎允许分块写入密钥、可暴力恢复明文 AES 密钥（2017-02-01），以及 Bigmac 引擎在多次 AES 运算间残留上次结果、允许短于一个分组的输入（2017-04-21），用于恢复派生的 keyring。这些缺陷说明 Vita 的信任链根节点本身并不可靠，但利用都需要内核级前提。",
      sources: [
        { title: "Vita Development Wiki - TrustZone 与 Hardware 章节", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" },
        { title: "Yifan Lu 博客（Team Molecule 的 PS Vita 安全研究记录）", url: "https://yifan.lu/" }
      ]
    },
    {
      date: "2017-07-29",
      dateLabel: "2017年7月29日",
      title: "Enso 发布：启动引导器级永久破解",
      category: "硬破",
      exploit: "NSKBL eMMC 初始化缓冲区溢出（Ensō）",
      cve: "",
      firmware: "3.60（3.61-3.65 同样存在漏洞，3.67 修复）",
      description: "Team Molecule 发布 Enso（日语“圆相”），把破解从内核前移到非安全引导加载器 NSKBL：该引导器按固定 512 字节为 eMMC 读分配缓存，却使用 FAT 分区头部中用户可控的 block-size 字段决定实际拷贝长度，造成经典缓冲区溢出并可覆写函数指针。安装时需要先有内核权限去改写内部存储的 MBR，因此必须已运行 HENkaku；一旦写入，Enso 会在每次开机时关闭 authmgr 的签名校验、加载自定义启动脚本与 taiHEN，实现真正的永久 CFW，并支持 Safe Mode 恢复。代价是写引导区有变砖风险（内测阶段出现过两台永久变砖机），且由于每台机器的 NAND 使用独立密钥、没有 NAND 测试点，无法用硬改方式安装或救砖。",
      sources: [
        { title: "Yifan Lu: HENkaku Ensō bootloader hack for Vita", url: "https://yifan.lu/2017/07/31/henkaku-enso-bootloader-hack-for-vita/" },
        { title: "henkaku/enso GitHub 仓库", url: "https://github.com/henkaku/enso" },
        { title: "Vita Development Wiki - NSKBL / Ensō 章节", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" }
      ]
    },
    {
      date: "2018-03",
      dateLabel: "2018年3月",
      title: "3.65 更新器：把 Enso 带到 3.65 固件",
      category: "工具与生态",
      exploit: "3.65 Updater + Enso 3.65",
      cve: "",
      firmware: "从 3.60 升级至 3.65 并保留 CFW",
      description: "由于 Enso 的 NSKBL 漏洞在 3.61-3.65 上依然存在，只是缺少安装所需的 3.65 内核漏洞与偏移量，TheFloW 发布了 3.65 Updater：在已破解的 3.60 主机上刷入 3.65 系统并同时安装 Enso，从而让用户既能用新游戏，又保留永久 CFW。这一步很重要，因为它把“永久破解”的可用范围从单一固件扩展为 3.60/3.65 双基线，使后续 modoru 的降级目标有了明确落点；同时也暴露出跨固件移植 exploit 需要对每个版本重新 dump 非安全引导器、重新定位偏移的工作量。",
      sources: [
        { title: "Wololo.net: Release - 3.65 Updater enables HENkaku Ensō CFW on 3.65", url: "https://wololo.net/2018/03/12/release-3-65-updater-enables-henkaku-enso-custom-firmware-ps-vita-firmware-3-65/" },
        { title: "henkaku/enso GitHub 仓库（3.65 支持）", url: "https://github.com/henkaku/enso" }
      ]
    },
    {
      date: "2018-06-29",
      dateLabel: "2018年6月29日",
      title: "h-encore 发布：首次拿下 3.65-3.68",
      category: "软破",
      exploit: "h-encore（bitter smile. 存档溢出 + SceNgs 内核缺陷）",
      cve: "",
      firmware: "3.65 / 3.67 / 3.68（内核部分 3.60-3.68 可用）",
      description: "在 Enso 无法覆盖 3.67+ 的情况下，TheFloW 转而使用游戏存档漏洞：Freakler 在 2018 年 2 月 17 日发现 DRM-free 的《bitter smile.》试玩版解析文本存档时不校验行长，造成数据段溢出，且溢出后可改写行目标地址表，形成任意写与用户态 ROP；内核侧则利用 SceNgs 音频引擎把“加密”内核指针（与固定常量 XOR 0x9e28dcce）直接交给用户、且 uSizePresetData 未校验导致的越界写，最终完成内核 ROP。整个链条通过 QCMA 备份注入 demo 与存档推送到主机，用户启动 h-encore 气泡即可获得 taiHEN 环境。由于其入口是一个无法被真正修补的老游戏 demo，Sony 只能改用黑名单等下策应对。",
      sources: [
        { title: "TheFloW: h-encore - PS Vita Kernel Exploit（技术原文）", url: "https://theofficialflow.github.io/2018/09/11/h-encore.html" },
        { title: "TheOfficialFloW/h-encore GitHub 仓库", url: "https://github.com/TheOfficialFloW/h-encore" },
        { title: "Vita Development Wiki - SceNgs design flaws (h-encore)", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" }
      ]
    },
    {
      date: "2018-09",
      dateLabel: "2018年9月-2019年",
      title: "Sony 封锁用户入口：3.71 前的一系列修补",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "3.69 / 3.70 / 3.71",
      description: "面对 h-encore，Sony 走的是“封入口、加检查”的路线。2018 年 9 月 11 日发布的 3.69 修补了 SceNgs 内核缺陷，并引入针对降级的校验以防止用户回退固件；随后又把《bitter smile.》试玩版从 PSN 与内容管理器中拉黑，使 3.71 用户无法再取得 h-encore 的入口文件。这种修补方式的特点是：内核 Bug 与存档解析漏洞本身难以根治，但可以通过收缩分发渠道与加入降级检查显著提高利用门槛。作为直接后果，社区不得不转向 Trinity（基于 PSP 模拟器与系统级漏洞）以及 h-encore² 的重写入口方案。",
      sources: [
        { title: "TheFloW: h-encore 原文中关于 Sony 补丁的描述", url: "https://theofficialflow.github.io/2018/09/11/h-encore.html" },
        { title: "Wololo.net: h-encore² 发布说明（含降级检查与 3.72 封堵的讨论）", url: "https://wololo.net/2019/08/26/psvita-news-theflow-releases-h-encore%c2%b2-with-support-for-fw-3-71-you-can-now-hack-the-latest-psvita-firmware-again-and-run-your-favourite-homebrew-on-every-vita-pstv/" }
      ]
    },
    {
      date: "2018-10",
      dateLabel: "2018年",
      title: "系统级链式漏洞：栈泄露与 WLAN 堆溢出",
      category: "软件漏洞",
      exploit: "sceUdcdGetDeviceInfo 栈泄露、WLAN 命令 0x50120004 堆溢出",
      cve: "",
      firmware: "修复于 3.71",
      description: "TheFloW 为 Trinity 准备了两个只能在系统权限下触发的漏洞。2018 年 10 月 9 日发现 sceUdcdGetDeviceInfo 会分配 0x40 字节栈缓冲但只初始化其中 8 字节，随后把整个缓冲区拷回用户态，导致 0x38 字节内核栈残留泄露（可先调用特定 syscall 把内核模块地址、栈指针留在栈上），用于绕过 KASLR。2018 年 9 月 26 日发现 WLAN 命令 0x50120004 有一个未校验的 32 位长度传给 memcpy，造成堆溢出；通过伪造空闲块并触发 free() 的 unlink 攻击，可把可控内存块指针写到任意内核地址，最终劫持函数指针并跳入内核 ROP。两者都在 3.71 被修复。",
      sources: [
        { title: "TheFloW: Trinity - PSP Emulator Escape（Stack Disclosure / Heap Overflow 章节）", url: "https://theofficialflow.github.io/2019/06/18/trinity.html" },
        { title: "Vita Development Wiki - 内核漏洞清单（sceUdcdGetDeviceInfo / WLAN 0x50120004）", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" }
      ]
    },
    {
      date: "2019-02-14",
      dateLabel: "2019年2月14日",
      title: "modoru 发布：任意固件降级成为常规手段",
      category: "软破",
      exploit: "modoru（固件降级工具）",
      cve: "",
      firmware: "已在 3.60-3.68 破解的主机，可降至主板支持的最低版本",
      description: "TheFloW 发布 modoru（日语“回去”），让已破解的主机可以刷入任意主板支持的固件版本，通常降到 3.60 或 3.65 以获得 HENkaku Enso 永久破解。使用前必须关闭所有插件（因此不能从 SD2Vita 运行）、电量需高于 50%，并需要官方记忆卡或内置存储——这些都是为了防止降级过程中断电导致硬砖。它把“固件版本”从不可逆的一次性选择变成了可以利用者可管理的变量，是后续所有“升到最新 → 破解 → 降级 → 装 Enso”标准流程的关键一环；2019 年 8 月 Sony 在 3.71 加入降级检查后，modoru 一度会导致软砖，社区随后用 SKGleba 的 dsll 等方案绕过。",
      sources: [
        { title: "Wololo.net: Modoru 降级工具发布", url: "https://wololo.net/2019/02/14/modoru-downgrading-utility-released/" },
        { title: "TheOfficialFloW/modoru GitHub 仓库", url: "https://github.com/TheOfficialFloW/modoru" }
      ]
    },
    {
      date: "2019-05-06",
      dateLabel: "2019年5月6日",
      title: "Trinity 发布：从 PSP 模拟器逃逸到 ARM 内核",
      category: "软破",
      exploit: "Trinity（六个漏洞组成的完整链）",
      cve: "",
      firmware: "3.69 / 3.70（3.71 修复其内核与模拟器漏洞）",
      description: "Trinity 是 TheFloW 的代表作，由六个漏洞串联成一条从 MIPS 到 ARM ring0 的完整链：先在 PSP 模拟器内用 UID 对象类型混淆拿到 MIPS 内核提权，再用 sceNpCore_8AFAB4A0 的双取（TOCTTOU）竞态做任意读以获取随机种子；随后通过 Kermit RPC 协议的 KERMIT_CMD_ADHOC_CREATE 栈溢出（2018-05-26 由黑盒 fuzzer 发现）取得 ARM 侧控制流，并用 CSC 色彩空间转换未校验行号实现任意读以泄露栈 canary；最后用 sceUdcdGetDeviceInfo 栈泄露绕过 KASLR、WLAN 堆溢出 unlink 攻击拿到内核执行。它要求主机装有任意 PSP 游戏/试玩版，虽然每次都需重新触发，但让 3.69/3.70 用户得以先破解再降级到 3.60/3.65 安装 Enso。",
      sources: [
        { title: "TheFloW: Trinity - PSP Emulator Escape（技术原文）", url: "https://theofficialflow.github.io/2019/06/18/trinity.html" },
        { title: "TheOfficialFloW/Trinity GitHub 仓库", url: "https://github.com/TheOfficialFloW/Trinity" },
        { title: "Wololo.net: Trinity Exploit 发布", url: "https://wololo.net/2019/05/06/trinity-exploit-by-theflow-released-you-can-now-hack-psvita-and-pstv-fw-3-69-3-70-and-run-all-the-homebrew-you-want/" }
      ]
    },
    {
      date: "2019-08-26",
      dateLabel: "2019年8月26日",
      title: "h-encore² 发布：覆盖 3.71/3.72 与最终 3.74",
      category: "软破",
      exploit: "h-encore²（sceNgsVoiceGetParamsOutOfRange 栈泄露等新内核链）",
      cve: "",
      firmware: "3.65-3.72（首版含 3.71，后扩展至 3.74）",
      description: "在被 TheFloW 称为“最后一次”的 Trinity 之后，他仍发布了 h-encore²：入口继续复用无法修补的《bitter smile.》试玩版存档漏洞，内核部分改用了新的内核栈泄露漏洞 sceNgsVoiceGetParamsOutOfRange（通过负索引读取内核栈并据此推导内核栈与 SceSysmem 基址）以及多个先前预留的内核 Bug，从而把支持范围扩展到 3.71/3.72，最终覆盖 Sony 的收官固件 3.74。该链成功率约 25%，需要已绑定 PSN 账号、初代机型还需记忆卡；Sony 在 3.72 中试图拉黑试玩版 demo，但实际未修补存档漏洞，TheFloW 更新二进制即恢复兼容。",
      sources: [
        { title: "TheOfficialFloW/h-encore-2 GitHub 仓库（支持 3.65-3.74）", url: "https://github.com/TheOfficialFloW/h-encore-2" },
        { title: "Wololo.net: TheFlow releases h-encore² with support for FW 3.71", url: "https://wololo.net/2019/08/26/psvita-news-theflow-releases-h-encore%c2%b2-with-support-for-fw-3-71-you-can-now-hack-the-latest-psvita-firmware-again-and-run-your-favourite-homebrew-on-every-vita-pstv/" },
        { title: "Vita Development Wiki - sceNgsVoiceGetParamsOutOfRange 栈泄露", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" }
      ]
    },
    {
      date: "2019-09",
      dateLabel: "2019年",
      title: "PS Vita 停产，官方支持周期结束",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "停产时固件为 3.72",
      description: "Sony 在日本官网把 PS Vita 的两个型号标记为“出荷完了”（出货结束），正式结束这款 2011 年发售掌机的生产，Sony 互动娱乐高层也公开表示没有后续掌机计划。对破解生态而言，停产带来两个直接后果：一方面新出厂主机不再存在，用户只能在存量机器上做固件规划（3.60/3.65 的存量机成为稀缺资源）；另一方面 Sony 的固件更新动机显著下降，此后只发布了 3.73（2020 年）与 3.74（2022 年）这类小版本更新，使 h-encore² 与 HENlo 的覆盖范围长期停留在最终版本之上。",
      sources: [
        { title: "GameIndustry.biz: PlayStation Japan signals imminent end to PS Vita shipments", url: "https://www.gamesindustry.biz/playstation-japan-signals-imminent-end-to-ps-vita-shipments" },
        { title: "GameRevolution: PS Vita production has ended in Japan", url: "https://www.gamerevolution.com/news/504241-ps-vita-production-ended-japan" },
        { title: "RTBF: Le site officiel japonais de Sony confirme la fin de la production de la PS Vita", url: "https://beta.rtbf.be/article/le-site-officiel-japonais-de-sony-confirme-la-fin-de-la-production-de-la-ps-vita-10149605" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年",
      title: "内核模块地址泄露与 VitaDeploy 等新工具",
      category: "软件漏洞",
      exploit: "SceKernelModulemgr 导入表内核地址泄露；VitaDeploy / IMCUnlock",
      cve: "",
      firmware: "约 3.50-3.74（该泄露途径长期未修复）",
      description: "Princess of Sleeping 在 2020 年 10 月 21 日公开了一个有趣的内核地址泄露：SceKernelModulemgr 允许用户态模块导入内核模块的非 syscall 导出函数，并把解析出的内核函数地址以 movw/movt/bx ip 形式写进用户模块的导入表，攻击者读回自己的导入表即可反推出内核模块基址，用于绕过 KASLR；限制是必须能启动自定义 fSELF，因此主要适用于开发机/测试机。与此同时生态侧继续演进：SKGleba 的 VitaDeploy 把安装 CFW、降级、装 Enso、配置文件系统等流程整合为一个工具箱，IMCUnlock 则让 Slim/PSTV 的内置存储可作为 ux0: 使用，进一步降低了破解门槛。",
      sources: [
        { title: "Vita Development Wiki - 内核漏洞与工具记录", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" },
        { title: "SKGleba/VitaDeploy GitHub 仓库", url: "https://github.com/SKGleba/VitaDeploy" }
      ]
    },
    {
      date: "2021-04",
      dateLabel: "2021年4月",
      title: "PS Store 关闭计划撤回，官方商店保留",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "3.73",
      description: "Sony 在 2021 年 3 月宣布将于当年夏季关闭 PS3、PSP 与 PS Vita 的 PlayStation Store，引发强烈反弹；4 月 19 日 Sony 承认这是“错误的决定”，宣布撤销 PS3 与 PS Vita 商店的关闭计划（PSP 商店仍在 7 月 2 日关闭）。对 Vita 破解生态而言，这保住了官方数字内容与激活/内容管理器相关服务的可用性，也让 h-encore²、Trinity 这类依赖 PSN 激活与内容管理器推送的安装流程得以延续，避免了“新用户彻底无法入门”的局面。",
      sources: [
        { title: "The Verge: Sony admits it made 'wrong decision' and will keep PS3, Vita stores open", url: "https://www.theverge.com/2021/4/19/22392126/sony-ps3-ps-vita-stores-open-backtrack-psp-july-2nd-mistake" }
      ]
    },
    {
      date: "2022-12",
      dateLabel: "2022年12月",
      title: "HENlo 发布：WebKit + 内核链覆盖全部固件",
      category: "软破",
      exploit: "HENlo（WebKit arguments.length 未初始化栈读 UAF + sceNetSyscallControl 堆泄露 + sceNetSyscallGetIfList 整数溢出堆溢出）",
      cve: "",
      firmware: "3.65-3.74（全部已发布固件）",
      description: "TheFloW 发布 HENlo，这是 Vita 上最后一条完整的公开越狱链：WebKit 侧复用了 2017 年 PS4 上被 qwertyoruiop 利用、并由 Specter 公开文档化的 arguments.length 未初始化栈读导致 UAF 的漏洞（Vita 的 WebKit 537.73 一直未修补），可绕过 ASLR 并取得用户态任意读写；内核侧则是他在 2020 年 5 月发现、2022 年才公开的两个 SceNetPs 缺陷——sceNetSyscallControl 因分配时漏掉标志位导致堆信息泄露（泄露 SceNetPs 基址与内部对象地址），以及 sceNetSyscallGetIfList 的 num*0x140 整数溢出导致堆溢出并可劫持堆上对象函数指针。由于完全基于浏览器，HENlo 成为 3.73/3.74 用户最方便的入口。",
      sources: [
        { title: "TheOfficialFloW/HENlo GitHub 仓库", url: "https://github.com/TheOfficialFloW/HENlo" },
        { title: "Vita Development Wiki - HENlo 所用漏洞条目", url: "https://wiki.henkaku.xyz/vita/Vulnerabilities" }
      ]
    },
    {
      date: "2023-02",
      dateLabel: "2023年",
      title: "末期生态收敛：Enso 可覆盖全部固件",
      category: "工具与生态",
      exploit: "HENlo + h-encore² + modoru + Enso 整合流程",
      cve: "",
      firmware: "1.03-3.74",
      description: "到 2023 年，Vita 破解已经收敛成一套几乎无版本差异的标准流程：用 HENlo（3.65-3.74）或 HENkaku（3.60）取得临时破解，用 modoru 2.3（支持 3.74）降到 3.65 或 3.60，再安装 Enso 获得永久 CFW 与 taiHEN 插件环境，最后用 SD2Vita/VitaDeploy 等工具完成存储与配置。社区文档（如 Vita Hacks Guide）与 wololo 的指南把流程标准化，覆盖固件 1.03 到 3.74、包含 PS Vita 1000/2000 与 PS TV 全部机型。Sony 自 2022 年的 3.74 后再无更新，这条时间线基本停止演进。",
      sources: [
        { title: "Vita Hacks Guide（覆盖 1.03-3.74 的完整流程）", url: "https://vita.hacks.guide/" },
        { title: "Wololo.net - Vita Custom Firmware for dummies", url: "https://wololo.net/vita-cfw4dummies/" }
      ]
    },
    {
      date: "2025-10",
      dateLabel: "2025年10月25日（v1.2.3 coldfix）",
      title: "VitaDeploy 持续维护，破解流程一键化",
      category: "工具与生态",
      exploit: "VitaDeploy v1.2.3 + IMCUnlock",
      cve: "",
      firmware: "3.60-3.74（配合 HENkaku / HENlo）",
      description: "SKGleba 的 VitaDeploy 在 2025 年 10 月 25 日发布 v1.2.3 coldfix，继续把安装 CFW、降级、装 Enso、配置文件系统、写入内置存储等步骤整合进单个工具箱。对于 3.73/3.74 用户，典型路径已经固定为 HENlo 取得临时破解、VitaDeploy 内用 modoru 降级、再一键安装 Enso；IMCUnlock 则让 Slim 与 PS TV 的内置存储可以当作 ux0: 使用，进一步降低了对原厂记忆卡的依赖。这类工具更新说明 Vita 的破解生态虽无新漏洞，却仍在被持续打磨。",
      sources: [
        { title: "GitHub Releases: SKGleba/VitaDeploy v1.2.3 coldfix（2025-10-25）", url: "https://github.com/SKGleba/VitaDeploy/releases/tag/v1.2.3" },
        { title: "GitHub: SKGleba/VitaDeploy（安装 CFW / 降级 / Enso 工具箱）", url: "https://github.com/SKGleba/VitaDeploy" },
        { title: "Vita Hacks Guide（当前推荐流程）", url: "https://vita.hacks.guide/" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月23日前后",
      title: "GreenVita 让破解版 Vita 串流 Xbox Cloud Gaming",
      category: "工具与生态",
      exploit: "GreenVita（Xbox Cloud Gaming 客户端）",
      cve: "",
      firmware: "已破解的 PS Vita / PS TV（任意可装自制程序的固件）",
      description: "2026 年 7 月，社区发布 GreenVita —— 一个运行在破解主机上的 Xbox Cloud Gaming 客户端。配合有效的 Game Pass 订阅，PS Vita 可以直接串流运行 Xbox 云游戏，把手柄、屏幕与网络协议适配成了便携 Xbox，而不是靠本地模拟。它延续了 Vita 生态近年的方向：靠自制软件与新服务续命，同期还出现了基于 Azahar 的 Nintendo 3DS 模拟器早期移植。对一台 2019 年停产、固件自 2022 年起再无更新的掌机而言，这类项目说明其破解生态依然活跃。",
      sources: [
        { title: "XDA Developers: The 14-year-old PS Vita can now stream Xbox games from the cloud（2026-07-23）", url: "https://www.xda-developers.com/hackers-revived-this-sony-portable-as-an-xbox-and-its-not-the-psp/" },
        { title: "TweakTown: Modders turn the PS Vita into a modern gaming handheld through Xbox Cloud Gaming", url: "https://www.tweaktown.com/news/112846/modders-turn-the-ps-vita-into-a-modern-gaming-handheld-through-xbox-cloud-gaming/index.html" },
        { title: "GitHub: SKGleba/VitaDeploy（安装自制程序的标准工具链）", url: "https://github.com/SKGleba/VitaDeploy" }
      ]
    }
  ]
});
