#!/usr/bin/env node

const program = require("commander"); // npm i commander -D
const chalk = require("chalk");

const package = require("../package.json");

program.version(package.version);
// .usage("<command> [项目名称]")
// .command("hello", "hell222o")
// .command("init", "init")
// .description(chalk.gray("List all the templates（列出所有模板）"))

// .parse(process.argv);
program.usage("<project-name>").parse(process.argv);

program
  .command("create")
  .action((e) => {
    console.log(e.args);
    console.log(11);
  })
  .parse(process.argv);
