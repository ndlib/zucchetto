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
    collection: React.PropTypes.string,
    loading: React.PropTypes.bool
  },

  render: function() {
    // All children of this object expect the collection and all data to be loaded into the SearchStore.
    // This will prevent mounting them until ready.
    return (
      <div>
        <Heading title={this.props.title} />
        { this.props.loading && <CircularProgress style={ styles.circleProgress } color={ Colors.blueGrey700 }/> }
        { !this.props.loading && <SearchDisplayList items={SearchStore.getHits(this.props.collection)}/> }
      </div>
    );
  }
});

module.exports = Search;
