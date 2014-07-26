var fs = require('fs');
var rework = require('rework');
var extend = require('rework-inherit')();
var validator = require('..');

var expect = require('chai').expect;


function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim();
}


function compareFixtures (name) {
    return expect(
        rework(fixture(name))
        .use(validator)
        .use(extend)
        .toString().trim()
    ).to.equal(fixture(name + '.out'));
}


function output (name) {
    return rework(fixture(name))
           .use(validator)
           .use(extend)
           .toString();
}

describe('rework-extend-validator', function () {
    it('test-1', function () {
        //var result = output('test-1');
        var result = function () {
            return rework(fixture(name))
            .use(validator)
            .use(extend)
            .toString();
        };
        // expect(result).to.Throw(Error, 'rework-extend-validator: extended rules have same properties');
        expect(result).to.Throw(Error);
    });

    it('test-2', function () {
        compareFixtures('test-2');
    });
});
