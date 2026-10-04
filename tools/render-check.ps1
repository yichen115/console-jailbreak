# 用无头 Chrome 验证页面能否正确渲染（不依赖人工开浏览器）
# 用法: pwsh -File tools/render-check.ps1
param(
  [string]$Root = (Split-Path -Parent $PSScriptRoot),
  [int]$Width = 1500,
  [int]$Height = 2600
)

$chrome = @(
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

if (-not $chrome) { throw "找不到 Chrome/Edge" }
Write-Host "浏览器: $chrome`n"

$pages = @("index.html", "cve.html", "xbox.html", "switch.html", "playstation.html") +
         (Get-ChildItem (Join-Path $Root "console") -Filter *.html -ErrorAction SilentlyContinue |
          Sort-Object Name | ForEach-Object { "console\" + $_.Name })
$outDir = Join-Path $Root "tools\shots"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$tmp = Join-Path $env:TEMP ("cj-profile-" + [guid]::NewGuid().ToString("N").Substring(0, 8))

foreach ($p in $pages) {
  $file = Join-Path $Root $p
  if (-not (Test-Path $file)) { Write-Host "跳过（不存在）: $p"; continue }
  $uri = "file:///" + ($file -replace '\\', '/')

  # 1) DUMP DOM -> 统计渲染出的卡片数量
  $dom = & $chrome --headless=new --disable-gpu --no-sandbox --allow-file-access-from-files `
    --user-data-dir="$tmp" --virtual-time-budget=6000 --dump-dom $uri 2>$null

  $html = ($dom -join "`n")
  $events = ([regex]::Matches($html, 'class="event ')).Count
  $blocks = ([regex]::Matches($html, 'class="console-block"')).Count
  $chips = ([regex]::Matches($html, 'class="console-chip"')).Count
  $srcs = ([regex]::Matches($html, 'target="_blank"')).Count
  $stat = if ($html -match 'data-stat="events">(\d+)<') { $matches[1] } else { "?" }

  $flag = if ($events -gt 0) { "OK  " } else { "FAIL" }
  Write-Host ("[{0}] {1,-18} 机型块 {2,2} | 事件卡 {3,4} | 索引项 {4,2} | 外链 {5,4} | 统计事件数 {6}" -f $flag, $p, $blocks, $events, $chips, $srcs, $stat)

  # 2) 截图
  $png = Join-Path $outDir ($p -replace '\.html$', '.png')
  & $chrome --headless=new --disable-gpu --no-sandbox --allow-file-access-from-files `
    --hide-scrollbars --user-data-dir="$tmp" --virtual-time-budget=6000 `
    --window-size="$Width,$Height" --screenshot="$png" $uri 2>$null | Out-Null
  if (Test-Path $png) { Write-Host ("        截图 -> {0} ({1:N0} KB)" -f $png, ((Get-Item $png).Length / 1KB)) }
}

Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
Write-Host "`n完成。截图目录: $outDir"
