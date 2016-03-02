var keyMirror = require('keymirror');

var ItemActionTypes = keyMirror({
  ITEM_SET_ITEM: null,
  ITEM_SHOW_WINDOW: false,
  PRE_LOAD_ITEMS: false,
});

module.exports = ItemActionTypes;
