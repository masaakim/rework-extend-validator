var validator = require('./');
var rework = require('rework');
var extend = require('rework-inherit')();
var fs = require('fs');


function fixture (name) {
    return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim();
}


rework(fixture('test-1'))
.use(validator)
.use(extend)
.toString();
