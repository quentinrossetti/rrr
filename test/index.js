/* global describe, it */
'use strict';
var expect = require('chai').expect;
var Rrr = require('../index');

// Fixtures
// --------

// A complex collection to test.
var collection = {
  one: {
    two: {
      three: true
    },
    two2: 'this is a string'
  },
  one2: false,
  one3: new Date(),
  one4: [ 'hello', 'world' ],
};

// Test suite
// ----------

describe('Rrr.each()', function () {

  it('should apply a function', function () {
    var r = new Rrr(collection);
    var i = 0;
    r.each(function () {
      i++;
    });
    expect(i).to.eql(5);
  });

  it('should contain keys', function () {
    var r = new Rrr(collection);
    r.each(function (val, key) {
      expect(key).to.contain('one');
    });
  });

  it('should have values', function () {
    var r = new Rrr(collection);
    r.each(function (val) {
      expect(val).not.to.eql(undefined);
    });
  });

});
