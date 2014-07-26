var rework = require('rework');
var validator = require('./');
var extend = require('rework-inherit')();
var fs = require('fs');

var css = fs.readFileSync('test/fixtures/test-1.css', 'utf-8').trim();

rework(css).use(validator).use(extend).toString();
