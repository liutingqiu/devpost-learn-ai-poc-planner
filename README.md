# Devpost Learn AI: PoC Planner & Interview Studio 🚀🎓

> **Submitted to Devpost • Build With AI: Basics ($2,500 Cash Prize Pool)**  
> **Topic:** AI Best Practices, Proof-of-Concept Scaffolding, and Devpost Learn Skill Pack Integration  
> **Compatible Coding Agents:** Claude Code, Cursor, Codex, OpenHands, Windsurf  
> **Interactive Live Studio:** [https://liutingqiu.github.io/devpost-learn-ai-poc-planner/](https://liutingqiu.github.io/devpost-learn-ai-poc-planner/)  
> **GitHub Repository:** [https://github.com/liutingqiu/devpost-learn-ai-poc-planner](https://github.com/liutingqiu/devpost-learn-ai-poc-planner)  
> **Author & Lead Engineer:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 🌟 Executive Summary & Problem Statement

Anyone who has asked an AI coding agent to generate an entire application has experienced **agent hallucination churn**:
- The model forgets instructions from ten prompts ago;
- Repeats syntactical errors that were already resolved;
- Generates "working" code that neither the user nor the agent can explain or test deterministically.

The root cause is almost always **starting to write code before locking the problem and acceptance criteria**.

**Devpost Learn AI: PoC Planner & Interview Studio** is the dedicated engineering workbench built around the official **Devpost Learn Skill Pack** (`challengepost/learn-ai-basics`):
1. **Interactive Interviewer:** Conducts a structured discovery session (`1-start` $\rightarrow$ `2-plan`) to clarify the user problem and enforce the "One Thing Done End-to-End" principle.
2. **Requirements Locking:** Freezes invariants (`REQ-1` through `REQ-4`) before writing code, preventing scope creep and regression bugs.
3. **Automated Scaffold Synthesis:** Generates TypeScript/ESM boilerplate, strict schema validations, and reproducible Node.js test templates.
4. **Zero-Friction Live Demo:** Deployed as a web companion and CLI runner.

---

## 🛠️ The 5-Step Devpost Learn Workflow

```text
[1-start]  Define Core Idea & Problem Statement
   │
   ▼
[2-plan]   Lock 4 Invariant Requirements & End-to-End Scope (NO CODE YET)
   │
   ▼
[3-build]  Synthesize Typed TypeScript/ESM Core Logic
   │
   ▼
[4-test]   Execute Automated Invariant Tests (100% Pass Rate)
   │
   ▼
[5-submit] Export Pitch Deck & Verified GitHub/Live Artifacts
```

---

## 🧪 Automated Test Verification

```bash
node --test tests/planner.test.js
```

```text
✔ 1. createInterviewSession locks structured requirements and defines scope (0.7ms)
✔ 2. generateScaffold outputs complete architecture markdown and test template (0.2ms)
✔ 3. Rejects invalid or empty inputs gracefully (0.3ms)

ℹ pass 3
ℹ fail 0
```

---

## 🔗 Live Interactive Links

- **Interactive Studio:** [https://liutingqiu.github.io/devpost-learn-ai-poc-planner/](https://liutingqiu.github.io/devpost-learn-ai-poc-planner/)
- **GitHub Repository:** [https://github.com/liutingqiu/devpost-learn-ai-poc-planner](https://github.com/liutingqiu/devpost-learn-ai-poc-planner)
