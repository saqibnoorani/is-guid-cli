#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var program = require('commander');
var check_guid_1 = require("check-guid");
clear();
console.log(chalk.blue(figlet.textSync('Is Guid', {
    horizontalLayout: 'full',
    verticalLayout: 'default'
})));
program
    .version('1.0.o')
    .description("Check if the String is Guid (is-guid-cli 'string')")
    .parse(process.argv);
if (program.args.length > 0) {
    var result = check_guid_1.isGuid(program.args[0]);
    result ?
        console.log(chalk.green(program.args[0] + ' is a valid Guid String')) :
        console.log(chalk.red(program.args[0] + ' is an invalid Guid String'));
}
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
