import OrderKeys from './OrderKeys.js';
/*
 * Takes an array of items and returns an object with a mapping of
 * group to items. Also takes a type of either 'humanrights' or 'vatican'.
 *
 */
module.exports = function(items, type) {
  var groupedDocuments = {};
  items.map(function(item) {
    if (item.collection_id === type) {
      var source = 'Unidentified Source';
      if(item.metadata.source) {
         source = item.metadata.source.values[0].value;
        source = source.replace(/\(*([0-9]+(th|st|nd|rd))(\s*(regular|special)*\s*session\)*\s*(of)*\s*(the)*)*/gi, '').trim();
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
