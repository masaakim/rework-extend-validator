# rework-extend-validator [![Build Status](https://travis-ci.org/morishitter/rework-extend-validator.svg)](https://travis-ci.org/morishitter/rework-extend-validator)

Rework plugin to validate properties when use `(extend|inherit)s:`.

Thorow error when extended rules have same properties.

## Installation

```shell
$ npm install rework-extend-validator
```

## Example

```javascript
var rework = require('rework');
var validator = require('rework-extend-validator');
var extend = require('rework-inherit')();
var fs = require('fs');

var css = fs.readFileSync('test/fixtures/test-1.css', 'utf-8').trim();

rework(css).use(validator).use(extend).toString();
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
