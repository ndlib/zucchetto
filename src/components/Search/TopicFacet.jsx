'use strict'
import React, { Component, PropTypes } from 'react';
import TopicFacets from './TopicFacets.jsx';
import SearchActions from '../../actions/SearchActions.js';
import QueryParm from '../../modules/QueryParam.js';
import SearchStore from '../../store/SearchStore.js';
import { Link } from 'react-router'
import TopicNode from './TopicNode.js';

class TopicFacet extends Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
    let searchStr = window.location.search
    this.state = {
      expanded: searchStr.search(this.props.topic.value) > -1,
      selected: searchStr.search(this.props.topic.value) > -1,
      values: TopicNode.flattenValues(this.props.topic),
    }
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  componentWillMount() {
    SearchStore.addChangeListener(this.forceUpdate);
    this.expandIfChildSelected(this.props.topic);
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.forceUpdate);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      values: TopicNode.flattenValues(nextProps.topic),
    });
    this.expandIfChildSelected(nextProps.topic);
  }

  // Expands the node if it contains any children that are in the selected topics.
  // Note: This is terribly inefficient, since we are doing recursive finds using
  // arrays of values for each node in the tree, and does not handle duplicate values.
  // Ex: If there are two different trees with the same leaf value:
  //     A/B/C/dupvalue, X/Y/Z/dupvalue
  // and "dupvalue" exists in SearchStore.topics, then both trees will be expanded.
  // If we have duplicates or have performance problems, we need
  // to start storing the paths of the selected topics in some way so that it's
  // easier to find which nodes have children that are selected.
  expandIfChildSelected(topic) {
    if(TopicNode.hasChild(topic, SearchStore.topics)) {
      this.setState({expanded: true});
    }
  }

  onArrowClick() {
    this.setState({expanded: !this.state.expanded});
  }

  onCheck(e, checked) {
    if(SearchStore.hasTopic(this.props.topic.value)){
      SearchActions.removeTopics(this.state.values);
    } else {
      SearchActions.addTopics(this.state.values);
    }
  }

  getLinkPath() {
    var currentSearch = QueryParm('q').split(',');
    return '/search?q=' + currentSearch[0] + ',' + this.state.values.join(',');
  }

  checkbox() {
    if(SearchStore.hasTopic(this.props.topic.value)) {
      return (<i className="material-icons topic-checkbox">check_box</i>);
    } else {
      return (<i className="material-icons topic-checkbox">check_box_outline_blank</i>);
    }
  }

  arrow() {
    if(this.props.topic.children) {
      return (
        <i
          className="material-icons topic-arrow"
          style={{ transform: this.state.expanded ? 'rotate(90deg)' : 'rotate(180deg)' }}
          onClick={this.onArrowClick.bind(this)}
          >play_arrow</i>
      );
    }
    return null;
  }

  children() {
    if(this.props.topic.children && this.state.expanded) {
      return (<TopicFacets source={this.props.topic.children} />);
    }
    return null;
  }

  render() {
    if(this.props.topic){
      return (
        <li style={{ position: 'relative', paddingLeft: this.props.topic.children ? '0' : '-20px' }}>
          <div style={{ display: "inline-flex" }}>
            <div style={{ cursor: "pointer" }} onClick={ this.onCheck.bind(this) }>
              { this.checkbox() }
            </div>
            <div className="topic-expand" onClick={this.onArrowClick.bind(this)}>
              <div className="topic-expand-label">{this.props.topic.name}</div>
              { this.arrow() }
            </div>
          </div>
          <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
            { this.children() }
          </ul>
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
