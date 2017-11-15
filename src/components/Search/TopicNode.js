import _ from 'underscore';

// Helper methods for operating on topic nodes.
class TopicNode {
  // Determines if the parent has any children matching a name in
  // a list of names
  hasChild(parent, names) {
    if(parent.children) {
      for(var i in parent.children) {
        var child = parent.children[i];
        if(_.contains(names, child.value) || this.hasChild(child, names)) {
          return true;
        }
      }
    }
    return false;
  }

  // Return the parent object's value + all of it's children's values found recursively
  // as an array of strings.
  flattenValues(parent) {
    var values = [parent.value];
    if(parent.children) {
      for(var i in parent.children) {
        values = values.concat(this.flattenValues(parent.children[i]));
      }
    }
    return values;
  }
}

export default new TopicNode;
