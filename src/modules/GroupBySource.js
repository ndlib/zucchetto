import OrderKeys from './OrderKeys.js';
import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';
/*
 * Takes an array of items and returns an object with a mapping of
 * group to items. Also takes a type of either 'humanrights' or 'vatican'.
 *
 */
module.exports = function(items, type) {
  var groupedDocuments = {};
  items.map(function(item) {
    if (item.collection_id === type) {
      var source;

      if(type === HumanRightsID) {
        source = 'Unidentified Source';
      } else if (type === VaticanID) {
        source = 'Libreria Editrice Vaticana';
      }

      if(item.metadata.organization) {
         source = item.metadata.organization.values[0].value
      }
      if(Object.keys(groupedDocuments).indexOf(source) < 0){
        groupedDocuments[source] = [item];
      }
      else {
        groupedDocuments[source].push(item);
      }
      return;
    }
  });
  groupedDocuments = OrderKeys(groupedDocuments);
  return groupedDocuments;
}
