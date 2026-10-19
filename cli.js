#!/usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

// 项目级 + 全局一起装，agent 目录保持一致（.agents/.codex/.claude/.cline），避免只更新一半。
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

const agents = ['.agents', '.codex', '.claude', '.cline'];

const dests = [];
for (const agent of agents) {
  dests.push(path.join(target, agent, 'skills', 'token-nomad')); // 项目级
  dests.push(path.join(home, agent, 'skills', 'token-nomad'));    // 全局
}

for (const dest of dests) {
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(path.join(src, 'SKILL.md'), path.join(dest, 'SKILL.md'));
  fs.rmSync(path.join(dest, 'templates'), { recursive: true, force: true });
  fs.cpSync(path.join(src, 'templates'), path.join(dest, 'templates'), { recursive: true });
  console.log('installed -> ' + dest);
}
