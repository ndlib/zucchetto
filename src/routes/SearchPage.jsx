'use strict'
import React, { Component, PropTypes } from 'react';
import BackgroundIcon from 'material-ui/lib/svg-icons/action/find-in-page';
import Colors from 'material-ui/lib/styles/colors';
import Search from '../components/Search/Search.jsx';
import SearchActions from '../actions/SearchActions.js';
import SearchStore from '../store/SearchStore.js';
import CompareStore from '../store/CompareStore.js';
import QueryParm from '../modules/QueryParam.js';
import FacetQueryParms from '../modules/FacetQueryParams.js';
import HoneycombURL from '../modules/HoneycombURL.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import LandingContent from '../components/Search/LandingContent.jsx';

import TokenSearchBox from '../components/Search/TokenSearchBox.jsx';
import SearchSidebar from '../components/Search/SearchSidebar.jsx';
import Drawer from '../components/Search/Drawer.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
import { Link } from 'react-router';

const CATHOLIC = 'Catholic Social Teaching';
const CATHOLIC_COLLECTION = HoneycombURL() + "/v1/collections/" + VaticanID;
const HUMANRIGHTS = 'International Human Rights Law';
const HUMANRIGHTS_COLLECTION = HoneycombURL() + "/v1/collections/" + HumanRightsID;
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class SearchPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.preLoadFinished = this.preLoadFinished.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
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
    SearchStore.addQueryChangeListener(this.handleQueryChange);
    SearchActions.setParamsFromUri();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  componentWillUnmount() {
    SearchStore.removeQueryChangeListener(this.handleQueryChange);
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  componentWillReceiveProps(nextProps){
    SearchActions.setParamsFromUri();
  }

  handleQueryChange(){
    // If the query has changed, use the router to update the uri params
    this.context.router.push(SearchStore.searchUri());
  }

  preLoadFinished() {
    this.setState({loaded: true});
    CompareStore.verifyStore();
  }

  renderSearchBody() {
    if(SearchStore.searchTerm == '' && SearchStore.topics.length <= 0) {
      return (
        <LandingContent />
      );
    }
    return (
      <div className="col-sm-12" style={{ paddingTop: "0"}}>
        <TokenSearchBox />
        <hr className="search-separator" />
        <div key="catholic" className="col-sm-6">
          <Search
            title = { CATHOLIC }
            collection={ CATHOLIC_COLLECTION }
          />
        </div>
        <div key="humanrights" className="col-sm-6" style={this.listStyle()}>
          <Search
            title = { HUMANRIGHTS }
            collection={ HUMANRIGHTS_COLLECTION }
          />
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }
    var height = window.innerHeight - 51;
    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="row col-sm-12" style={{ paddingTop: "0"}}>
            <SearchSidebar />
            <div className="col-sm-4 right-col" style={this.listStyle()}>
              { this.renderSearchBody() }
            </div>
            <div className="col-sm-5 instructions" style={{ height: height}}>
              <h2>Getting started: choose a search method</h2>
              <h3>Keyword search</h3>
              <p>Use <strong>keyword search</strong> to locate all documents containing a specific word or words. Results will be broad and inclusive.</p>
              <p>If you compine multiple keywords in a search, the results will include documents containing combinations of keywords <strong>AND</strong> documents containing any one of teh keywords.</p>

              <h3>Topic search</h3>
              <p>Use <strong>topic search</strong> to locate all documents that include discussion of a specific topic. Results will be more focused than keyword search.</p>
              <p>You may choose multiple topics in a single search. Results will contain documents that discuss any combination of the selected topics <strong>AND</strong> documents that discuss any one of the topics.</p>
              
              <h3>Combined keyword and topic search</h3>
              <p>For a more narrowly focused search, select a topic <strong>AND</strong> enter a keyword. Results will include only documents that discuss the selected topic and contain the selected keyword.</p>
              
              <h3>Search the document index</h3>
              <p>If you know the name of the document you want to review, find it quickly in the document index.</p>
            </div>
          </div>
        </div>
        <Footer showCompareButton={ true } />
        {this.props.children}
        <FeedbackLink />
    </div>

    )
  }
}

SearchPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchPage;
