let path = require("path");
let fs = require('fs');

let jm = {
    execute:function(file_path) {
        let myPath = path.resolve(file_path);

        if (path.extname(myPath) !== '.h' && path.extname(myPath) !== '.swift') {
            console.log('please input a right path');
            return;
        }
        let data = JSON.parse(fs.readFileSync(myPath));
        doData(data,0);
    }
};

doData = (data,index) => {
    if (index === 0) {

    }else  {

    }
    for(let key in data) {
        if (data[key] instanceof Array) {
            doData(data[key][0]);
        } else if (data[key] instanceof Object) {
            doData(data[key]);
        } else if (typeof data[key] === 'string') {
            console.log('string ' + key);
        } else if (typeof data[key] === 'number') {
            console.log('number ' + key);
        }
    }
};

module.exports=jm;