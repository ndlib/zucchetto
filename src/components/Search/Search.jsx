'use strict'
var React = require('react');
var CircularProgress = require('material-ui/lib/circular-progress');
var Colors = require('material-ui/lib/styles/colors');
var PageContent = require('../../layout/PageContent.jsx');
var SearchStore = require('../../store/SearchStore.js');
var SearchActions = require('../../actions/SearchActions.js');
var SearchDisplayList = require('./SearchDisplayList.jsx');
var Heading = require('../Shared/Heading.jsx');

const styles = {
  circleProgress: { margin: "0px 0 0 -25px", left: "50%" }
};

var Search = React.createClass({

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
  },

  // Callback from LoadRemoteMixin when remote collection is loaded
  setValues: function(collection) {
    if(collection && collection.hits){
      this.setItems(collection.hits);
    }
    return true;
  },

  setItems: function(hits) {
    var items = [];
    for (var h in hits.hit) {
      if (hits.hit.hasOwnProperty(h)){
        var hit = hits.hit[h];
        var item = hit;
        item.collection = this.props.collection
        items.push(item);
      }
    }
    this.setState({ loading: false, items: items,});
  },

  componentWillMount: function() {
    this.loadSearchItems(this.props.collection, this.props.searchTerm);
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadSearchItems(nextProps.collection, nextProps.searchTerm);
  },

  loadSearchItems: function(collection, searchTerm) {
    this.setState({ loading: true });
    $.ajax({
      context: this,
      type: "GET",
      url:  collection + '/search?q=' + searchTerm + '&rows=10000',
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


  render: function() {
    // All children of this object expect the collection and all data to be loaded into the SearchStore.
    // This will prevent mounting them until ready.
    return (
      <div>
        <Heading title={this.props.title} />
        { this.state.loading && <CircularProgress style={ styles.circleProgress } color={ Colors.blueGrey700 }/> }
        { !this.state.loading && <SearchDisplayList items={this.state.items}/> }
      </div>
    );
  }
});

module.exports = Search;
