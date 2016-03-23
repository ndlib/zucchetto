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
    var defaultValue = '';
    if(window.location.search) {
      defaultValue = window.location.search.split(',')[0].replace('?q=', '')
    }
    return (<input
      placeholder='SEARCH THE DATABASE'
      ref='searchBox'
      onChange={this.onChange}
      defaultValue={defaultValue}
      onKeyDown={this.handleKeyDown}
      inputStyle={this.inputStyle()}
      style={{
        fontFamily: 'GPCMed, sans-serif',
        height:'36px',
        minWidth: '100%',
        paddingLeft: '4px',
        verticalAlign:'top',
       }}
    />);
  },

  render: function() {
    return(
      <div style={{
          display: 'block',
          margin: '0',
          textAlign: 'center',
          width: '100%'}}
      >
        {this.input()}
        <mui.RaisedButton
          onClick={this.onClick}
          style={{
            boxShadow: 'none',
            float: 'right',
            lineHeight: '36px',
            marginLeft: '-36px',
            minWidth: '36px',
            width: '36px',
            zIndex: '0',

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
