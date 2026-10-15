param([string]$Project = ".")

$src = $PSScriptRoot
# 项目级技能：装进目标项目，而不是全局 ~ 目录。默认当前目录，可传 -Project 路径。
$project = (Resolve-Path $Project).Path
$targets = @(
  "$project\.codex\skills\token-nomad",
  "$project\.claude\skills\token-nomad",
  "$project\.cline\skills\token-nomad"
)

foreach ($dest in $targets) {
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Copy-Item -Force "$src\SKILL.md" "$dest\SKILL.md"
  if (Test-Path "$dest\templates") { Remove-Item -Recurse -Force "$dest\templates" }
  Copy-Item -Recurse -Force "$src\templates" "$dest\templates"
  Write-Host "installed -> $dest"
}
