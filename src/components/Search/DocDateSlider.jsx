'use strict'
var React = require('react');
var ItemStore = require('../../store/ItemStore.js');
import mui from 'material-ui';

var DocDateSlider = React.createClass({
  propTypes: {
    collection: React.PropTypes.string,
  },

  getInitialState: function() {
    return({
      minValue: ItemStore.getEarliestDocYear(this.props.collection),
      maxValue: new Date().getFullYear(),
    });
  },

  onMinChange(e, newValue) {
    this.setState({
      maxValue: Math.max(this.state.maxValue, newValue),
      minValue: newValue
    });
  },

  onMaxChange(e, newValue) {
    this.setState({
      maxValue: newValue,
      minValue: Math.min(this.state.minValue, newValue)
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
          style={{ marginTop: 0 }}
        />
      </div>
    );
  }
});
module.exports = DocDateSlider
