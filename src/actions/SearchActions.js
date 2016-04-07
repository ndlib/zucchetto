"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
class SearchActions {
  addTopics(topics) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_ADD_TOPICS,
      topics: topics
    });
  }

  removeTopics(topics) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_REMOVE_TOPICS,
      topics: topics
    });
  }
}
module.exports = new SearchActions();
