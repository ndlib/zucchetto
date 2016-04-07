var AppDispatcher = require("../dispatcher/AppDispatcher.jsx");
var EventEmitter = require("events").EventEmitter;
var SearchActionTypes = require("../constants/SearchActionTypes.jsx");

class SearchStore extends EventEmitter {
  constructor() {
    super();

    this._topics = {};
    Object.defineProperty(this, "topics", { get: this.getTopics });

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
    this.emitChange();
  }

  removeTopics(topics) {
    topics.forEach(function(topic) { delete this._topics[topic] }.bind(this));
    this.emitChange();
  }

  hasTopic(topic) {
    return this._topics[topic];
  }

  getTopics() {
    return Object.keys(this._topics);
  }

  // Receives actions sent by the AppDispatcher
  receiveAction(action) {
    switch(action.actionType) {
      case SearchActionTypes.SEARCH_ADD_TOPICS:
        this.addTopics(action.topics);
        break;
      case SearchActionTypes.SEARCH_REMOVE_TOPICS:
        this.removeTopics(action.topics);
        break;
      default:
        break;
    }
  }
}

module.exports = new SearchStore();
