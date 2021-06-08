#!/usr/bin/env node

const program = require("commander");
const path = require("path");
const chalk = require("chalk");
const log = console.log;

const download = require("../lib/download");

program.usage("<project-name>").parse(process.argv);

// 根据输入，获取项目名称
let projectName = program.args[0];

if (!projectName) {
  // project-name 必填
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  log(chalk.red("项目名必填"));

  program.help();
  return;
}

let rootName = path.basename(process.cwd());

go();

function go() {
  // 预留，处理子命令

  console.log("开搞");
  console.log(path.resolve(process.cwd(), path.join("."), rootName));

  download(projectName)
    .then((target) => console.log(target))
    .catch((err) => console.log(err));
}
