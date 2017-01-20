'use strict'
var React = require('react');
var CircularProgress = require('material-ui/lib/circular-progress');
var Colors = require('material-ui/lib/styles/colors');
var PageContent = require('../../layout/PageContent.jsx');
var CompareStore = require("../../store/CompareStore.js");
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
    collection: React.PropTypes.string,
  },

  getInitialState: function() {
    return ({ loading: true });
  },

  componentWillMount: function() {
    CompareStore.on("ItemCompareUpdated", this.handleCompareChange);
    SearchStore.addResultsChangeListener(this.handleResultsChange);
    SearchActions.performSearch(this.props.collection, SearchStore.topics, SearchStore.searchTerm, SearchStore);
  },

  componentWillUnmount: function() {
    CompareStore.removeListener("ItemCompareUpdated", this.handleCompareChange);
    SearchStore.removeResultsChangeListener(this.handleResultsChange);
  },

  componentWillReceiveProps: function(nextProps){
    // SearchPage is going to use the router to push a new uri with params anytime the query changes.
    // Since we rely on the router to rerender these components, rerun the search here
    // instead of directly listening for query changes from the store
    this.setState({
      loading: true,
    });
    SearchActions.performSearch(this.props.collection, SearchStore.topics, SearchStore.searchTerm, SearchStore.topicsOnly);
  },

  handleResultsChange: function(collection){
    if(collection == this.props.collection){
      this.setState({
        loading: false,
      });
    }
  },

  handleCompareChange: function(){
    this.forceUpdate();
  },

  render: function() {
    // All children of this object expect the collection and all data to be loaded into the SearchStore.
    // This will prevent mounting them until ready.
    return (
      <div>
        <Heading title={this.props.title} />
        { this.state.loading && <CircularProgress style={ styles.circleProgress } color={ Colors.blueGrey700 }/> }
        { !this.state.loading && <SearchDisplayList groupedHits={SearchStore.getHits(this.props.collection)}/> }
      </div>
    );
  }
});

module.exports = Search;
