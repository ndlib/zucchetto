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
    this._finished = false;
    AppDispatcher.register(this.receiveAction.bind(this));
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case ItemActionTypes.PRE_LOAD_ITEMS:
        this.parseItems(action.items);
        this._finished = true;
        this.emit("PreLoadFinished");
        break;
    }
  }

  parseItems(items) {
    var newItems = {};
    _.each(items, function(item) {
      newItems[item.id] = item
    });
    this._items = newItems;
    console.log(this._items);
  }

  getItem(id) {
    return this._items[id];
  }

  getItemParent(id) {

  }

  getItemsByMultipleIds(ids) {
    var func = function(id) {
      return this.getItem(id)
    }
    func = _.bind(func, this);
    return _.filter(_.map(ids, func));
  }

  getItemChildrenInOrder(id) {
    return _.sortBy(this._items, function(item) {
      return item.order;
    });
  }
}

module.exports = new ItemStore();
