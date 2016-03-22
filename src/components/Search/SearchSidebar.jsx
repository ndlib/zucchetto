'use strict'
import React, { Component, PropTypes } from 'react';
import SearchBox from './SearchBox.jsx';

import SearchByTopic from './SearchByTopic.jsx';
import SearchByDate from './SearchByDate.jsx';
import SearchByDocumentType from './SearchByDocumentType.jsx';
import SearchByGeographicRegion from './SearchByGeographicRegion.jsx';

class SearchSidebar extends Component {

  render() {
    return (
      <div className="col-sm-2 left-col" >
        <SearchByTopic />
      </div>
    );
  }
}

export default SearchSidebar;
