'use strict'
var React = require('react');
var IDFromAtID = require("../../modules/IDFromAtID.js");
var CheckLocalStorage = require('../../modules/CheckLocalStorage.js');

var ListItem = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      checked: CheckLocalStorage(this.props.item['@id']),
    }
  },

  onClick: function() {
    this.setState({checked: !this.state.checked});
    this.addToNoteBook(this.props.item);
  },

  checkboxStyle: function() {
    return {
      fontSize: '18px',
      verticalAlign: 'text-top',
      paddingRight: '20px',
    }
  },

  checked: function() {
    if(this.state.checked) {
      return (<i className="material-icons" style={this.checkboxStyle()}>check_box</i>);
    }
    return (<i className="material-icons" style={this.checkboxStyle()}>check_box_outline_blank</i>);
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
        <div onClick={this.onClick} style={{color: '#224048', cursor: 'pointer'}}>{this.checked()}Add to Notebook</div>

      </div>
    );
  }
});

module.exports = ListItem;
