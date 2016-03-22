'use strict'
import React, { Component, PropTypes } from 'react';
import TopicFacets from './TopicFacets.jsx';
import ChildValue from './ChildValue.js';

class TopicFacet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    }
    this.onArrowClick = this.onArrowClick.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onArrowClick() {
    this.setState({expanded: !this.state.expanded});
  }

  onLabelClick() {
    let currentSearch = window.location.search.split(',');
    window.location.search = currentSearch[0] + ',' + ChildValue(this.props.topic);
  }

  arrowStyle() {
    return {
      fontSize: '20px',
      verticalAlign: 'middle',
      color: '#224048',
      transform: this.state.expanded ? 'rotate(90deg)' : 'rotate(0deg)',
    }
  }

  render() {
    let children = null;
    let arrow = (<div style={{display: 'inline-block', width: '20px'}} />);
    if(this.props.topic){
      if(this.props.topic.children) {

        arrow = (
          <i
            className="material-icons"
            style={this.arrowStyle()}
            onClick={this.onArrowClick.bind(this)}
            >play_arrow</i>
        );
        if(this.state.expanded) {
          children = (<TopicFacets source={this.props.topic.children} />);
        }

      }
      return (
        <li>
          <div>
            {arrow}
            <span onClick={this.onLabelClick}>{this.props.topic.name}</span>
          </div>
          <ul style={{
              listStyleType: 'none',
              paddingLeft: '20px',
            }}>{children}</ul>
        </li>
      );
    }
    return null;
  }
}

TopicFacet.propTypes = {
  topic: React.PropTypes.object,
}

export default TopicFacet;
