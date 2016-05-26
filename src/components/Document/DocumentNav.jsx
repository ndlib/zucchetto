'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import _ from 'underscore';

import List from 'material-ui/lib/lists/list';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

class DocumentNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.goBack = this.goBack.bind(this);
  }

  menuClick(event, value) {
    this.props.selectedParagraphClick(event, value);
  }

  topicList() {
    return _.pairs(this.props.listedTopics).map(function (topic) {
      var title = topic[0] + " (" + topic[1].length + ")";
      return (<mui.ListItem
                style={{ backgroundColor: "inherit" }}
                key={topic[0]}
                value={topic[0]}
                primaryText={title} />);

    }.bind(this));
  }

  goBack(event) {
    event.preventDefault();
    this.context.router.goBack()
  }

  render() {
    let searchMenuItem = "";

    if (this.props.showSearch) {
      searchMenuItem = (
        <mui.ListItem
          style={{ backgroundColor: "inherit" }}
          key={"search"}
          value={"search"}
          primaryText={ "Search Results ("+ this.props.numSearchResults +")" }
        />
      );
    }

    return (
      <div style={{margin: '1em'}} className="left-col">
        <a href="#" style={{ textAlign: 'center', color: "black"}} onClick={ this.goBack }>
          <i className="material-icons">arrow_back</i>
        </a>
        <hr />
        <h4>Highlight Paragraphs</h4>
        <div className="right">
          <mui.Toggle
            label="Only Show Hightlighed Paragraphs"
            labelPosition="right"
            onToggle={ this.props.toggleOnClick } />
        </div>
        <SelectableList
          style={{ backgroundColor: "inherit" }}
          valueLink={{
            value: this.props.selectedMenuItem,
            requestChange: this.menuClick.bind(this)
          }}>
          { searchMenuItem }
          <mui.Divider />
          { this.topicList() }
        </SelectableList>
      </div>
    );
  }

}

DocumentNav.propTypes = {
  selectedParagraphClick: React.PropTypes.func.isRequired,
  toggleOnClick: React.PropTypes.func.isRequired,
  listedTopics: React.PropTypes.object,
  selectedMenuItem: React.PropTypes.string,
  showSearch: React.PropTypes.bool,
  numSearchResults: React.PropTypes.number,
  showSelectedParagraphs: React.PropTypes.bool,
}

DocumentNav.defaultProps = {
  showSearch: false,
  showSelectedParagraphs: true,
}

DocumentNav.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentNav;
