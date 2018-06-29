var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var ItemActionTypes = require("../constants/ItemActionTypes.jsx");
var EventEmitter = require("../middleware/EventEmitter.js");
var HoneycombURL = require("../modules/HoneycombURL.js");

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
    var vaticanUrl = HoneycombURL() + "/v1/collections/vatican/items";
    var humanrightsUrl = HoneycombURL() + "/v1/collections/humanrights/items";

    $.ajax({
      context: this,
      type: "GET",
      url: vaticanUrl,
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: ItemActionTypes.PRE_LOAD_VATICAN_ITEMS,
          items: result.items
        });;
      },
      error: function(request, status, thrownError) {
        EventEmitter.emit("SearchStoreQueryFailed", { request: request, status: status, error: thrownError });
      }
    });

    $.ajax({
      context: this,
      type: "GET",
      url: humanrightsUrl,
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: ItemActionTypes.PRE_LOAD_HUMANRIGHTS_ITEMS,
          items: result.items
        });;
      },
      error: function(request, status, thrownError) {
        EventEmitter.emit("SearchStoreQueryFailed", { request: request, status: status, error: thrownError });
      }
    });
  }


  loadChildren(itemId) {
    var vaticanUrl = HoneycombURL() + "/v1/items/" + itemId + "/children";

    $.ajax({
      context: this,
      type: "GET",
      url: vaticanUrl,
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: ItemActionTypes.LOAD_CHILD_ITEMS,
          parent: result.items
        });;
      },
      error: function(request, status, thrownError) {
        EventEmitter.emit("SearchStoreQueryFailed", { request: request, status: status, error: thrownError });
      }
    });

  }
}
module.exports = new ItemActions();
//export default ItemActions;
