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

  addTopic(topic) {
    this._topics[topic] = true;
    this.emit("SearchStoreChanged");
  }

  removeTopic(topic) {
    delete this._topics[topic];
    this.emit("SearchStoreChanged");
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
      case SearchActionTypes.SEARCH_ADD_TOPIC:
        this.addTopic(action.topic);
        break;
      case SearchActionTypes.SEARCH_REMOVE_TOPIC:
        this.removeTopic(action.topic);
        break;
      default:
        break;
    }
  }
}

module.exports = new SearchStore();
