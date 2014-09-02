'use strict';

var Api = function (obj) {
  this.obj = obj;
};

Api.prototype.access = function (path, value) {
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

module.exports = Api;
