#!/usr/bin/env bash
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGETS=(
  "$HOME/.codex/skills/token-nomad"
  "$HOME/.claude/skills/token-nomad"
  "$HOME/.cline/skills/token-nomad"
)

for dest in "${TARGETS[@]}"; do
  mkdir -p "$dest"
  cp "$SRC/SKILL.md" "$dest/SKILL.md"
  rm -rf "$dest/templates"
  cp -R "$SRC/templates" "$dest/templates"
  echo "installed -> $dest"
done
