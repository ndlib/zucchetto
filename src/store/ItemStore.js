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

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this._items = {};
    this._user_defined2_item_id = {};
    this._parent2children = {};
    this._vatican_finished = false;
    this._human_rights_finished = false;
    AppDispatcher.register(this.receiveAction.bind(this));
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case ItemActionTypes.PRE_LOAD_VATICAN_ITEMS:
        this.parseItems(action.items);
        this._vatican_finished = true;
        break;
      case ItemActionTypes.PRE_LOAD_HUMANRIGHTS_ITEMS:
        this.parseItems(action.items);
        this._human_rights_finished = true;
        break;
    }
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
    }
  }

  getItem(id) {
    return this._items[id];
  }

  getItemsByMultipleIds(ids) {
    var func = function(id) {
      return this.getItem(id)
    }

    func = _.bind(func, this);
    return _.filter(_.map(ids, func));
  }

  getItemParent(item) {
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
}

module.exports = new ItemStore();
