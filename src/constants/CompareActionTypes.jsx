var keyMirror = require('keymirror');

var CompareActionTypes = keyMirror({
  ADD_ITEM_TO_COMPARE: false,
  REMOVE_ITEM_FROM_COMPARE: false,
  SET_COMPARE_COLUMN_ITEM: false,
  REMOVE_COMPARE_COLUMN_ITEM: false,
  CLEAR_COLUMNS: false,
});

module.exports = CompareActionTypes;
