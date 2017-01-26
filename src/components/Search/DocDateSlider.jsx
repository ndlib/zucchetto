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
    emitter: React.PropTypes.object,
  },

  storedState() {
    var currentFilters = SearchStore.selectedFilters["global"];

    var minDocDate = Number(ItemStore.getEarliestDocYear(this.props.collection));
    var maxDocDate = Number(new Date().getFullYear());

    var currentMin = currentFilters["minDate"] ? currentFilters["minDate"] : minDocDate;
    var currentMax = currentFilters["maxDate"] ? currentFilters["maxDate"] : maxDocDate;
    return({
      minDocDate: minDocDate,
      maxDocDate: maxDocDate,

      minDate: Number(currentMin),
      maxDate: Number(currentMax),
    });
  },

  getInitialState: function() {
    return this.storedState();
  },

  reset() {
    this.setState({
      minDate: this.state.minDocDate,
      maxDate: this.state.maxDocDate,
    });
  },

  componentWillMount() {
    this.props.emitter.addListener('reset', this.reset);
    this.setState(this.storedState());
  },

  componentWillUnmount() {
    this.props.emitter.removeListener('reset', this.reset);
  },

  onChange(e) {
    var min = e[0];
    var max = e[1];

    var data = {
      minDate: min,
      maxDate: max,
    }
    this.setState(data);
  },

  render: function() {
    var currentMin = this.state.minDate;
    var currentMax = this.state.maxDate;

    return(
      <div>
        <h4>Date Range</h4>
        <p>Min - Max: {currentMin} - {currentMax}</p>
        <Slider
          min={this.state.minDocDate}
          max={this.state.maxDocDate}
          range={true}
          allowCross={false}
          value={[currentMin, currentMax]}
          onChange={this.onChange}
        />
      </div>
    );
  }
});
module.exports = DocDateSlider
