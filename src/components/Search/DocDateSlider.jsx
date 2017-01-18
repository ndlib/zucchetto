'use strict'
var React = require('react');
var ItemStore = require('../../store/ItemStore.js');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var Slider = require('rc-slider');
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

  onChange(e) {
    var min = e[0];
    var max = e[1];

    this.setState({
      minValue: min,
      maxValue: max,
    });

    SearchActions.setFilters(this.props.collection, {
      minDate: min,
      maxDate: max,
    });
  },

  render: function() {
    var minDocDate = Number(ItemStore.getEarliestDocYear(this.props.collection));
    var maxDocDate = Number(new Date().getFullYear());

    return(
      <div>
        <h4>Date Range</h4>
        <p>Min - Max: {this.state.minValue} - {this.state.maxValue}</p>
        <Slider
          min={minDocDate}
          max={maxDocDate}
          range={true}
          allowCross={false}
          value={[Number(this.state.minValue), Number(this.state.maxValue)]}
          onChange={this.onChange}
          pushable={10}
        />
      </div>
    );
  }
});
module.exports = DocDateSlider
