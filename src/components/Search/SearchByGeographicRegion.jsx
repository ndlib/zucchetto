'use strict'
import React, { Component, PropTypes } from 'react';
import ListItemStyle from '../../modules/ListItemStyle.js';

class SearchByGeographicRegion extends Component {


  render() {
    return (<div />);

    return (
      <div>
        <h4>Search By Geographic Region</h4>
          <ul style={{
              listStyleType: 'none',
              paddingLeft: '0',
            }}>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>Asia</li>
          <li><i
            style={ListItemStyle()}
            className="material-icons"
            >play_arrow</i>Australia</li>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>Europe</li>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>India</li>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>North American</li>
          <li><i
            className="material-icons"
            style={ListItemStyle()}
            >play_arrow</i>South American</li>
        </ul>
      </div>
    );
  }
}
export default SearchByGeographicRegion;
