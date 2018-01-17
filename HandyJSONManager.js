let path = require("path");
let fs = require('fs');
require('./letterTool');

let res = '';

Array.prototype.contains = function ( needle ) {
    for (i in this) {
        if (this[i] === needle) return true;
    }
    return false;
};

let hjm = {
    execute:function(file_path,ignore) {
        let data = JSON.parse(fs.readFileSync(file_path));

        doHdData(data, 0, ClassCase(path.basename(file_path,'.swift')),ignore);
        res = 'import HandyJSON\n\n' + res;

        // console.log(res);
        fs.writeFile(file_path, res, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    }
};

doHdData = (data,index,className) => {
    doHdData(data,index,className,[])
};


doHdData = (data,index,className,ignore) => {
    let mapper = []; // 设置 mapper

    let class_block = 'Class ' + className + ': HandyJSON {\n\n';
    for(let key in data) {
        // 过滤选项
        if (ignore.contains(key)) {
            continue;
        }

        let regExp = /((?=[\x21-\x7e]+)[^A-Za-z0-9])/;
        if (regExp.test(key)) {
            mapper.push({key,value:CamelCase(key)});
        }

        if (data[key] instanceof Array) {
            doHdData(data[key][0], index + 1, ClassCase(key),ignore);
            class_block = class_block + '   var '+CamelCase(key)+': Array<' + ClassCase(CamelCase(key)) + '>?\n';
        } else if (data[key] instanceof Object) {
            doHdData(data[key], index + 1, ClassCase(key),ignore);
            class_block = class_block + '   var '+CamelCase(key)+': ' + ClassCase(CamelCase(key)) + '?\n';
        } else if (typeof data[key] === 'string') {
            class_block = class_block + '   var '+CamelCase(key)+': String?\n';
        } else if (typeof data[key] === 'number') {
            if(parseInt(data[key])===data[key]) {
                class_block = class_block + '   var '+CamelCase(key)+': Int?\n';
            }else {
                class_block = class_block + '   var '+CamelCase(key)+': Float?\n';
            }
        }
    }
    class_block = class_block + '\n   required init() {} \n';
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

module.exports=hjm;