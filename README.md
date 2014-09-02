# rrr

[![Build Status][travis-image]][travis-url] [![Code coverage][coveralls-image]][coveralls-url] [![Code quality][codeclimate-image]][codeclimate-url] [![Dependencies Status][gemnasium-image]][gemnasium-url] [![Release][npm-image]][npm-url]

> Your new recusive utility belt!

## Usage

**TODO**

## Installation

```bat
npm install --save rrr
```

## API

### each `new Rrr(collection).each(fn)`
Run a function on each item in the collection. The `fn` function passed accepts
two parameters `(value, key)`. The first is the value and can't be an other
object. The second is a *string* that represents the path the the item, use
`access` method to get the value.
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
