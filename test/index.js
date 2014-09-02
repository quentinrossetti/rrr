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
  one2: 42,
  one3: new Date(),
  one4: [ 'hello', 'world' ],
};

// Test suite
// ----------

describe('Rrr.access()', function () {

  it('should read deep property', function () {
    var r = new Rrr(collection).access('one.two.three');
    expect(r).to.eql(true);
  });

  it('should set deep property', function () {
    var r = new Rrr(collection);
    r.access('one.two.three', 42);
    expect(r.obj.one.two.three).to.eql(42);
  });

  it('should return global object with no args', function () {
    var r = new Rrr(collection).access();
    expect(r.one2).to.eql(42);
  });

});


describe('Rrr.each()', function () {

  it('should run a function', function () {
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

  it('should not alter values values', function () {
    var r = new Rrr(collection);
    r.each(function (val) {
      if (typeof val === 'number') {
        val++;
        return val;
      } else {
        return val;
      }
    });
    expect(r.obj.one2).to.eql(42);
  });

});


describe('Rrr.map()', function () {

  it('should contain keys', function () {
    var r = new Rrr(collection);
    r.map(function (val, key) {
      expect(key).to.contain('one');
    });
  });

  it('should have values', function () {
    var r = new Rrr(collection);
    r.map(function (val) {
      expect(val).not.to.eql(undefined);
    });
  });

  it('should apply a function', function () {
    var r = new Rrr(collection);
    r.map(function (val) {
      if (typeof val === 'number') {
        val++;
        return val;
      } else {
        return val;
      }
    });
    expect(r.obj.one2).to.eql(43);
  });

});
