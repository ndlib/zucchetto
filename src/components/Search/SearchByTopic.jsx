'use strict'
import { RaisedButton } from 'material-ui';
import React, { Component, PropTypes } from 'react';
import TopicFacets from './TopicFacets.jsx';
import topics from './topics.js';

var SearchActions = require('../../actions/SearchActions.js');
var SearchStore = require('../../store/SearchStore.js');

class SearchByTopic extends Component {
  constructor(props) {
    super(props);
    this.onTopics = this.onTopics.bind(this);
    this.state = {
      canClear: SearchStore.getTopics().length > 0,
    }
  }

  componentWillMount() {
    SearchStore.addTopicsChangeListener(this.onTopics);
  }

  componentWillUnmount() {
    SearchStore.removeTopicsChangeListener(this.onTopics);
  }

  onTopics(topics, added, clearAll) {
    this.setState({
      canClear: SearchStore.getTopics().length > 0,
    });
  }

  onClearClicked() {
    SearchActions.clearTopics();
  }

  makeClearButton() {
    if(this.state.canClear) {
      return (
        <RaisedButton
          onClick={this.onClearClicked}
          backgroundColor="#F8F6ED"
          style={{
            float: 'right',
            lineHeight: 'inherit'
          }}
          labelStyle={{
            color: "#224048",
            fontFamily: "GPCMed, sans-serif",
            fontWeight: "bold",
          }}
          disableTouchRipple={true}
          label="Clear"
        />
      );
    }
    return null;
  }

  render() {
    return (
        <div>
          <h1 style={{ fontSize: "30px" }}>Search By Topic</h1>
          { this.makeClearButton() }
          <h4>Actors</h4>
          <ul className='filters' style={{
              listStyleType: 'none',
              paddingLeft: '0',
            }}>
            <TopicFacets source={topics.topics} top_level={true} />
          </ul>
        </div>
      );
  }
}
export default SearchByTopic;
