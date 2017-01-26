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
import LocalStorageExpiration from '../modules/LocalStorageExpiration.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
import ItemStore from './ItemStore.js';

class CompareStore extends EventEmitter {
  constructor() {
    super();
    this.validStore = this.validStore.bind(this);
    this.validCollection = this.validCollection.bind(this);
    this.verifyStore = this.verifyStore.bind(this);
    LocalStorageExpiration();

    this._column1Item = false;
    this._column2Item = false;
    this._forceDrawerState = false ;

    AppDispatcher.register(this.receiveAction.bind(this));
  }

  verifyStore() {
    if(!this.validStore()) {
      console.log('Invalid collection item found.');
      LocalStorageExpiration(true);
      this.resetDrawer();
      this.emit("ItemCompareUpdated");
    }
  }

  validStore() {
    return true;
    if(!this.validCollection(VaticanID) || !this.validCollection(HumanRightsID)) {
      return false;
    }
    return true;
  }

  validCollection(collection_id) {
    var obj = JSON.parse(window.localStorage.getItem(collection_id));
    if(obj.items) {
      var items = obj.items;
      for(var i = 0; i < items.length; i++) {
        if(!ItemStore.validItem(items[i])) {
          return false;
        }
      }
    }
    return true;
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    LocalStorageExpiration();
    switch(action.actionType) {
      case CompareActionTypes.ADD_DOC_TO_LOAD:
        this.addDoc(action.item);
        break;
      case CompareActionTypes.REMOVE_DOC_TO_LOAD:
        this.removeDoc(action.item);
        break;
      case CompareActionTypes.ADD_ITEM_TO_COMPARE:
        this.setItem(action.item);
        break;
      case CompareActionTypes.REMOVE_ITEM_TO_COMPARE:
        this.removeItem(action.item);
        break;
      case CompareActionTypes.CLEAR_ITEMS_TO_COMPARE:
        this.clearAll();
        break;
      case CompareActionTypes.SET_COMPARE_COLUMN_ITEM:
        this.setColumnItem(action.item);
        break;
      case CompareActionTypes.REMOVE_COMPARE_COLUMN_ITEM:
        this.removeColumnItem(action.columnNumber);
        break;
      case CompareActionTypes.CLEAR_COLUMNS:
        this.clearColumnItems();
        break;
    }
  }

  addDoc(item) {
    var id = item.id;
    var collection = item.collection_id;
    var stored = JSON.parse(window.localStorage.getItem(collection));

    var savedDocsArray = stored.docs;
    if(!savedDocsArray) {
      savedDocsArray = [id];
    } else {
      if(savedDocsArray.indexOf(id) < 0) {
        savedDocsArray.push(id);
      }
    }
    stored.docs = savedDocsArray;
    window.localStorage.setItem(collection, JSON.stringify(stored))
    this.resetDrawer();
    this.emit("ItemCompareUpdated");
  }

  removeDoc(item) {
    var id = item.id;
    var collection = item.collection_id;
    var stored = JSON.parse(window.localStorage.getItem(collection));
    var savedDocsArray = stored.docs;

    if(savedDocsArray && savedDocsArray.indexOf(id) > -1) {
      savedDocsArray.splice(savedDocsArray.indexOf(id), 1)
    }
    stored.docs = savedDocsArray;
    window.localStorage.setItem(collection, JSON.stringify(stored))
    this.resetDrawer();
    this.emit("ItemCompareUpdated");
  }

  setItem(item) {
    var id = item.id;
    var collection = item.collection_id;
    var stored = JSON.parse(window.localStorage.getItem(collection));
    var savedItemsArray = stored.items;
    if(!savedItemsArray) {
      savedItemsArray = [id];
    } else {
      if(savedItemsArray.indexOf(id) < 0) {
        savedItemsArray.push(id);
      }
    }
    stored.items = savedItemsArray;
    window.localStorage.setItem(collection, JSON.stringify(stored))
    this.resetDrawer();
    this.emit("ItemCompareUpdated");
  }

  removeItem(item) {
    var id = item.id;
    var collection = item.collection_id;
    var stored = JSON.parse(window.localStorage.getItem(collection));
    var savedItemsArray = stored.items;

    if(savedItemsArray && savedItemsArray.indexOf(id) > -1) {
      savedItemsArray.splice(savedItemsArray.indexOf(id), 1)
    }
    stored.items = savedItemsArray;
    window.localStorage.setItem(collection, JSON.stringify(stored))
    this.resetDrawer();
    this.emit("ItemCompareUpdated");
  }

  collectionDocs(collection_id) {
    var docs = [];
    if(window.localStorage.getItem(collection_id)) {
      var obj = JSON.parse(window.localStorage.getItem(collection_id));
      if(obj.docs) {
        docs = obj.docs;
      }
    }
    return docs;
  }

  collectionItems(collection_id) {
    var items = [];
    if(window.localStorage.getItem(collection_id)) {
      var obj = JSON.parse(window.localStorage.getItem(collection_id));
      if(obj.items) {
        items = obj.items;
      }
    }
    return items;
  }

  allItems() {
    var vaticanItems = this.collectionItems(VaticanID);
    var humanRightsItems = this.collectionItems(HumanRightsID);
    return vaticanItems.concat(humanRightsItems);
  }

  itemInCompare(item) {
    var itemArray = window.localStorage.getItem(item.collection_id);
    if(itemArray && itemArray.indexOf(item.id) > -1) {
      return item.id;
    }
    return null;
  }

  clearAll() {
    this.clearColumnItems();
    window.localStorage.clear();
    this.resetDrawer();
    this.emit("ItemCompareUpdated");
  }

  drawerOpen() {
    if (this._forceDrawerState == "closed") {
      return false;
    }
    return (this.allItems().length > 0 || this._forceDrawerState == "open");
  }

  resetDrawer() {
    this._forceDrawerState = false;
  }

  toggleDrawer() {
    if (this.drawerOpen()) {
      this._forceDrawerState = "closed";
    } else {
      this._forceDrawerState = "open";
    }
    this.emit("ItemCompareUpdated");
  }

  setColumnItem(item) {
    if (!this._column1Item) {
      this._column1Item = item;
      this.emit("CompareColumnsUpdated");
    } else if(!this._column2Item) {
      this._column2Item = item;
      this.emit("CompareColumnsUpdated");
    }
    else {
      this.emit("CompareColumnsCannotBeUpdated");
    }
  }

  removeColumnItem(columnNumber) {
    if (columnNumber == 1) {
      this._column1Item = false;
    } else if (columnNumber == 2) {
      this._column2Item = false;
    }
    this.emit("CompareColumnsUpdated", columnNumber);
  }

  clearColumnItems() {
    this._column1Item = false;
    this._column2Item = false;
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
