"use strict"
import AppDispatcher from "../dispatcher/AppDispatcher.jsx";
import CompareActionTypes from "../constants/CompareActionTypes.jsx";
import CompareStore from "../store/CompareStore.js";

class CompareActions {
  setItem(item) {
    AppDispatcher.dispatch({
      actionType: CompareActionTypes.ADD_ITEM_TO_COMPARE,
      item: item
    });
  }

  removeItem(item) {
    AppDispatcher.dispatch({
      actionType: CompareActionTypes.REMOVE_ITEM_TO_COMPARE,
      item: item
    });
  }

  setColumnItem(item) {
    AppDispatcher.dispatch({
      actionType: CompareActionTypes.SET_COMPARE_COLUMN_ITEM,
      item: item
    });
  }

  removeColumnItem(columnNumber) {
    AppDispatcher.dispatch({
      actionType: CompareActionTypes.REMOVE_COMPARE_COLUMN_ITEM,
      columnNumber: columnNumber
    });
  }

  clearColumns() {
    AppDispatcher.dispatch({
      actionType: CompareActionTypes.CLEAR_COLUMNS,
    });
  }
}

module.exports = new CompareActions();
