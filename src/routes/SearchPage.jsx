'use strict'
import React, { Component, PropTypes } from 'react';
import Search from '../components/Search//Search.jsx';
import QueryParm from '../modules/QueryParam.js';
import HoneycombURL from '../modules/HoneycombURL.js'

class SearchPage extends Component {

  render() {
    return (
      <div>
        <Search
          collection={HoneycombURL() + "/v1/collections/"
            + 'animals'}
          hits={HoneycombURL() + '/v1/collections/' + 'animals' + '/search'}
          searchTerm={QueryParm('q')}
          sortTerm={QueryParm('sort')}
          facet={QueryParm('facet')}
          start={QueryParm('start')}
          view={QueryParm('view')}
        />
        {this.props.children}
      </div>
    )
  }
}

export default SearchPage;
