'use strict'
import React, { Component, PropTypes } from 'react';
import SearchBox from './SearchBox.jsx';

import SearchByTopic from './SearchByTopic.jsx';
import SearchByDate from './SearchByDate.jsx';
import SearchByDocumentType from './SearchByDocumentType.jsx';
import SearchByGeographicRegion from './SearchByGeographicRegion.jsx';
import ShareSave from '../Document/ShareSave.jsx';

class SearchSidebar extends Component {

  render() {
    var height = window.innerHeight - 51;
    return (
      <div className="col-sm-3 left-col" style={{ minHeight: "100vh" }}>
        <SearchByTopic />
      </div>
    );
  }
}

export default SearchSidebar;
