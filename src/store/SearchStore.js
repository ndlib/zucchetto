var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var EventEmitter = require("events").EventEmitter;
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");

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
                    { name: "Year Ascending", value: "year_asc" },
                    { name: "Year Descending", value: "year_desc" },
                    { name: "Name Ascending", value: "name_asc" },
                    { name: "Name Descending", value: "name_desc" },
                    { name: "Hits Ascending", value: "hits_asc" },
                    { name: "Hits Descending", value: "hits_desc" },
                  ];
    this._sortOption = "relavence";

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
    var items = [];
    for (var h in hits.hit) {
      if (hits.hit.hasOwnProperty(h)){
        var hit = hits.hit[h];
        var item = hit;
        item.collection = collection
        items.push(item);
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
