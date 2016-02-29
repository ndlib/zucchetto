"use strict"
var React = require("react");
var IDFromAtID = require("../modules/IDFromAtID.js");
var ItemActions = require('../actions/ItemActions.jsx');
var HoneycombURL = require('../modules/HoneycombURL.js');

var LoadRemoteMixin = {
  propTypes: {
    collection: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object,
    ]),
  },

  getInitialState: function() {
    return {
      collection: {},
      remoteCollectionLoaded: false,
    };
  },

  loadRemoteCollection: function(url) {
    $.ajax({
      context: this,
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(result) {
        // If the object has a setValues method and it returns true, it means the object
        // has already set the state and we should not do it again.
        if(this.setValues == undefined || !this.setValues(result))
        {
          this.setState({
            remoteCollectionLoaded: true,
            collection: result,
          });
        }
      },
      error: function(request, status, thrownError) {
        window.location = window.location.origin + '/404';
      }
    });
  },

  addToNoteBook: function(item) {
    var id = IDFromAtID(item['@id']);
    var collection = IDFromAtID(item['collection']);

    if(window.localStorage.getItem(id)){
      window.localStorage.removeItem(id, collection);
    } else {
      window.localStorage.setItem(id, collection);
    }
    console.log(window.localStorage);
  },

  itemOnClick: function() {
    this.addToNoteBook(this.props.item['@id']);
    window.location.hash = this.props.item['@id'].split("/").pop();
  },
}

module.exports = LoadRemoteMixin;
