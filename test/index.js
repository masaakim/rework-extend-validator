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
        .use(extend)
        .use(validator)
        .toString().trim()
    ).to.equal(fixture(name + '.out'));
}


function output (name) {
    return rework(fixture(name))
           .use(extend)
           .use(validator)
           .toString();
}

describe('test-1', function () {
    var result = output('test-1');

    expect(result).to.Throw(Error, 'rework-extend-validator: extended rules have same properties');
});
