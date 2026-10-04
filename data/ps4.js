window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "ps4",
  name: "PlayStation 4",
  family: "PlayStation",
  released: "2013-11",
  status: "截至 2026 年 10 月，PS4 全系机型都可用纯软件方式越狱，上限已被推到最后一代可越狱固件：2026 年 2 月公开的 Vue After Free 借 PlayStation Vue 应用的用户态漏洞（CVE-2017-7117）串接 Lapse/NetCtrl 内核漏洞，覆盖 7.00-13.00（用户态本身可到 13.04）；2026 年 9 月 Syimy（raw-game）的 WebKit 链把纯浏览器越狱一路推到 11.50-13.52，配合 GoldHEN 2.4b18.11/2.4b18.12 实现打开网页即越狱。Sony 随后用 14.00 固件封堵，PPPwn 仍覆盖 7.00-11.00，BD-JB + Poops 路线最高到 13.00，官方只能靠抬高固件门槛应对。",
  summary: "PS4 的破解史是清晰的接力结构：CTurt、fail0verflow 等研究者先公开安全架构与内核漏洞，2017 年后 4.05、5.05、6.72、7.55、9.00 等固件接连被公开越狱，攻击面从浏览器扩展到蓝光 Java、网络协议栈与配件协处理器。索尼用固件更新逐一封堵入口，同时把主机本体做得足够抗篡改，使 PS4 始终没有出现可长期使用的直读芯片或光驱模拟器。2024 年 PPPwn 把内核 RCE 变成网络侧一键触发，2025 年 BD-JB 与 Lapse/Poops 组合把越狱上限推到 12.50 以上，配合 GoldHEN 形成成熟的工具生态。",
  events: [
    {
      date: "2013-11",
      dateLabel: "2013年11月",
      title: "PS4 发售：Orbis OS 基于 FreeBSD 9.0",
      category: "工具与生态",
      exploit: "Orbis OS / WebKit 浏览器",
      cve: "",
      firmware: "首发 1.50，1.76 为早期研究对象",
      description: "PS4 于 2013 年 11 月 15 日在北美发售，采用 x86-64 架构的 AMD APU，操作系统 Orbis OS 基于 FreeBSD 9.0，浏览器内嵌 WebKit，并保留了大量 FreeBSD 系统调用与约 85 个索尼自定义系统调用。系统还提供 SceSysmodule、SceShellUI 等专有模块与 jail 式沙箱隔离，构成从 WebKit 用户态到内核的完整攻击面。首发 1.50/1.76 固件的内核没有开启 KASLR，直接降低了后续漏洞利用的门槛。此后索尼通过固件更新持续升级 WebKit、加固内核并封堵越狱入口，形成长达十余年的攻防拉锯。",
      sources: [
        { title: "Wikipedia: PlayStation 4", url: "https://en.wikipedia.org/wiki/PlayStation_4" },
        { title: "Wikipedia: PlayStation 4 system software", url: "https://en.wikipedia.org/wiki/PlayStation_4_system_software" },
        { title: "CTurt: Hacking the PS4 part 1", url: "https://cturt.github.io/ps4.html" }
      ]
    },
    {
      date: "2013-11",
      dateLabel: "2013年11月",
      title: "焊接式 DualShock 4 改装芯片出现",
      category: "硬破",
      exploit: "Ragnarok / Ragnarok Flex modchip",
      cve: "",
      firmware: "全系机型（改动位于手柄侧）",
      description: "PS4 发售仅十天后，第三方改机厂商 Extreme-Mods 就发布了需要焊接安装的 Ragnarok Flex 改装芯片手册，为 DualShock 4 手柄提供连发、宏等功能。芯片直接焊接在手柄主板按键与电源线路上，通过改写输入信号实现功能，属于典型的手工硬改（soldering）方案。由于改动只发生在配件侧，索尼的主机固件更新无法封堵此类改装，改装手柄也长期与作弊器产业绑定销售。这说明早在主机生命周期起点，硬件改装就已经围绕配件形成了灰色市场。",
      sources: [
        { title: "Wayback Machine: Extreme-Mods 官网存档（Ragnarok 系列改装芯片厂商）", url: "https://web.archive.org/web/2015/http://www.extreme-mods.com/" },
        { title: "PS4 Ragnarok Flex Modchip Installation Instructions", url: "https://www.readkong.com/page/ps4-ragnarok-flex-modchip-installation-instructions-8720204" }
      ]
    },
    {
      date: "2014",
      dateLabel: "2014年",
      title: "WebKit 堆溢出漏洞被移植到 PS4 浏览器",
      category: "软破",
      exploit: "JSArray::sort 堆溢出（JuSt-ROP 前身）",
      cve: "CVE-2012-3748",
      firmware: "1.76 及以下",
      description: "研究者 nas 与 Proxima 将原本针对 Mac OS X Safari 的 CVE-2012-3748（WebKit JSArray::sort 堆溢出）利用移植到 PS4 1.76 的浏览器，首次公开取得 WebKit 进程内的任意读写与 ROP 执行能力。这是 PS4 破解链标准的用户态第一步：结合模块表泄漏即可在 JavaScript 中动态构造 ROP 链，绕过用户态 ASLR 并调用系统调用。由于当时内核没有 KASLR，该入口与内核漏洞结合即可完成提权。索尼随后在更高固件中升级 WebKit 版本并引入更多缓解措施，此类旧漏洞入口随之失效。",
      sources: [
        { title: "CTurt: Hacking the PS4 part 1（记录本次移植）", url: "https://cturt.github.io/ps4.html" },
        { title: "Exploit-DB 28081: WebKit JSArray::sort PoC", url: "https://www.exploit-db.com/exploits/28081" },
        { title: "NVD: CVE-2012-3748", url: "https://nvd.nist.gov/vuln/detail/CVE-2012-3748" }
      ]
    },
    {
      date: "2014-11",
      dateLabel: "2014年11月",
      title: "getlogin 内核栈信息泄漏漏洞影响 PS4",
      category: "软件漏洞",
      exploit: "getlogin/setlogin 内核栈泄漏",
      cve: "CVE-2014-8476",
      firmware: "FreeBSD 9.0 衍生内核（含 1.76）",
      description: "FreeBSD 的 getlogin/setlogin 系统调用存在内核栈信息泄漏缺陷：内核总是拷贝整个缓冲区，而不是仅拷贝用户名长度，导致未初始化的内核内存被复制到用户态。CTurt 在 PS4 上验证该缺陷可用，从中泄漏出稳定的内核指针，并借此确认 PS4 内核未启用 KASLR、浏览器进程以 root 身份运行。这类信息泄漏在后续利用中用于确定内核基址与关键对象地址。PS4 内核作为 FreeBSD 9.0 的衍生版本同样受此问题影响。",
      sources: [
        { title: "FreeBSD VuXML: Kernel stack disclosure in setlogin(2)/getlogin(2)", url: "https://vuxml.freebsd.org/freebsd/74389f22-6007-11e6-a6c3-14dae9d210b8.html" },
        { title: "CVE-2014-8476 (MITRE)", url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-8476" },
        { title: "CTurt: Hacking the PS4 part 1（PS4 上的验证）", url: "https://cturt.github.io/ps4.html" }
      ]
    },
    {
      date: "2015-06",
      dateLabel: "2015年6月",
      title: "CTurt 公开 PS4 安全架构与 JuSt-ROP/PS4-SDK",
      category: "工具与生态",
      exploit: "JuSt-ROP / PS4-SDK",
      cve: "",
      firmware: "1.76",
      description: "2015 年 6 月 29 日 CTurt 发表《Hacking the PS4》系列第一篇，系统公开 PS4 的安全模型：FreeBSD jail 沙箱、索尼自定义系统调用、JIT 共享内存机制以及模块加载与转储方法。他同时发布 JuSt-ROP（JavaScript 动态 ROP 框架）与 PS4-SDK，使浏览器内的漏洞利用与自制程序开发成为可能。该系列在 2015 年 12 月完成第三篇，第一次让外界完整看到 PS4 内核的形态与可利用方向。这些工具成为后续所有 PS4 越狱链的技术基础。",
      sources: [
        { title: "CTurt: Hacking the PS4 part 1", url: "https://cturt.github.io/ps4.html" },
        { title: "GitHub: CTurt/PS4-SDK", url: "https://github.com/CTurt/PS4-SDK" }
      ]
    },
    {
      date: "2015-06",
      dateLabel: "2015年6月",
      title: "PS4 主板 UART 串口被发现，需焊接引出",
      category: "硬破",
      exploit: "UART debug port（焊接引出）",
      cve: "",
      firmware: "全系机型",
      description: "研究者 Jaicrab 在 PS4 主板上发现两个 UART 通信端口，必须焊接引线才能连接，可输出内核控制台日志。CTurt 在取得内核代码执行后进一步定位到索尼的 bootparam 检查：零售机上内核会把 UART 输出内容全部替换为空格，清除对应比特位即可恢复完整日志。这条物理通道为内核调试、崩溃分析与后续硬件层攻击提供了必要入口。普通用户在未拆机焊接的情况下无法使用该端口，索尼仅通过固件逻辑而非物理断开进行屏蔽。",
      sources: [
        { title: "CTurt: Hacking the PS4 part 3（UART 引出与解禁）", url: "https://cturt.github.io/ps4-3.html" }
      ]
    },
    {
      date: "2015-12",
      dateLabel: "2015年12月",
      title: "CTurt 在 1.76 上实现首个公开内核提权",
      category: "软件漏洞",
      exploit: "BadIRET（FreeBSD-SA-15:21.amd64）",
      cve: "CVE-2015-5675",
      firmware: "1.76 及以下（2.xx 已修补）",
      description: "CTurt 于 2015 年 12 月 6 日宣布在 PS4 1.76 上取得内核代码执行，并在 12 月 17 日公开原理：利用 FreeBSD 9.0 内核的 BadIRET 缺陷（iret 触发 #SS 异常时多执行一次 swapgs），借助 sysarch 设置用户态 GS base，再滥用 critical_enter 对 td->td_critnest 的自增写入，把 IDT 中 #PF 处理函数地址的高 4 字节清零，使其指向用户态映射并在 ring0 执行代码。载荷随后把当前进程提权为 root、逃出 jail 并解除文件系统沙箱，从而可以 dump 解密后的 NOR（sflash）与读取任意进程内存。该缺陷在 2.xx 固件中已被修补，只影响早期固件；索尼此后长期把内核加固与沙箱收紧作为更新重点。",
      sources: [
        { title: "CTurt: Hacking the PS4 part 3 - Kernel exploitation", url: "https://cturt.github.io/ps4-3.html" },
        { title: "FreeBSD-SA-15:21.amd64 (BadIRET)", url: "https://www.freebsd.org/security/advisories/FreeBSD-SA-15:21.amd64.asc" },
        { title: "NVD: CVE-2015-5675", url: "https://nvd.nist.gov/vuln/detail/CVE-2015-5675" }
      ]
    },
    {
      date: "2015-12",
      dateLabel: "2015年12月",
      title: "fail0verflow 在 32C3 演示 PS4 运行 Linux",
      category: "工具与生态",
      exploit: "ps4-kexec / ps4-linux",
      cve: "",
      firmware: "1.76",
      description: "2015 年 12 月 30 日，fail0verflow 在 32C3 的 lightning talk 上演示 PS4 运行 Linux，并在博客中公布 ps4-linux 内核移植与 ps4-kexec 系统调用实现。方案依赖当时可获得的内核代码执行：先用 kexec 把 Linux 内核与 initramfs 装入内存，再重启进入 Linux，取代 Orbis OS。CTurt 也把该流程整合进 PS4-playground，让 1.76 固件的机器可以真正启动 Linux。这标志着 PS4 破解从漏洞研究阶段进入可运行的替代系统阶段。",
      sources: [
        { title: "fail0verflow: Console Hacking 2015 - Liner Notes", url: "https://fail0verflow.com/blog/2015/console-hacking-2015-liner-notes" },
        { title: "GitHub: fail0verflow/ps4-kexec", url: "https://github.com/fail0verflow/ps4-kexec" },
        { title: "GitHub: fail0verflow/ps4-linux", url: "https://github.com/fail0verflow/ps4-linux" }
      ]
    },
    {
      date: "2016-12",
      dateLabel: "2016年12月",
      title: "33C3 详解 PS4 Linux 移植全过程",
      category: "工具与生态",
      exploit: "Console Hacking 2016",
      cve: "",
      firmware: "1.76",
      description: "fail0verflow 在 33C3（2016 年 12 月）做题为 Console Hacking 2016 的演讲，详细讲解把 Linux 移植到 PS4 的全过程，包括显示、存储、USB 与 GPU 初始化等硬件适配问题。随后发布的博客 Postscript 补充了演讲中未展开的技术细节与进展。PS4 Linux 项目使主机成为可运行通用操作系统的硬件平台，也带动了后续自制程序与模拟器生态的发展。",
      sources: [
        { title: "fail0verflow: Console Hacking 2016 - Postscript", url: "https://fail0verflow.com/blog/2016/console-hacking-2016-postscript" },
        { title: "33C3 Fahrplan: Console Hacking 2016", url: "https://fahrplan.events.ccc.de/congress/2016/Fahrplan/events/7946.html" }
      ]
    },
    {
      date: "2017-10",
      dateLabel: "2017年10月",
      title: "首个 PS4 内核漏洞 namedobj 被公开",
      category: "软件漏洞",
      exploit: "namedobj（命名对象生命周期缺陷）",
      cve: "",
      firmware: "4.05",
      description: "2017 年 10 月 19 日 fail0verflow 公开 PS4 首个内核漏洞 namedobj 的完整分析：内核在处理命名对象（命名共享内存与信号量等）时对引用计数与生命周期管理不当，可在用户态触发内核堆上的使用后释放。该漏洞影响 4.05 固件，配合浏览器用户态入口即可完成从 WebKit 到内核的完整提权链，也让 ps4-kexec 等工具得以在更高固件上继续使用。索尼随后修补该缺陷，但公开的分析让社区第一次能够自行实现 PS4 内核利用。",
      sources: [
        { title: "fail0verflow: The First PS4 Kernel Exploit - Adieu", url: "https://fail0verflow.com/blog/2017/ps4-namedobj-exploit" }
      ]
    },
    {
      date: "2017-12",
      dateLabel: "2017年12月",
      title: "Specter 发布 4.05 内核漏洞利用与载荷加载器",
      category: "软破",
      exploit: "namedobj 内核漏洞 + 9020 端口 payload loader",
      cve: "",
      firmware: "4.05",
      description: "2017 年 12 月 27 日，Specter（Cryptogenic）发布 4.05 固件的完整内核漏洞利用，代码基于 fail0verflow 公开的 namedobj 缺陷实现。利用包含内核 ROP 链，会关闭内核写保护、允许可读写可执行内存映射、放行任意进程的 sys_dynlib_dlsym，并植入自定义系统调用 11（kexec）在内核态执行载荷，同时监听 9020 端口接收 payload。这是 PS4 上首个面向公众的可用越狱链，作者自测成功率约 95%，随后调试菜单、沙箱逃逸等 payload 生态迅速形成。索尼在 4.55 及以上固件修补了该漏洞。",
      sources: [
        { title: "Exploit-DB 43397: PS4 4.05 WebKit / NamedObj Kernel Loader", url: "https://www.exploit-db.com/exploits/43397" },
        { title: "GitHub: Cryptogenic/PS4-4.05-Kernel-Exploit", url: "https://github.com/Cryptogenic/PS4-4.05-Kernel-Exploit" }
      ]
    },
    {
      date: "2017-12",
      dateLabel: "2017年12月",
      title: "crashdump 成为内核内存抽取途径",
      category: "软件漏洞",
      exploit: "crashdump 内存注入/读取",
      cve: "",
      firmware: "4.05 时代固件",
      description: "2017 年 12 月 27 日，fail0verflow 公开另一条内核信息泄漏路径：PS4 的崩溃转储（crashdump）格式可被攻击者读取，且系统允许把任意内存内容放进转储中。攻击者只要让内核崩溃并取回转储，就能在极短时间内获得内核内存布局与代码，从而绕过以往必须依赖完整内核漏洞才能实现的内存转储。该问题同样被索尼修补，但它展示了利用非漏洞类系统特性（调试与诊断功能）构造信息泄漏的思路。",
      sources: [
        { title: "fail0verflow: Dumping a PS4 Kernel in Only 6 Days", url: "https://fail0verflow.com/blog/2017/ps4-crashdump-dump" }
      ]
    },
    {
      date: "2018-05",
      dateLabel: "2018年5月",
      title: "SpecterDev 发布 5.05 内核漏洞利用",
      category: "软破",
      exploit: "BPF 双重释放 / 竞争条件",
      cve: "",
      firmware: "5.05（4.55 亦受影响）",
      description: "2018 年 5 月，SpecterDev 发布 5.05 固件的内核漏洞利用，其缺陷最早由 qwertyoruiopz 在 4.55 上发现并利用。攻击面来自 WebKit 沙箱内意外开放且可读写的 /dev/bpf：BPF 描述符的 write filter 指针在 bpf_setf() 中未受锁保护，多线程竞争可造成双重释放，进而污染内核堆并劫持 knote 对象的 f_detach 函数指针。由于索尼在 5.0x 加入了防止内核态栈指针指向用户内存的缓解（类似 SMAP），利用改用 JOP 把内核 ROP 链复制到内核栈后再执行。索尼最终彻底禁止非特权进程打开 BPF，该入口在 5.05 之后失效。",
      sources: [
        { title: "Wololo.net: PS4 SpecterDev releases PS4 5.05 kernel exploit", url: "https://wololo.net/2018/05/28/ps4-specterdev-releases-ps4-5-05-kernel-exploit/" },
        { title: "Exploit-DB 45045: PS4 5.05 BPF Double Free Kernel Exploit Writeup", url: "https://www.exploit-db.com/exploits/45045" }
      ]
    },
    {
      date: "2018-07",
      dateLabel: "2018年7月",
      title: "PS4 Aux Hax：Aeolia 与 Syscon 被攻陷",
      category: "硬件漏洞",
      exploit: "Aeolia 南桥持久化代码执行、Syscon 永久任意代码执行、DualShock 4 破解",
      cve: "",
      firmware: "全系硬件（与固件版本无关）",
      description: "2018 年 7 月 30 日，fail0verflow 发布 PS4 Aux Hax 系列前三篇，把攻击面从主 APU 扩展到外围芯片：Aeolia 南桥、Syscon 电源管理芯片以及 DualShock 4 手柄。研究者通过串口与调试接口在 Aeolia 上取得任意代码执行并实现持久化，又攻陷 Syscon 获得永久性任意代码执行能力，形成不受主机固件更新影响的硬件层漏洞。这些工作证明即使 x86 主核的安全链牢固，配件与协处理器仍是可长期利用的薄弱环节。",
      sources: [
        { title: "fail0verflow: PS4 Aux Hax 1 - Intro & Aeolia", url: "https://fail0verflow.com/blog/2018/ps4-aeolia" },
        { title: "fail0verflow: PS4 Aux Hax 2 - Syscon", url: "https://fail0verflow.com/blog/2018/ps4-syscon" },
        { title: "fail0verflow: PS4 Aux Hax 3 - Dualshock4", url: "https://fail0verflow.com/blog/2018/ps4-ds4" }
      ]
    },
    {
      date: "2018-11",
      dateLabel: "2018年11月",
      title: "通过 HDMI-CEC 攻陷 PS4 Pro 南桥 Belize",
      category: "硬件漏洞",
      exploit: "CEC 协议栈代码执行",
      cve: "",
      firmware: "全系硬件与固件版本",
      description: "2018 年 11 月 3 日，Aux Hax 第四篇公开了 PS4 Pro 南桥 Belize 的另一条攻击路径：通过 HDMI-CEC 总线在不控制 APU 的前提下取得南桥代码执行。与第一篇不同，该方法不需要先攻陷主处理器，通用性更强，据作者称适用于当时所有已发布的 PS4 硬件与软件版本。这是 PS4 上少数完全不依赖 x86 侧漏洞的硬件攻击，也说明主机级安全边界无法覆盖配件协议栈。",
      sources: [
        { title: "fail0verflow: PS4 Aux Hax 4 - Belize via CEC", url: "https://fail0verflow.com/blog/2018/ps4-cec" }
      ]
    },
    {
      date: "2020-07",
      dateLabel: "2020年7月",
      title: "TheFloW 公开 7.02 内核漏洞",
      category: "软件漏洞",
      exploit: "TheFloW 7.02 kernel exploit",
      cve: "CVE-2020-7457",
      firmware: "7.02（影响范围覆盖 6.72 等邻近固件）",
      description: "2020 年 7 月 7 日，TheFloW 公开发布面向 7.02 固件的 PS4 内核漏洞与利用思路，其影响范围同时覆盖 6.72 等邻近固件。这条内核漏洞成为随后 6.72 与 7.0x 系列越狱链的核心，社区实现（包括 Sleirsgoevy 的移植与 Mira）在数周内陆续出现。它标志着 PS4 越狱从 5.05 时代跨入 6.72/7.0x 时代，让更多使用较新固件的用户可以运行自制程序。",
      sources: [
        { title: "Wololo.net: PS4 hacker TheFloW releases kernel exploit for firmware 7.02", url: "https://wololo.net/2020/07/07/ps4-hacker-theflow-releases-kernel-exploit-for-firmware-7-02/" },
        { title: "NVD: CVE-2020-7457", url: "https://nvd.nist.gov/vuln/detail/CVE-2020-7457" }
      ]
    },
    {
      date: "2020-07",
      dateLabel: "2020年7月",
      title: "Sleirsgoevy 发布 6.72 越狱与 Mira",
      category: "软破",
      exploit: "6.72 jailbreak（TheFloW 内核漏洞 + Mira HEN）",
      cve: "CVE-2020-7457",
      firmware: "6.72",
      description: "2020 年 7 月 17 日，Sleirsgoevy 发布可用的 6.72 越狱，基于 TheFloW 数日前公开的内核漏洞，并内嵌 Mira 提供的 homebrew enabler。使用方式是用户自行在本地或第三方站点托管 exploit 页面，再从 PS4 浏览器访问触发；早期版本稳定性一般，可能需要尝试多次才能成功。该版本让 6.72 用户获得完整的自制程序与 pkg 安装能力，但社区当时仍建议停留在更稳定的 5.05 固件上。",
      sources: [
        { title: "Wololo.net: PS4 6.72 Jailbreak released by Sleirsgoevy", url: "https://wololo.net/2020/07/17/ps4-6-72-jailbreak-released-by-sleirsgoevy/" },
        { title: "GitHub: sleirsgoevy/ps4jb", url: "https://github.com/sleirsgoevy/ps4jb" },
        { title: "NVD: CVE-2020-7457", url: "https://nvd.nist.gov/vuln/detail/CVE-2020-7457" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "美国 DOJ 起诉 Team Xecuter 核心成员",
      category: "法律与产业",
      exploit: "modchip 产业执法（Team Xecuter）",
      cve: "",
      firmware: "",
      description: "2020 年 10 月，美国司法部与国土安全调查局（HSI）宣布逮捕并起诉知名主机改装与盗版团队 Team Xecuter 的两名核心成员，指控其制造和销售用于绕过主机保护措施的 modchip 及相关设备。相关产品面向多款主机的改机市场，其中包括 PlayStation 系列，是当时规模最大的商业化模改产业打击行动。案件显示硬件改机产业面临的法律风险远高于个人安全研究，也直接冲击了 modchip 的供应链。",
      sources: [
        { title: "DOJ: Two members of notorious videogame piracy group Team Xecuter in custody", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" },
        { title: "ICE: Investigation leads to arrest of 2 members of Team Xecuter", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" }
      ]
    },
    {
      date: "2021-03",
      dateLabel: "2021年3月",
      title: "7.55 越狱与 Mira 自定义固件发布",
      category: "软破",
      exploit: "7.55 jailbreak + Mira CFW",
      cve: "",
      firmware: "7.50 / 7.55",
      description: "2021 年 3 月，社区发布针对 PS4 7.55 固件的越狱与 Mira 自定义固件，把自制程序、pkg 安装与调试功能带入 7.0x 后期固件。方案延续浏览器触发加本地 host 托管的模式，并持续完善稳定性。此时 PS4 越狱已从单点漏洞演示，演进为由 CFW、载荷加载器与插件组成的完整生态。",
      sources: [
        { title: "Wololo.net: Release - Mira (Custom firmware) for PS4 7.55 (+ updated jailbreak)", url: "https://wololo.net/2021/03/15/release-mira-custom-firmware-for-ps4-7-55-updated-jailbreak/" }
      ]
    },
    {
      date: "2021-03",
      dateLabel: "2021年3月",
      title: "GoldHEN 1.0 发布，统一越狱运行时",
      category: "工具与生态",
      exploit: "GoldHEN (Homebrew Enabler)",
      cve: "",
      firmware: "5.05 / 6.72 / 7.0x / 7.55",
      description: "2021 年 3 月 22 日，SiSTR0 发布 GoldHEN（Homebrew ENabler）1.0，支持 5.05、6.72、7.0x 与 7.55 固件，把 homebrew enabler、调试设置、FTP 与 BinLoader 服务整合为一体。GoldHEN 逐步取代早期的 Mira 与零散 payload，成为 PS4 越狱后事实标准的运行时环境。此后它随新固件与漏洞持续更新，最终形成 2.4b 系列，并衍生出插件 SDK 与作弊菜单生态。",
      sources: [
        { title: "Wololo.net: Release - GoldHEN 1.0 PS4 for FW 5.05, 6.72, 7.0x & 7.55", url: "https://wololo.net/2021/03/22/release-goldhen-homebrew-enabler-1-0-ps4-for-fw-5-05-6-72-7-0x-7-55/" },
        { title: "GitHub: GoldHEN/GoldHEN", url: "https://github.com/GoldHEN/GoldHEN" }
      ]
    },
    {
      date: "2021-12",
      dateLabel: "2021年12月",
      title: "pOOBs4 公开，9.00 越狱落地",
      category: "软破",
      exploit: "pOOBs4 kernel exploit",
      cve: "",
      firmware: "9.00",
      description: "2021 年 12 月 13 日，ChendoChap 公开 9.00 固件的内核漏洞利用 pOOBs4，把可用越狱固件上限从 7.55 直接推进到 9.00。该链仍以浏览器或本地 host 触发的用户态漏洞为入口，再通过内核漏洞完成提权与沙箱逃逸，媒体随即报道 PS4 的越狱甚至比买到 PS5 更容易。索尼后续在 9.03/9.04 等固件中修补该漏洞，而 9.00 成为此后很长时间里最受推荐的越狱固件。",
      sources: [
        { title: "GitHub: ChendoChap/pOOBs4", url: "https://github.com/ChendoChap/pOOBs4" },
        { title: "The Verge: It's easier for hackers to jailbreak the PS4 than it is to buy a PS5", url: "https://www.theverge.com/2021/12/14/22834264/ps4-ps5-jailbreak-playstation-poobs4" },
        { title: "XDA: PlayStation 4 jailbreak for firmware 9.00 released", url: "https://www.xda-developers.com/playstation-4-jailbreak-firmware-9-00/" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Gary Bowser 因改机盗版案被判 40 个月",
      category: "法律与产业",
      exploit: "Team Xecuter 案判决",
      cve: "",
      firmware: "",
      description: "2022 年 2 月，Team Xecuter 的主要对外联系人与销售负责人 Gary Bowser 被美国法院判处 40 个月监禁，罪名涉及共谋规避技术保护措施与贩卖盗版设备。司法部与 ICE 的通报把该案定性为对主机改机与盗版产业链的典型执法行动，涉案产品覆盖多款主机（含 PlayStation 生态）的破解与作弊需求。案件在破解社区内引发关于改机工具法律边界的长期讨论。",
      sources: [
        { title: "DOJ: Public voice and principal salesperson for notorious videogame piracy group sentenced to 3+ years", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" }
      ]
    },
    {
      date: "2022-05",
      dateLabel: "2022年5月",
      title: "PSVR 处理盒安全启动被攻破",
      category: "硬件漏洞",
      exploit: "PSVR 安全启动绕过与密钥提取",
      cve: "",
      firmware: "PSVR 固件（与主机固件版本弱相关）",
      description: "2022 年 5 月 17 日，fail0verflow 发布 Aux Hax 第五篇，公开对 PSVR 处理盒的研究：通过分析其固件更新流程与调试接口，研究者在 PSVR 上实现了安全启动绕过并提取出全部密钥材料。这是 PS4 配件链上又一次完整的硬件级攻破，说明配件固件往往缺乏与主机同等强度的安全设计。相关缺陷无法通过主机系统更新修复，只能依赖后续硬件改版，因此对早期配件具有长期影响。",
      sources: [
        { title: "fail0verflow: PS4 Aux Hax 5 - Flawed Instructions Get Optimized (PSVR)", url: "https://fail0verflow.com/blog/2022/ps4-psvr" }
      ]
    },
    {
      date: "2022-06",
      dateLabel: "2022年6月",
      title: "TheFloW 公开 BD-JB 蓝光 Java 沙箱逃逸",
      category: "软件漏洞",
      exploit: "BD-JB（Blue-ray Disc Java sandbox escape）",
      cve: "CVE-2025-64390",
      firmware: "PS3 / PS4 / PS5 的 BD-J 实现",
      description: "2022 年 6 月，TheFloW（Andy Nguyen）在 hardwear.io 会议公开 bd-jb：蓝光光盘 Java（BD-J）运行时中 IXC（Inter-Xlet Communication）实现存在缺陷，可实现从蓝光 Java 沙箱到用户态的逃逸。该漏洞影响 PS3、PS4、PS5 的 BD-J 实现，可通过自制蓝光光盘或镜像触发，属于不依赖浏览器与网络的本地入口。索尼修补后作者公开了 exploit 代码，BD-J 随后成为 PS4 较新固件上最重要的用户态入口之一。",
      sources: [
        { title: "GitHub: TheOfficialFloW/bd-jb（The first bd-j hack）", url: "https://github.com/TheOfficialFloW/bd-jb" },
        { title: "GitHub: TheOfficialFloW/Presentations（2022 hardwear.io bd-jb 幻灯片）", url: "https://github.com/TheOfficialFloW/Presentations" },
        { title: "NVD: CVE-2025-64390", url: "https://nvd.nist.gov/vuln/detail/CVE-2025-64390" }
      ]
    },
    {
      date: "2024-04",
      dateLabel: "2024年4月",
      title: "PPPwn 发布：网络侧 PPPoE 内核 RCE",
      category: "软破",
      exploit: "PPPwn（PPPoE 协议栈内存破坏）",
      cve: "",
      firmware: "7.00 至 11.00（多个版本）",
      description: "2024 年 4 月，TheFloW 发布 PPPwn：PS4 的 PPPoE 协议栈实现存在缺陷，攻击者可在与主机建立 PPPoE 会话的过程中触发内存破坏，进而取得内核态代码执行，影响 7.00 至 11.00 的多个固件版本。它的特别之处在于这是一条网络侧远程内核 RCE：不需要浏览器或 USB 触发的用户态漏洞，只要主机尝试建立 PPPoE 连接即可被攻击。作者在 2024 年 RomHack 会议讲解了整条利用链的技术细节，社区随后补齐大量固件偏移，SiSTR0 也为 GoldHEN 编写了配套 stage2。索尼在后续固件中修复了该缺陷。",
      sources: [
        { title: "GitHub: TheOfficialFloW/PPPwn", url: "https://github.com/TheOfficialFloW/PPPwn" },
        { title: "PSX-Place: PPPwn - PlayStation 4 PPPoE RCE", url: "https://psx-place.com/threads/pppwn-playstation-4-pppoe-rce-the-first-ps4-kernel-rce-supporting-upto-fw-11-00-by-theflow.43655/" },
        { title: "RomHack 2024: Andy Nguyen - PlayStation 4 Remote Kernel Exploitation（讲义存档）", url: "https://web.archive.org/web/20250518234909/https://romhack.io/wp-content/uploads/sites/2/2024/10/Andy-Nguyen-PlayStation-4-Remote-Kernel-Exploitation-RomHack-2024.pdf" }
      ]
    },
    {
      date: "2024-06",
      dateLabel: "2024年6月",
      title: "GoldHEN 2.4b17.3 支持 11.00 与 PPPwn",
      category: "工具与生态",
      exploit: "GoldHEN 2.4b17.3 + PPPwn stage2",
      cve: "",
      firmware: "5.05 / 6.71 / 6.72 / 9.00 / 9.60 / 10.00 / 10.01 / 11.00",
      description: "2024 年 6 月 12 日，GoldHEN 2.4b17 与 2.4b17.3 发布，新增对 11.00 固件的支持，并同时兼容传统 WebKit 漏洞链与新的 PPPwn 链（后者需要作者 SiSTR0 提供的自定义 stage2），随后又加入 9.60 支持。这标志着 PPPwn 正式被整合进主流自制程序环境，11.00 用户第一次获得完整的 HEN 体验。",
      sources: [
        { title: "GitHub: GoldHEN v2.4b17.3 release", url: "https://github.com/GoldHEN/GoldHEN/releases/tag/2.4b17.3" },
        { title: "GitHub: GoldHEN releases", url: "https://github.com/GoldHEN/GoldHEN/releases" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "GoldHEN 2.4b18 覆盖 10.50 至 10.71",
      category: "工具与生态",
      exploit: "GoldHEN 2.4b18",
      cve: "",
      firmware: "5.05 至 11.00（新增 10.50 / 10.70 / 10.71）",
      description: "2024 年 10 月 28 日，GoldHEN 2.4b18 发布，新增对 10.50、10.70、10.71 固件的支持，并加入作弊下载器、改进 rest mode 与网络服务配置，Klog 服务也移入用户态。此时支持列表已覆盖 5.05 至 11.00，几乎所有可越狱固件都能使用同一套 HEN 环境。GoldHEN 由此完成从单一 payload 到完整越狱运行时的演进。",
      sources: [
        { title: "GitHub: GoldHEN v2.4b18 release", url: "https://github.com/GoldHEN/GoldHEN/releases/tag/2.4b18" }
      ]
    },
    {
      date: "2025-02",
      dateLabel: "2025年2月",
      title: "社区尝试把 PPPwn 移植到 12.00",
      category: "软破",
      exploit: "PPPwn_12.00（非官方移植）",
      cve: "",
      firmware: "12.00",
      description: "2025 年 2 月 8 日，社区开发者发布 PPPwn_12.00，尝试把 PPPwn 的 PPPoE 内核利用移植到 12.00 固件，属于非官方且仍在校正的第三方移植。项目保留了 PPPwn 的网络侧触发方式，并公开了对新固件的偏移搜索工作，说明 PPPoE 攻击面在新固件上仍具研究价值。由于没有官方支持，其可靠性与适用范围需以项目自身说明为准。",
      sources: [
        { title: "GitHub: ArizakiDev/PPPwn_12.00", url: "https://github.com/ArizakiDev/PPPwn_12.00" }
      ]
    },
    {
      date: "2025-08",
      dateLabel: "2025年8月",
      title: "BD-JB 结合 Lapse 扩展到 12.50",
      category: "软破",
      exploit: "BD-JB + Lapse（蓝光/ISO 载荷加载器）",
      cve: "",
      firmware: "最高 12.50",
      description: "2025 年 8 月，社区项目 BD-JB-1250-lapse 把 BD-JB 蓝光 Java 漏洞与 Lapse 内核漏洞思路结合，提供可在最高 12.50 固件的 PS4 上注入 GoldHEN 的蓝光/ISO 载荷加载器，并集成 Lua 脚本与 USB 载荷加载功能。项目由多位社区开发者协作维护，说明 BD-J 入口在多年之后仍是较新固件上最可靠的本地攻击面之一。此类蓝光式方案让用户无需网络即可完成越狱。",
      sources: [
        { title: "GitHub: dptug/BD-JB-1250-lapse", url: "https://github.com/dptug/BD-JB-1250-lapse" }
      ]
    },
    {
      date: "2025-11",
      dateLabel: "2025年11月",
      title: "GoldHEN 发布 henloader_lp 整合 Lapse 与 Poops",
      category: "工具与生态",
      exploit: "henloader_lp（Lapse 9.00-12.02 + Poops 9.00-13.00）",
      cve: "",
      firmware: "9.00 至 12.52（Poops 路线宣称可达 13.00）",
      description: "2025 年 11 月 24 日，GoldHEN 团队发布 henloader_lp，把 Lapse（覆盖 9.00 至 12.02）与 Poops/Poopsploit（覆盖 9.00 至 13.00）两条内核漏洞整合进同一个蓝光光盘式加载器，用于在较新固件的 PS4 上直接启动 GoldHEN。该工具是 BD-JB 生态的集大成产物，后续提交还加入了自动加载与 13.00 固件支持。它意味着截至 2025 年底，PS4 的越狱能力已从此前的 11.00 上限推进到 12.52 乃至 13.00 一代固件。",
      sources: [
        { title: "GitHub: GoldHEN/henloader_lp", url: "https://github.com/GoldHEN/henloader_lp" },
        { title: "GitHub: iaceene/HENloader_Source", url: "https://github.com/iaceene/HENloader_Source" }
      ]
    },
    {
      date: "2026-02",
      dateLabel: "2026年2月8日（v1.0）、2月25日（2.0）",
      title: "Vue After Free：借 PlayStation Vue 应用拿下 7.00-13.00",
      category: "软破",
      exploit: "Vue After Free（CVE-2017-7117 用户态 + Lapse / NetCtrl 内核）",
      cve: "CVE-2017-7117",
      firmware: "PS4 7.00-13.00（用户态 5.05-13.04，内核 Lapse 1.01-12.02 / NetCtrl 1.01-13.00）",
      description: "2026 年 2 月 8 日，Vuemony 团队公开 Vue After Free：入口是早已停服的流媒体应用 PlayStation Vue（CUSA00960）。该应用内置的旧版 WebKit 仍受 CVE-2017-7117 影响，攻击者只要把特制存档与替换后的 download0.dat 写入主机，再打开应用即可获得用户态任意读写；随后按固件区间分别串接 abc 的 Lapse 内核漏洞（7.00-12.02）或 TheFloW 的 NetCtrl/Poopsploit（12.50-13.00），最终自动加载 GoldHEN。2.0 版本（2 月 25 日）加入完整 UI、主题与自动越狱与自动关闭，并提供 SystemBackup、Extended Storage 与 Save Resign 三种免破解安装路径，让未破解主机也能入坑。它把 PS4 的公开越狱上限从 11.00 一举抬到 13.00，且全程不需要刻录蓝光盘或联网攻击。",
      sources: [
        { title: "GitHub: Vuemony/vue-after-free（PlayStation Vue code execution exploit，含漏洞范围表）", url: "https://github.com/Vuemony/vue-after-free" },
        { title: "GitHub Releases: Vue After Free（v1.0 2026-02-08、2.0 2026-02-25）", url: "https://github.com/Vuemony/vue-after-free/releases" },
        { title: "ConsoleMods Wiki: PS4:VueAfterFree", url: "https://consolemods.org/wiki/PS4:VueAfterFree" },
        { title: "NVD: CVE-2017-7117", url: "https://nvd.nist.gov/vuln/detail/CVE-2017-7117" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月21日前后",
      title: "Syimy 的 WebKit 链把纯浏览器越狱推到 13.52",
      category: "软破",
      exploit: "WebKit 浏览器漏洞（Syimy / raw-game 托管）+ GoldHEN 2.4b18.11/2.4b18.12",
      cve: "",
      firmware: "PS4 11.50-13.52（14.00 修复）",
      description: "2026 年 9 月，开发者 Syimy 把自制 WebKit 漏洞链从 11.50 一路延伸到 13.52，用户只需在 PS4 内置浏览器打开托管页面（rawgame4.github.io 等镜像，DNS 指向 62.210.38.117）即可在数秒内完成越狱并加载 GoldHEN 2.4b18.11 与随后的 2.4b18.12，无需蓝光盘、USB 或局域网攻击。社区同时推出 WebKitty V2 离线越狱服务器（ESP32-S3 移植），把同一链条搬到本地硬件上，覆盖 6.7x 至 13.52。9 月发布的 14.00 固件封堵该链，因此 13.52 成为当时最后一个可越狱版本；由于越狱依赖浏览器与网络，社区普遍建议用 DNS 屏蔽 PSN 服务器以避免封号。",
      sources: [
        { title: "BytesNBits: PS4 firmware 13.52 hacked by just visiting one website（2026-09-22）", url: "https://bytesnbits.co.uk/ps4-webkit-13-52/" },
        { title: "Gamefa: جیلبریک فریمورهای 13.00 تا 13.52 منتشر شد（2026-09-21）", url: "https://gamefa.com/1607164/bloodborne-60-fps-ps4-pro-jailbreak/" },
        { title: "PSX-Place: PS4 WebKitty V2 Offline Jailbreak Server (ESP32 S3)，支持 6.7x-13.52 + GoldHEN v2.4b18.12", url: "https://www.psx-place.com/threads/ps4-webkitty-v2-offline-jailbreak-server-esp32-s3-ported-by-vegueta1-supported-ps4-firmware-6-7x-up-to-13-52-goldhen-v2-4b18-12-aio-fix.51012/" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月下旬",
      title: "13.52 越狱流入 GTA Online，PSN 登录窗口引发争议",
      category: "法律与产业",
      exploit: "（越狱生态的连带影响）",
      cve: "",
      firmware: "PS4 13.52（Sony 尚未切断其 PSN 认证）",
      description: "13.52 越狱公开后，Sony 仍允许停留在 13.52 的主机通过 PSN 认证，尽管更新固件已经发布，这给改装机进入线上服务留出了窗口。数据挖掘者 Tex2 与多家媒体在 9 月下旬报道，GTA Online 的 PS4 公开战局随即出现上帝模式、隐身与异常等级等作弊行为，媒体建议玩家拒绝来路不明的 GTA$ 与 RP 并直接退出可疑战局。事件再次把「越狱主机能否联网」推到产业讨论的前台：Sony 通常会在新固件普及后关闭旧版本的 PSN 访问，而破解社区则反过来提醒用户用 DNS 屏蔽官方服务器，双方都在用在线服务当作筹码。",
      sources: [
        { title: "Beebom: GTA Online Is Infected with Modders After New PS4 Jailbreak（2026-09-21）", url: "https://beebom.com/gta-online-is-infected-with-modders-after-new-ps4-jailbreak/" },
        { title: "Gamefa: 13.00-13.52 越狱报道（含 PSN 仍在 13.52 上可用）", url: "https://gamefa.com/1607164/bloodborne-60-fps-ps4-pro-jailbreak/" }
      ]
    }
  ]
});
