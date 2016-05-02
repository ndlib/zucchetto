'use strict'
import ItemStore from '../store/ItemStore.js'

module.exports = function(parent) {
  var items = ItemStore.getItemChildrenInOrder(parent)
  var topics = {};

  items.map(function(item) {
    if (item.metadata.actors) {
      item.metadata.actors.values.map(function (actor) {
        var topic = actor.value;
        if (!topics[topic]) {
          topics[topic] = 1
        } else {
          topics[topic] += 1;
        }
      });
    }
  });

  return topics;
}
