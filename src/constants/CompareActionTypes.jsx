var keyMirror = require('keymirror');

var CompareActionTypes = keyMirror({
  ADD_DOC_TO_LOAD: false,
  REMOVE_DOC_TO_LOAD: false,
  ADD_ITEM_TO_COMPARE: false,
  REMOVE_ITEM_FROM_COMPARE: false,
  SET_COMPARE_COLUMN_ITEM: false,
  REMOVE_COMPARE_COLUMN_ITEM: false,
  CLEAR_COLUMNS: false,
  CLEAR_ITEMS_TO_COMPARE: false
});

module.exports = CompareActionTypes;
