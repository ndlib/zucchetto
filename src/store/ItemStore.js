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
var IDFromAtID = require("../modules/IDFromAtID.js");
var _ = require("underscore");

import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this._items = {};
    this._parentItems = [];
    this._parent2children = {};
    this._vatican_finished = false;
    this._human_rights_finished = false;
    AppDispatcher.register(this.receiveAction.bind(this));
    this.validItem = this.validItem.bind(this);

    this._data = {}
    this._data[HumanRightsID] = {
      docTypes: [],
      docSources: [],
      firstYear: new Date().getFullYear(),
    };
    this._data[VaticanID] = {
      docTypes: [],
      docSources: [],
      firstYear: new Date().getFullYear(),
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
      case ItemActionTypes.LOAD_CHILD_ITEMS:
        this.parseParent(action.parent);
        this.parseItemsChildren(action.parent);
        this.emit("LoadChildrenFinished", action.parent.id);
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
    var parseFunction = _.bind(this.parseParent, this);

    _.each(items, parseFunction);
    this._data[HumanRightsID].docTypes = _.uniq(this._data[HumanRightsID].docTypes).sort();
    this._data[VaticanID].docTypes = _.uniq(this._data[VaticanID].docTypes).sort();
    this._data[HumanRightsID].docSources = _.uniq(this._data[HumanRightsID].docSources).sort();
    this._data[VaticanID].docSources = _.uniq(this._data[VaticanID].docSources).sort();
  }

  updateData(collection, doctype, year, source) {
    if(doctype) {
      this._data[collection].docTypes.push(doctype);
    }
    if(year) {
      this._data[collection].firstYear = Math.min(this._data[collection].firstYear, year);
    }
    if(source) {
      this._data[collection].docSources.push(source);
    }
  }

  metaValue(item, name, field, defaultVal) {
    if(field) {
      return field.values[0].value;
    }
    console.log("Item has no " + name);
    console.log(item);
    return defaultVal;
  }

  parseParent(item) {
    this._items[item.id] = item;
    var meta = item.metadata
    var doctype = this.metaValue(item, "DocType", meta.type_of_document, null);
    var year = this.metaValue(item, "Date", meta.coverage_temporal, new Date().getFullYear());

    if(item.collection_id == VaticanID) {
      var source = this.metaValue(item, "source", meta.promulgated_by, null);
      this.updateData(VaticanID, doctype, year, source);
    } else if(item.collection_id == HumanRightsID) {
      var source = this.metaValue(item, "source", meta.organization, null);
      this.updateData(HumanRightsID, doctype, year, source)
    }

    this._parentItems.push(item);
  }

  parseItemsChildren(parentItem) {
    var parent_id = parentItem.id;
    this._parent2children[parent_id] = [];
    _.each(parentItem.children, function(child) {
      this._items[child.id] = child;
      this._parent2children[parent_id].push(child.id);
    }.bind(this));
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
    if (this._parent2children[item.id]) {
      return item;
    }

    if (!item["isPartOf/item"]) {
      return null;
    }

    var parent_id = IDFromAtID(item["isPartOf/item"]);
    if (parent_id) {
      return this.getItem(parent_id);
    } else {
      return null;
    }
  }

  getItemChildrenInOrder(parent) {
    var items = this._parent2children[parent.id];
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
