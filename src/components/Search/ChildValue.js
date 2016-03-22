function ChildValue(parent) {
  if(parent.children) {
    var children = '';
    for(var child in parent.children) {
      children += ',' + ChildValue(parent.children[child]);
    }
    return parent.value + children;
  }
  return parent.value;
}

module.exports = ChildValue;
