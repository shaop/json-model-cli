/**
 * Created by chenxiaopeng on 2018/1/17.
 */

// 首字母大写
ClassCase = (str, prefix) => {
    if (prefix === undefined) {
        prefix = '';
    }
    str = prefix + str[0].toUpperCase() + str.substring(1, str.length);
    return str;
};

CamelCase = (string) => {
    let re=/-(\w)|_(\w)/g;
    return string.replace(re,function (all){
        return all[1].toUpperCase();
    });
};