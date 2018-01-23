/**
 * Created by chenxiaopeng on 2018/1/22.
 */
let yym = require('../manager/YYModelManager');
let expect = require('chai').expect;
let fs = require('fs');
let LineByLine = require('./LineReader');

function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

describe('JSONModel 测试', function() {
    it('json 1 基础测试', function () {
        let data = JSON.parse(fs.readFileSync('./resources/json1.json'));
        let jmData = yym.getYYData(data, 'yyModel1', []);
        let hContext = jmData.hContext;
        let mContext = jmData.mContext;
        hContext = hContext.replace(/\s+/g, '');
        mContext = mContext.replace(/\s+/g, '');

        let liner = new LineByLine();

        liner.open('./resources/yyModel/yyModel1.h');
        let theline1;
        while (!liner._EOF) {
            theline1 = liner.next();
            if (theline1 !== undefined) {
                let s = theline1.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(hContext, s)) {
                        expect(hContext).to.contain(s);
                        break;
                    }
                }
            }
        }

        liner.open('./resources/yyModel/yyModel1.m');
        let theline2;
        while (!liner._EOF) {
            theline2 = liner.next();
            if (theline2 !== undefined) {
                let s = theline2.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(mContext, s)) {
                        expect(mContext).to.contain(s);
                        break;
                    }
                }
            }
        }

        expect(true).to.be.ok;
    });

    it('json 2 嵌套测试', function () {
        let data = JSON.parse(fs.readFileSync('./resources/json2.json'));
        let mjData = yym.getYYData(data, 'yyModel2', []);
        let hContext = mjData.hContext;
        let mContext = mjData.mContext;
        hContext = hContext.replace(/\s+/g, '');
        mContext = mContext.replace(/\s+/g, '');

        let liner = new LineByLine();

        liner.open('./resources/yyModel/yyModel2.h');
        let theline1;
        while (!liner._EOF) {
            theline1 = liner.next();
            if (theline1 !== undefined) {
                let s = theline1.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(hContext, s)) {
                        expect(hContext).to.contain(s);
                        break;
                    }
                }
            }
        }

        liner.open('./resources/yyModel/yyModel2.m');
        let theline2;
        while (!liner._EOF) {
            theline2 = liner.next();
            if (theline2 !== undefined) {
                let s = theline2.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(mContext, s)) {
                        expect(mContext).to.contain(s);
                        break;
                    }
                }
            }
        }

        expect(true).to.be.ok;
    });
});