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

    AppDispatcher.register(this.receiveAction.bind(this));
  }

  addChangeListener(callback) {
    this.on("SearchStoreChanged", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("SearchStoreChanged", callback);
  }

  emitChange() {
    this.emit("SearchStoreChanged");
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

  searchUri() {
    return '/search?q=' + this._searchTerm + '&t=' + this.getTopics().join(',');
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case SearchActionTypes.SEARCH_SET_PARAMS:
        this.addTopics(action.topics);
        this._searchTerm = action.searchTerm;
        this.emitChange();
        break;
      case SearchActionTypes.SEARCH_SET_TERM:
        this._searchTerm = action.searchTerm;
        this.emitChange();
        break;
      case SearchActionTypes.SEARCH_ADD_TOPICS:
        this.addTopics(action.topics);
        this.emitChange();
        break;
      case SearchActionTypes.SEARCH_REMOVE_TOPICS:
        this.removeTopics(action.topics);
        this.emitChange();
        break;
      default:
        break;
    }
  }
}

module.exports = new SearchStore();
