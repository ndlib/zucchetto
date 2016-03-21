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
var CompareActionTypes = require("../constants/CompareActionTypes.jsx");

class CompareStore extends EventEmitter {
  constructor() {
    super();

    this._column1Item = false;
    this._column2Item = false;

    AppDispatcher.register(this.receiveAction.bind(this));
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case CompareActionTypes.ADD_ITEM_TO_COMPARE:
        this.setItem(action.item);
        break;
      case CompareActionTypes.REMOVE_ITEM_TO_COMPARE:
        this.removeItem(action.item);
        break;
      case CompareActionTypes.SET_COMPARE_COLUMN_ITEM:
        this.setColumnItem(action.item);
        break;
      case CompareActionTypes.REMOVE_COMPARE_COLUMN_ITEM:
        this.removeColumnItem(action.item);
        break;
    }
  }

  setItem(item) {
    var id = item.id;
    var collection = item.collection_id

    window.localStorage.setItem(id, collection);
    this.emit("ItemCompareUpdated");
  }

  removeItem(item) {
    var id = item.id;
    var collection = item.collection_id

    window.localStorage.removeItem(id, collection);
    this.emit("ItemCompareUpdated");
  }

  allItems() {
    let items = [];
    for(var i = 0; i < window.localStorage.length; i++) {
      items.push(window.localStorage.key(i));
    }

    return items;
  }

  itemInCompare(item) {
    return window.localStorage.getItem(item.id);
  }

  clearAll() {
    window.localStorage.clear();
  }

  setColumnItem(item) {
    if (!this._column1Item) {
      this._column1Item = item;
    } else if(!this._column2Item) {
      this._column2Item = item;
    }
    this.emit("CompareColumnsUpdated");
  }

  removeColumnItem(item) {
    if (this._column1Item == item) {
      this._column1Item = false;
    } else if (this._column2Item == item) {
      this._column2Item = false;
    }
    this.emit("CompareColumnsUpdated");
  }

  getColumn1() {
    return this._column1Item;
  }

  getColumn2() {
    return this._column2Item;
  }
}

module.exports = new CompareStore();
