'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { DatePicker, TextField, Toggle } from 'material-ui';

class SearchByDate extends Component {

  divStyle() {
    return {
      display: 'inline-block',
      marginRight: '20px',
    }
  }

  labelStyle() {
    return {
      display: 'block',
      fontSize: '0.9em',
      margin: '2px',
    }
  }

  inputStyle() {
    return {
      width: '80px',
    }
  }

  render() {
    return (
      <div>
        <h4>Search By Date</h4>
        <div>
          <div style={this.divStyle()}>
            <label
              for="startDate"
              style={this.labelStyle()}
            >Start</label>
            <input
              ref="startDate"
              style={this.inputStyle()}
              />
          </div>
          <div style={this.divStyle()}>
            <label
              for="endDate"
              style={this.labelStyle()}
            >End</label>
            <input
              ref="endDate"
              style={this.inputStyle()}
              />
          </div>
        </div>
      </div>
    );

  }
}
export default SearchByDate;
