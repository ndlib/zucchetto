'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import _ from 'underscore';

import List from 'material-ui/lib/lists/list';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

class DocumentNav extends Component {

  menuClick(event, value) {
    this.props.selectedParagraphClick(event, value);
  }

  topicList() {
    return _.pairs(this.props.listedTopics).map(function (topic) {
      var title = topic[0] + " (" + topic[1].length + ")";
      console.log(this.props.selectedMenuItem);
      console.log(topic[0]);
      return (<mui.ListItem
                key={topic[0]}
                value={topic[0]}
                primaryText={title}
                nestedItems={  this.individualParagraphs() }
              />);

    }.bind(this));
  }

  individualParagraphs() {
    return [
          <mui.ListItem
            primaryText="team1" />,
          <mui.ListItem
            primaryText="team2" />,
        ];
  }

  render() {
    let searchMenuItem = "";

    if (this.props.showSearch) {
      searchMenuItem = (
        <mui.ListItem
          key={"search"}
          value={"search"}
          primaryText={ "Search Results ("+ this.props.numSearchResults +")" }
          nestedItems={ (this.props.selectedMenuItem == "search") ? this.individualParagraphs() : [] }
        />
      );
    }

    let comparedMenuItem = (
      <mui.ListItem
        key={"compare"}
        value={"compare"}
        primaryText={ "Saved for Compare ("+ this.props.numCompareResults +")" }
        nestedItems={ (this.props.selectedMenuItem == "compare") ? this.individualParagraphs() : [] }
      />
    )

    return (
      <div>
        <h4>Highlight Paragraphs</h4>
        <div className="right">
          <mui.Toggle
            label="Only Show Hightlighed Paragraphs"
            labelPosition="right"
            onToggle={ this.props.toggleOnClick } />
        </div>
        <SelectableList
          subheader="Show Topical Paragraphs"
          valueLink={{
            value: this.props.selectedMenuItem,
            requestChange: this.menuClick.bind(this)
          }}>
          { searchMenuItem }
          { comparedMenuItem }
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

export default DocumentNav;
