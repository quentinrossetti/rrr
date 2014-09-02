# rrr

[![Build Status][travis-image]][travis-url] [![Code coverage][coveralls-image]][coveralls-url] [![Code quality][codeclimate-image]][codeclimate-url] [![Dependencies Status][gemnasium-image]][gemnasium-url] [![Release][npm-image]][npm-url]

> Your new recursive utility belt!

## Usage

See examples in the API below.

## Installation

```bat
npm install --save rrr
```

## API

### The `Rrr` class
Start using the library by creating a new `Rrr` object. The constructor gets one
argument: the object you want to work with.
```js
var Rrr = require('rrr');
var myCollection  = { one: { nestOne: 42 }, two: 'item', three: [ true ] };
var rrrCollection = new Rrr(myCollection);
// You can now use all the methods described in the API!
rrrCollection.access('one.nestOne');
// 42
```

### access `new Rrr(collection).access([path], [value])`
Access a nested property of the object. The `path` is a *string* representing
the property's path. Use the `.` character to identify a level (With both
objects and arrays). When  `value` is defined the value of the item is set. If
no arguments are specified the collection is returned.
```js
var collection = { one: { nestOne: 42 }, two: 'item', three: [ true, false ] };
var my = new Rrr(collection);
my.access();
// { one: { nestOne: 42 }, two: 'item', three: [ true, false ] }
my.access('one.nestOne');
// 42
my.access('one.nestOne', 1337);
// 1337
my.access('one');
// { nestOne: 1337 }
```

### each `new Rrr(collection).each(fn)`
Run a function on each item in the collection. The `fn` function passed accepts
two parameters `(value, key)`. The first is the value and can't be an other
object. The second is a *string* that represents the path the the item, use
`access` method to get the value. This method *does not* modify the inner
object.
```js
var collection = { one: { nestOne: 42 }, two: 'item', three: [ true, false ] };
new Rrr(collection).each(function (value, key) {
  console.log('%s: %s', key, value);
});
// one.nestOne: 42
// two: 'item'
// three.0: true
// three.1: false
```

### map `new Rrr(collection).map(fn)`
Apply a function on each item in the collection. The `fn` function passed
accepts two parameters `(value, key)`. The first is the value and can't be an
other object. The second is a *string* that represents the path the the item,
use `access` method to get the value. This method *does* modify the inner
object. To do so return the new value that you want for your item.
```js
var collection = { one: { nestOne: 42 }, two: 'item', three: [ true, false ] };
var my = new Rrr(collection)
my.map(function (value, key) {
  if (typeof val === 'number') {
    val++;
    return val;
  } else {
    return val;
  }
});
console.log(my)
// one.nestOne: 43
// two: 'item'
// three.0: true
// three.1: false
```

***
With :heart: from [quentinrossetti](https://github.com/quentinrossetti)

[gemnasium-url]: https://gemnasium.com/quentinrossetti/rrr
[gemnasium-image]: http://img.shields.io/gemnasium/quentinrossetti/rrr.svg
[travis-url]: https://travis-ci.org/quentinrossetti/rrr
[travis-image]: http://img.shields.io/travis/quentinrossetti/rrr.svg
[codeclimate-url]: https://codeclimate.com/github/quentinrossetti/rrr
[codeclimate-image]: http://img.shields.io/codeclimate/github/quentinrossetti/rrr.svg
[coveralls-url]: https://coveralls.io/r/quentinrossetti/rrr
[coveralls-image]: http://img.shields.io/coveralls/quentinrossetti/rrr.svg
[npm-url]: https://www.npmjs.org/package/rrr
[npm-image]: http://img.shields.io/npm/v/rrr.svg
