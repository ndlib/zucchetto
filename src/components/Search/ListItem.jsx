'use strict'
var React = require('react');
var mui = require('material-ui');

var ListItem = React.createClass({
  mixins: [
    require('../../mixins/LoadRemoteMixin.jsx')
  ],

  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  componentWillMount: function() {
    //this.loadRemoteItem(this.props.item['@id']);
  },

  render: function() {
    var item = this.props.item;

    return (
      <div>
        <h4>{item.name}</h4>
        <div>{item.description}</div>
        <div>Add to Notebook</div>
        <div>Download PDF</div>
      </div>
    );
  }
});

module.exports = ListItem;
