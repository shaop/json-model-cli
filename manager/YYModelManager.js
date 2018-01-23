/**
 * Created by chenxiaopeng on 2018/1/18.
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

let yym = (function() {
    let res = '';
    let impRes = '';
    let prefix = '';
    let classNames = [];

    let execute = function(file_path, mprefix, ignore) {
        classNames = [];

        prefix = mprefix;
        let data = JSON.parse(fs.readFileSync(file_path));

        let context = getYYData(data, path.basename(file_path,'.h'), ignore);

        // 写入.h
        fs.writeFile(file_path, context.hContext, function (err) {
            if (err) {
                return console.error(err);
            }
        });

        // 写入.m
        let mPath = path.resolve('./' + path.basename(file_path, '.h') + '.m');
        fs.writeFile(mPath, context.mContext, function (err) {
            if (err) {
                return console.error(err);
            }
        });
    };
    /**
     * 获取数据
     * @param data 文件路径
     * @param className 类名
     * @param ignore 忽略文件
     * @returns {{hContext: string, mContext: string}}
     */
    let getYYData = function(data, className, ignore) {
        res = '';
        impRes = '';
        prefix = '';

        doYYData(data, 0, className, ignore);

        let header = '#import <YYModel/YYModel.h>\n\n';
        res = header + res;

        // 写import
        impRes = '#import "' + className + '.h"\n\n' + impRes;

        return {
            hContext: res,
            mContext: impRes,
        }
    };
    /**
     * 计算数据
     * @param data json
     * @param index 第几层
     * @param className 类名
     * @param ignore 忽略文件
     */
    let doYYData = function(data, index, className, ignore) {
        let mapper = []; // 设置 mapper
        let arrayDic = [];

        let class_block = '@interface ' + className + ' : NSObject \n\n';

        // 写参数
        for (let key in data) {
            // 过滤选项
            if (ignore.contains(key)) {
                continue;
            }
            // 先判断是否有特殊符号
            let regExp = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;
            if (regExp.test(key)) {
                mapper.push({key, value: CamelCase(key)});
            }


            if (data[key] instanceof Array) {
                class_block += '@property (nonatomic, strong) NSArray';
                let x = data[key][0];
                let count = 0;
                // 为 Array 时重复判断内有多少个array
                while (x instanceof Array) {
                    class_block += '<NSArray';
                    count ++;
                    x = x[0];
                }

                // 判断各类数据，做不同处理
                if (x instanceof Object) {
                    // 排除出现一样的类名，如果一样，后面加个 X
                    let mclassName = ClassCase(CamelCase(key),prefix);
                    while (classNames.contains(mclassName)) {
                        mclassName = mclassName + 'X';
                    }
                    classNames.push(mclassName);
                    arrayDic.push({key: mclassName, value: CamelCase(key)});
                    doYYData(x, index + 1, mclassName,ignore);
                    class_block += '<' + mclassName + ' *>';
                }

                for (let i =0; i<count; i++ ){
                    class_block += ' *>';
                }

                class_block += ' *' + CamelCase(key) +';\n';
            } else if (data[key] instanceof Object) {
                // 排除出现一样的类名，如果一样，后面加个 X
                let mclassName = ClassCase(CamelCase(key));
                while (classNames.contains(mclassName)) {
                    mclassName = mclassName + 'X';
                }
                classNames.push(mclassName);
                doYYData(data[key], index + 1, ClassCase(CamelCase(key), prefix), ignore);
                class_block += '@property (nonatomic, strong) ' + mclassName + ' *' + CamelCase(key) +';\n';
            } else if (typeof data[key] === 'string') {
                class_block += '@property (nonatomic, copy) NSString' + ' *' + CamelCase(key) + ';\n';
            } else if (typeof data[key] === 'number') {
                if (parseInt(data[key]) === data[key]) {
                    class_block += '@property (nonatomic, assign) int ' + CamelCase(key) + ';\n'
                } else {
                    class_block += '@property (nonatomic, assign) float ' + CamelCase(key) + ';\n'
                }
            } else if (typeof data[key] === 'boolean') {
                class_block += '@property (nonatomic, assign) BOOL ' + CamelCase(key) + ';\n'
            }
        }
        class_block += '\n@end\n\n';
        res = class_block + res;

        // 写.m
        let mimpRes = '@implementation ' + className + '\n';
        // 写映射
        if (mapper.length > 0) {
            mimpRes += '\n+ (NSDictionary *)modelCustomPropertyMapper {\n    return @{';
            for (let i = 0; i < mapper.length; i++) {
                if (i === 0) {
                    mimpRes += '@"' + mapper[i].value + '" : @"' + mapper[i].key + '"';
                } else {
                    mimpRes += ',\n             @"' + mapper[i].value + '" : @"' + mapper[i].key + '"';
                }
            }
            mimpRes += '\n      };\n}\n';
        }

        // 写数组
        if (arrayDic.length > 0) {
            mimpRes += '\n+ (NSDictionary *)modelContainerPropertyGenericClass {\n    return @{';
            for (let i = 0; i < arrayDic.length; i++) {
                if (i === 0) {
                    mimpRes += '@"' + arrayDic[i].value + '" : [' + arrayDic[i].key + ' class]';
                } else {
                    mimpRes += ',\n             @"' + arrayDic[i].value + '" : [' + arrayDic[i].key + ' class]';
                }
            }
            mimpRes += '\n      };\n}\n';
        }

        impRes = mimpRes + '\n@end\n\n' + impRes;
    };

    return {
        execute,
        getYYData
    }
}) ();

module.exports=yym;