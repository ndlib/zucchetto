'use strict'
import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import FlatButton from 'material-ui/lib/flat-button';
import TopicFacets from './TopicFacets.jsx';
import ChildValue from './ChildValue.js';
import SearchActions from '../../actions/SearchActions.js';
import QueryParm from '../../modules/QueryParam.js';
import SearchStore from '../../store/SearchStore.js';
import { Link } from 'react-router'

const styles = {
  checkbox: {
    width: "auto",
    display: "inline-block",
    marginRight: "-16px"
  },
  button: {
    textTransform: "none",
    fontWeight: "700",
    fontSize: "16px",
    verticalAlign: "middle", fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
    minWidth: "initial",
    lineHeight: "23px",
    textAlign: "left"
  },
  buttonLabel: {
    paddingLeft: "0px",
    paddingRight: "0px"
  }
};

class TopicFacet extends Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
    let searchStr = window.location.search
    this.state = {
      expanded: searchStr.search(this.props.topic.value) > -1,
      selected: searchStr.search(this.props.topic.value) > -1,
    }
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  componentWillMount() {
    SearchStore.addChangeListener(this.forceUpdate);
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.forceUpdate);
  }

  onArrowClick() {
    this.setState({expanded: !this.state.expanded});
  }

  onCheck(e, checked) {
    if(checked){
      SearchActions.addTopics(ChildValue(this.props.topic).split(','));
    } else {
      SearchActions.removeTopics(ChildValue(this.props.topic).split(','));
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
        <li style={{ position: 'relative', paddingLeft: this.props.topic.children ? '0' : '-20px' }}>
          <div style={{ display: "inline-flex" }}>
            <Checkbox style={ styles.checkbox } onCheck={ this.onCheck.bind(this) } defaultChecked={ SearchStore.hasTopic(this.props.topic.value) }/>
            <FlatButton
              label={this.props.topic.name}
              labelPosition="before"
              labelStyle={ styles.buttonLabel }
              style={ styles.button }
              onClick={this.onArrowClick.bind(this)}
            />{arrow}
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
