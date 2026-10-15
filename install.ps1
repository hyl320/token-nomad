$src = $PSScriptRoot
$targets = @(
  "$HOME\.codex\skills\token-nomad",
  "$HOME\.claude\skills\token-nomad",
  "$HOME\.cline\skills\token-nomad"
)

foreach ($dest in $targets) {
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Copy-Item -Force "$src\SKILL.md" "$dest\SKILL.md"
  if (Test-Path "$dest\templates") { Remove-Item -Recurse -Force "$dest\templates" }
  Copy-Item -Recurse -Force "$src\templates" "$dest\templates"
  Write-Host "installed -> $dest"
}
