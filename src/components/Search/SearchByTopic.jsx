'use strict'
import React, { Component, PropTypes } from 'react';
import TopicFacets from './TopicFacets.jsx';
import topics from './topics.js';

class SearchByTopic extends Component {
  render() {
    return (
        <div>
          <h4>Filter By Topic</h4>
          <ul className='filters' style={{
              listStyleType: 'none',
              paddingLeft: '0',
            }}>
            <TopicFacets source={topics.topics} />
          </ul>
        </div>
      );
  }
}
export default SearchByTopic;
