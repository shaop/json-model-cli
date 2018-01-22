let path = require("path");
let fs = require('fs');
require('./../tool/letterTool');


Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] === needle) return true;
    }
    return false;
};

let hjm = (function() {
    let res = '';
    let classNames = [];

    let execute = function(file_path,ignore) {
        let data = JSON.parse(fs.readFileSync(file_path));
        let content = getHdData(data, ClassCase(path.basename(file_path,'.swift')), ignore); // 获取需要写入的数据

        // console.log(content);
        fs.writeFile(file_path, content, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    };
    /**
     * 获取数据
     * @param data 文件路径
     * @param ignore 忽略文件
     * @param className 类名
     * @returns {string}
     */
    let getHdData = function(data,className,ignore) {
        doHdData(data, 0, className ,ignore);
        res = 'import HandyJSON\n\n' + res;
        return res;
    };
    /**
     * 计算数据
     * @param data json
     * @param index 第几层
     * @param className 类名
     * @param ignore 忽略文件
     */
    let doHdData = function(data,index,className,ignore) {
        let mapper = []; // 设置 mapper

        let class_block = 'class ' + className + ': HandyJSON {\n\n';
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
                class_block += '   var '+CamelCase(key)+': Array';
                let x = data[key][0];
                let count = 0;
                // 为 Array 时重复判断内有多少个array
                while (x instanceof Array) {
                    class_block += '<Array';
                    count ++;
                    x = x[0];
                }

                // 判断各类数据，做不同处理
                if (x instanceof Object) {
                    // 排除出现一样的类名，如果一样，后面加个 X
                    let className = ClassCase(CamelCase(key));
                    while (classNames.contains(className)) {
                        className = className + 'X';
                    }
                    classNames.push(className);
                    doHdData(x, index + 1, className,ignore);
                    class_block += '<' + className + '>';
                } else if (typeof x === 'string') {
                    class_block += '<String>';
                } else if (typeof x === 'number') {
                    if(parseInt(x)===x) {
                        class_block += '<Int>';
                    } else {
                        class_block += '<Float>';
                    }
                } else if (typeof x === 'boolean') {
                    class_block += '<Bool>';
                } else {
                    class_block += '<Any>';
                }

                for (let i =0; i<count; i++ ){
                    class_block += '>';
                }

                class_block += '?\n';

            } else if (data[key] instanceof Object) {
                // 排除出现一样的类名，如果一样，后面加个 X
                let className = ClassCase(CamelCase(key));
                while (classNames.contains(className)) {
                    className = className + 'X';
                }
                classNames.push(className);

                doHdData(data[key], index + 1, className ,ignore);
                class_block += '   var '+CamelCase(key)+': ' + className + '?\n';
            } else if (typeof data[key] === 'string') {
                class_block += '   var '+CamelCase(key)+': String?\n';
            } else if (typeof data[key] === 'number') {
                if(parseInt(data[key])===data[key]) {
                    class_block += '   var '+CamelCase(key)+': Int?\n';
                }else {
                    class_block += '   var '+CamelCase(key)+': Float?\n';
                }
            } else if (typeof data[key] === 'boolean') {
                class_block += '   var '+CamelCase(key)+': Bool?\n';
            } else {
                class_block += '   var '+CamelCase(key)+': Any?\n';
            }
        }

        class_block += '\n   required init() {} \n';
        // 写映射
        if (mapper.length > 0) {
            class_block += '\n   func mapping(mapper: HelpingMapper) {\n\n';
            for (let index in mapper) {
                class_block += '        mapper <<<\n            self.' + mapper[index].value + ' <-- "' + mapper[index].key+'"\n\n';
            }
            class_block += '    }\n';
        }

        class_block += '}\n\n';

        res = class_block + res;
    };

    return {
        execute,
        getHdData,
    }
}) ();


module.exports=hjm;