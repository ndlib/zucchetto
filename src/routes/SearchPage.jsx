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
import SearchBox from '../components/Search/SearchBox.jsx';
import SearchSidebar from '../components/Search/SearchSidebar.jsx';
import Drawer from '../components/Search/Drawer.jsx';
const CATHOLIC = 'Catholic Social Teaching';
const HUMANRIGHTS = 'International Human Rights Law';

import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  listStyle(side) {
    return {
      backgroundColor: 'transparent',
      fontFamily: 'GPCMed, sans-serif',
      textAlign: 'left',
    }
  }

  componentWillMount() {
    if (ItemStore.preLoaded()) {
      this.preLoadFinished();
    } else {
      var func = this.preLoadFinished.bind(this);
      ItemStore.on("PreLoadFinished", func);
    }
  }

  preLoadFinished() {
    this.setState({loaded: true});
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="row col-sm-12">
            <SearchSidebar />
            <div className="col-sm-9 right-col" style={this.listStyle()}>
              <div className="col-sm-12" style={{ paddingTop: "7px"}}>
                <SearchBox />
                <hr className="search-separator" />
              </div>
              <div className="col-sm-6">
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
              <div className="col-sm-6" style={this.listStyle()}>
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
            <div className=" row col-sm-12">

            </div>
          </div>
        </div>
      <Footer/>
      <div>
        <div className="col-sm-12" >
          <Drawer />
        </div>
      </div>
    {this.props.children}
    </div>

    )
  }
}

export default SearchPage;
