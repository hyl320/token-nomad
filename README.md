<p align="center">
  <a href="#english">English</a> · <a href="#zh">中文</a>
</p>

<a id="english"></a>

# Token Nomad

> **Context-as-Code for token nomads.**
> Keep your project's rules and memory in the repo — not in the chat — so any fresh agent can take over with minimal tokens, no full-repo scan.

Switch AI IDEs / models freely without style drift, lost context, or burning your free quota scanning the whole codebase.

> **For developers whose requirements can't be captured in one sentence, who must answer for their code, and who can't afford to burn tokens — a minimal workflow that keeps context in the repo.**
> If one sentence can describe the task, an agent handles it directly. You need this only when one sentence isn't enough.

> **Project-level skill, not global.** Token Nomad manages one project's context files and installs into that project's `.codex/skills/`, `.claude/skills/`, and `.cline/skills/` directories — not your global `~` skills directory.

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

Token Nomad is a **project-level skill**, not a global one: it manages one project's context files, so install it into the project you want to manage.

**npx (recommended):**

```bash
npx @hyl320/token-nomad                        # install into current directory
npx @hyl320/token-nomad /path/to/your-project  # install into a specific project
```

This copies `SKILL.md` + `templates/` into the project's `.codex/skills/token-nomad/`, `.claude/skills/token-nomad/`, and `.cline/skills/token-nomad/`.

**Manual copy:**

macOS / Linux:

```bash
mkdir -p /path/to/your-project/.claude/skills/token-nomad
cp -R SKILL.md templates /path/to/your-project/.claude/skills/token-nomad/
```

Windows (PowerShell):

```powershell
$dest = "C:\path\to\project\.claude\skills\token-nomad"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Copy-Item -Recurse SKILL.md, templates $dest
```

Same pattern for Codex (`.codex/skills/`) and Cline (`.cline/skills/`).

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
├── cli.js            # npx installer
├── package.json
├── templates/        # PLAN / AGENT / HANDOVER / DEVLOG + golden tests
├── README.md         # this file (English + 中文)
├── PHILOSOPHY.md     # why it's designed this way
├── cheatsheet.md     # prompt phrases
└── LICENSE
```

## License

MIT — see [LICENSE](./LICENSE).

---

<a id="zh"></a>

# Token Nomad — 跨 AI IDE 的规范化开发工具包（Context-as-Code）

> 一句话：**把规范和记忆写进仓库，而不是让每个新 agent 去扫全库。**
> 用 5 个 Markdown 文件 + 1 个 Skill，让多个 agent / 多个模型 / 多个 IDE 零失忆接手大型项目，同时把 Token 花在刀刃上。

> **给“一句话说不清、又必须对自己代码负责、还花不起 token”的开发者，一套把上下文落进仓库的最小工作流。**
> 一句话能说清的需求，agent 直接搞定；一句话说不清的需求，才需要这套东西。

> **这是项目级技能，不是全局技能。** 它作用于单个项目，生成并维护该项目根目录下的五文档；安装到目标项目的 `.codex/skills/` / `.claude/skills/` / `.cline/skills/` 下，而不是全局 `~` 目录。

## 它解决什么问题（为什么省 Token）

在多个 AI IDE / 大模型之间切换时，最怕三件事：

1. **风格漂移**：换模型后代码 / 测试风格全变，项目变“缝合怪”。
2. **上下文断片**：功能写一半换环境，新模型不知道卡在哪。
3. **全库扫描**：没上下文的新 agent 为了“了解项目”把整个仓库读一遍——最烧钱、又最没必要。

核心原则是 **Context-as-Code（上下文即代码）**：给每个新 agent 一个**最小上下文入口**（只读入口文件，按需读相关文件），而不是把整个仓库塞进上下文。

## 差异化（和现有工具的区别）

定位：**极简、省 Token 的个人 / 独立开发者 SDD，不是企业级框架。**

| 工具 / 方案 | 它是什么 | 和本 skill 的区别 |
| --- | --- | --- |
| spec-kit / OpenSpec / BMAD | 企业级 Spec-Driven 流水线 | 重、烧 Token、给团队汇报用；本 skill 反其道极简省钱 |
| Superpowers | 一套技能（plan / TDD / review） | 触发走全套 + AI 互审，双倍扣费；本 skill 不搞 AI 自我审查 |
| `AGENTS.md` / `CLAUDE.md` / `.cursorrules` | 单文件“项目宪法”约定 | 它们只管“怎么写代码”；本 skill 多了 PLAN/HANDOVER/DEVLOG 记忆管理 + 冷热分离 |
| Cline Memory Bank | 多文档记忆（techContext / systemPatterns / activeContext） | 思路相近；本 skill 强调热窗口 <100 行 + 禁止扫库 + PLAN 母版 |

## 五个文档的分工（PLAN 是母版）

| 文件 | 角色 | 回答什么问题 | 谁读 / 谁写 | 生命周期 |
| --- | --- | --- | --- | --- |
| `PLAN.md` | 🎯 母版 / 战略 | **要做什么**：总目标 + 每阶段必完成点 | 聪明大模型写，你拍板 | 长期，几乎不动 |
| `AGENT.md` | 🏛️ 宪法 | **怎么写**：代码规范、目录、测试样板 | 你 + 大模型写，所有 agent 只读 | 长期 |
| `HANDOVER.md` | 🔥 施工登记表 | **做到哪了**：当前 1~3 任务 + 状态 | 规划 agent 抽，小模型打勾 | 用完即焚 |
| `DEVLOG.md` | 🏆 功劳簿 | 过程复盘（STAR / 踩坑） | 归档 agent 只写不读 | 长期，只追加 |
| `README.md` | 📦 成果展示 | 最终是什么 / 怎么跑 / 数字 | 成熟模型拼小文档 | 长期，阶段末更新 |

一句话分工：**PLAN 定方向，AGENT 定规矩，HANDOVER 管当下，DEVLOG 记过程，README 交成果。**

## 谁来写哪个文件（模型分配）

| 文件 | 用什么模型 | 说明 |
| --- | --- | --- |
| `PLAN.md` | 高级大模型 | 方向由你控制；这是唯一真正“烧 Token”的地方，但只做一次 |
| `AGENT.md` | 大模型 + 你自己 | 你是拍板人，写死红线 |
| `HANDOVER.md` | 小模型（便宜的） | 只从 PLAN 抽当前阶段 + 打勾，不需要聪明 |
| `DEVLOG.md` | 中 / 大模型 | 里程碑收尾时一次性写 |
| `README.md` | 成熟大模型 | 读 PLAN + DEVLOG + AGENT 拼装，**不扫全库** |

## 完整使用流程

### 第 0 步 · 初始化（只做一次）

把 skill 装进项目后，说“用 token-nomad 初始化”。它会扫描 `CMakeLists.txt` / `package.json`，生成 5 个文档 + `.cursorignore` / `.aiignore`。

### 第 1 步 · 写 PLAN（聪明大模型 + 你控制方向）

写 `PLAN.md`：一句话目标、非目标、路线图，并**把每个阶段的必完成点 / 测试点 / 验收门禁写到能直接拆任务的程度**。这是全流程唯一需要聪明模型 + 你的地方，做完冻结。

### 第 2 步 · 抽 HANDOVER（规划 agent）

规划 agent 只读 `PLAN.md` 当前阶段 → 抽成 `<100 行` 的 `HANDOVER.md`。**这里不扫库，只读 PLAN。**

### 第 3 步 · 干活（小模型）

小模型读 `AGENT.md` + `HANDOVER.md` → 只做第一个 `[ ]` → 写代码 + 测试 → 跑绿 → 打 `[x]` → 更新交接日志。每轮只读几十行。

### 第 4 步 · 收尾（归档 agent）

阶段全绿 → 按 STAR 复盘追加进 `DEVLOG.md` → 更新 `README.md` 对应小节 → 清空 `HANDOVER.md` → 读 `PLAN.md` 下一阶段。

```text
聪明模型：写 PLAN（含每阶段必完成点）      ← 只一次，够细所以不用扫代码
    ↓
规划 agent：读 PLAN 当前阶段 → 抽 HANDOVER  ← 只读 PLAN，不扫代码
    ↓
小模型：读 HANDOVER → 做一个 [ ] → 打 [x]   ← 每轮只读几十行
    ↓
归档 agent：DEVLOG + 更新 README → 清 HANDOVER → 下一阶段
```

## 下载与安装

Token Nomad 是**项目级技能（非全局）**：安装 = 把 `SKILL.md` + `templates/` 放进目标项目的技能目录。

**方式一：npx（推荐）**

```bash
npx @hyl320/token-nomad                      # 装进当前目录
npx @hyl320/token-nomad /path/to/项目        # 装进指定项目
```

会自动把 `SKILL.md` + `templates/` 装进项目的 `.codex/skills/token-nomad/`、`.claude/skills/token-nomad/`、`.cline/skills/token-nomad/`。

**方式二：手动复制**

Windows（PowerShell）：

```powershell
$dest = "C:\path\to\project\.claude\skills\token-nomad"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
Copy-Item -Recurse SKILL.md, templates $dest
```

macOS / Linux：

```bash
mkdir -p /path/to/your-project/.claude/skills/token-nomad
cp -R SKILL.md templates /path/to/your-project/.claude/skills/token-nomad/
```

## 套用已有项目的步骤

1. 复制 `templates/` 下 5 个模板 + 忽略配置到项目根目录，替换占位符。
2. 把黄金测试样板放进 `tests/` 或 `src/examples/`，并在 `AGENT.md` 里指向它。
3. 安装（项目级，非全局）：见上方【下载与安装】。
4. 按上面“四步流程”推进，用 [cheatsheet.md](./cheatsheet.md) 里的暗号驱动。

## C++ / GoogleTest 版本

C++ 项目直接用 `templates/` 下的 `AGENT.md`（内嵌 C++ 红线）+ `golden.test.cpp`（GoogleTest 样板）；`PLAN.md`、`HANDOVER.md`、`DEVLOG.md` 与语言无关。

## 多 IDE 兼容

核心规范只维护一份 `AGENT.md`（唯一真实数据源），再用各家 IDE 专属文件“套壳引用”它：

| 工具 / IDE | 自动读取的默认文件 | 兼容写法 |
| --- | --- | --- |
| Cursor | `.cursor/rules/*.mdc` 或 `.cursorrules` | `Always read and strictly follow the rules in @AGENT.md before writing any code.` |
| Windsurf | `.windsurfrules` | `CRITICAL: Read AGENT.md in the root directory first.` |
| Claude Code (CLI) | `CLAUDE.md` | `See @AGENT.md for project architecture, coding standards, and testing mandates.` |
| GitHub Copilot | `.github/copilot-instructions.md` | 复制 `AGENT.md` 内容或 `ln -s AGENT.md` |
| Cline / Roo Code | `.clinerules` | 一行指令指向 `AGENT.md` 或软链接同步 |

Mac/Linux 偷懒绝招：`ln -s AGENT.md .cursorrules` + `ln -s AGENT.md .windsurfrules`，改一个文件所有 IDE 同时生效。

## 三不原则（极致瘦身）

1. **不写自然语言小作文**：能用代码路径和符号表达的，绝不用中文造句（`src/auth/ -> pure fn + vitest`）。
2. **不搞 AI 自我审查**：别让另一个 AI 审前一个 AI（双倍扣费），最好的审查员是免费的本地终端（`npm run test` / `tsc` / `ctest`）。
3. **小功能不拆太细**：只有跨多文件或额度快见底的大模块才动用 `HANDOVER.md` 详细拆解，平时一句“照 `@AGENT.md` 把 XX 改了”。

## 目录结构

```text
token-nomad/
├── SKILL.md          # 技能本体（YAML frontmatter）
├── cli.js            # npx 安装器
├── package.json
├── templates/        # PLAN / AGENT / HANDOVER / DEVLOG + 黄金测试样板
├── README.md         # 本文件（英文 + 中文）
├── PHILOSOPHY.md     # 设计哲学（为什么这么设计）
├── cheatsheet.md     # 咒语速查卡
└── LICENSE
```
