'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import _ from 'underscore';

import TopicsInDocuments from '../../modules/TopicsInDocument.js'

class DocumentNav extends Component {

  menuClick(value, event) {
    this.props.selectedParagraphClick(value, event)
  }

  topicList() {
    let topics = TopicsInDocuments(this.props.parent);
    return _.pairs(topics).map(function (topic) {
      var title = topic[0] + " (" + topic[1] + ")";
      return (<mui.MenuItem
                primaryText={title}
                onTouchTap={ this.menuClick.bind(this, topic[0]) } />);

    }.bind(this));
  }

  render() {
    let searchMenuItem = (
      <mui.MenuItem
        onTouchTap={ this.menuClick.bind(this, "search") }
        primaryText={ "Search Results ("+ this.props.numSearchResults +")" }
      />
    );
    return (
      <div>
        <div style={{ padding: "25px 0" }}>
          <mui.RaisedButton label="Add to Research" />
        </div>
        <h4>Highlight Paragraphs</h4>
        <div className="right">
          <mui.Toggle
            label="Only Show Hightlighed Paragraphs"
            labelPosition="right"
            onToggle={ this.props.toggleOnClick } />
        </div>
        <mui.Menu>
          { searchMenuItem }
          <mui.Divider />
          { this.topicList() }
        </mui.Menu>
      </div>
    );
  }

}

DocumentNav.propTypes = {
  parent:  React.PropTypes.object,
  selectedParagraphClick: React.PropTypes.func.isRequired,
  toggleOnClick: React.PropTypes.func.isRequired,
  listedTopics: React.PropTypes.array,
  showSearch: React.PropTypes.bool,
  numSearchResults: React.PropTypes.int,
  showSelectedParagraphs: React.PropTypes.bool,
}

DocumentNav.defaultProps = {
  showSearch: false,
  showSelectedParagraphs: true,
}

export default DocumentNav;
