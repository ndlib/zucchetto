import _ from 'underscore';
import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';

function dateFilter(item, filters) {
  var minDate = filters["minDate"];
  var maxDate = filters["maxDate"];

  // we will include items that have no date
  // the items themselves are loged on initial load
  if(!item.metadata.coverage_temporal) {
    return true;
  }
  var itemDate = item.metadata.coverage_temporal.values[0].value

  var gte = !minDate || itemDate >= minDate;
  var lte = !maxDate || itemDate <= maxDate;

  return gte && lte;
}

function listFilter(list, value) {
  if(!list || list.length == 0) {
    return true;
  }

  for(var i = 0; i < list.length; ++i) {
    if(value == list[i]) {
      return true;
    }
  }
  return false;
}

function docSourceFilter(item, allFilters) {
  var collection = item.collection_id;
  var filters = allFilters[collection].docSource;

  var itemSource = "";
  if(collection == VaticanID) {
    itemSource = item.metadata.promulgated_by.values[0].value;
  } else if(collection == HumanRightsID) {
    itemSource = item.metadata.organization.values[0].value;
  }

  return listFilter(filters, itemSource);
}

function docTypeFilter(item, allFilters) {
  var collection = item.collection_id;
  var filters = allFilters[collection].docType;

  var itemType = item.metadata.type_of_document.values[0].value;
  return listFilter(filters, itemType);
}

function filterItem(item, filters) {
  if(!item.collection_id) {
    console.log("Item doesn't have collection id");
    console.log(item);
    return false;
  }

  if(!dateFilter(item, filters)) {
    return false;
  }

  if(!docSourceFilter(item, filters)) {
    return false;
  }

  if(!docTypeFilter(item, filters)) {
    return false;
  }

  return true;
}

module.exports = function(groups, filters) {
  var out = [];
  for(var i = 0; i < groups.length; ++i) {
    var item = groups[i].parentItem;

    if(filterItem(item, filters)) {
      out.push(groups[i]);
    }
  }

  return out;
}
