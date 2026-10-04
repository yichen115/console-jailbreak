window.CJ_DATA = window.CJ_DATA || [];
window.CJ_DATA.push({
  id: "industry-legal",
  name: "破解产业与法律战（横向专题）",
  family: "横向专题",
  released: "1992",
  status: "截至 2026 年 10 月，法律战已全面压倒技术战：索尼与任天堂在美、欧、日三线同时推进民事与刑事诉讼，2026 年 9 月荷兰海牙地区法院（Rechtbank Den Haag）首次以欧盟判例为依据，对销售 MIG Switch 烧录卡的经销商下达禁令，任天堂又在 GitHub 上一次清除 400 多个模拟器仓库。与此同时破解并未消失，而是从个人黑客彻底转为跨国硬件生意（Team Xecuter、HWFLY、MIG），并把风险转嫁给终端用户——任天堂新版 EULA 明确保留把改装主机永久锁机（变砖）的权利。",
  summary: "三十多年里，破解产业的主角从「一个人一台电脑」变成了「一条跨国供应链」：1990 年代是逆向工程与模拟器的法理奠基期，2000 年代是烧录卡与 modchip 的量产期，2010 年代是 Team Xecuter、HWFLY 这类硬件公司的全球化期，2020 年代则是刑事化与平台化追责期。法律是这条线真正的主导变量——Sega v. Accolade 与 Sony v. Connectix 确认了逆向工程的合法性边界，DMCA 第 1201 条与三年一次的豁免规则制定把「改机」框在反规避法之下，而 2020 年后美国司法部、日本警方与荷兰法院的介入，把改机销售从民事赔偿推向刑事定罪。结果是技术形态被反向塑造：可拆机硬改的 ODE 与 modchip 转向焊点更小、更难追溯的设计，模拟器从公开开发转向匿名化与地下分发。",
  events: [
    {
      date: "1992-10",
      dateLabel: "1992年10月",
      title: "Sega v. Accolade 抗辩",
      category: "法律与产业",
      exploit: "Accolade 对 Sega Genesis 的逆向工程",
      cve: "",
      firmware: "",
      description: "Accolade 为了让自己的游戏能通过 Genesis 的商标校验，反汇编了 Sega 的 TMSS（商标安全系统）代码，Sega 随即以商标侵权与不正当竞争起诉。第九巡回上诉法院在 1992 年 10 月 20 日判决 Accolade 胜诉，认定为了研究兼容性而对目标代码进行中间复制属于合理使用，且 Sega 的商标使用属于功能性使用、不构成侵权。该案与 1993 年的 Sega v. Bally 一起，为整个模拟器与兼容配件产业提供了最重要的法理地基：拆解主机、复现接口本身不违法，违法的是复制和分发受版权保护的内容。",
      sources: [
        { title: "Wikipedia: Sega v. Accolade", url: "https://en.wikipedia.org/wiki/Sega_v._Accolade" },
        { title: "CourtListener: Sega Enterprises Ltd. v. Accolade, Inc., 977 F.2d 1510", url: "https://www.courtlistener.com/opinion/586945/sega-enterprises-ltd-v-accolade-inc/" }
      ]
    },
    {
      date: "1996-06",
      dateLabel: "1996年年中",
      title: "任天堂诉 Bung：备份设备违法",
      category: "法律与产业",
      exploit: "Bung Enterprises 的 Game Doctor / V64 系列备份设备",
      cve: "",
      firmware: "",
      description: "香港厂商 Bung Enterprises 生产的 Game Doctor、V64 等设备可以直接从卡带读写任天堂游戏数据，任天堂在美国、香港、加拿大等地对其展开多年诉讼，美国法院最终认定其违反《兰哈姆法》（Lanham Act）关于虚假来源标示与不正当竞争的规定，并判令停止销售相关设备（该系列诉讼与和解延续至 1990 年代末）。这是「卡带备份硬件」第一次被整体定性为违法商品，也奠定了任天堂此后三十年的一条固定策略：不打终端用户，只打把绕过手段商品化的厂商与渠道。",
      sources: [
        { title: "Wikipedia: Nintendo of America, Inc. v. Bung Enterprises Ltd.", url: "https://en.wikipedia.org/wiki/Bung_Enterprises_Ltd" },
        { title: "Wikipedia: Bung Enterprises Ltd (Wayback Machine 存档)", url: "https://web.archive.org/web/20051215000000/http://en.wikipedia.org/wiki/Bung_Enterprises_Ltd" }
      ]
    },
    {
      date: "1999-02",
      dateLabel: "1999年2月",
      title: "Sony 诉 Bleem! 模拟器案",
      category: "法律与产业",
      exploit: "bleem!（PC 上的 PlayStation 模拟器，商业发售）",
      cve: "",
      firmware: "",
      description: "bleem! 是唯一一款以商业软件形式发售的 PS1 模拟器，1999 年 1 月发布后索尼同年即起诉其商标侵权、不正当竞争，并主张其模拟行为构成版权侵权。加州中区法院先是拒绝签发临时禁令，第九巡回上诉法院在 2000 年 2 月维持了这一裁定，认定 bleem! 在比较广告中使用 PS1 游戏截图属于合理使用，且模拟器本身并不当然侵犯版权。bleem! 虽在法理上赢了关键回合，但被旷日持久的诉讼拖垮资金，2001 年 11 月宣布停止运营——这个结局后来被反复引用为「赢了判例、输了生意」的典型。",
      sources: [
        { title: "Wikipedia: Bleem!", url: "https://en.wikipedia.org/wiki/Bleem!" },
        { title: "U.S. Copyright Office: Sony Computer Entm't Am., Inc. v. Bleem, LLC (9th Cir. 2000) 判例摘要", url: "https://www.copyright.gov/fair-use/summaries/sonycomputer-bleem-9thcir2000.pdf" },
        { title: "Eurogamer: The history of bleem!", url: "https://www.eurogamer.net/the-history-of-bleem" }
      ]
    },
    {
      date: "1999-03",
      dateLabel: "1999年3月",
      title: "Sony 诉 Connectix 案",
      category: "法律与产业",
      exploit: "Connectix Virtual Game Station",
      cve: "",
      firmware: "",
      description: "Connectix 的 Virtual Game Station 是第一款真正可用的商业 PS1 模拟器，能在 Mac 上直接运行 PS1 光盘。索尼于 1999 年起诉，主张 Connectix 在逆向 BIOS 过程中复制其代码构成侵权，加州北区法院 1999 年的临时禁令一度叫停销售；第九巡回上诉法院于 2000 年 2 月推翻禁令，认定中间复制属于合理使用，且最终产品的复制量不构成侵权。2000 年双方和解，索尼以约 1.35 亿美元收购了该技术。此案与 Sega v. Accolade、Sony v. Bleem 共同构成美国模拟器合法性的三大先例。",
      sources: [
        { title: "Wikipedia: Sony Computer Entertainment, Inc. v. Connectix Corp.", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment,_Inc._v._Connectix_Corp." },
        { title: "Wikipedia: Virtual Game Station", url: "https://en.wikipedia.org/wiki/Virtual_Game_Station" }
      ]
    },
    {
      date: "2002-04",
      dateLabel: "2002年4月",
      title: "任天堂围剿 Lik Sang 和解",
      category: "法律与产业",
      exploit: "Lik Sang 销售的备份设备与改机服务",
      cve: "",
      firmware: "",
      description: "香港的 Lik Sang 曾是全球最大的主机配件与备份设备邮购商之一，长期销售各类烧录卡、改机芯片与备份设备。任天堂为切断其货源，在香港、英国等多个司法辖区同时对其及其供应商提起诉讼，香港高等法院其后作出对任天堂有利的判决。在持续的跨境诉讼压力下，Lik Sang 于 2002 年前后与任天堂达成和解，同意停止销售侵犯任天堂权利的产品。此案确立了任天堂「跨境同时起诉渠道商、而非终端用户」的执法模式，和解后任天堂的诉状也被广泛视为后续执法行动的模板，Lik Sang 最终于 2006 年整体停业。",
      sources: [
        { title: "HKLII: Nintendo Co Ltd v. Lik Sang International Ltd [2003] HKCFI 217", url: "https://www.hklii.org/en/cases/hkcfi/2003/217" },
        { title: "Wikipedia: Lik Sang", url: "https://en.m.wikipedia.org/wiki/Lik-sang.com" },
        { title: "Pinsent Masons: Nintendo wins Hong Kong anti-piracy case", url: "https://www.pinsentmasons.com/out-law/news/nintendo-wins-hong-kong-anti-piracy-case" }
      ]
    },
    {
      date: "2004-07",
      dateLabel: "2004年7月",
      title: "英国 Sony v. Ball 改机案",
      category: "法律与产业",
      exploit: "PlayStation 2 modchip（安装商 David Ball）",
      cve: "",
      firmware: "",
      description: "英国高等法院衡平分庭（High Court of England and Wales, Chancery Division）在 2004 年审理索尼起诉 PS2 改机芯片供应者 David Ball 等人的案件，认定 modchip 的唯一实际效果就是绕过索尼用于防止盗版的技术措施，因而违反英国《版权、外观设计与专利法》第 296 条关于规避装置的规定，判令被告承担法律责任并支付赔偿。该案是欧洲最早明确「改机芯片＝规避装置」的判决之一，此后英国始终没有出现为 modchip 留下合法空间的判例，改机在英国基本转入地下。",
      sources: [
        { title: "The National Archives (Find Case Law): Kabushiki Kaisha Sony Computer Entertainment Inc v Ball & Ors [2004] EWHC 1738 (Ch)", url: "https://caselaw.nationalarchives.gov.uk/ewhc/ch/2004/1738" },
        { title: "Wikipedia: Modchip", url: "https://en.wikipedia.org/wiki/Modchip" },
        { title: "BBC News: Mod chip man guilty of piracy", url: "https://news.bbc.co.uk/2/hi/technology/3540186.stm" }
      ]
    },
    {
      date: "2005-10",
      dateLabel: "2005年10月",
      title: "澳高院判 Stevens 改机败诉",
      category: "法律与产业",
      exploit: "PlayStation modchip（Eddy Stevens 安装商）",
      cve: "",
      firmware: "",
      description: "澳大利亚高等法院（High Court of Australia）在 2005 年 10 月 6 日就 Stevens v. Kabushiki Kaisha Sony Computer Entertainment 作出判决，以多数意见推翻了下级法院对 Stevens 有利的认定，认为 PS1 的防盗版机制属于版权法意义上的「技术保护措施」，因此销售和安装 modchip 构成违法。判决特别讨论了「技术保护措施」的立法定义，并区别于美国 DMCA 的措辞。这是大洋洲最重要的改机判例，此后澳大利亚的 modchip 销售基本绝迹。",
      sources: [
        { title: "High Court of Australia: Stevens v. Kabushiki Kaisha Sony Computer Entertainment [2005] HCA 58", url: "https://www.hcourt.gov.au/cases-and-judgments/judgments/judgments-1998-current/stevens-v-kabushiki-kaisha-sony-computer-entertainment" },
        { title: "AustLII: Stevens v Kabushiki Kaisha Sony Computer Entertainment [2005] HCA 58", url: "https://www8.austlii.edu.au/cgi-bin/viewdoc/au/cases/cth/HCA/2005/58.html" }
      ]
    },
    {
      date: "2006-10",
      dateLabel: "2006年10月",
      title: "Sony 诉 Divineo 缺席判决",
      category: "法律与产业",
      exploit: "Divineo 的 PS2 改机芯片与 modchip 批发业务",
      cve: "",
      firmware: "",
      description: "索尼在加州北区法院起诉法国公司 Divineo SARL 及其关联主体，指控其大规模进口和销售 PS2 modchip 与备份设备。2006 年 10 月，法院在被告未有效应诉的情况下作出缺席判决，判令 Divineo 支付超过 900 万美元的法定赔偿并永久停止相关业务。该判决的影响远超个案：它让美国成为对改机硬件最危险的司法辖区，促使此后几乎所有 modchip 生意把仓储与结算搬到美国境外，形成了今天「drop-shipping + 离岸支付」的基本产业形态。",
      sources: [
        { title: "Engadget: Sony busts down mod-chip retailer with $9 mil. lawsuit", url: "https://www.engadget.com/2006-10-05-sony-busts-down-mod-chip-retailer-with-9-mil-lawsuit.html" },
        { title: "North Carolina Journal of Law & Technology: Mod Chips and Homebrew — A Recipe for Their Continued Use in the Wake of Sony v. Divineo", url: "https://ncjolt.org/content/view/172/62/1/3/" }
      ]
    },
    {
      date: "2009-07",
      dateLabel: "2009年7月",
      title: "任天堂在日、欧起诉 R4 烧录卡厂商",
      category: "法律与产业",
      exploit: "R4 / R4 Revolution（NDS 烧录卡）",
      cve: "",
      firmware: "",
      description: "面对 NDS 烧录卡 R4 的泛滥，任天堂在日本对 R4 相关厂商提起刑事诉讼与民事诉讼，主张烧录卡属于反规避装置；同期在英国、德国、荷兰也发起民事诉讼。这一轮诉讼直接导致日本市场对烧录卡的刑事查处常态化，并在欧洲确立了 R4 类产品的违法地位。它是任天堂对「Slot-1 卡」长达十五年法律战的起点，也塑造了烧录卡产业此后以更名、换壳、跨境分销对抗禁令的生存方式。",
      sources: [
        { title: "MCV/DEVELOP: JAPAN — Nintendo ups R4 battle", url: "https://mcvuk.com/business-news/japan-nintendo-ups-r4-battle/" },
        { title: "Pinsent Masons: Nintendo wins Hong Kong anti-piracy case", url: "https://www.pinsentmasons.com/out-law/news/nintendo-wins-hong-kong-anti-piracy-case" }
      ]
    },
    {
      date: "2010-09",
      dateLabel: "2010年9月",
      title: "德国法院判 R4 卡违法并赔偿任天堂",
      category: "法律与产业",
      exploit: "R4 烧录卡（德国经销商）",
      cve: "",
      firmware: "",
      description: "慕尼黑地方法院（LG München）审理任天堂起诉德国 R4 烧录卡经销商的案件，认定 R4 卡绕过了 NDS 的技术保护措施、主要用途是运行盗版游戏，因而构成对任天堂发行权与反规避规定的侵害。法院判令被告停止销售并支付约 100 万欧元的赔偿，慕尼黑高等法院（OLG München）其后确认了 Slot-1 卡的违法性。这是欧洲在 R4 问题上最有分量的判决之一，也成为 2026 年荷兰 MIG Switch 案援引的先例基础。",
      sources: [
        { title: "Der Standard: R4-Cartridges — Nintendo erhält eine Million Dollar von Spielepiraten", url: "https://www.derstandard.at/consent/tcf/story/1373512653384/r4-cartridges-nintendo-erhaelt-eine-million-dollar-von-spielepiraten" },
        { title: "Eurogamer.de: Münchener OLG bestätigt, dass Slot-1 Karten illegal sind", url: "https://www.eurogamer.de/muenchener-olg-bestaetigt-dass-slot-1-karten-illegal-sind" }
      ]
    },
    {
      date: "2011-01",
      dateLabel: "2011年1月",
      title: "SCEA 诉 Hotz（GeoHot）",
      category: "法律与产业",
      exploit: "PS3 越狱（fail0verflow 签名密钥泄露后的 CFW）",
      cve: "",
      firmware: "PS3 固件 3.55",
      description: "在 fail0verflow 于 2010 年 12 月的 27C3 大会公布 PS3 签名算法缺陷、George Hotz（GeoHot）公布越狱细节之后，索尼于 2011 年 1 月在加州北区法院起诉 Hotz，主张其违反 DMCA 反规避条款与 CFAA。法院在 1 月签发临时限制令，并在审理中要求取得 Hotz 的 PayPal、YouTube 与 Twitter 记录，这一取证范围引发大规模隐私抗议，Anonymous 随后对索尼发起攻击。2011 年 4 月双方和解：Hotz 同意永久不再破解索尼产品，索尼未获金钱赔偿。此案把「主机越狱」第一次推成全球性公共议题，也直接催生了 EFF 长期参与的 DMCA 1201 豁免运动。",
      sources: [
        { title: "Harvard JOLT: Sony Computer Entm't Am. v. Hotz — Sony Settles Lawsuit with PlayStation 3 Hacker", url: "https://jolt.law.harvard.edu/digest/sony-computer-entmt-am-v-hotz" },
        { title: "PlayStation.Blog: Settlement in George Hotz Case", url: "https://blog.playstation.com/2011/04/11/settlement-in-george-hotz-case/" },
        { title: "Wikipedia: Sony Computer Entertainment America v. George Hotz", url: "https://en.wikipedia.org/wiki/Sony_Computer_Entertainment_America_v._George_Hotz" }
      ]
    },
    {
      date: "2011-02",
      dateLabel: "2011年2月",
      title: "德国 graf_chokolo 被搜查",
      category: "法律与产业",
      exploit: "PS3 hypervisor 逆向工程文档（graf_chokolo 的 Linux 内核与 hypervisor 研究）",
      cve: "",
      firmware: "PS3 固件 3.55 及更早",
      description: "德国研究者 Alexander Egorenkov（网名 graf_chokolo）长期公开 PS3 hypervisor 的逆向工程资料。2011 年 2 月，索尼在德国取得临时禁令后，警方与索尼代表搜查了他的住宅并扣押设备，索尼同时要求他停止发布相关内容。作为回应，他公开了更完整的逆向工程文档，并在网上发起募款以应对诉讼。该案与同期索尼针对 fail0verflow 成员（包括要求其交回设备、限制其发表）的施压一起，成为欧洲言论自由与安全研究界批评反规避法被滥用的标志性案例。",
      sources: [
        { title: "The Register: PlayStation hacker defiantly posts 'bible' following police raid", url: "https://www.theregister.com/2011/02/28/jailbreaker_defies_sony/" },
        { title: "CNET: After raid, hacker releases 'bible' for PS3 reverse engineering", url: "https://www.cnet.com/news/privacy/after-raid-hacker-releases-bible-for-ps3-reverse-engineering/" },
        { title: "The Hacker News: German Police & Sony Raids on Hacker's Home", url: "https://thehackernews.com/2011/02/german-police-sony-raids-on-hackers.html" }
      ]
    },
    {
      date: "2011-03",
      dateLabel: "2011年3月",
      title: "OtherOS 集体诉讼起诉索尼",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "PS3 固件 3.21（移除 OtherOS）",
      description: "索尼在 2010 年 4 月发布 3.21 固件移除 OtherOS（Linux 安装能力）后，美国用户发起集体诉讼，主张索尼在宣传中把 OtherOS 作为卖点、事后又通过固件更新剥夺该功能，构成不当得利与虚假宣传。案件在加州北区法院（In re Sony PS3 OtherOS Litigation）多年拉锯，索尼的多次驳回动议被部分否定。这场诉讼把「厂商是否有权通过固件更新回收已售出硬件的功能」变成消费者法层面的争点，是后来所有「远程变砖」争议的先声。",
      sources: [
        { title: "Wikipedia: OtherOS", url: "https://en.wikipedia.org/wiki/OtherOS" },
        { title: "Truth in Advertising: In re Sony PS3 OtherOS Litigation 和解文件", url: "https://truthinadvertising.org/wp-content/uploads/2016/10/In-Re-Sony-PS3-renewed-motion-for-pref-app-of-new-settlement.pdf" }
      ]
    },
    {
      date: "2013-07",
      dateLabel: "2013年7月",
      title: "任天堂在英、德连赢 R4 烧录卡民事诉讼",
      category: "法律与产业",
      exploit: "R4 / Acekard 系列 NDS 烧录卡",
      cve: "",
      firmware: "",
      description: "2010 年代中期，任天堂在欧洲对多家烧录卡进口商与零售商提起系列民事诉讼并获得普遍胜诉。英国法院确认销售 R4 类烧录卡构成对反规避条款的违反，德国法院延续慕尼黑判决的立场，判令被告停止销售并支付赔偿。这一轮密集诉讼把欧洲的烧录卡零售渠道基本清理干净，迫使供应商把销售转向线上跨境与第三方市场平台，也促使任天堂此后更重视平台层面的下架与支付通道封锁。",
      sources: [
        { title: "Nintendo Life: Nintendo Wins Another Court Battle with R4 Cartridge Manufacturers", url: "https://www.nintendolife.com/news/2013/07/nintendo_wins_another_court_battle_with_r4_cartridge_manufacturers" },
        { title: "GBAtemp: Nintendo and friends win $1 Million in damages against R4 carts", url: "https://gbatemp.net/threads/nintendo-and-friends-win-1million-in-damages-against-r4-carts.350948/" }
      ]
    },
    {
      date: "2015-10",
      dateLabel: "2015年10月",
      title: "DMCA 2015：主机越狱获豁免",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "在 EFF 与 iFixit 等推动下，美国版权局在 2015 年的三年度规则制定中首次批准了针对视频游戏主机的越狱豁免（Class 19），允许用户绕过访问控制以运行自行获取的软件，但范围被严格限制：仅覆盖已被厂商停止支持或已停止生产的主机类别，掌机被排除在外。这是 DMCA 第 1201 条实施以来改机社群第一次拿到正面结果，确立了「三年度豁免」这一制度性战场，此后每一轮规则制定都成为厂商与用户权利团体的固定对决。",
      sources: [
        { title: "Federal Register: Exemption to Prohibition on Circumvention of Copyright Protection Systems (2015-27212)", url: "https://www.federalregister.gov/documents/2015/10/28/2015-27212/exemption-to-prohibition-on-circumvention-of-copyright-protection-systems-for-access-control-technologies" },
        { title: "U.S. Copyright Office: 2015 Section 1201 Rulemaking (Class 19 记录)", url: "https://www.copyright.gov/1201/2015/" },
        { title: "EFF: DMCA 1201 Anti-Circumvention Exemptions", url: "https://www.eff.org/issues/dmca-1201-anti-circumvention-exemptions" }
      ]
    },
    {
      date: "2018-10",
      dateLabel: "2018年10月",
      title: "DMCA 2018：扩展主机维修",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2018 年的规则制定把视频游戏主机相关的豁免大幅扩展并重新表述（Class 7），把「维修与维护合法取得的设备」明确纳入，同时保留并扩展了对停止支持主机的越狱豁免，使图书馆、档案馆与维修者的活动获得更清晰的法律依据。任天堂与 ESA 在会上继续主张任何形式的改机都必然导向盗版，但未能阻止维修类豁免的通过。该轮结果后来在第九巡回上诉法院于 2024 年审理的 Medical Imaging & Technology Alliance v. Library of Congress 案中被维持。",
      sources: [
        { title: "U.S. Copyright Office: 2018 Section 1201 Rulemaking", url: "https://www.copyright.gov/1201/2018/" },
        { title: "Federal Register: Exemption to Prohibition on Circumvention of Copyright Protection Systems (83 FR)", url: "https://www.federalregister.gov/documents/2018/10/26/2018-23241/exemption-to-prohibition-on-circumvention-of-copyright-protection-systems-for-access-control-technologies" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "任天堂诉 Uberchips：200 万美元和解",
      category: "法律与产业",
      exploit: "Uberchips 销售的 Switch 破解芯片与 SX 系列产品",
      cve: "",
      firmware: "",
      description: "任天堂在俄亥俄北区法院起诉破解芯片经销商 Uberchips（2020 年 5 月立案），指控其销售用于 Switch 的规避装置并宣传盗版用途。2020 年 10 月双方达成和解：Uberchips 支付约 200 万美元并接受永久禁令，停止销售相关产品。此案是任天堂对 Switch 时代硬件破解供应链的一次高调打击，也说明即便个别经销商被罚到破产，硬件破解的需求与供应仍在不断转移，与同年 10 月 Team Xecuter 成员被刑事起诉共同构成了 2020 年的执法高峰。需要辨正的是：常被与本案混为一谈的 1223 万美元判赔属于另一桩案件——2018 年针对 ROM 站点 LoveROMs / LoveRETRO 的诉讼，与 Uberchips 无关。",
      sources: [
        { title: "Engadget: Nintendo agrees to $2 million settlement in Switch hacking lawsuit", url: "https://www.engadget.com/nintendo-2-million-settlement-switch-hacking-lawsuit-212546195.html" },
        { title: "VGC: Nintendo wins $2 million in damages from Switch hacking device seller", url: "https://www.videogameschronicle.com/news/nintendo-wins-2-million-in-damages-from-switch-hacking-device-seller/" },
        { title: "BBC News: Nintendo wins £1.5m in Switch hacking case", url: "https://www.bbc.com/news/technology-54386985" },
        { title: "CourtListener: Nintendo of America Inc. v. Uberchips et al.", url: "https://www.courtlistener.com/docket/16132336/nintendo-of-america-inc-v-uberchips-et-al/" }
      ]
    },
    {
      date: "2020-10",
      dateLabel: "2020年10月",
      title: "美国司法部起诉 Team Xecuter",
      category: "法律与产业",
      exploit: "Team Xecuter 的 SX OS / SX Pro / SX Core / SX Lite",
      cve: "",
      firmware: "",
      description: "2020 年 10 月，美国司法部宣布对 Team Xecuter 的核心成员提起刑事指控，指控其共谋实施电信诈骗、洗钱与规避技术措施，罪名与其生产销售用于 Switch 的硬件破解产品（SX OS 及 SX Pro/Core/Lite 系列 modchip）有关。加拿大籍成员 Gary Bowser 与法国籍成员 Max Louarn 先后被捕，另一名被指为幕后资金与供应链组织者的中国籍人士 Yuanning Chen 亦在起诉书中被列名。这是主机破解产业第一次被以联邦刑事罪名整体追究，标志着从「打公司」升级为「打人、要坐牢」。",
      sources: [
        { title: "U.S. DOJ (W.D. Wash.): Two members of notorious videogame piracy group 'Team Xecuter' in custody", url: "https://www.justice.gov/usao-wdwa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody" },
        { title: "ICE: ICE investigation leads to the arrest of 2 members of notorious 'Team Xecuter' videogame piracy group", url: "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy" },
        { title: "TorrentFreak: Team Xecuter Arrests / Nintendo Piracy Investigation", url: "https://torrentfreak.com/tag/team-xecuter/" }
      ]
    },
    {
      date: "2021-10",
      dateLabel: "2021年10月",
      title: "DMCA 2021：光驱维修获豁免",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2021 年的规则制定在视频游戏相关议题上给出了分裂的结果：一方面批准了针对游戏主机光驱等部件的诊断、维护与维修豁免，承认绕过访问控制以修复硬件属于非侵权使用；另一方面明确拒绝了软件保存网络（SPN）与图书馆版权联盟主张的、允许图书馆远程提供已停止发行游戏访问的豁免请求。EFF 与 iFixit 支持的维修阵营获胜、保存阵营受挫，显示版权局在「硬件维修」与「内容获取」之间划出了一条清晰的界线。",
      sources: [
        { title: "Federal Register: Exemption to Prohibition on Circumvention of Copyright Protection Systems (86 FR 59627)", url: "https://www.federalregister.gov/documents/2021/10/28/2021-23311/exemption-to-prohibition-on-circumvention-of-copyright-protection-systems-for-access-control-technologies" },
        { title: "U.S. Copyright Office: 2021 Section 1201 Rulemaking, Register's Recommendation", url: "https://www.copyright.gov/1201/2021/" },
        { title: "EFF: DMCA 1201 Anti-Circumvention Exemptions", url: "https://www.eff.org/issues/dmca-1201-anti-circumvention-exemptions" }
      ]
    },
    {
      date: "2021-10",
      dateLabel: "2021年10月",
      title: "Gary Bowser 认罪认罚",
      category: "法律与产业",
      exploit: "Team Xecuter 的 SX OS / SX Pro",
      cve: "",
      firmware: "",
      description: "2021 年 10 月，Gary Bowser 在华盛顿西区联邦法院就共谋实施电信诈骗与共谋规避技术措施两项罪名认罪，承认自己是 Team Xecuter 的主要销售者与对外发言人，并同意支付 450 万美元。检方指控该组织通过销售 Switch 破解硬件造成任天堂等厂商超过 6500 万美元损失。认罪协议中的配合条款使他成为本案唯一的认罪被告，也让 Max Louarn 与 Yuanning Chen 的案件走向不同的处理路径。",
      sources: [
        { title: "ScreenRant: Nintendo Switch Hacker Gary Bowser Pleads Guilty, Will Pay $4.5 Million", url: "https://screenrant.com/nintendo-switch-hacker-gary-bowser-guilty/" },
        { title: "CourtListener: United States v. Bowser (W.D. Wash., 2:20-cr-00227) 文书", url: "https://storage.courtlistener.com/recap/gov.uscourts.wawd.298468/gov.uscourts.wawd.298468.25.0.pdf" },
        { title: "Eurogamer: Nintendo hacker Gary Bowser agrees $10m fine", url: "https://www.eurogamer.net/nintendo-hacker-gary-bowser-agrees-to-pay-usd10m-fine" }
      ]
    },
    {
      date: "2022-02",
      dateLabel: "2022年2月",
      title: "Bowser 获刑 40 个月",
      category: "法律与产业",
      exploit: "Team Xecuter",
      cve: "",
      firmware: "",
      description: "2022 年 2 月 10 日，华盛顿西区联邦法院判处 Gary Bowser 40 个月监禁，并判令他向任天堂支付 1000 万美元赔偿，加上此前约定的 450 万美元，总额约 1450 万美元。量刑明显重于同类经济犯罪，被广泛解读为检方与任天堂有意「以案立威」。Bowser 于 2023 年获释，但因赔偿义务而面临长期收入被扣划，2024 年他公开表示在狱中每月只能按约 25 美元向任天堂还款，此案因此成为讨论刑事赔偿与终身债务的典型案例。",
      sources: [
        { title: "U.S. DOJ (W.D. Wash.): Public voice and principal salesperson for notorious videogame piracy group sentenced to 3+ years in prison", url: "https://www.justice.gov/usao-wdwa/pr/public-voice-and-principal-salesperson-notorious-videogame-piracy-group-sentenced-3" },
        { title: "The Verge: Bowser is going to prison for selling Nintendo Switch hacks", url: "https://www.theverge.com/2022/2/10/22927827/gary-bowser-sentenced-nintendo-switch-hacks-team-xecuter" },
        { title: "Nintendo Life: Nintendo Hacker Gary Bowser Sentenced To Three Years In Jail", url: "https://www.nintendolife.com/news/2022/02/nintendo-hacker-gary-bowser-sentenced-to-three-years-in-jail" }
      ]
    },
    {
      date: "2024-02",
      dateLabel: "2024年2月",
      title: "Bowser 终身赔偿追偿",
      category: "法律与产业",
      exploit: "Team Xecuter",
      cve: "",
      firmware: "",
      description: "2024 年初，多家媒体报道 Gary Bowser 出狱后的处境：他仍背负约 1450 万美元的判决债务，任天堂持续通过扣划收入的方式追偿，他本人在采访中称狱中每月只能偿还约 25 美元。这一案件引发了关于刑事罚金与民事赔偿叠加是否事实上构成终身债务的讨论，也暴露了主机破解案件的一个结构性特征——判决金额按法定赔偿倍数计算，几乎不可能实际清偿，其功能是威慑而非补偿。",
      sources: [
        { title: "Ars Technica: Convicted console hacker says he paid Nintendo $25 a month from prison", url: "https://arstechnica.com/gaming/2024/02/after-14-5m-judgments-console-hacker-paid-nintendo-25-a-month-from-prison/" },
        { title: "The Guardian: The man who owes Nintendo $14m — Gary Bowser and gaming's most infamous piracy case", url: "https://www.theguardian.com/games/2024/feb/01/the-man-who-owes-nintendo-14m-gary-bowser-and-gamings-most-infamous-piracy-case" }
      ]
    },
    {
      date: "2024-03",
      dateLabel: "2024年3月",
      title: "任天堂诉 Tropic Haze",
      category: "法律与产业",
      exploit: "Yuzu（Switch 模拟器）",
      cve: "",
      firmware: "",
      description: "2024 年 2 月 26 日，任天堂在罗德岛联邦法院起诉 Yuzu 的开发者 Tropic Haze，主张其通过模拟器规避技术保护措施并助长盗版，特别指出 Yuzu 引导用户获取 prod.keys 与解密游戏、并在《塞尔达传说：王国之泪》发售前支持其运行。3 月 4 日双方达成和解：Tropic Haze 支付 240 万美元、永久停止分发 Yuzu 及其代码、交出相关域名与网站，并关闭 Citra 等相关项目。此案没有形成判决先例，却以「速战速决 + 全面下架」的方式震慑了整个模拟器生态，直接导致 Ryujinx 等项目的命运转折。",
      sources: [
        { title: "CourtListener: Nintendo of America Inc. v. Tropic Haze LLC (D.R.I., 1:24-cv-00082)", url: "https://www.courtlistener.com/docket/68284505/nintendo-of-america-inc-v-tropic-haze-llc/" },
        { title: "Shacknews: Yuzu developer to cease distribution of Switch emulator & pay Nintendo $2.4 million in settlement", url: "https://www.shacknews.com/article/138989/yuzu-tropic-haze-nintendo-2-million-settlement-copyright" },
        { title: "Internet Archive: Nintendo of America Inc. v. Tropic Haze LLC 和解材料", url: "https://archive.org/details/yuzu-lawsuit/" }
      ]
    },
    {
      date: "2024-08",
      dateLabel: "2024年8月",
      title: "任天堂起诉 Ryan Daly",
      category: "法律与产业",
      exploit: "MIG Switch 烧录卡与 MIG Dumper",
      cve: "",
      firmware: "",
      description: "2024 年 8 月，任天堂在华盛顿西区联邦法院起诉 Ryan Daly（以 Modded Hardware 名义经营），指控其销售 MIG Switch 烧录卡、MIG Dumper 以及改装过的 Switch 主机，并主张这些产品的主要用途就是绕过技术保护措施。MIG Switch 是一款可冒充正版卡带、让主机直接读取 microSD 上游戏备份的烧录卡，同时也能用于备份自己的卡带，因此其合法用途抗辩成为本案核心争点。此案是任天堂首次把 Switch 世代烧录卡作为主要打击对象，也把战场从 modchip 扩展到「卡带形态」的规避装置。",
      sources: [
        { title: "CourtListener: Nintendo of America Inc. v. Daly (W.D. Wash., 2:24-cv-00958)", url: "https://www.courtlistener.com/docket/68901471/nintendo-of-america-inc-v-daly/" },
        { title: "Kotaku: Guy Who Fought Nintendo Piracy Suit Without A Lawyer Pays $2M", url: "https://kotaku.com/nintendo-lawsuit-modding-switch-2-ryan-daly-2000623984" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "Ryujinx 被要求停运",
      category: "法律与产业",
      exploit: "Ryujinx（Switch 模拟器）",
      cve: "",
      firmware: "",
      description: "2024 年 10 月 1 日，Switch 模拟器 Ryujinx 的开发者 gdkchan 宣布项目停止开发并从 GitHub 下架全部代码与版本。据公开说明，他是在被任天堂接触后被要求停止项目并交出相关资源。Ryujinx 与 Yuzu 不同，没有盈利模式、也没有明显的盗版引导行为，因此它的关停被视为任天堂执法边界扩张的证据——诉讼与和解之外，「直接接触开发者」成为一种高效且不留判例的手段。此后社区出现多个 fork（如 ryujinx.app 等），但项目再未恢复原有开发规模。",
      sources: [
        { title: "USA Today: Popular Nintendo Switch emulator Ryujinx shuts down amid crackdown from Nintendo", url: "https://www.usatoday.com/story/tech/gaming/2024/10/01/nintendo-switch-emulator-ryujinx/75472985007/" },
        { title: "Tarnkappe.info: Ryujinx — Fork des Switch-Emulators aktiv", url: "https://tarnkappe.info/artikel/softwareentwicklung/ryujinx-fork-des-switch-emulators-aktiv-322012.html" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "DMCA 2024：维修豁免续期",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "2024 年 10 月 28 日，美国版权局公布第九次三年度规则制定的最终规则（Docket No. 2023-5，FR Doc. 2024-24563）：续期了消费设备「诊断、维护与维修」的豁免（37 CFR 201.40(b)(15)），使主机硬件维修继续处于合法空间；但明确拒绝了软件保存网络与图书馆版权联盟关于放宽已停止发行游戏访问限制的请求，维持了单人使用与馆内使用限制。规则同时罕见地呼吁国会处理 1201 条本身的结构性问题，反映出连版权局也认为「三年一议」的机制已不堪重负。",
      sources: [
        { title: "Federal Register: Exemption to Prohibition on Circumvention of Copyright Protection Systems (2024-24563)", url: "https://www.federalregister.gov/documents/2024/10/28/2024-24563/exemption-to-prohibition-on-circumvention-of-copyright-protection-systems-for-access-control-technologies" },
        { title: "GovInfo: 89 FR 85437 (2024-10-28) 全文", url: "https://www.govinfo.gov/content/pkg/FR-2024-10-28/html/2024-24563.htm" },
        { title: "U.S. Copyright Office: 2024 Section 1201 Rulemaking (Ninth Triennial)", url: "https://www.copyright.gov/1201/2024/" },
        { title: "GameRant: US Copyright Office Denies Petition for Remote Access to Out-Of-Print Games", url: "https://gamerant.com/us-copyright-office-denies-petition-video-game-preservation-remote-access/" }
      ]
    },
    {
      date: "2024-10",
      dateLabel: "2024年10月",
      title: "上诉法院维持 1201 机制",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "在 Medical Imaging & Technology Alliance v. Library of Congress 一案中，医疗影像产业团体主张版权局无权以「使用者用途」来界定豁免类别、要求推翻维修类豁免，案件上诉至哥伦比亚特区巡回上诉法院。法院在 2024 年维持了版权局的规则制定与豁免范围，实际上为包括游戏主机维修在内的 1201 条豁免提供了司法背书。对破解社区的实际意义是：三年度规则制定虽然是行政程序，但其产出已具备相当稳固的司法地位，短期内难以被产业游说整体推翻。",
      sources: [
        { title: "CourtListener: Medical Imaging & Technology Alliance v. Library of Congress (D.D.C., 1:22-cv-00499)", url: "https://www.courtlistener.com/docket/63116781/medical-imaging-technology-alliance-v-library-of-congress/" },
        { title: "CourtListener: MITA v. Library of Congress 上诉记录 (D.C. Cir.)", url: "https://storage.courtlistener.com/recap/gov.uscourts.cadc.39597/gov.uscourts.cadc.39597.01208523403.0.pdf" }
      ]
    },
    {
      date: "2025-03",
      dateLabel: "2025年3月",
      title: "日本首判 Switch 改机有罪",
      category: "法律与产业",
      exploit: "改装 Nintendo Switch 主机（焊接 modchip）",
      cve: "",
      firmware: "",
      description: "日本法院在 2025 年对一名 58 岁男子作出判决：他因改装并销售可运行盗版游戏的 Nintendo Switch 主机，被认定违反《商标法》与《不正当竞争防止法》，判处有期徒刑 2 年、缓期 5 年执行，并处约 50 万日元罚金。这是日本首次对 Switch 改机销售者作出有罪判决。相比 Gary Bowser 案约 1450 万美元的赔偿，本案金额极小，但刑事定罪的象征意义更强——它意味着在日本，改机销售从「灰色生意」正式变成可入刑的行为。",
      sources: [
        { title: "Video Games Chronicle: 58-year-old man is first in Japan to get suspended prison sentence for selling modded Switch consoles", url: "https://www.videogameschronicle.com/news/58-year-old-man-is-first-in-japan-to-get-suspended-prison-sentence-for-selling-modded-switch-consoles/" },
        { title: "Nintendo Life: Japan's First Switch Modder Court Ruling Ends With A Fraction Of Nintendo's Full Wrath", url: "https://www.nintendolife.com/news/2025/04/japans-first-switch-modder-court-ruling-ends-with-a-fraction-of-nintendos-full-wrath" }
      ]
    },
    {
      date: "2025-09",
      dateLabel: "2025年9月",
      title: "MIG Switch 案 200 万",
      category: "法律与产业",
      exploit: "MIG Switch / Modded Hardware",
      cve: "",
      firmware: "",
      description: "在 Nintendo of America v. Daly 案中，Ryan Daly 选择自行应诉、未聘请律师。法院最终判令其向任天堂支付约 200 万美元，并永久禁止其继续销售 MIG Switch 及其他用于绕过 Switch 技术保护措施的产品，报道普遍称双方以和解/合意判决方式结案。判决覆盖的产品明确包括面向 Switch 2 的烧录卡硬件，是 Switch 2 发售初期任天堂在硬件层面取得的首个重要胜利。此案与日本案同期落地，构成任天堂 2025 年「刑事+民事」双轨推进的样本。",
      sources: [
        { title: "Nintendo Life: Nintendo Wins $2 Million Lawsuit Against 'MiG Switch' Distributor", url: "https://www.nintendolife.com/news/2025/09/nintendo-wins-usd2-million-lawsuit-against-mig-switch-distributor" },
        { title: "Video Games Chronicle: Nintendo wins $2 Million settlement against Switch modchip seller who previously denied wrongdoing", url: "https://www.videogameschronicle.com/news/nintendo-wins-2-million-settlement-against-switch-modchip-seller-who-previously-denied-wrongdoing/" },
        { title: "Tarnkappe.info: Nintendo stoppt Switch-Pirat — Konzern erzwingt Millionen-Vergleich", url: "https://tarnkappe.info/artikel/gaming/nintendo-stoppt-switch-pirat-konzern-erzwingt-millionen-vergleich-320432.html" }
      ]
    },
    {
      date: "2025-12",
      dateLabel: "2025年12月",
      title: "Switch 2 EULA 变砖条款",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "Switch 2 各版本固件",
      description: "任天堂在 Switch 2 发售前后更新用户协议，明确保留在其认定用户违约时「使 Nintendo 账户服务与/或相关设备永久无法使用」的权利——即远程把主机「变砖」。自由软件基金会（FSF）在 2025 年 12 月发文批评该条款，并列举了已发生的案例：用户买到被前任机主导致封禁的二手 Switch 2、或使用数字市场购买的卡带后被锁机，只能向任天堂申诉解锁。这标志着主机厂商的控制手段从「反规避技术」扩展到「合同条款 + 远程撤销」，法律战的对象也从破解者转向终端用户。",
      sources: [
        { title: "FSF Bulletin (2025 Winter): New Nintendo DRM bans consoles, makes users beg for forgiveness", url: "https://www.fsf.org/bulletin/2025/winter/new-nintendo-drm-bans-consoles-makes-users-beg-for-forgiveness" },
        { title: "Defective by Design: Nintendo", url: "https://www.defectivebydesign.org/nintendo" }
      ]
    },
    {
      date: "2026-02",
      dateLabel: "2026年2月",
      title: "GitHub 模拟器仓库下架",
      category: "法律与产业",
      exploit: "Switch 模拟器（GitHub 上的相关仓库）",
      cve: "",
      firmware: "",
      description: "2026 年初，任天堂法律部门向 GitHub 发起成批 DMCA 下架请求，目标是与 Switch 模拟器相关的源码仓库，理由集中在「包含非法获取的加密密钥」与助长盗版。这轮行动延续了 2024 年 Yuzu/Ryujinx 案件之后任天堂对代码托管平台的施压路线：不再逐个起诉开发者，而是直接要求平台清除分发载体。对破解社区的影响是模拟器开发进一步去中心化，代码分散到自建托管与私密渠道，可公开审计的项目显著减少。",
      sources: [
        { title: "Tarnkappe.info: Nintendo DMCA gegen Switch-Emulatoren — GitHub im Visier", url: "https://tarnkappe.info/artikel/gaming/nintendo-dmca-gegen-switch-emulatoren-github-im-visier-325943.html" },
        { title: "Video Games Chronicle: Nintendo wipes out 400 more Switch emulator repositories on GitHub", url: "https://www.videogameschronicle.com/news/nintendo-wipes-out-400-more-switch-emulator-repositories-on-github-as-it-continues-its-fight-on-piracy/" }
      ]
    },
    {
      date: "2026-02",
      dateLabel: "2026年2月",
      title: "荷兰封锁 NXBrew 站点",
      category: "法律与产业",
      exploit: "",
      cve: "",
      firmware: "",
      description: "荷兰鹿特丹法院（Rechtbank Rotterdam）在一起由反盗版组织 BREIN 推动的案件中，命令对提供 Switch 盗版游戏的网站 NXBrew 实施 ISP 层面的封锁，并伴随动态封锁与搜索引擎去索引措施。该案与任天堂在欧洲针对 Nintendo Account、主机与烧录卡的执法行动同时推进，反映出欧洲的执法路径从「起诉销售者」扩展到「切断网络可达性」。对破解社区的实际影响是分发入口持续碎片化，用户更多依赖镜像站、私密论坛与点对点渠道。",
      sources: [
        { title: "BREIN: Rechtbank Rotterdam beveelt blokkade illegale games site", url: "https://stichtingbrein.nl/rechtbank-rotterdam-beveelt-blokkade-illegale-games-site/" },
        { title: "Tarnkappe.info: Nintendo Piraterie Sperre — NXBrew landet auf der ISP-Blacklist", url: "https://tarnkappe.info/artikel/rechtssachen/nintendo-piraterie-sperre-nxbrew-landet-auf-der-isp-blacklist-325857.html" }
      ]
    },
    {
      date: "2026-03",
      dateLabel: "2026年3月",
      title: "日本警方查处 Switch 改机",
      category: "法律与产业",
      exploit: "改装 Nintendo Switch 主机",
      cve: "",
      firmware: "",
      description: "日本警方在 2026 年 3 月公布查处一起 Nintendo Switch 改装销售案，将合计 4 名嫌疑人以涉嫌违反《商标法》等罪名书面送检（書類送検），指其改装主机后可运行盗版软件并对外销售。这是在 2025 年首次有罪判决之后，日本执法从个案走向成批处理的标志性进展。对改机行业的直接影响是日本境内的改装与转售风险急剧上升，货源与客源进一步向海外和私下渠道转移。",
      sources: [
        { title: "京都新聞: 【速報】ニンテンドースイッチを改造して販売容疑 男ら計4人を書類送検", url: "https://www.kyoto-np.co.jp/articles/-/1679695" },
        { title: "Tarnkappe.info: Switch-Modder verhaftet — Polizei stoppt Verkauf manipulierter Konsolen in Japan", url: "https://tarnkappe.info/artikel/gaming/switch-modder-verhaftet-polizei-stoppt-verkauf-manipulierter-konsolen-in-japan-327604.html" }
      ]
    },
    {
      date: "2026-07",
      dateLabel: "2026年7月",
      title: "Gezine 公布通用漏洞",
      category: "软件漏洞",
      exploit: "Gezine 用户态漏洞（非 WebKit、非存档漏洞）",
      cve: "",
      firmware: "适用于当时已知全部固件版本",
      description: "开发者 Gezine（此前从事 PS5 安全研究）公开了一个同时适用于初代 Switch 与 Switch 2 的用户态漏洞：它不依赖 WebKit，也不需要通过网络服务传输存档，因此不受「必须升级到最新固件」的限制。他同时指出 Switch 2 的 WebKit 启用了 ARM PAC（指针认证码），使传统 ROP 链基本失效。该漏洞仅能在应用沙箱内执行代码，无法直接实现自定义固件或运行盗版，但它是多年来越狱链条上最关键的一环——为后续提权保留了一个离线、全固件通用的用户态入口。",
      sources: [
        { title: "Notebookcheck: Switch 2 — Developer unveils a universal exploit that works entirely offline", url: "https://www.notebookcheck.net/Switch-2-Developer-unveils-a-universal-exploit-that-works-entirely-offline.1347373.0.html" },
        { title: "Gezine 公布漏洞的原始推文", url: "https://x.com/gezine_dev/status/2074894225460822503" },
        { title: "Tarnkappe.info: Gezine entdeckt Userland-Exploit für Nintendo Switch 1 & 2", url: "https://tarnkappe.info/artikel/jailbreaks/gezine-entdeckt-userland-exploit-fuer-nintendo-switch-1-2-331326.html" }
      ]
    },
    {
      date: "2026-08",
      dateLabel: "2026年8月",
      title: "任天堂一次下架 400 余个模拟器仓库",
      category: "法律与产业",
      exploit: "Switch 模拟器代码仓库（含 fork 与打包）",
      cve: "",
      firmware: "",
      description: "2026 年 8 月，任天堂发起一轮协调一致的 DMCA 行动，从 GitHub 上一次性移除了 400 多个与 Switch 模拟器相关的仓库，媒体报道称下架理由与「非法加密密钥」及盗版用途有关。这轮行动的规模远超以往，覆盖的不只是模拟器主体，还包括包装脚本、构建产物与镜像 fork。实际效果是把模拟器生态从「公开可审计的协作项目」推向「不断转移的临时镜像」，同时也让普通用户更难判断下载源的合法性。",
      sources: [
        { title: "Video Games Chronicle: Nintendo wipes out 400 more Switch emulator repositories on GitHub", url: "https://www.videogameschronicle.com/news/nintendo-wipes-out-400-more-switch-emulator-repositories-on-github-as-it-continues-its-fight-on-piracy/" },
        { title: "Tarnkappe.info: GitHub-Säuberungsaktion von Nintendo — 400 Repos gelöscht", url: "https://tarnkappe.info/artikel/rechtssachen/github-saeuberungsaktion-von-nintendo-400-repos-geloescht-332948.html" },
        { title: "God is a Geek: Nintendo Removes 401 Switch Emulator Repos From GitHub", url: "https://godisageek.com/2026/08/nintendo-401-switch-emulator-repos-dmca/" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月",
      title: "海牙禁 MIG 规避硬件",
      category: "法律与产业",
      exploit: "MIG Switch Card / MIG Switch Dumper / R4 系列产品",
      cve: "",
      firmware: "",
      description: "2026 年 9 月 11 日，荷兰海牙地区法院（Rechtbank Den Haag）在一起由任天堂提起的诉讼中，禁止一名通过 r4switch.nl、ther4card.com 等网站以 drop-shipping 模式向全欧销售的经销商继续提供和销售 MIG Switch Card、MIG Switch Dumper 以及其他绕过任天堂技术保护措施的产品。法院采纳了欧盟法院在 C-355/12（Nintendo v. PC Box，2014 年 1 月 23 日）中确立的分析框架，重点考察设备的实际主要用途而非厂商宣称的合法用途；法院同时援引了 2010 年荷兰 R4 卡案的先例。IGN 将这一裁决解读为面向欧洲范围的销售禁令，但判决的实际执行仍受制于二手市场与跨境供货。来源说明：本条依据 Tarnkappe.info、Nintendo Life、IGN 与任天堂官方执法说明，判决书全文尚未公开，禁用范围与措辞以报道为准。",
      sources: [
        { title: "Tarnkappe.info: Switch-Piraterie — Gericht kippt Verkauf von Umgehungs-Hardware (2026-09-14)", url: "https://tarnkappe.info/artikel/rechtssachen/switch-piraterie-mig-switch-hardware-gericht-333443.html" },
        { title: "Nintendo Life: Nintendo Wins Court Case Ruling The Sale Of Switch 'Circumvention Devices' Unlawful", url: "https://www.nintendolife.com/news/2026/09/nintendo-wins-court-case-ruling-the-sale-of-switch-circumvention-devices-unlawful" },
        { title: "IGN: Nintendo Secures Legal Victory Against Sale of Switch Game Piracy Devices", url: "https://www.ign.com/articles/nintendo-secures-legal-victory-against-sale-of-switch-game-piracy-devices" },
        { title: "Nintendo: Circumvention Products (官方执法说明)", url: "https://www.nintendo.com/en-gb/Legal-information/Nintendo-s-Intellectual-Property-Enforcement-Program/Hardware-Piracy/Circumvention-Products/Circumvention-Products-732247.html" }
      ]
    },
    {
      date: "2026-09",
      dateLabel: "2026年9月",
      title: "任天堂获 Archbox 判决",
      category: "法律与产业",
      exploit: "Switch 盗版 ROM 站点与 Reddit 分发渠道",
      cve: "",
      firmware: "",
      description: "2026 年 9 月，美国法院在一起任天堂提起的诉讼中作出缺席判决，判令化名 Archbox 的被告——一个在 Reddit 上公开炫耀并组织分发盗版 Switch 游戏的版主——向任天堂支付约 450 万美元赔偿，并附带永久禁令。被告未有效应诉，因此法院按法定赔偿上限计算金额。该案与 2021 年 RomUniverse 案（约 210 万美元）属于同一执法谱系：任天堂持续把 ROM 分发者而非使用者作为民事索赔对象，用高额缺席判决制造寒蝉效应。来源说明：本条依据 Tarnkappe.info、Eurogamer 与 Stevivor 报道，法院判决书全文未公开，赔偿金额与被告身份以报道为准。",
      sources: [
        { title: "Tarnkappe.info: Nintendo gegen Archbox — 4,5 Millionen Dollar wegen Switch-Piraterie", url: "https://tarnkappe.info/artikel/rechtssachen/nintendo-gegen-archbox-45-millionen-dollar-switch-piraterie-333842.html" },
        { title: "Eurogamer: US court orders Redditor to pay Nintendo £3.4m over Switch piracy", url: "https://www.eurogamer.net/nintendo-archbox-reddit-switch-piracy-3-4-million" },
        { title: "Stevivor: Nintendo Of America Secures $4.5 Million Default Judgment Against Reddit Piracy Moderator", url: "https://stevivor.com/news/nintendo-of-america-secures-4-5-million-default-judgment-against-reddit-piracy/" }
      ]
    }
  ]
});
