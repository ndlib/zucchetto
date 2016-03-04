'use strict'
import React, { Component, PropTypes } from 'react';
import ListItemStyle from '../../modules/ListItemStyle.js';

class SearchByTopic extends Component {
  render() {
    return (
        <div>
          <h4>Search By Topic</h4>
          <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
            }}>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Values</li>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Groups of People</li>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Rights/Freedoms</li>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Topic</li>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Topic</li>
            <li><i
              className="material-icons"
              style={ListItemStyle()}
              >play_arrow</i>Topic</li>
          </ul>
        </div>
      );
  }
}
export default SearchByTopic;
