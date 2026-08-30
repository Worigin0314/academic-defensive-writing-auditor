#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");

const pkg = JSON.parse(
  fs.readFileSync(path.join(packageRoot, "package.json"), "utf8")
);

const SKILL_NAME = "academic-defensive-writing-auditor";

function printHelp() {
  console.log(`
Academic Defensive Writing Auditor

Usage:
  academic-defensive-writing-auditor [options]

Options:
  --dir <path>     Parent directory where the skill will be installed
                   Default: ./skills
  --force          Overwrite an existing installation
  --help, -h       Show this help
  --version, -v    Show version

Examples:
  npx academic-defensive-writing-auditor
  npx academic-defensive-writing-auditor --dir ./.claude/skills
  npx academic-defensive-writing-auditor --dir ./.agents/skills --force
`);
}

function parseArgs(argv) {
  let baseDir = path.resolve(process.cwd(), "skills");
  let force = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }

    if (arg === "--version" || arg === "-v") {
      console.log(pkg.version);
      process.exit(0);
    }

    if (arg === "--force") {
      force = true;
      continue;
    }

    if (arg === "--dir") {
      const value = argv[i + 1];
      if (!value) {
        console.error("Error: --dir requires a path.");
        process.exit(1);
      }
      baseDir = path.resolve(process.cwd(), value);
      i++;
      continue;
    }

    console.error(`Unknown option: ${arg}`);
    printHelp();
    process.exit(1);
  }

  return { baseDir, force };
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);

    if (item.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installSkill(baseDir, force) {
  const targetRoot = path.join(baseDir, SKILL_NAME);

  if (fs.existsSync(targetRoot)) {
    if (!force) {
      console.error(`Skill already exists: ${targetRoot}`);
      console.error("Use --force to overwrite it.");
      process.exit(1);
    }
    fs.rmSync(targetRoot, { recursive: true, force: true });
  }

  fs.mkdirSync(targetRoot, { recursive: true });

  for (const file of ["SKILL.md", "README.md", "README.zh-CN.md", "LICENSE"]) {
    fs.copyFileSync(
      path.join(packageRoot, file),
      path.join(targetRoot, file)
    );
  }

  for (const dir of ["prompts", "examples"]) {
    copyDirectory(
      path.join(packageRoot, dir),
      path.join(targetRoot, dir)
    );
  }

  console.log("");
  console.log("✓ Academic Defensive Writing Auditor installed");
  console.log("");
  console.log(`Location: ${targetRoot}`);
  console.log("");
  console.log("Files:");
  console.log("  SKILL.md");
  console.log("  README.md");
  console.log("  README.zh-CN.md");
  console.log("  LICENSE");
  console.log("  prompts/");
  console.log("  examples/");
  console.log("");
  console.log("Ready to use.");
}

const { baseDir, force } = parseArgs(process.argv.slice(2));
installSkill(baseDir, force);
