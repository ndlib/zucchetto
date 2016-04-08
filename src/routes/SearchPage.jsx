'use strict'
import React, { Component, PropTypes } from 'react';
import BackgroundIcon from 'material-ui/lib/svg-icons/action/find-in-page';
import Colors from 'material-ui/lib/styles/colors';
import Search from '../components/Search/Search.jsx';
import SearchActions from '../actions/SearchActions.js';
import SearchStore from '../store/SearchStore.js';
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
  constructor(props, context) {
    super(props, context);
    this.preLoadFinished = this.preLoadFinished.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      loaded: ItemStore.preLoaded(),
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
    console.log("SearchPage.componentWillMount");
console.trace();
    SearchStore.addChangeListener(this.handleSearchChange);
    SearchActions.setParamsFromUri();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.handleSearchChange);
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  handleSearchChange(){
    this.context.router.push(SearchStore.searchUri());
  }

  preLoadFinished() {
    this.setState({loaded: true});
  }

  renderSearchBody() {
    var searchTerm = QueryParm('q');
    if(searchTerm == '' && SearchStore.topics.length <= 0) {
      return (
        <div className="col-sm-6" style={{ width: "100%" }}>
          <BackgroundIcon style={{ display: "inline-block", width: "150px", height: "150px" }} color={Colors.grey400}/>
          <div style={{ display: "inline-block", position: "fixed", paddingTop: "45px" }}>
            <h1>Get Started</h1>
            <h2>Enter a search query or select a filter to view a list of matching documents.</h2>
            <SearchBox />
          </div>
        </div>
      );
    }

    return (
      <div className="col-sm-12" style={{ paddingTop: "7px"}}>
        <SearchBox />
        <hr className="search-separator" />
        <div key="catholic" className="col-sm-6">
          <Search
            title = {CATHOLIC}
            collection={HoneycombURL() + "/v1/collections/"
              + VaticanID}
            hits={HoneycombURL() + '/v1/collections/' + VaticanID + '/search'}
            searchTerm={ searchTerm }
            sortTerm={QueryParm('sort')}
            facet={FacetQueryParms()}
            start={parseInt(QueryParm('start'))}
          />
        </div>
        <div key="humanrights" className="col-sm-6" style={this.listStyle()}>
          <Search
            title = {HUMANRIGHTS}
            collection={HoneycombURL() + "/v1/collections/"
              + HumanRightsID}
            hits={HoneycombURL() + '/v1/collections/' + HumanRightsID + '/search'}
            searchTerm={ searchTerm }
            sortTerm={QueryParm('sort')}
            facet={FacetQueryParms()}
            start={parseInt(QueryParm('start'))}
          />
        </div>
      </div>
    );
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
              { this.renderSearchBody() }
            </div>
            <div className=" row col-sm-12">

            </div>
          </div>
        </div>
      <Footer showCompareButton={ true } />
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

SearchPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchPage;
