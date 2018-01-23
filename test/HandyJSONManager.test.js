/**
 * Created by chenxiaopeng on 2018/1/19.
 */
let hdm = require('../manager/HandyJSONManager');
let expect = require('chai').expect;
let fs = require('fs');
let LineByLine = require('./LineReader');

function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}

describe('HandyJSON 测试', function() {
    it('json 0 基础测试', function() {
        let data = JSON.parse(fs.readFileSync('./test/resources/json0.json'));
        let jmData = hdm.getHdData(data,'Json0',[]);
        jmData = jmData.replace(/\s+/g, '');

        let liner = new LineByLine();

        liner.open( './test/resources/handyJSON/json0.swift' );
        let theline;
        while( !liner._EOF )
        {
            theline = liner.next();
            if (theline !== undefined) {
                let s = theline.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(jmData,s)) {
                        expect(jmData).to.contain(s);
                        break;
                    }
                }
            }
        }
        expect(true).to.be.ok;
    });

    it('json 1 多个 list 测试', function() {
        let data = JSON.parse(fs.readFileSync('./test/resources/json1.json'));
        let jmData = hdm.getHdData(data,'Json1',[]);
        jmData = jmData.replace(/\s+/g, '');

        let liner = new LineByLine();

        liner.open( './test/resources/handyJSON/json1.swift' );
        let theline;
        while( !liner._EOF )
        {
            theline = liner.next();
            if (theline !== undefined) {
                let s = theline.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(jmData,s)) {
                        expect(jmData).to.contain(s);
                        break;
                    }
                }
            }
        }
        expect(true).to.be.ok;
    });

    it('json 2 嵌套测试', function() {
        let data = JSON.parse(fs.readFileSync('./test/resources/json2.json'));
        let jmData = hdm.getHdData(data,'Json2',[]);
        jmData = jmData.replace(/\s+/g, '');

        let liner = new LineByLine();

        liner.open( './test/resources/handyJSON/json2.swift' );
        let theline;
        while( !liner._EOF )
        {
            theline = liner.next();
            if (theline !== undefined) {
                let s = theline.replace(/\s+/g, '');
                if (s !== '') {
                    if (!isContains(jmData,s)) {
                        expect(jmData).to.contain(s);
                        break;
                    }
                }
            }
        }
        expect(true).to.be.ok;
    });

});