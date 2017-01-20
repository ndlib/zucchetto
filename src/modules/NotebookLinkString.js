'use strict'
import CompareStore from '../store/CompareStore.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js'
module.exports = function() {
  let vaticanItems = CompareStore.collectionItems(VaticanID);
  let vaticanDocs = CompareStore.collectionDocs(VaticanID);
  let humanRightItems = CompareStore.collectionItems(HumanRightsID);
  let humanRightDocs = CompareStore.collectionDocs(HumanRightsID);

  let vString = 'v=' + vaticanItems.join('|');
  let hString = 'h=' + humanRightItems.join('|');
  let dString = 'd=' + vaticanDocs.concat(humanRightDocs).join('|');
  return encodeURI('/notebook' + '?' + dString + '&' + vString + '&' + hString);
}
