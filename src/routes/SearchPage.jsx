'use strict'
import React, { Component, PropTypes } from 'react';
import Search from '../components/Search//Search.jsx';
import QueryParm from '../modules/QueryParam.js';
import FacetQueryParms from '../modules/FacetQueryParams.js';
import HoneycombURL from '../modules/HoneycombURL.js';
import VaticanID from '../constants/VaticanID.js';


class SearchPage extends Component {
  render() {
    return (
      <div>
        <Search
          collection={HoneycombURL() + "/v1/collections/"
            + VaticanID}
          hits={HoneycombURL() + '/v1/collections/' + VaticanID + '/search'}
          searchTerm={QueryParm('q')}
          sortTerm={QueryParm('sort')}
          facet={FacetQueryParms()}
          start={parseInt(QueryParm('start'))}
        />
        {this.props.children}
      </div>

    )
  }
}

export default SearchPage;
