'use strict';

var Api = function (obj) {
  this.obj = obj;
};

Api.prototype.access = function (path, value) {
  if (arguments.length === 0) {
    return this.obj;
  }
  var accessor = require('deep-get-set');
  if (value) {
    return accessor(this.obj, path, value);
  } else {
    return accessor(this.obj, path);
  }
};

Api.prototype.each = function (fn) {

  function rrr(obj, parent) {
    for (var key in obj) {
      if (obj[key] instanceof Object) {
        rrr(obj[key], parent + '.' + key);
      } else {
        var path = (parent.length === 0) ? '.' : parent + '.';
        fn(obj[key], path.substr(1, path.length) + key);
      }
    }
  }
  var obj = this.obj;
  return rrr(obj, '');

};

Api.prototype.map = function (fn) {

  function rrr(obj, parent) {
    for (var key in obj) {
      if (obj[key] instanceof Object) {
        rrr(obj[key], parent + '.' + key);
      } else {
        var path = (parent.length === 0) ? '.' : parent + '.';
        path = path.substr(1, path.length) + key;
        var val = fn(obj[key], path);
        clone.access(path, val);
      }
    }
  }
  var obj = this.obj;
  var clone = new Api(obj);
  rrr(obj, '');
  return clone;

};

module.exports = Api;
