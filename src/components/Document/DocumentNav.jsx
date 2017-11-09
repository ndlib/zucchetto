'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mui, { Divider, List, ListItem, Toggle } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'underscore';
var theme = require("../../themes/vatican.jsx");

class DocumentNav extends Component {

  menuClick(event, value) {
    this.props.selectedParagraphClick(event, value);
  }

  topicList() {
    return _.pairs(this.props.listedTopics).map(function (topic) {
      var title = topic[0] + " (" + topic[1].length + ")";
      return (<ListItem
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={{margin: '0', backgroundColor: '#f8f6ed'}} className="left-col">
          <h3>Highlight Paragraphs</h3>
          <div className="right">
            <Toggle
              label="Only Show Highlighted Paragraphs"
              labelPosition="right"
              onToggle={ this.props.toggleOnClick }
              primary={ false }
              secondary={ false }

            />
          </div>
          <List
            selectable
            style={{ backgroundColor: "inherit" }}
            valueLink={{
              value: this.props.selectedMenuItem,
              requestChange: this.menuClick.bind(this)
            }}>
            { searchMenuItem }
            <Divider />
            <h4>Topics in Document</h4>
            { this.topicList() }
          </List>
        </div>
      </MuiThemeProvider>
    );
  }

}
DocumentNav.childContextTypes = {
  muiTheme: PropTypes.object
}

DocumentNav.propTypes = {
  selectedParagraphClick: PropTypes.func.isRequired,
  toggleOnClick: PropTypes.func.isRequired,
  listedTopics: PropTypes.object,
  selectedMenuItem: PropTypes.string,
  showSearch: PropTypes.bool,
  numSearchResults: PropTypes.number,
  showSelectedParagraphs: PropTypes.bool,
}

DocumentNav.defaultProps = {
  showSearch: false,
  showSelectedParagraphs: true,
}

export default DocumentNav;
