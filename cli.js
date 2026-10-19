#!/usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

// 项目级 + 全局一起装，保证两边都更新。
const src = __dirname;
const explicit = process.argv[2];
const target = explicit ? path.resolve(explicit) : process.cwd();
const home = os.homedir();

if (!explicit) {
  console.log('未指定项目路径，项目级将装到当前目录：' + target);
  console.log('如果这不是你的项目根目录，请改成：npx @hyl320/token-nomad /path/to/project');
}
console.log('项目目录：' + target);
console.log('全局目录：' + home);

const dests = [
  // 项目级
  path.join(target, '.codex', 'skills', 'token-nomad'),
  path.join(target, '.claude', 'skills', 'token-nomad'),
  path.join(target, '.cline', 'skills', 'token-nomad'),
  // 全局
  path.join(home, '.agents', 'skills', 'token-nomad'),
  path.join(home, '.codex', 'skills', 'token-nomad'),
  path.join(home, '.claude', 'skills', 'token-nomad'),
  path.join(home, '.cline', 'skills', 'token-nomad'),
];

for (const dest of dests) {
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(src, 'SKILL.md'), path.join(dest, 'SKILL.md'));
  fs.rmSync(path.join(dest, 'templates'), { recursive: true, force: true });
  fs.cpSync(path.join(src, 'templates'), path.join(dest, 'templates'), { recursive: true });
  console.log('installed -> ' + dest);
}
