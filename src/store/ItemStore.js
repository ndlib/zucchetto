// This store retains data on search results retreived from the Honeycomb API.
// In addition, it also stores some user selections that don't affect the search
// results, such as the currently clicked item. This is purely so that multiple
// components can query the store to get this information instead of talking directly
// to each other. Any time a property changes that will trigger the search results to change,
// the store will emit a single SearchStoreChanged event, regardless of why it changed.
// If a property changes that does not change the results, it will emit an individual
// event specific to that change, such as SearchStoreSelectedItemChanged.
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var EventEmitter = require("events").EventEmitter;
var ItemActionTypes = require("../constants/ItemActionTypes.jsx");
var _ = require("underscore");

import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this._items = {};
    this._parentItems = [];
    this._user_defined2_item_id = {};
    this._parent2children = {};
    this._vatican_finished = false;
    this._human_rights_finished = false;
    AppDispatcher.register(this.receiveAction.bind(this));
    this.validItem = this.validItem.bind(this);

    this._data = {}
    this._data[HumanRightsID] = {
      docTypes: [],
      docSources: [],
      firstYear: 2000,
    };
    this._data[VaticanID] = {
      docTypes: [],
      docSources: [],
      firstYear: 2000,
    };
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case ItemActionTypes.PRE_LOAD_VATICAN_ITEMS:
        this.parseItems(action.items);
        this._vatican_finished = true;
        this.emitPreLoadIfFinished();
        break;
      case ItemActionTypes.PRE_LOAD_HUMANRIGHTS_ITEMS:
        this.parseItems(action.items);
        this._human_rights_finished = true;
        this.emitPreLoadIfFinished();
        break;
    }
  }

  emitPreLoadIfFinished() {
    if (this._human_rights_finished && this._vatican_finished) {
      this.emit("PreLoadFinished");
    }
  }

  preLoaded() {
    return (this._vatican_finished && this._human_rights_finished);
  }

  parseItems(items) {
    var parseFunction = _.bind(this.parseFunction, this);

    _.each(items, parseFunction);
    this._data[HumanRightsID].docTypes = _.uniq(this._data[HumanRightsID].docTypes);
    this._data[VaticanID].docTypes = _.uniq(this._data[VaticanID].docTypes);
    this._data[HumanRightsID].docSources = _.uniq(this._data[HumanRightsID].docSources);
    this._data[VaticanID].docSources = _.uniq(this._data[VaticanID].docSources);
  }

  updateData(collection, doctype, year, source) {
    this._data[collection].docTypes.push(doctype);
    this._data[collection].firstYear = Math.min(this._data[collection].firstYear, year);
    this._data[collection].docSources.push(source);
  }

  parseFunction(item) {
    this._items[item.id] = item;
    this._user_defined2_item_id[item.user_defined_id] = item.id;
    if (item.metadata.parent_id) {
      var parent_id = item.metadata.parent_id.values[0].value;
      if (!this._parent2children[parent_id]) {
        this._parent2children[parent_id] = [];
      }
      this._parent2children[parent_id].push(item.id);
    } else {
      var doctype = item.metadata.type_of_document.values[0].value;
      var year = 2017;
      if(item.metadata.coverage_temporal) {
        year = item.metadata.coverage_temporal.values[0].value;
      } else {
        console.log("Item has no date");
        console.log(item);
      }

      if(item.collection_id == VaticanID) {
        this.updateData(VaticanID, doctype, year, item.metadata.promulgated_by.values[0].value)
      } else if(item.collection_id == HumanRightsID) {
        this.updateData(HumanRightsID, doctype, year, item.metadata.organization.values[0].value)
      }

      this._parentItems.push(item);
    }
  }

  validItem(id) {
    if(this.getItem(id)) {
      return true;
    }
    else return false;
  }

  getItem(id) {
    return this._items[id];
  }

  getDocTypes(collection) {
    if(collection == HumanRightsID) {
      return this._data[HumanRightsID].docTypes;
    } else if(collection == VaticanID) {
      return this._data[VaticanID].docTypes;
    }
  }

  getDocSources(collection) {
    if(collection == HumanRightsID) {
      return this._data[HumanRightsID].docSources;
    } else if(collection == VaticanID) {
      return this._data[VaticanID].docSources;
    }
  }

  getEarliestDocYear(collection) {
    if(!collection) {
      return Math.min(this._data[VaticanID].firstYear, this._data[HumanRightsID].firstYear);
    } else if(collection == HumanRightsID) {
      return this._data[HumanRightsID].firstYear;
    } else if(collection == VaticanID) {
      return this._data[VaticanID].firstYear;
    }
  }

  getItemsByMultipleIds(ids) {
    var func = function(id) {
      return this.getItem(id)
    }

    func = _.bind(func, this);
    return _.filter(_.map(ids, func));
  }

  getItemParent(item) {
    if (this._parent2children[item.user_defined_id]) {
      return item;
    }

    if (!item.metadata.parent_id) {
      return null;
    }

    var parent_user_defined_id = item.metadata.parent_id.values[0].value;
    var item_id = this._user_defined2_item_id[parent_user_defined_id];
    if (item_id) {
      return this.getItem(item_id);
    } else {
      return null;
    }
  }

  getItemChildrenInOrder(parent) {
    var items = this._parent2children[parent.user_defined_id];
    if (!items) {
      return [];
    }

    items = this.getItemsByMultipleIds(items);

    return _.sortBy(items, function(item) {
      if (item.metadata.order) {
        return item.metadata.order.values[0].value;
      } else {
        return 0;
      }
    });
  }

  getParentItems() {
    return this._parentItems;
  }
}

module.exports = new ItemStore();
