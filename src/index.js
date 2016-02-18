export default function selectFromObject(object, key, defaultValue = null) {
  let _index;
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
