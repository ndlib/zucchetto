'use strict'
var React = require('react');
var PageContent = require('../../layout/PageContent.jsx');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var SearchDisplayList = require('./SearchDisplayList.jsx');

var Search = React.createClass({
  mixins: [
    require('../../mixins/LoadRemoteMixin.jsx'),
  ],

  propTypes: {
    title: React.PropTypes.string,
    hits: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
    searchTerm: React.PropTypes.string,
    sortTerm: React.PropTypes.string,
    facet: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array,
    ]),
    start: React.PropTypes.number,
    view: React.PropTypes.string,
  },

  getInitialState: function() {
    return ({items: [],})

  },

  searchStoreChanged: function(reason) {
    this.setState({
      readyToRender: true,
    });

    if(reason == "load") {
      var path = window.location.origin + SearchStore.searchUri();
      // window.history.pushState({ store: SearchStore.getQueryParams() }, '', path);
    }
  },

  // Callback from LoadRemoteMixin when remote collection is loaded
  setValues: function(collection) {
    // SearchActions.loadSearchResults(collection, this.props.hits, this.props.searchTerm, this.facetObject(), this.props.sortTerm, this.props.start, this.props.view);
    console.log(collection);
    if(collection && collection.hits){
      this.setItems(collection.hits);
    }
    return true;
  },

  setItems: function(hits) {
    var items = [];
    console.log(hits);
    for (var h in hits.hit) {
      if (hits.hit.hasOwnProperty(h)){
        var hit = hits.hit[h];
        var item = hit;
        items.push(item);
      }
    }
    this.setState({items: items,});
  },

  // onWindowPopState: function(event) {
  //   if(event.state){
  //     SearchActions.reloadSearchResults(event.state.store);
  //   }
  // },

  componentWillMount: function() {
    // SearchStore.on("SearchStoreChanged", this.searchStoreChanged);
    // SearchStore.on("SearchStoreQueryFailed",
    //   function(result) {
    //     window.location = window.location.origin + '/404'
    //   }
    // );
    // window.addEventListener("popstate", this.onWindowPopState);

    if ('object' == typeof(this.props.collection)) {
      this.setValues(this.props.collection);
    } else {
      this.loadSearchItems(this.props.collection);
    }
  },

  loadSearchItems: function(collection) {
    $.ajax({
      context: this,
      type: "GET",
      url:  collection + '/search?q=' + this.props.searchTerm,
      dataType: "json",
      success: function(result) {
        this.setItems(result.hits);
      },
      error: function(request, status, thrownError) {
        console.log(thrownError);
      }
    });
  },

  // Translates the facet option given in props to the structure the SearchStore expects.
  facetObject: function() {
    var facets;
    if(this.props.facet) {
      facets = new Array()
      for(var i = 0; i < this.props.facet.length; i++){
        var facetKey = Object.keys(this.props.facet[i])[0];
        var facetValue = Object.keys(this.props.facet[i])[1];
        facets.push({
          name: this.props.facet[i][facetKey],
          value: this.props.facet[i][facetValue]
        });
      }
    }
    return facets;
  },

  listHeaderStyle: function() {
    return {
      backgroundColor: '#cacccb',
      padding: '.25em',
      textAlign: 'center',
      textTransform: 'uppercase',
    }
  },

  render: function() {
    // All children of this object expect the collection and all data to be loaded into the SearchStore.
    // This will prevent mounting them until ready.
    console.log(SearchStore);
    return (
      <div>
        <h3 style={this.listHeaderStyle()}>{this.props.title}</h3>
        <SearchDisplayList items={this.state.items}/>
      </div>

    );
  }
});

module.exports = Search;
