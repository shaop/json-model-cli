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
    let classNames = [];
    let protocol = [];

    let execute = function(file_path,mprefix, ignore) {
        prefix = mprefix;
        let data = JSON.parse(fs.readFileSync(file_path));

        let context = getJMData(data,path.basename(file_path,'.h'), ignore);

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
     * @param data 文件路径
     * @param className 类名
     * @param ignore 忽略字段
     * @returns {{hContext: string, mContext: string}}
     */
    let getJMData = function(data, className, ignore) {
        res = '';
        impRes = '';
        prefix = '';
        classs = [];
        classNames = [];
        protocol = [];

        doJMData(data, 0, className, ignore);

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
        impRes = '#import "'+className+'.h"\n\n' + impRes;

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
                class_block += '@property (nonatomic, strong) NSArray';
                let x = data[key][0];
                let count = 0;
                // 为 Array 时重复判断内有多少个array
                while (x instanceof Array) {
                    if (!protocol.contains('NSArray')) {
                        protocol.push('NSArray')
                    }
                    class_block += '<NSArray';
                    count ++;
                    x = x[0];
                }

                // 判断各类数据，做不同处理
                if (x instanceof Object) {
                    // 排除出现一样的类名，如果一样，后面加个 X
                    let className = ClassCase(CamelCase(key),prefix);
                    while (classNames.contains(className)) {
                        className = className + 'X';
                    }
                    classNames.push(className);
                    doJMData(x, index + 1, className,ignore);
                    class_block += '<' + className + '>';
                    protocol.push(className);
                }

                for (let i =0; i<count; i++ ){
                    class_block += '>';
                }


                class_block += ' *' + CamelCase(key) +';\n';
            } else if (data[key] instanceof Object) {
                // 排除出现一样的类名，如果一样，后面加个 X
                let className = ClassCase(CamelCase(key));
                while (classNames.contains(className)) {
                    className = className + 'X';
                }
                classNames.push(className);

                doJMData(data[key], index + 1, className, ignore);
                classs.push(className);
                class_block += '@property (nonatomic, strong) ' + className + ' *' + CamelCase(key) +';\n';
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
        execute,
        getJMData
    }
}) ();





module.exports=jmm;