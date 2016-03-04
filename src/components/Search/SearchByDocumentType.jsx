'use strict'
import React, { Component, PropTypes } from 'react';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import ListItemStyle from '../../modules/ListItemStyle.js';

class SearchByDocumentType extends Component {
  render() {
    return (
      <div>
        <h4>Search By Document Type</h4>
          <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
            }}>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>Catholic Social Teaching</li>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>International Human Rights Law</li>
        </ul>
      </div>
    );
  }
}
export default SearchByDocumentType;
