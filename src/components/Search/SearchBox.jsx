'use strict'
var React = require('react');
var mui = require('material-ui');
var SearchActions = require('../../actions/SearchActions.js');
var VaticanID = require('../../constants/VaticanID.js');
var HumanRightsID = require('../../constants/HumanRightsID.js');

var SearchBox = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      searchTerm: decodeURIComponent(window.location.search.split(',')[0].replace('?q=', ''))
    };
  },

  onChange: function(e) {
    this.setTerm(e.target.value);
  },

  onClick: function(e) {
    this.context.router.push("/search?q=" + encodeURIComponent(this.state.searchTerm));
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
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
      defaultValue={this.state.searchTerm}
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
