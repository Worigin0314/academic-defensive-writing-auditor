# Academic Defensive Writing Auditor

<p align="center">  
  <b>English</b> ·  
  <a href="./README.zh-CN.md">简体中文</a>  
</p>

<p align="center">  
  <a href="https://www.npmjs.com/package/academic-defensive-writing-auditor"><img src="https://img.shields.io/npm/v/academic-defensive-writing-auditor.svg" alt="npm version"></a>  
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license"></a>  
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg" alt="node"></a>  
</p>

A reusable LLM skill and CLI for detecting **defensive academic writing**:  
reviewer-facing prebuttals, disclaimer-heavy prose, unnecessary caveat stacking,  
result excuses, omitted-experiment defenses, and AI-style automatic summaries.

It is designed for research papers, conference submissions, rebuttal cleanup,  
and manuscript polishing.

> **Not a hedge-word remover.**  
> It distinguishes necessary scientific caveats from defensive wording.

## Install

### One-command install with npx (Recommended)

```bash
npx academic-defensive-writing-auditor
```

By default, the skill is copied into:

```text
./skills/academic-defensive-writing-auditor/
```

You can choose another destination:

```bash
npx academic-defensive-writing-auditor --dir ./.agents/skills
```

### Install as an npm dependency

```bash
npm install academic-defensive-writing-auditor
```

Then run:

```bash
npx defensive-writing-auditor
```

## CLI

```bash
defensive-writing-auditor [options]
```

Options:

```text
--dir <path>     Parent directory where the skill will be installed
--force          Overwrite an existing installation
--help           Show CLI help
--version        Show package version
```

Examples:

```bash
npx academic-defensive-writing-auditor
npx academic-defensive-writing-auditor --dir ./.claude/skills
npx academic-defensive-writing-auditor --dir ./.agents/skills --force
```

## What gets installed

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

## Quick Usage

Give your agent the installed `SKILL.md` together with your paper and ask:

```text
Audit this manuscript for defensive writing only.
Preserve necessary scientific caveats.
Rank issues by likely reviewer-perception impact.
```

For a full cleanup:

```text
Use the Academic Defensive Writing Auditor skill to clean this manuscript.
Do not increase any claim beyond the available evidence.
```

## Defensive-writing taxonomy

The skill currently covers 14 patterns:

1. Reviewer-facing prebuttal
2. Repeated non-claim disclaimers
3. Caveat stacking
4. Excusing imperfect results
5. Justifying omitted experiments
6. "Fairness" self-defense
7. Preliminary / limited-scope repetition
8. Legalistic disclaimer prose
9. Irrelevant defensive disclosure
10. Promotional compensation
11. AI-style automatic summary sentences
12. Evidence-boundary over-signaling
13. Absolute defensive claims
14. Contribution-by-relabeling language

See [`SKILL.md`](./SKILL.md) for the complete rules.

## Example

Before:

> Although the improvement is modest, the result remains encouraging given the  
> challenging evaluation setting, and we emphasize that we do not claim universal robustness.

After:

> Accuracy improves by 0.8 points under the evaluated shift.

If limited evaluation scope materially affects interpretation, state that once  
in the Limitations section.

## Repository Structure

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

## Publishing to npm

1. Create an npm account.
2. Log in:

```bash
npm login
```

1. Verify:

```bash
npm whoami
```

1. Check package contents:

```bash
npm pack --dry-run
```

1. Test locally:

```bash
npm pack
mkdir npm-test
cd npm-test
npx ../academic-defensive-writing-auditor-1.0.0.tgz
```

1. Publish:

```bash
npm publish --access public
```

For later releases:

```bash
npm version patch
npm publish --access public
```

## GitHub Actions npm publishing

A basic npm release workflow is included in:

```text
.github/workflows/npm-publish.yml
```

Create an npm automation token and add it to the GitHub repository as:

```text
NPM_TOKEN
```

Then create and push a version tag, for example:

```bash
git tag v1.0.1
git push origin v1.0.1
```

The workflow will publish the package.

## Design Philosophy

Prefer:

```text
claim → evidence → concise boundary
```

over:

```text
anticipated objection → disclaimer → justification → weakened claim
```

The purpose is not to make a paper sound overconfident. The purpose is to make  
the evidence carry the argument.

## Contributing

Issues and pull requests are welcome.

Good contributions include:

- new defensive-writing patterns;
- discipline-specific examples;
- false-positive cases;
- better necessary-caveat tests;
- evaluation datasets;
- CLI integrations for additional agent ecosystems.

Do not submit copyrighted manuscript text without permission.

## License

MIT.
