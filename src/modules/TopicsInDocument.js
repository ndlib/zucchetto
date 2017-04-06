'use strict'
import ItemStore from '../store/ItemStore.js'
import topics from '../components/Search/topics.js'
import _ from "underscore"

module.exports = function(parent) {
  var items = ItemStore.getItemChildrenInOrder(parent)
  var topics = {};

  items.map(function(item) {
    if (item.metadata.actors) {
      item.metadata.actors.values.map(function (actor) {
        var topic = actor.value.trim();
        if(isUniqueId(topic)) {
          //do nothing
        } else if (!topics[topic]) {
          topics[topic] = [ item.id ]
        } else {
          topics[topic].push(item.id);
        }
      });
    }
  });

  return bySortedValue(topics);
}

function findIds(data) {
  var out = []
  for(var index in data) {
    var node = data[index]
    out.push(node.value)

    if(node.children) {
      out = out.concat(findIds(node.children))
    }
  }
  return out;
}

var uniqueIds = null;
function isUniqueId(key) {
  if(uniqueIds == null) {
    uniqueIds = findIds(topics.topics)
  }

  return uniqueIds.indexOf(key) >= 0
}


function bySortedValue(obj) {
    var tuples = [];
    var ret = {};

    for (var key in obj) tuples.push([key, obj[key]]);

    tuples.sort(function(a, b) { return a[1].length < b[1].length ? 1 : a[1].length > b[1].length ? -1 : 0 });

    for (var i = 0; i < tuples.length; i++) {
        var key = tuples[i][0];
        var value = tuples[i][1];

        ret[key] = value
    }
    return ret;
}
