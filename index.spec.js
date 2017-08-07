const { before, describe, it } = require('mocha');
const { expect } = require('chai');

const del = require('del');
const fs = require('fs-extra');

const inlineResources  = require('./index');

const paths = {
    tmp: 'tmp',
    fixtures: 'fixtures'
};

describe('angular-inline-resource', () => {
    let comp1;
    let comp2;

    before(() => {
        return Promise.resolve()
            .then(() => del(paths.tmp))
            .then(() => fs.copy(paths.fixtures, paths.tmp))
            .then(() => inlineResources(paths.tmp))
            .then(() => {
                comp1 = require('./tmp/component_1.ts');
                comp2 = require('./tmp/component_2.js');
            });
    });

    it('should assign a value to comp1 and comp2', () => {
        expect(comp1).to.be.ok;
        expect(comp2).to.be.ok;
    });

    it('should have replaced property `templateUrl` with property `template`', () => {
        expect(comp1.templateUrl).to.be.undefined;
        expect(comp1.template).to.be.ok;

        expect(comp2.templateUrl).to.be.undefined;
        expect(comp2.template).to.be.ok;
    });

    it('should have replaced property `styleUrls` with property `styles`', () => {
        expect(comp1.styleUrls).to.be.undefined;
        expect(comp1.styles).to.be.ok;

        expect(comp2.styleUrls).to.be.undefined;
        expect(comp2.styles).to.be.ok;
    });

    it('should have expected template content', () => {
        expect(comp1.template).to.equal('<div>Hello ol\' chap!</div> ');
        expect(comp2.template).to.equal('\\1234');
    });

    it('should have expected styles content', () => {
        expect(comp1.styles).to.deep.equal(['@import \'./fakepath\';']);
        expect(comp2.template).to.equal('\\1234');
    });

    after(() => {
        return Promise.resolve()
            .then(() => del(paths.tmp))
    });
});