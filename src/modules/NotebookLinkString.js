'use strict'
import CompareStore from '../store/CompareStore.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js'
module.exports = function() {
  let vaticanItems = CompareStore.collectionItems(VaticanID);
  let humanRightItems = CompareStore.collectionItems(HumanRightsID);

  let vString = 'v=' + vaticanItems.join('|');
  let hString = 'h=' + humanRightItems.join('|');
  return '/notebook' + '?' + vString + '&' + hString;
}
