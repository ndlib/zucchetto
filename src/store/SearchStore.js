var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var EventEmitter = require("events").EventEmitter;
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
var IDFromAtID = require("../modules/IDFromAtID.js");
var _ = require('underscore');

class SearchStore extends EventEmitter {
  constructor() {
    super();

    this._topics = {};
    Object.defineProperty(this, "topics", { get: this.getTopics });

    this._searchTerm = "";
    Object.defineProperty(this, "searchTerm", { get: function() { return this._searchTerm; } });

    this._hits = {};

    this._sorts = [
                    { name: "Relevance", value: "relevance" },
                    { name: "Date New-Old", value: "year_desc" },
                    { name: "Date Old-New", value: "year_asc" },
                    { name: "Name A-Z", value: "name_asc" },
                    { name: "Name Z-A", value: "name_desc" },
                    { name: "# of Results", value: "hits_desc" },
                  ];
    this._sortOption = "relevance";

    Object.defineProperty(this, "sorts", { get: function() { return this._sorts; } });
    Object.defineProperty(this, "sortOption", { get: function() { return this._sortOption; } });

    AppDispatcher.register(this.receiveAction.bind(this));
  }

  // Adds a callback to listen for changes to the topics or the search term
  addQueryChangeListener(callback) {
    this.on("SearchStoreQueryChanged", callback);
  }

  removeQueryChangeListener(callback) {
    this.removeListener("SearchStoreQueryChanged", callback);
  }

  emitQueryChange() {
    this.emit("SearchStoreQueryChanged");
  }

  // Adds a callback to listen for changes to the resulting hits for a collection
  addResultsChangeListener(callback) {
    this.on("SearchStoreResultsChanged", callback);
  }

  removeResultsChangeListener(callback) {
    this.removeListener("SearchStoreResultsChanged", callback);
  }

  emitResultsChange(collection) {
    this.emit("SearchStoreResultsChanged", collection);
  }

  // Adds a callback to listen for changes to the resulting hits for a collection
  addTopicsChangeListener(callback) {
    this.on("SearchStoreTopicsChanged", callback);
  }

  removeTopicsChangeListener(callback) {
    this.removeListener("SearchStoreTopicsChanged", callback);
  }

  emitTopicsChange(topics, add, clearAll) {
    this.emit("SearchStoreTopicsChanged", topics, add, clearAll);
  }

  addTopics(topics) {
    topics.forEach(function(topic) { this._topics[topic] = true }.bind(this));
  }

  removeTopics(topics) {
    topics.forEach(function(topic) { delete this._topics[topic] }.bind(this));
  }

  hasTopic(topic) {
    return this._topics[topic];
  }

  getTopics() {
    return Object.keys(this._topics);
  }

  getHits(collection) {
    if(this._hits[collection]) {
      return this._hits[collection];
    }
    return null;
  }

  setHits(collection, hits) {
    var collection_id = IDFromAtID(collection);
    var items = [];
    for (var g in hits.group) {
      if (hits.group.hasOwnProperty(g)){
        var group = hits.group[g];
        group.collection = collection
        group.collection_id = collection_id;
        group.id = IDFromAtID(group["@id"]);
        for(var h in group.hits) {
          group.hits[h].collection = collection;
          group.hits[h].collection_id = collection_id;
          group.hits[h].id = IDFromAtID(group.hits[h]["@id"]);
        }
        items.push(group);
      }
    }
    this._hits[collection] = items;
  }

  searchUri() {
    var outUri = '/search?q=' + this._searchTerm + '&t=' + this.getTopics().join(',');
    if(this._sortOption) {
      outUri += "&sort=" + this._sortOption;
    }

    return outUri;
  }

  hasSearch() {
    if (this.searchUri() == "/search?q=&t=") {
      return false;
    }
    return true;
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case SearchActionTypes.SEARCH_INI_PARAMS:
        this._topics = {};
        this.addTopics(action.topics);
        this._searchTerm = action.searchTerm;
        this._sortOption = action.sort;
        break;
      case SearchActionTypes.SEARCH_SET_TERM:
        this._searchTerm = action.searchTerm;
        this.emitQueryChange();
        break;
      case SearchActionTypes.SEARCH_SET_HITS:
        this.setHits(action.collection, action.hits);
        this.emitResultsChange(action.collection);
        break;
      case SearchActionTypes.SEARCH_ADD_TOPICS:
        this.addTopics(action.topics);
        this.emitQueryChange();
        this.emitTopicsChange(action.topics, true, false);
        break;
      case SearchActionTypes.SEARCH_REMOVE_TOPICS:
        this.removeTopics(action.topics);
        this.emitQueryChange();
        this.emitTopicsChange(action.topics, false, false);
        break;
      case SearchActionTypes.SEARCH_CLEAR_TOPICS:
        this._topics = {};
        this.emitQueryChange();
        this.emitTopicsChange([], false, true);
        break;
      case SearchActionTypes.SEARCH_SET_SORT:
        this._sortOption = action.sort;
        this.emitResultsChange();
        break;
      default:
        break;
    }
  }
}

module.exports = new SearchStore();
