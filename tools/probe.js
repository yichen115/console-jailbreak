/* 探测候选替换链接的可达性 */
"use strict";
const CANDIDATES = [
  "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy",
  "https://www.ice.gov/news/releases/ice-investigation-leads-arrest-2-members-notorious-team-xecuter-videogame-piracy-group",
  "https://torrentfreak.com/nintendo-wins-12-2-million-pirate-store-lawsuit-190917/",
  "https://torrentfreak.com/nintendo-wins-12-2-million-piracy-lawsuit-190917/",
  "https://torrentfreak.com/nintendo-wins-12-2-million-pirate-store-lawsuit-190918/",
  "https://web.archive.org/web/2023/https://torrentfreak.com/nintendo-wins-12-2-million-pirate-store-lawsuit-190917/",
  "https://www.courtlistener.com/docket/16132336/nintendo-of-america-inc-v-uberchips-et-al/",
  "https://nostarch.com/node/260",
  "https://nostarch.com/hacking-xbox",
  "https://nostarch.com/hacking-the-xbox",
  "https://web.archive.org/web/2018/http://www.nostarch.com/xbox.htm",
  "https://web.archive.org/web/2020/https://nostarch.com/node/260",
  "https://playstationdev.wiki/ps1devwiki/index.php?title=Vulnerabilities",
  "http://playstationdev.wiki/ps1devwiki/index.php?title=Vulnerabilities",
  "https://psx-spx.consoledev.net/",
  "https://github.com/brad-lin/FreePSXBoot",
  "https://swarm.ptsecurity.com/xbox-360-security-in-details-the-long-way-to-rgh3/",
  "https://arstechnica.com/gaming/2018/04/the-unpatchable-exploit-that-makes-every-current-nintendo-switch-hackable/"
];

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function probe(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const res = await fetch(url, {
        method,
        redirect: "follow",
        headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9" },
        signal: AbortSignal.timeout(20000),
      });
      if (method === "HEAD" && [403, 405, 400, 501, 503].includes(res.status)) continue;
      return `${res.status} ${res.url !== url ? "-> " + res.url : ""}`;
    } catch (e) {
      if (method === "GET") return (e.name === "TimeoutError" ? "TIMEOUT" : e.name + " " + (e.cause && e.cause.code || e.message));
    }
  }
  return "?";
}

for (const u of CANDIDATES) {
  const r = await probe(u);
  console.log(String(r).padEnd(30) + " " + u);
}
