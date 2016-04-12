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
      actionType: SearchActionTypes.SEARCH_INI_PARAMS,
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

  performSearch(collection, topics, searchTerm) {
    $.ajax({
      context: this,
      type: "GET",
      url:  collection + '/search?q=' + this.buildQuery(topics, searchTerm) + '&rows=10000',
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: SearchActionTypes.SEARCH_SET_HITS,
          collection: collection,
          hits: result.hits
        });
      }.bind(this),
      error: function(request, status, thrownError) {
        console.log(thrownError);
      }
    });
  }

  buildQuery(topics, searchTerm) {
    var qualifiedTopics = topics.map(function(v,i) { return '"' + v +'"' });
    var unionTopics = qualifiedTopics.join(" OR ");
    var q = "(" + unionTopics + ")";
    if(searchTerm != "") {
      q += " AND \"" + searchTerm + '"';
    }
    return encodeURIComponent(q);
  }
}
module.exports = new SearchActions();
