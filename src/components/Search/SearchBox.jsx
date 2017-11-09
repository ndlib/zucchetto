'use strict'
var React = require('react');
var createReactClass = require('create-react-class');
import PropTypes from 'prop-types';
import mui, { FontIcon, RaisedButton } from 'material-ui';
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var VaticanID = require('../../constants/VaticanID.js');
var HumanRightsID = require('../../constants/HumanRightsID.js');
import AdvancedSearch from './AdvancedSearch.jsx';

var SearchBox = createReactClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      showAdvanced: false,
      searchTerm: SearchStore.searchTerm
    };
  },

  componentWillMount: function() {
    SearchStore.addResultsChangeListener(this.handleResultsChange);
  },

  componentWillUnmount: function() {
    SearchStore.removeResultsChangeListener(this.handleResultsChange);
  },

  handleResultsChange: function() {
    this.setState({ showAdvanced: SearchStore.hasSearch() });
  },

  onChange: function(e) {
    this.setTerm(e.target.value);
  },

  onClick: function(e) {
    SearchActions.setTerm(this.state.searchTerm);
    SearchActions.emitChange();
  },

  setTerm: function(term) {
    this.setState({ searchTerm: term });
    SearchActions.setTerm(term);
  },

  handleKeyDown: function(e) {
    var ENTER = 13;
    if( e.keyCode == ENTER ) {
        SearchActions.emitChange();
    }
  },

  input: function() {

    return (<input
      placeholder='SEARCH THE DATABASE'
      ref='searchBox'
      id='searchBox'
      onChange={this.onChange}
      defaultValue={this.state.searchTerm}
      onKeyDown={this.handleKeyDown}
      style={{
        fontFamily: 'GPCMed, sans-serif',
        height:'36px',
        minWidth: 'calc(100% - 72px)',
        paddingLeft: '4px',
        verticalAlign:'top',
        display: 'inline-block',
       }}
    />);
  },

  render: function() {
    return(
      <div style={{
          display: 'block',
          margin: '1em 0 0 0',
          textAlign: 'center',
          width: '100%'}}
      >
        {this.input()}
        { this.state.showAdvanced && <AdvancedSearch/> }
        <RaisedButton
          onClick={this.onClick}
          style={{
            boxShadow: 'none',
            lineHeight: '36px',
            minWidth: '36px',
            width: '36px',
            zIndex: '0',

          }}
          backgroundColor='#224048'
          disableTouchRipple={true}
        >
          <FontIcon
            className="material-icons"
            style={{
              color: 'white',
              padding: '0 1px',
              verticalAlign: 'middle'
            }}
          >search</FontIcon>
        </RaisedButton>
      </div>
    );
  }
});
export default SearchBox
