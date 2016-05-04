import ItemStore from '../store/ItemStore.js';

module.exports = function(document, compareList) {
  var count = 0;
  console.log(document);
  console.log(compareList)
  for (var i=0; i < compareList.length; i++) {
    if(ItemStore.getItemParent(ItemStore.getItem(compareList[i])) == document) {
      count++;
    }
  }

  return count;
}
