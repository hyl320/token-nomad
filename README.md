> [中文](README.zh.md) · English

# Token Nomad

> **Context-as-Code for token nomads.**
> Keep your project's rules and memory in the repo — not in the chat — so any fresh agent can take over with minimal tokens, no full-repo scan.

Switch AI IDEs / models freely without style drift, lost context, or burning your free quota scanning the whole codebase.

## Why

When you roam between Cursor, Windsurf, Claude Code, Copilot, Cline, Antigravity, and other AI tools, three things break:

1. **Style drift** — the new model rewrites your code and tests its own way.
2. **Lost context** — a fresh agent doesn't know where you left off.
3. **Full-repo scans** — the most expensive habit; a no-context agent reads the whole repo to "understand" it.

Token Nomad fixes this with five Markdown files that act as a **minimal context entry point**.

## The five documents

| File | Role | Answers | Lifecycle |
| --- | --- | --- | --- |
| `PLAN.md` | Master / strategy | **What to build**: goal + per-stage must-complete points | Long-lived |
| `AGENT.md` | Constitution | **How to code**: stack, structure, red lines, golden test | Long-lived |
| `HANDOVER.md` | Workbench | **Where we are**: current 1–3 tasks + checkbox state | Burn after use (<100 lines) |
| `DEVLOG.md` | Archive | **What we learned** (STAR / gotchas) | Append-only |
| `README.md` | Showcase | **Final result**: how to run, numbers | Updated per milestone |

One line: **PLAN sets direction, AGENT sets rules, HANDOVER tracks now, DEVLOG keeps history, README ships the result.**

## Differentiation

Lightweight, token-saving SDD for solo developers — not an enterprise framework.

| Tool | What it is | Difference |
| --- | --- | --- |
| spec-kit / OpenSpec / BMAD | Enterprise spec-driven pipeline | Heavy, token-hungry, team-oriented; Token Nomad is the lean opposite |
| Superpowers | Skill pack (plan / TDD / review) | Full pipeline + AI self-review doubles cost; Token Nomad skips self-review |
| `AGENTS.md` / `.cursorrules` | Single-file "constitution" | Only "how to code"; Token Nomad adds PLAN/HANDOVER/DEVLOG memory + hot/cold split |
| Cline Memory Bank | Multi-file memory | Similar spirit; Token Nomad adds hot window <100 lines + no-scan rule + PLAN master |

## Install

Token Nomad is a single `SKILL.md` (plus `templates/`). Copy it into your agent's skills directory.

**Codex**

```bash
mkdir -p ~/.codex/skills/token-nomad
cp SKILL.md ~/.codex/skills/token-nomad/
cp -R templates ~/.codex/skills/token-nomad/
```

**Claude Code**

```bash
mkdir -p ~/.claude/skills/token-nomad
cp SKILL.md ~/.claude/skills/token-nomad/
cp -R templates ~/.claude/skills/token-nomad/
```

**Cline / Roo Code**

```bash
mkdir -p ~/.cline/skills/token-nomad
cp SKILL.md ~/.cline/skills/token-nomad/
cp -R templates ~/.cline/skills/token-nomad/
```

Or run the installer:

```bash
./install.sh        # macOS / Linux
```

```powershell
.\install.ps1       # Windows (PowerShell)
```

## Quick start

1. Install the skill (above).
2. In a project, tell your agent: `initialize this project with token-nomad`.
3. It generates `PLAN.md`, `AGENT.md`, `HANDOVER.md`, `DEVLOG.md`, `README.md`, plus `.cursorignore` / `.aiignore`.
4. Drive it with four phrases (see [cheatsheet.md](./cheatsheet.md)):

- "Write a PLAN for X, don't write code yet."
- "Extract the current stage into HANDOVER."
- "Do the next task in HANDOVER."
- "Archive this stage to DEVLOG, update README, clear HANDOVER."

## Structure

```text
token-nomad/
├── SKILL.md          # the skill (YAML frontmatter)
├── templates/        # PLAN / AGENT / HANDOVER / DEVLOG + golden tests
├── README.md         # this file
├── README.zh.md      # 中文说明
├── cheatsheet.md     # prompt phrases
├── LICENSE
├── install.sh
└── install.ps1
```

## License

MIT — see [LICENSE](./LICENSE).
