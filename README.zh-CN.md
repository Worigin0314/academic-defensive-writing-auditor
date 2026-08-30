# Academic Defensive Writing Auditor

<p align="center">  
  <a href="./README.md">English</a> ·  
  <b>简体中文</b>  
</p>

<p align="center">  
  <a href="https://www.npmjs.com/package/academic-defensive-writing-auditor"><img src="https://img.shields.io/npm/v/academic-defensive-writing-auditor.svg" alt="npm 版本"></a>  
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="许可证"></a>  
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg" alt="node"></a>  
</p>

一套可复用的 LLM skill 与命令行工具，用来检测**防御性学术写作**：面向审稿人的预先辩解、  
免责声明堆砌、无意义的限定条件堆叠、为不理想结果开脱、为省略的实验辩护，以及 AI 式的自动总结句。

适用于期刊与会议论文、投稿前的 rebuttal 清理，以及稿件润色。

> **它不是"模糊限制词删除器"。**  
> 它会区分必要的科学限定与防御性措辞，而不是一味删掉所有谨慎表达。

## 安装

### 一行命令安装（npx，推荐）

```bash
npx academic-defensive-writing-auditor
```

默认安装到：

```text
./skills/academic-defensive-writing-auditor/
```

也可以指定其他目录：

```bash
npx academic-defensive-writing-auditor --dir ./.agents/skills
```

### 作为 npm 依赖安装

```bash
npm install academic-defensive-writing-auditor
```

然后执行：

```bash
npx defensive-writing-auditor
```

## 命令行参数

```bash
defensive-writing-auditor [options]
```

参数说明：

```text
--dir <path>     skill 安装的父目录
--force          覆盖已存在的安装
--help           查看帮助
--version        查看版本号
```

示例：

```bash
npx academic-defensive-writing-auditor
npx academic-defensive-writing-auditor --dir ./.claude/skills
npx academic-defensive-writing-auditor --dir ./.agents/skills --force
```

## 安装后包含的文件

```text
academic-defensive-writing-auditor/
├── SKILL.md
├── README.md
├── README.zh-CN.md
├── LICENSE
├── examples/
│   └── before-after.md
└── prompts/
    ├── audit-only.md
    └── full-paper-cleanup.md
```

## 快速上手

把安装好的 `SKILL.md` 连同你的论文一起交给 agent，并要求：

```text
只审查这份稿件中的防御性写作。
保留必要的科学限定。
按对审稿人观感的可能影响排序。
```

如果要做全文清理：

```text
使用 Academic Defensive Writing Auditor skill 清理这份稿件。
不要把任何结论的强度提升到超出证据支持的范围。
```

## 防御性写作分类

目前覆盖 14 类模式：

1. 面向审稿人的预先辩解
2. 重复出现的"非主张"免责声明
3. 限定条件堆叠
4. 为不理想结果开脱
5. 为省略的实验辩护
6. "公平性"自我辩护
7. 反复强调初步性 / 范围受限
8. 法律文书式免责表述
9. 无关的防御性披露
10. 用褒义形容词补偿证据不足
11. AI 式自动总结句
12. 证据边界过度声明
13. 绝对化的防御性断言
14. 靠重新贴标签来宣称贡献

完整规则见 [`SKILL.md`](./SKILL.md)（该文件为英文）。

## 示例

改前：

> 尽管提升幅度有限，但考虑到评测设置具有挑战性，该结果仍然令人鼓舞；我们强调，  
> 我们并不主张该方法具备通用鲁棒性。

改后：

> 在所评测的分布偏移下，准确率提升 0.8 个百分点。

如果评测范围有限确实会影响结论的解读，就在 Limitations 部分说明一次即可，不要反复提。

## 仓库结构

```text
academic-defensive-writing-auditor/
├── .github/
│   └── workflows/
│       └── npm-publish.yml
├── bin/
│   └── cli.js
├── examples/
│   └── before-after.md
├── prompts/
│   ├── audit-only.md
│   └── full-paper-cleanup.md
├── .gitignore
├── LICENSE
├── README.md
├── README.zh-CN.md
├── package.json
└── SKILL.md
```

## 参与贡献

欢迎提交 issue 和 pull request。

有价值的贡献包括：

- 新的防御性写作模式；
- 特定学科的正例与反例；
- 误报案例；
- 更完善的"必要限定"判定方法；
- 评测数据集；
- 面向其他 agent 生态的 CLI 适配。

请勿在未经授权的情况下提交受版权保护的论文原文。

## 许可证

MIT。
