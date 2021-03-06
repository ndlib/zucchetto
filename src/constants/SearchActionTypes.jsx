var keyMirror = require('keymirror');

var SearchActionTypes = keyMirror({
  SEARCH_INI_PARAMS: null, // Initializes search parameters without emitting a change event
  SEARCH_EMIT_CHANGE: null,
  SEARCH_SET_HITS: null,
  SEARCH_SET_TERM: null,
  SEARCH_ADD_TOPICS: null,
  SEARCH_REMOVE_TOPICS: null,
  SEARCH_CLEAR_TOPICS: null,
  SEARCH_SET_SORT: null,
  SEARCH_SET_TOPICS_ONLY: null,
  SEARCH_SET_FILTERS: null,
});

module.exports = SearchActionTypes;
