var keyMirror = require('keymirror');

var ItemActionTypes = keyMirror({
  ITEM_SET_ITEM: null,
  ITEM_SHOW_WINDOW: false,
  PRE_LOAD_VATICAN_ITEMS: false,
  PRE_LOAD_HUMANRIGHTS_ITEMS: false,
  LOAD_CHILD_ITEMS: false
});

module.exports = ItemActionTypes;
