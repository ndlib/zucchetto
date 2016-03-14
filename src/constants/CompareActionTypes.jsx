var keyMirror = require('keymirror');

var CompareActionTypes = keyMirror({
  ADD_ITEM_TO_COMPARE: false,
  REMOVE_ITEM_FROM_COMPARE: false,
});

module.exports = CompareActionTypes;
