'use strict'
import React, { Component, PropTypes } from 'react';
import BackgroundIcon from 'material-ui/lib/svg-icons/action/find-in-page';
import Colors from 'material-ui/lib/styles/colors';
import Search from '../components/Search/Search.jsx';
import SearchActions from '../actions/SearchActions.js';
import SearchStore from '../store/SearchStore.js';
import FacetQueryParms from '../modules/FacetQueryParams.js';
import HoneycombURL from '../modules/HoneycombURL.js';
import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import SearchBox from '../components/Search/SearchBox.jsx';
import SearchSidebar from '../components/Search/SearchSidebar.jsx';
import Drawer from '../components/Search/Drawer.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
import { Link } from 'react-router';

const CATHOLIC = 'Catholic Social Teaching';
const CATHOLIC_COLLECTION = HoneycombURL() + "/v1/collections/" + VaticanID;
const HUMANRIGHTS = 'International Human Rights Law';
const HUMANRIGHTS_COLLECTION = HoneycombURL() + "/v1/collections/" + HumanRightsID;

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
  }

  renderSearchBody() {
    if(SearchStore.searchTerm == '' && SearchStore.topics.length <= 0) {
      return (
        <div className="col-sm-6" style={{ width: "100%" }}>
          <BackgroundIcon style={{ display: "inline-block", width: "150px", height: "150px" }} color={Colors.grey400}/>
          <div style={{ display: "inline-block", position: "fixed", paddingTop: "45px" }}>
            <h1>Get Started</h1>
            <h2>Enter a search query or select a filter to view a list of matching documents.</h2>
            <SearchBox />
            <p>See <Link to="/documents">document index</Link></p>

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
        <Drawer />
      {this.props.children}
    </div>

    )
  }
}

SearchPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchPage;
