"use strict"
var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
var QueryParam = require('../modules/QueryParam.js');

class SearchActions {

  decodeKey(key) {
    var param = QueryParam(key);
    return param == null ? "" : decodeURIComponent(param);
  }

  decodeArray(key) {
    var param = QueryParam(key);
    return param == null ? [] : decodeURIComponent(param).split(',');
  }

  setParamsFromUri() {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_INI_PARAMS,
      topics: this.decodeArray('t'),
      searchTerm: this.decodeKey('q'),
      sort: this.decodeKey('sort'),
      minDate: this.decodeKey('minDate'),
      maxDate: this.decodeKey('maxDate'),
      vDocSource: this.decodeArray('v.docSource'),
      vDocType: this.decodeArray('v.docType'),
      hDocSource: this.decodeArray('h.docSource'),
      hDocType: this.decodeArray('h.docType'),
      topicsOnly: this.decodeKey('to'),
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

  setFilters(collection, filters) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_SET_FILTERS,
      collection: collection,
      filters: filters,
    });
  }

  addFilters(collection, filters) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_ADD_FILTERS,
      collection: collection,
      filters: filters,
    });
  }

  removeFilters(collection, filters = {}) {
    AppDispatcher.dispatch({
      actionType: SearchActionTypes.SEARCH_REMOVE_FILTERS,
      collection: collection,
      filters: filters,
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

  performSearch(collection, topics, searchTerm, topicsOnly) {
    var queryUrl = collection
                   + '/search/children?q=' + this.buildQuery(topics, searchTerm, topicsOnly)
                   + '&rows=10000';

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
      }.bind(this),
      error: function(request, status, thrownError) {
        console.log(thrownError);
      }
    });
  }

  buildQuery(topics, searchTerm, topicsOnly) {
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
      if(topicsOnly) {
        q += "actors_t:(" + searchTerm + ")";
      } else {
        // make sure we're only getting hits of type body (paragraph, no headings/subheadings/etc)
        q += searchTerm + " AND type_of_text_t:BodyText";
      }
    }
    return encodeURIComponent(q);
  }
}
module.exports = new SearchActions();
