'use strict'
import React, { Component, PropTypes } from 'react';
import TopicFacet from './TopicFacet.jsx';

class TopicFacets extends Component {
  constructor(props) {
    super(props);
  }

  facets(topics) {
    if(topics) {
      let topicList = topics.map(function(topic, index){
        return(
          <TopicFacet key={ "topic-" + index } topic={topic}/>
        );
      });
      return topicList;
    }
    return null;
  }

  render() {
    return (
      <ul
        style={{listStyleType: 'none', paddingLeft: '0'}}>
        {this.facets(this.props.source)}
      </ul>
    );
  }
}

TopicFacets.propTypes = {
  source: React.PropTypes.array,
}

export default TopicFacets;
