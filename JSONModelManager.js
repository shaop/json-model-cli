/**
 * Created by chenxiaopeng on 2018/1/17.
 */
let path = require("path");
let fs = require('fs');
require('./letterTool');

let res = '';
let impRes = '';
let prefix = '';
let classs = [];
let protocol = [];

let jmm = {
    execute:function(file_path,mprefix) {
        prefix = mprefix;

        let data = JSON.parse(fs.readFileSync(file_path));
        doJMData(data, 0, path.basename(file_path,'.h'));

        let header = '#import <JSONModel/JSONModel.h>\n\n';

        // 添加 class 的头
        if (classs.length !== 0) {
            header += '@class';
            for (let index in classs) {
                if (index === '0') {
                    header += ' '+classs[index];
                }else {
                    header += ', '+classs[index];
                }
            }
            header += ';\n';
        }

        // 添加 implement 的头
        if (protocol.length !== 0) {
            header += '@protocol';
            for (let index in protocol) {
                if (index === '0') {
                    header += ' '+protocol[index];
                }else {
                    header += ', '+protocol[index];
                }
            }
            header += ';\n\n';
        }
        res = header + res;

        // 写import
        impRes = '#import "'+path.basename(file_path)+'"\n\n' + impRes;

        // 写入.h
        fs.writeFile(file_path, res, function(err) {
            if (err) {
                return console.error(err);
            }
        });

        // 写入.m
        let mPath = path.resolve('./'+path.basename(file_path,'.h')+'.m');
        fs.writeFile(mPath, impRes, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    }
};

// 操作数据
doJMData = (data,index,className) => {
    let class_block = '@interface ' + className + ' : JSONModel {\n\n';
    for(let key in data) {
        if (data[key] instanceof Array) {
            doJMData(data[key][0], index + 1, ClassCase(key,prefix));
            protocol.push(ClassCase(key));
            class_block += '@property (nonatomic, strong) NSArray<'+ClassCase(key,prefix)+ '> *' + key +';\n';
        } else if (data[key] instanceof Object) {
            doJMData(data[key], index + 1, ClassCase(key,prefix));
            classs.push(ClassCase(key,prefix));
            class_block += '@property (nonatomic, strong) ' + ClassCase(key,prefix) + ' *' + key +';\n';
        } else if (typeof data[key] === 'string') {
            class_block += '@property (nonatomic, strong) NSString' + ' *' + key +';\n';
        } else if (typeof data[key] === 'number') {
            class_block += '@property (nonatomic, strong) NSNumber' + ' *' + key +';\n'
        }
    }
    class_block += '\n@end\n\n';
    res = class_block + res;

    impRes = '@implementation '+ className +'\n\n@end\n\n' + impRes

};

module.exports=jmm;