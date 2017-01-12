"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
var QueryParam = require('../modules/QueryParam.js');

class SearchActions {
  setParamsFromUri() {
    var topicsParam = QueryParam('t');
    var searchTermParam = QueryParam('q');
    var sortParam = QueryParam('sort');
    var topics = topicsParam == null ? [] : decodeURIComponent(topicsParam).split(',');
    var searchTerm = searchTermParam == null ? "" : decodeURIComponent(searchTermParam);
    var sort = sortParam == null ? "" : decodeURIComponent(sortParam);
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_INI_PARAMS,
      topics: topics,
      searchTerm: searchTerm,
      sort: sort,
    });
  }

  setTerm(searchTerm){
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_SET_TERM,
      searchTerm: searchTerm
    });
  }

  setSort(sort) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_SET_SORT,
      sort: sort
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

  clearTopics() {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_CLEAR_TOPICS
    });
  }

  performSearch(collection, topics, searchTerm, sort) {
    var queryUrl = collection
                   + '/search/children?q=' + this.buildQuery(topics, searchTerm)
                   + '&rows=10000';
    if(sort) {
      queryUrl += "&sort=" + sort;
    }

    $.ajax({
      context: this,
      type: "GET",
      url:  queryUrl,
      dataType: "json",
      success: function(result) {
        AppDispatcher.dispatch({
          actionType: SearchActionTypes.SEARCH_SET_HITS,
          collection: collection,
          hits: result.hits
        });
        AppDispatcher.dispatch({
          actionType: SearchActionTypes.SEARCH_SET_SORT_OPTIONS,
          sorts: result.sorts
        });
      }.bind(this),
      error: function(request, status, thrownError) {
        console.log(thrownError);
      }
    });
  }

  buildQuery(topics, searchTerm) {
    var q = "";
    if(topics.length > 0) {
      var qualifiedTopics = topics.map(function(v,i) { return v });
      var unionTopics = qualifiedTopics.join(" OR ");
      q += "actors_t:(" + unionTopics + ")";
    }
    if(searchTerm !== "") {
      if(q !== ""){
        q += " AND ";
      }
      q += searchTerm;
    }
    return encodeURIComponent(q);
  }
}
module.exports = new SearchActions();
