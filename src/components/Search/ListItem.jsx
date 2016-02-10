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
      <div style={{
          backgroundColor:'white',
          fontFamily: 'GPCMed, sans-serif',
          color: '#a7a7a5',
          margin: '0.5em 0',
          padding: '0.2em 1em'
        }}
      >
        <h4 style={{color:'#D5B117'}}>{item.name}</h4>
        <div>{item.description}</div>
        <div style={{float: 'right'}}>Download PDF</div>
        <div>Add to Notebook</div>

      </div>
    );
  }
});

module.exports = ListItem;
