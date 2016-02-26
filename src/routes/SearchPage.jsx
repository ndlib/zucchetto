'use strict'
import React, { Component, PropTypes } from 'react';
import Search from '../components/Search/Search.jsx';
import QueryParm from '../modules/QueryParam.js';
import FacetQueryParms from '../modules/FacetQueryParams.js';
import HoneycombURL from '../modules/HoneycombURL.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import ItemPanel from "../components/Search/ItemPanel.jsx";
import SearchSidebar from '../components/Search/SearchSidebar.jsx';
const CATHOLIC = 'Catholic Social Teaching';
const HUMANRIGHTS = 'International Human Rights Law';

class SearchPage extends Component {
  listStyle(side) {
    return {
      backgroundColor: 'transparent',
      fontFamily: 'GPCMed, sans-serif',
      textAlign: 'left',
    }
  }
  topLinkStyle() {
    return {
      color: '#224048',
      fontSize: '1.2em',
      lineHeight: '2em',
      textTransform: 'uppercase',
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="row col-sm-12">
            <SearchSidebar />
            <div className="col-sm-10 right-col" style={this.listStyle()}>
              <div className="col-sm-5">
                <a href="/" style={this.topLinkStyle()}>« Home</a>
              </div>
              <div className="col-sm-5" style={{textAlign:'right'}}>
                <a href="#" style={this.topLinkStyle()}>Share/Save Search Results</a>
              </div>
              <div className="col-sm-5">
                <Search
                  title = {CATHOLIC}
                  collection={HoneycombURL() + "/v1/collections/"
                    + VaticanID}
                  hits={HoneycombURL() + '/v1/collections/' + VaticanID + '/search'}
                  searchTerm={QueryParm('q')}
                  sortTerm={QueryParm('sort')}
                  facet={FacetQueryParms()}
                  start={parseInt(QueryParm('start'))}
                />
            </div>
            <div className="col-sm-5" style={this.listStyle()}>
              <Search
                title = {HUMANRIGHTS}
                collection={HoneycombURL() + "/v1/collections/"
                  + HumanRightsID}
                hits={HoneycombURL() + '/v1/collections/' + HumanRightsID + '/search'}
                searchTerm={QueryParm('q')}
                sortTerm={QueryParm('sort')}
                facet={FacetQueryParms()}
                start={parseInt(QueryParm('start'))}
              />
            </div>
          </div>
          </div>
        </div>
      <Footer/>
      {this.props.children}
    </div>

    )
  }
}

export default SearchPage;
