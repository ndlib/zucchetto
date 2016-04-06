"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
class SearchActions {
  addTopic(topic) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_ADD_TOPIC,
      topic: topic
    });
  }

  removeTopic(topic) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_REMOVE_TOPIC,
      topic: topic
    });
  }
}
module.exports = new SearchActions();
