import { CircularProgress, FontIcon, RaisedButton } from 'material-ui';
import _ from 'underscore';
var React = require('react');
var TokenInput = require('react-tokeninput');
var ComboboxOption = require('react-tokeninput').Option;
var without = _.without;
var uniq = _.uniq;
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var VaticanID = require('../../constants/VaticanID.js');
var HumanRightsID = require('../../constants/HumanRightsID.js');
var TopicsForAutoComplete = require('./TopicsForAutoComplete.js');

var TokenSearchBox = React.createClass({

  getInitialState: function() {
    var selectedTerms = [];
    if(SearchStore.searchTerm.length > 0) {
      selectedTerms = SearchStore.searchTerm.split(',').map(
        function(x){
          x = x.replace(/\"/gi, '');
          return {name: x, id: x}
      });
    }
    return {
      input: SearchStore.searchTerm,
      loading: false,
      selected: selectedTerms,
      options: TopicsForAutoComplete,
      searchTerm: SearchStore.searchTerm
    };
  },

  handleChange: function(value) {
    this.setState({
      selected: value
    })
  },

  handleRemove: function(value) {
    var selectedOptions = uniq(without(this.state.selected,value))
    this.handleChange(selectedOptions)
  },

  handleSelect: function(value, combobox) {
    if(typeof value === 'string') {
      value = { id: value, name: value };
    }

    var selected = uniq(this.state.selected.concat([value]))
    this.setState({
      selected: selected,
      selectedToken: null
    })

    this.handleChange(selected)
  },

  handleInput: function(userInput) {
    this.setState({
      input: userInput,
      loading: true,
      options: []
    })
    setTimeout(function () {
      this.filterTags(this.state.input)
      this.setState({
        loading: false
      })
    }.bind(this), 500)
  },

  onClick: function(e) {
    var terms = [];
    for(var i = 0; i < this.state.selected.length; i++) {
      terms.push('"' + this.state.selected[i].id + '"')
    }
    SearchActions.setTerm(terms.join(','));
  },

  filterTags: function(userInput) {
    if (userInput === '')
      return this.setState({options: []});
    var filter = new RegExp(userInput, 'i');
    var filteredNames = TopicsForAutoComplete.filter(function(state) {
      return filter.test(state.name); // || filter.test(state.id);
    }).filter(function(state) {
      return this.state.selected
        .map(function(value) { return value.name })
        .indexOf(state.name) === -1
    }.bind(this))
    this.setState({
      options: filteredNames
    });
  },

  renderComboboxOptions: function() {
    return this.state.options.map(function(name) {
      return (
        <ComboboxOption
          key={name.id}
          value={name}
        >{name.name}</ComboboxOption>
      );
    });
  },

  render: function() {
    var selectedNames = this.state.selected.map(function(tag) {
      return <li key={ tag.id }>{ tag.name }</li>
    })

    var options = this.state.options.length ?
      this.renderComboboxOptions() : [];

    const loadingComponent = (
      <CircularProgress size= { 0.25 } color= '#224048' style={{ paddingTop: '10px'}} />
    )

    return (
      <div style={{
          display: 'block',
          margin: '0',
          width: '100%'}}
      >
        <div
          style={{
            display: 'inline-block',
            fontFamily: 'GPCMed, sans-serif',
            height:'36px',
            width: 'calc(100% - 36px)',
            paddingLeft: '4px',
            verticalAlign:'top',
          }}
        >
          <TokenInput
            isLoading={ this.state.loading }
            loadingComponent={ loadingComponent }
            menuContent={ options }
            onChange={ this.handleChange }
            onInput={ this.handleInput }
            onSelect={ this.handleSelect }
            onRemove={ this.handleRemove }
            selected={ this.state.selected }
            placeholder={ this.state.selected.length > 0 ? '' : 'SEARCH THE DATABASE' }
            onSubmit={ this.onClick }
            />
          </div>
          <RaisedButton
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
})

export default TokenSearchBox;
