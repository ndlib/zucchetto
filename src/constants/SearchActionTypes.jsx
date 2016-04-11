var keyMirror = require('keymirror');

var SearchActionTypes = keyMirror({
  SEARCH_SET_PARAMS: null,
  SEARCH_SET_HITS: null,
  SEARCH_SET_TERM: null,
  SEARCH_ADD_TOPICS: null,
  SEARCH_REMOVE_TOPICS: null,
});

module.exports = SearchActionTypes;
