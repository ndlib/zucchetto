"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var ItemActionTypes = require("../constants/ItemActionTypes.jsx");
var EventEmitter = require("../middleware/EventEmitter.js");

class ItemActions {
  setCurrentItem(item) {
    AppDispatcher.dispatch({
      actionType: ItemActionTypes.ITEM_SET_ITEM,
      item: item
    });
  }

  showItemDialogWindow(item) {
    EventEmitter.emit("ItemDialogWindow", item);
  }

  hideItemDialogWindow() {
    EventEmitter.emit("HideItemDialogWindow", 'hide');
  }

  preLoadItems() {
    var url = "http://localhost:3017/v1/collections/animals/items";

    $.ajax({
      context: this,
      type: "GET",
      url: url,
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: ItemActionTypes.PRE_LOAD_ITEMS,
          items: result.items
        });;
      },
      error: function(request, status, thrownError) {
        this.emit("SearchStoreQueryFailed", { request: request, status: status, error: thrownError });
      }
    });
  }

}
module.exports = new ItemActions();
//export default ItemActions;
