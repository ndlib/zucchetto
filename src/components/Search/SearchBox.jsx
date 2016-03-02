'use strict'
var React = require('react');
var mui = require('material-ui');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var VaticanID = require('../../constants/VaticanID.js');
var HumanRightsID = require('../../constants/HumanRightsID.js');

var SearchBox = React.createClass({
  onChange: function(e) {
    this.setTerm(e.target.value);
  },

  onClick: function(e) {
    var url = window.location.origin
      + "/search?q=" + this.state.searchTerm;
    window.location = url;
  },

  componentDidMount: function() {
    this.setTerm(SearchStore.searchTerm);
  },

  setTerm: function(term) {
    var cleanTerm = encodeURIComponent(term);
    this.setState({searchTerm: cleanTerm});
  },

  inputStyle: function() {
    return ({
      height: '36px',
    });
  },

  handleKeyDown: function(e) {
    var ENTER = 13;
    if( e.keyCode == ENTER ) {
        this.onClick(e);
    }
  },

  input: function() {
    return (<input
      placeholder='SEARCH THE DATABASE'
      ref='searchBox'
      onChange={this.onChange}
      //defaultValue={SearchStore.searchTerm}
      onKeyDown={this.handleKeyDown}
      inputStyle={this.inputStyle()}
      style={{
        fontFamily: 'GPCMed, sans-serif',
        height:'36px',
        minWidth: '150px',
        paddingLeft: '4px',
        verticalAlign:'top',
       }}
    />);
  },

  render: function() {
    return(
      <div style={{display:'inline-block', margin:'0'}}>
        {this.input()}
        <mui.RaisedButton
          onClick={this.onClick}
          style={{
            zIndex: '0',
            minWidth: 'auto',
            boxShadow: 'none',
            lineHeight: '36px'
          }}
          backgroundColor='#224048'
          disableTouchRipple={true}
        >
          <mui.FontIcon
            className="material-icons"
            style={{
              color: 'white',
              padding: '0 1px',
              verticalAlign: 'middle'
            }}
          >search</mui.FontIcon>
        </mui.RaisedButton>
      </div>
    );
  }
});
module.exports = SearchBox
