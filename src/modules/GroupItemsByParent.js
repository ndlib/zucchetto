'use strict'
import ItemStore from '../store/ItemStore.js'
import _ from "underscore"

module.exports = function(documents) {
  let groupedItems = [];
  if(documents.length > 0) {
    documents.forEach(function(item, index) {
      var itemParent = ItemStore.getItemParent(item);
      var docExists = false;
      for(var i = 0; i < groupedItems.length; i++){
        if(itemParent && groupedItems[i].doc == itemParent) {
          // found parent
          docExists = true;
          groupedItems[i].paragraphs.push(item);
        }
      }
      if(itemParent && !docExists) {
        groupedItems.push({doc: itemParent, paragraphs: [item]});
      }
    });

    for(var i = 0;  i < groupedItems.length; i++) {
      groupedItems[i].paragraphs = _.sortBy(groupedItems[i].paragraphs, function(o){ return o.metadata.order.values[0].value;});
    }
  }

  return groupedItems;
}
