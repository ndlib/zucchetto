"use strict"
var React = require("react");
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

}

module.exports = LoadRemoteMixin;
