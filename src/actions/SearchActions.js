"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
var QueryParam = require('../modules/QueryParam.js');

class SearchActions {
  setParamsFromUri() {
    var topicsParam = QueryParam('t');
    var searchTermParam = QueryParam('q');
    var topics = topicsParam == null ? [] : decodeURIComponent(topicsParam).split(',');
    var searchTerm = searchTermParam == null ? "" : decodeURIComponent(searchTermParam);
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_SET_PARAMS,
      topics: topics,
      searchTerm: searchTerm,
    });
  }

  setTerm(searchTerm){
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_SET_TERM,
      searchTerm: searchTerm
    });
  }

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
