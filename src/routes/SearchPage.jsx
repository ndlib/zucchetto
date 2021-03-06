'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import BackgroundIcon from 'material-ui/svg-icons/action/find-in-page';
import Colors from 'material-ui/styles/colors';
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

import SearchBox from '../components/Search/SearchBox.jsx';
import SearchSort from '../components/Search/SearchSort.jsx';
import SearchSidebar from '../components/Search/SearchSidebar.jsx';
import Drawer from '../components/Search/Drawer.jsx';
import ItemStore from '../store/ItemStore.js';
import ItemActions from '../actions/ItemActions.jsx'
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
    this.handleParamsChange = this.handleParamsChange.bind(this);
    this.state = {
      loaded: ItemStore.preLoaded(),
    };
  }

  listStyle() {
    return {
      backgroundColor: this.hasSearch() ? 'transparent' : '#e4e1d1',
      fontFamily: 'GPCMed, sans-serif',
      textAlign: 'left',
      width: '75%'
    }
  }

  columnStyle() {
    return {
      backgroundColor: 'transparent',
      fontFamily: 'GPCMed, sans-serif',
      textAlign: 'left',
      width: '50%'
    }
  }

  componentWillMount() {
    SearchStore.addQueryChangeListener(this.handleQueryChange);
    SearchStore.addParamsChangeListener(this.handleParamsChange);
    SearchActions.setParamsFromUri();

    ItemStore.on("PreLoadFinished", this.preLoadFinished);
    if(!ItemStore.preLoaded()) {
      ItemActions.preLoadItems();
    }
  }

  componentWillUnmount() {
    SearchStore.removeQueryChangeListener(this.handleQueryChange);
    SearchStore.removeParamsChangeListener(this.handleParamsChange);
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  componentWillReceiveProps(nextProps){
    SearchActions.setParamsFromUri();
  }

  handleQueryChange(){
    // If the query has changed, use the router to update the uri params
    this.context.router.history.push(SearchStore.searchUri());
  }

  handleParamsChange() {
    this.context.router.history.push(SearchStore.searchUri());
  }

  preLoadFinished() {
    this.setState({loaded: true});
    CompareStore.verifyStore();
  }

  hasSearch() {
    return SearchStore.searchTerm != '' || SearchStore.topics.length > 0
  }

  renderSearchBody() {
    if(!this.hasSearch()) {
      return (
        <LandingContent />
      );
    }
    return (
      <div className="col-sm-12" style={{ paddingTop: "0" }}>
        <SearchBox />
        <SearchSort />
        <hr className="search-separator" />
        <div key="catholic" className="col-sm-6" style={this.columnStyle()}>
          <Search
            title = { CATHOLIC }
            collection={ CATHOLIC_COLLECTION }
          />
        </div>
        <div key="humanrights" className="col-sm-6" style={this.columnStyle()}>
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
    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="row col-sm-12" style={{ padding: "0", margin: "0", display: "flex" }}>
            <SearchSidebar />
            <div className="col-sm-4 right-col" style={this.listStyle()}>
              { this.renderSearchBody() }
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
  router: PropTypes.object.isRequired
};

export default SearchPage;
