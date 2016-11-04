'use strict'
import { FlatButton } from 'material-ui';
import React, { Component, PropTypes } from 'react';
import TopicFacets from './TopicFacets.jsx';
import topics from './topics.js';

var SearchActions = require('../../actions/SearchActions.js');

class SearchByTopic extends Component {
  onClearClicked() {
    SearchActions.clearTopics();
  }

  render() {
    return (
        <div>
          <h1 style={{ fontSize: "30px" }}>Search By Topic</h1>
          <FlatButton
            onClick={this.onClearClicked}
            style={{
              boxShadow: 'none',
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
