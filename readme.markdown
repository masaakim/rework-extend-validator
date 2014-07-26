# rework-extend-validator [![Build Status](https://travis-ci.org/morishitter/rework-extend-validator.svg)](https://travis-ci.org/morishitter/rework-extend-validator)

Rework plugin to validate properties when use `(extend|inherit)s:`.

## Installation

```shell
$ npm install rework-extend-validator
```

## Use

Use with [rework-inherit](https://github.com/reworkcss/rework-inherit/).

```javascript
// Dependencies
var rework = require('rework');
var validator = require('rework-extend-validator');
var extend = require('rework-inherit')();
var fs = require('fs');

// CSS to be processed
var css = fs.readFileSync('test/fixtures/test-1.css', 'utf-8').trim();

// Process CSS using rework-extend-validator
rework(css).use(validator).use(extend).toString();
```

## Example

Throw error if extended rules have same properties.

```css
.foo {
  font-size: 16px;
  padding: 5px 10px;
}

.bar {
  color: #fff;
  font-size: 14px;
}

.baz {
  extend: .foo;
  extend: .bar;
}
```

Run **error**.

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
