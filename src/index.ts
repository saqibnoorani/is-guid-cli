#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const program = require('commander');
import {isGuid} from 'check-guid'
clear();
console.log( 
  chalk.blue(
    figlet.textSync('Is Guid', {
      horizontalLayout: 'full',
      verticalLayout: 'default'
    })
  )
);
program
  .version('1.0.0')
  .description("Check if the String is Guid (is-guid-cli 'string')")
  .parse(process.argv);

if (program.args.length > 0) {
 const result =  isGuid(program.args[0]);
 result ?
 console.log(chalk.green(program.args[0] + ' is a valid Guid String.')):
 console.log(chalk.red(program.args[0] + ' is an invalid Guid String.'));
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
