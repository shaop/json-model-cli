/**
 * Created by chenxiaopeng on 2018/1/17.
 */
let path = require("path");
let fs = require('fs');
require('./../tool/letterTool');

Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] === needle) return true;
    }
    return false;
};

let jmm = (function() {
    let res = '';
    let impRes = '';
    let prefix = '';
    let classs = [];
    let protocol = [];

    let execute = function(file_path,mprefix, ignore) {
        prefix = mprefix;
        let context = getJMData(file_path, ignore);

        // 写入.h
        fs.writeFile(file_path, context.hContext, function(err) {
            if (err) {
                return console.error(err);
            }
        });

        // 写入.m
        let mPath = path.resolve('./'+path.basename(file_path,'.h')+'.m');
        fs.writeFile(mPath, context.mContext, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    };

    /**
     * 获取 jsonModel 数据
     * @param file_path 文件路径
     * @param ignore 忽略字段
     * @returns {{hContext: string, mContext: string}}
     */
    let getJMData = function(file_path, ignore) {
        let data = JSON.parse(fs.readFileSync(file_path));
        doJMData(data, 0, path.basename(file_path,'.h'), ignore);

        let header = '#import <JSONModel/JSONModel.h>\n\n';


        // 添加 class 的头
        if (classs.length !== 0) {
            header += '@class';
            for(let i = 0; i < classs.length; i ++){
                if (i === 0) {
                    header += ' '+classs[i];
                }else {
                    header += ', '+classs[i];
                }
            }
            header += ';\n';
        }

        // 添加 implement 的头
        if (protocol.length !== 0) {
            header += '@protocol';
            for (let i = 0; i < protocol.length; i ++) {
                if (i === 0) {
                    header += ' '+protocol[i];
                }else {
                    header += ', '+protocol[i];
                }
            }
            header += ';\n\n';
        }
        res = header + res;

        // 写import
        impRes = '#import "'+path.basename(file_path)+'"\n\n' + impRes;

        return {
            hContext: res,
            mContext: impRes,
        }

    };

    /**
     * 操作数据
     * @param data json
     * @param index 第几层
     * @param className 类名
     * @param ignore 忽略字段
     */
    let doJMData = function(data,index,className,ignore) {
        let mapper = []; // 设置 mapper

        let class_block = '@interface ' + className + ' : JSONModel \n\n';
        // 写参数
        for(let key in data) {
            // 过滤选项
            if (ignore.contains(key)) {
                continue;
            }
            // 先判断是否有特殊符号
            let regExp = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;
            if (regExp.test(key)) {
                mapper.push({key,value:CamelCase(key)});
            }

            if (data[key] instanceof Array) {
                if (data[key][0] instanceof Object) {
                    doJMData(data[key][0], index + 1, ClassCase(CamelCase(key),prefix), ignore);
                    protocol.push(ClassCase(CamelCase(key)));
                    class_block += '@property (nonatomic, strong) NSArray<'+ClassCase(CamelCase(key),prefix)+ '> *' + CamelCase(key) +';\n';
                }else {
                    class_block += '@property (nonatomic, strong) NSArray *' + CamelCase(key) +';\n';
                }
            } else if (data[key] instanceof Object) {
                doJMData(data[key], index + 1, ClassCase(CamelCase(key),prefix), ignore);
                classs.push(ClassCase(CamelCase(key),prefix));
                class_block += '@property (nonatomic, strong) ' + ClassCase(CamelCase(key),prefix) + ' *' + CamelCase(key) +';\n';
            } else if (typeof data[key] === 'string') {
                class_block += '@property (nonatomic, copy) NSString' + ' *' + CamelCase(key) +';\n';
            } else if (typeof data[key] === 'number') {
                class_block += '@property (nonatomic, strong) NSNumber' + ' *' + CamelCase(key) +';\n'
            } else if (typeof data[key] === 'boolean') {
                class_block += '@property (nonatomic, assign) BOOL' + ' ' + CamelCase(key) +';\n'
            }
        }
        class_block += '\n@end\n\n';
        res = class_block + res;

        // 写 .m
        let mimpRes = '@implementation '+ className + '\n';
        // 写映射
        if (mapper.length > 0) {
            mimpRes  += '\n+ (JSONKeyMapper *)keyMapper{\n      return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:@{\n';
            for (let i = 0; i < mapper.length; i ++) {
                if (i === 0){
                    mimpRes  += '         @"' + mapper[i].value + '" : @"' + mapper[i].key+'"';
                }else {
                    mimpRes  += ',\n         @"' + mapper[i].value + '" : @"' + mapper[i].key+'"';
                }
            }
            mimpRes += '\n      }];\n}\n';
        }
        impRes = mimpRes + '\n@end\n\n' + impRes;

    };

    return {
        execute
    }
}) ();





module.exports=jmm;