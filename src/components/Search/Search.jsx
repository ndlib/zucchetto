'use strict'
var React = require('react');
var mui = require('material-ui');
var ItemPanel = require("./ItemPanel.jsx");

var PageContent = require('../../layout/PageContent.jsx');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var SearchDisplayList = require('./SearchDisplayList.jsx');

var Search = React.createClass({
  mixins: [
    require('../../mixins/LoadRemoteMixin.jsx'),
    require('../../mixins/MuiThemeMixin.jsx')
  ],

  propTypes: {
    hits: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
    searchTerm: React.PropTypes.string,
    sortTerm: React.PropTypes.string,
    facet: React.PropTypes.object,
    start: React.PropTypes.number,
    view: React.PropTypes.string,
  },

  searchStoreChanged: function(reason) {
    this.setState({
      readyToRender: true,
    });

    if(reason == "load") {
      var hash = window.location.hash;
      var path = window.location.origin + SearchStore.searchUri() + hash;
      window.history.pushState({ store: SearchStore.getQueryParams() }, '', path);
    }
  },

  // Callback from LoadRemoteMixin when remote collection is loaded
  setValues: function(collection) {
    SearchActions.loadSearchResults(collection, this.props.hits, this.props.searchTerm, this.facetObject(), this.props.sortTerm, this.props.start, this.props.view);
    return true;
  },

  onWindowPopState: function(event) {
    if(event.state){
      SearchActions.reloadSearchResults(event.state.store);
    }
  },

  componentWillMount: function() {
    SearchStore.on("SearchStoreChanged", this.searchStoreChanged);
    SearchStore.on("SearchStoreQueryFailed",
      function(result) {
        window.location = window.location.origin + '/404'
      }
    );
    window.addEventListener("popstate", this.onWindowPopState);

    if ('object' == typeof(this.props.collection)) {
      this.setValues(this.props.collection);
    } else {
      this.loadRemoteCollection(this.props.collection);
    }
  },

  // Translates the facet option given in props to the structure the SearchStore expects.
  facetObject: function() {
    var facet;
    if(this.props.facet) {
      var facetKey = Object.keys(this.props.facet)[0];
      facet = { name: facetKey, value: this.props.facet[facetKey] };
    }
    return facet;
  },

  render: function() {
    // All children of this object expect the collection and all data to be loaded into the SearchStore.
    // This will prevent mounting them until ready.
    if(!this.state.readyToRender) {
      return null;
    }

    return (
      <mui.AppCanvas>
        <ItemPanel />
        <PageContent fluidLayout={false}>
          <SearchDisplayList />
        </PageContent>
      </mui.AppCanvas>
    );
  }
});

module.exports = Search;
