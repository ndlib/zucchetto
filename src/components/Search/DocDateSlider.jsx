'use strict'
var React = require('react');
var ItemStore = require('../../store/ItemStore.js');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
import mui from 'material-ui';

var DocDateSlider = React.createClass({
  propTypes: {
    collection: React.PropTypes.string,
  },

  storedState() {
    var currentFilters = SearchStore.selectedFilters;
    var minDate = currentFilters["minDate"] ? currentFilters["minDate"] : ItemStore.getEarliestDocYear(this.props.collection);
    var maxDate = currentFilters["maxDate"] ? currentFilters["maxDate"] : new Date().getFullYear();
    return({
      minValue: minDate,
      maxValue: maxDate,
    });
  },

  getInitialState: function() {
    return this.storedState();
  },

  componentWillReceiveProps(nextProps) {
    this.setState(this.storedState());
  },

  onMinChange(e, newValue) {
    var maxValue = Math.max(this.state.maxValue, newValue);
    this.setState({
      maxValue: maxValue,
      minValue: newValue,
    });

    SearchActions.setFilters(this.props.collection, {
      minDate: newValue,
      maxDate: maxValue,
    });
  },

  onMaxChange(e, newValue) {
    var minValue = Math.min(this.state.minValue, newValue);
    this.setState({
      maxValue: newValue,
      minValue: minValue,
    });

    SearchActions.setFilters(this.props.collection, {
      maxDate: newValue,
      minDate: minValue,
    });
  },

  render: function() {
    var minDocDate = ItemStore.getEarliestDocYear(this.props.collection);
    var maxDocDate = new Date().getFullYear();

    return(
      <div>
        <h4>Date Range</h4>
        <p>Min - {this.state.minValue}</p>
        <mui.Slider
          name='Min Slider'
          axis='x'
          value={this.state.minValue}
          max={maxDocDate}
          min={minDocDate}
          step={1}
          onChange={this.onMinChange}
          style={{ margin: 0 }}
        />
        <p>Max - {this.state.maxValue}</p>
        <mui.Slider
          name='Max Slider'
          axis='x'
          value={this.state.maxValue}
          max={maxDocDate}
          min={minDocDate}
          step={1}
          onChange={this.onMaxChange}
          style={{
            marginTop: 0,
            marginBottom: '24px',
          }}
        />
      </div>
    );
  }
});
module.exports = DocDateSlider
