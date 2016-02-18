'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectFromObject;
function selectFromObject(object, key) {
  var defaultValue = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _index = undefined;
  if (!object) {
    return defaultValue;
  }
  _index = key.indexOf('.');
  if (_index > -1) {
    return selectFromObject(object[key.substring(0, _index)], key.substr(_index + 1), defaultValue);
  }
  if (object[key]) {
    return object[key];
  }
  return defaultValue;
}