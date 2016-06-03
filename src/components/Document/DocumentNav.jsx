'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Divider, ListItem, Toggle } from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import _ from 'underscore';
import List from 'material-ui/lib/lists/list';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
var theme = require("../../themes/vatican.jsx");
let SelectableList = SelectableContainerEnhance(List);

class DocumentNav extends Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(theme)
    };
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

  render() {
    let searchMenuItem = "";

    if (this.props.showSearch) {
      searchMenuItem = (
        <ListItem
          style={{ backgroundColor: "inherit" }}
          key={"search"}
          value={"search"}
          primaryText={ "Search Results ("+ this.props.numSearchResults +")" }
        />
      );
    }

    return (
      <div style={{margin: '0'}} className="left-col">
        <h4>Highlight Paragraphs</h4>
        <div className="right">
          <Toggle
            label="Only Show Hightlighed Paragraphs"
            labelPosition="right"
            onToggle={ this.props.toggleOnClick }
            primary={ false }
            secondary={ false }

          />
        </div>
        <SelectableList
          style={{ backgroundColor: "inherit" }}
          valueLink={{
            value: this.props.selectedMenuItem,
            requestChange: this.menuClick.bind(this)
          }}>
          { searchMenuItem }
          <Divider />
          { this.topicList() }
        </SelectableList>
      </div>
    );
  }

}
DocumentNav.childContextTypes = {
  muiTheme: React.PropTypes.object
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

export default DocumentNav;
