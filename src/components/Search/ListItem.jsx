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

  onClick: function() {

    this.addToNoteBook(this.props.item);
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
        <h4 style={{color:'#D5B117', cursor: 'pointer'}} onClick={this.onClick}>{item.name}</h4>
        <div>{item.description}</div>
        <div style={{color: '#224048', float: 'right'}}>Download PDF</div>
        <div onClick={this.onClick} style={{color: '#224048', cursor: 'pointer'}}>Add to Notebook</div>

      </div>
    );
  }
});

module.exports = ListItem;
