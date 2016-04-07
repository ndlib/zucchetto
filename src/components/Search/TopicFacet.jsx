'use strict'
import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import TopicFacets from './TopicFacets.jsx';
import ChildValue from './ChildValue.js';
import SearchActions from '../../actions/SearchActions.js';
import QueryParm from '../../modules/QueryParam.js';
import SearchStore from '../../store/SearchStore.js';
import { Link } from 'react-router'

const styles = {
  checkbox: {
    width: "auto",
    display: "inline-block"
  },
};

class TopicFacet extends Component {
  constructor(props) {
    super(props);

    let searchStr = window.location.search
    this.state = {
      expanded: searchStr.search(this.props.topic.value) > -1,
      selected: searchStr.search(this.props.topic.value) > -1,
    }
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  onArrowClick() {
    this.setState({expanded: !this.state.expanded});
  }

  onCheck(e, checked) {
    if(checked){
      SearchActions.addTopic(this.props.topic.value);
    } else {
      SearchActions.removeTopic(this.props.topic.value);
    }
  }

  getLinkPath() {
    var currentSearch = QueryParm('q').split(',');
    return '/search?q=' + currentSearch[0] + ',' + ChildValue(this.props.topic);
  }

  arrowStyle() {
    return {
      fontSize: '20px',
      verticalAlign: 'middle',
      color: '#224048',
      cursor: 'pointer',
      transform: this.state.expanded ? 'rotate(90deg)' : 'rotate(180deg)',
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
        <li style={{ position: 'relative', textIndent: this.props.topic.children ? '0' : '-20px' }}>
          <div>
            <Checkbox style={ styles.checkbox } onCheck={ this.onCheck.bind(this) } checked={ SearchStore.hasTopic(this.props.topic.value) }/>
            <Link to={ this.getLinkPath() }>{this.props.topic.name} </Link>
            {arrow}
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
