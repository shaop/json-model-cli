#!/usr/bin/env node

let program = require('commander');
let hjm = require('./manager/HandyJSONManager.js');
let jmm = require('./manager/JSONModelManager.js');
let yym = require('./manager/YYModelManager.js');
let mjm = require('./manager/MJExtensionManager.js');
let path = require('path');
let readline = require('readline');
let colors = require('colors');

function list(val) {
    return val.split(',');
}

program
    .version('0.1.0')
    .option('-i, --input <path>', 'input file (include .h .swift)')
    .option('-I, --input <path>', 'input file (include .h .swift)')
    .option('-e, --except [value]', 'input an array that requires ignore, list by ","', list,[]);

program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    $ jm -i ./test.h -e pic_infos');
    console.log('');
});

program.parse(process.argv);

if (program.input) {
    let myPath = path.resolve(program.input);

    if (path.extname(myPath) === '.swift') {
        // swift 转 HandJson
        hjm.execute(myPath,program.except);
        console.log('\ndone'.blue);

    }else if (path.extname(myPath) === '.h') {
        let rl = readline.createInterface(process.stdin,process.stdout);
        // 1.选择 model 的方法
        let question = '\nwhat is you model? \n';
        let options = '    1.JsonModel\n    2.MJExtension\n    3.YYModel\n'.green;
        let input = 'please input the number (1): > ';
        rl.question(question + options + input,function(answer){
            rl.close();

            // 2.选择添加一个 prefix
            let mrl = readline.createInterface(process.stdin,process.stdout);
            mrl.question('\nadd a prefix? > ', function(prefixAnswer){

                if (answer === '1' || answer === '') {
                    jmm.execute(myPath, prefixAnswer, program.except);
                    console.log('\ndone'.blue);
                }else if (answer === '2') {
                    mjm.execute(myPath, prefixAnswer, program.except);
                    console.log('\ndone'.blue);
                }else if (answer === '3') {
                    yym.execute(myPath, prefixAnswer, program.except);
                    console.log('\ndone'.blue);
                }else {
                    console.log('\nerror: please input right number'.red);
                }
                mrl.close();

            });

        });

    }else {
        console.log('\nerror: please input a right path'.red);
    }

}