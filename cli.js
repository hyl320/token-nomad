#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// 项目级技能：装进目标项目的 .codex / .claude / .cline 的 skills 目录，而不是全局 ~ 目录。
const src = __dirname;
const explicit = process.argv[2];
const target = explicit ? path.resolve(explicit) : process.cwd();

if (!explicit) {
  console.log('未指定项目路径，将安装到当前目录：' + target);
  console.log('如果这不是你的项目根目录，请改成：npx @hyl320/token-nomad /path/to/project');
}
console.log('目标项目：' + target);

const dests = [
  path.join(target, '.codex', 'skills', 'token-nomad'),
  path.join(target, '.claude', 'skills', 'token-nomad'),
  path.join(target, '.cline', 'skills', 'token-nomad'),
];

for (const dest of dests) {
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(src, 'SKILL.md'), path.join(dest, 'SKILL.md'));
  fs.rmSync(path.join(dest, 'templates'), { recursive: true, force: true });
  fs.cpSync(path.join(src, 'templates'), path.join(dest, 'templates'), { recursive: true });
  console.log('installed -> ' + dest);
}
