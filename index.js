#!/usr/bin/env node

let program = require('commander');
let jm = require('./JMManager.js');

program
    .version('0.1.0')
    .option('-i, --input <path>', 'input file (include .h .swift)')
    .option('-I, --input <path>', 'input file (include .h .swift)');

program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ jm --help');
    console.log('    $ jm -h');
    console.log('');
});

program.parse(process.argv);

if (program.input) {
    jm.execute(program.input)
}