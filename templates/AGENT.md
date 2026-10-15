# Project Agent Guidelines (AGENT.md)

> **SYSTEM MANDATE:** You are taking over an existing project. Before proposing or
> writing ANY code, you MUST adhere to the build system, code style, and testing
> patterns below. Do NOT introduce your own stylistic preferences.

> **🗺️ 五文档导航铁律 (AI 必读):**
> 1. `PLAN.md`: 母版 / 战略，总目标与每阶段必完成点（HANDOVER 从这里抽取）。
> 2. `AGENT.md` (本文件): 只读宪法。动笔写代码前必读，严禁 AI 私自修改。
> 3. `HANDOVER.md`: 施工登记表。每次只认领第一个未完成的 `[ ]`，跑通测试后打 `[x]` 并更新交接日志。
> 4. `DEVLOG.md`: 休眠归档库。**日常写代码时严禁读取（节省 Token）！** 仅在“阶段归档”指令时向顶部追加。
> 5. `README.md`: 成果展示。从 PLAN + DEVLOG 拼装，不扫全库。

## 1. Tech Stack & Commands (技术栈与验证命令)

- **Language / Standard:** [填写，如 C++20 / TypeScript 5.x / Python 3.12]
- **Build System:** [填写，如 CMake >= 3.20 / pnpm / poetry]
- **Test Runner:** [填写，如 GoogleTest / Vitest / Pytest]
- **Verify Command:** 每次改完代码必须执行 `[填写，如 cmake --build build -j && ctest --test-dir build --output-on-failure]`，报错自己修好再交差。

## 2. Module & Unit Structure (标准目录结构)

所有新增模块必须严格遵循以下目录结构，禁止随意自创文件夹：

```text
[按项目实际填写，如 C++ 的 include/ src/ tests/，或 TS 的 src/features/[feature]/ __tests__/]
```

## 3. Coding Redlines (代码风格与绝对红线)

- 优先纯函数与组合，保持高内聚低耦合；错误处理统一（如 Result 模式 / 异常约定）。
- **FORBIDDEN (绝对禁令):**
  - 严禁模糊类型（如 TypeScript 的 `any`）。
  - 未经允许严禁擅自安装新的第三方依赖。
  - 修复 Bug 时严禁顺手重构无关代码。

> **C++ 项目额外红线：** 头文件自给自足 + `#pragma once`；禁止头文件 `using namespace std`；禁止裸 `new`/`delete`；析构不抛异常；并发等待用 `while` 防假唤醒。

## 4. Golden Test Pattern (黄金测试标准)

- 遵循 **AAA (Arrange-Act-Assert)**；`EXPECT_*` / `ASSERT_*`（或等价断言）记错继续 / 致命即停。
- 只 Mock 外部 I/O，严禁 Mock 内部纯逻辑。
- 写测试前先读黄金样板：C++ 读 `golden.test.cpp`，TS 读 `golden.test.ts`，严格复刻结构。

## 5. Verification Loop (验证闭环)

写完代码 / 测试后，必须运行上面的 Verify Command（含 sanitizer 构建），全绿才能交差；改完源码必须重新构建再跑，禁止跑旧二进制。
