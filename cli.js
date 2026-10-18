#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// 项目级技能：装进目标项目的 .codex / .claude / .cline 的 skills 目录，而不是全局 ~ 目录。
const src = __dirname;
const target = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

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
