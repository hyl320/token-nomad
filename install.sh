#!/usr/bin/env bash
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# 项目级技能：装进目标项目，而不是全局 ~ 目录。默认当前目录，可传项目路径。
PROJECT="${1:-.}"
PROJECT="$(cd "$PROJECT" && pwd)"

TARGETS=(
  "$PROJECT/.codex/skills/token-nomad"
  "$PROJECT/.claude/skills/token-nomad"
  "$PROJECT/.cline/skills/token-nomad"
)

for dest in "${TARGETS[@]}"; do
  mkdir -p "$dest"
  cp "$SRC/SKILL.md" "$dest/SKILL.md"
  rm -rf "$dest/templates"
  cp -R "$SRC/templates" "$dest/templates"
  echo "installed -> $dest"
done
