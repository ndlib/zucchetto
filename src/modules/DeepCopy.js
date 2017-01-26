import _ from 'underscore';

function deepArray(toCopy) {
  var out = [];
  for(var i = 0; i < toCopy.length; ++i) {
    out.push(deepCopy(toCopy[i]));
  }
  return out;
}

function deepHash(toCopy) {
  var out = {};
  for(var key in toCopy) {
    out[key] = deepCopy(toCopy[key]);
  }
  return out;
}

function deepCopy(toCopy) {
  if(toCopy instanceof Array) {
    return deepArray(toCopy);
  } else if(toCopy instanceof Object) {
    return deepHash(toCopy);
  } else {
    return toCopy;
  }
}

module.exports = deepCopy