var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var EventEmitter = require("events").EventEmitter;
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");
var IDFromAtID = require("../modules/IDFromAtID.js");
var DeepCopy = require("../modules/DeepCopy.js");
var _ = require('underscore');

import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';

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

    this._selectedFilters = { "global": {} }
    this._selectedFilters[HumanRightsID] = {
      docType: [],
      docSource: [],
    }
    this._selectedFilters[VaticanID] = {
      docType: [],
      docSource: [],
    }

    this._topicsOnly = false;

    Object.defineProperty(this, "sorts", { get: function() { return this._sorts; } });
    Object.defineProperty(this, "sortOption", { get: function() { return this._sortOption; } });
    Object.defineProperty(this, "selectedFilters", { get: function() { return this._selectedFilters; } });
    Object.defineProperty(this, "topicsOnly", { get: function() { return this._topicsOnly; } });

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

  // Adds a callback to listen for changes to the search parameters
  addParamsChangeListener(callback) {
    this.on("SearchStoreParamsChanged", callback);
  }

  removeParamsChangeListener(callback) {
    this.removeListener("SearchStoreParamsChanged", callback);
  }

  emitParamsChange() {
    this.emit("SearchStoreParamsChanged");
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

  addFilters(collection, filters) {
    for(var key in filters) {
      var current = this._selectedFilters[collection][key];
      if(!current) {
        current = filters[key];
      } else if(current instanceof Array) {
        if(filters[key] instanceof Array) {
          current.push(...filters[key]);
        } else {
          current.push(filters[key]);
        }
      }
    }
  }

  removeArrayValue(array, value) {
    for(var i = 0; i < array.length; ++i) {
      if(array[i] == value) {
        array.splice(i, 1);
        break;
      }
    }
  }

  removeFilters(collection, filters) {
    if(!filters) {
      this._selectedFilters[collection] = {};
    } else {
      for(var key in filters) {
        var current = this._selectedFilters[collection][key];

        if(filters[key] instanceof Array) {
          for(var i = 0; i < filters[key].length; ++i) {
            this.removeArrayValue(current, filters[key][i]);
          }
        } else if(current) {
          delete this._selectedFilters[collection][key];
        }
      }
    }
  }

  setFilters(collection, filters) {
    var id = collection ? collection : "global";

    this._selectedFilters[id] = DeepCopy(filters);
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

  makeUriElement(obj, key, name) {
    var out = "";
    var writeKey = "&" + (name ? name : key) + "=";
    if(obj[key]) {
      if(obj[key] instanceof Array) {
        if(obj[key].length > 0) {
          out = writeKey + obj[key].join(',');
        }
      } else {
        out = writeKey + obj[key];
      }
    }
    return out;
  }

  searchUri() {
    var outUri = '/search?q=' + this._searchTerm + '&t=' + this.getTopics().join(',');
    if(this._sortOption) {
      outUri += "&sort=" + this._sortOption;
    }

    outUri += this.makeUriElement(this._selectedFilters["global"], "minDate");
    outUri += this.makeUriElement(this._selectedFilters["global"], "maxDate");

    outUri += this.makeUriElement(this._selectedFilters[VaticanID], "docSource", "v.docSource");
    outUri += this.makeUriElement(this._selectedFilters[VaticanID], "docType", "v.docType");

    outUri += this.makeUriElement(this._selectedFilters[HumanRightsID], "docSource", "h.docSource");
    outUri += this.makeUriElement(this._selectedFilters[HumanRightsID], "docType", "h.docType");

    if(this._topicsOnly) {
      outUri += "&to=true";
    }

    return outUri;
  }

  hasSearch() {
    if (this.searchUri() == "/search?q=&t=" || this.searchUri() == "/search?q=&t=&sort=relevance") {
      return false;
    }
    return true;
  }

  totalDocumentHits() {
    var total = 0;
    for(var collection in this._hits){
      total += this._hits[collection].length;
    }
    return total;
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case SearchActionTypes.SEARCH_INI_PARAMS:
        this._topics = {};
        this.addTopics(action.topics);
        this._searchTerm = action.searchTerm;
        this._sortOption = action.sort;
        this._topicsOnly = Boolean(action.topicsOnly);
        this.setFilters(VaticanID, {
          docSource: action.vDocSource,
          docType: action.vDocType,
        });
        this.setFilters(HumanRightsID, {
          docSource: action.hDocSource,
          docType: action.hDocType,
        });
        this.setFilters(null, {
          minDate: action.minDate,
          maxDate: action.maxDate,
        });
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
        this.emitParamsChange();
        break;
      case SearchActionTypes.SEARCH_SET_TOPICS_ONLY:
        this._topicsOnly = action.activated;
        this.emitQueryChange();
        break;
      case SearchActionTypes.SEARCH_SET_FILTERS:
        this.setFilters(action.collection, action.filters);
        this.emitParamsChange();
        this.emitResultsChange();
        break;
      default:
        break;
    }
  }
}

module.exports = new SearchStore();
