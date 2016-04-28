'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

class DocumentNav extends Component {

  menuClick(value, event) {
    this.props.selectedParagraphClick(value, event)
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
        <div className="right"> <mui.Toggle label="Only Show Hightlighed Paragraphs" labelPosition="right" /> </div>
        <mui.Menu>
          { searchMenuItem }
          <mui.Divider />
          <mui.MenuItem primaryText="Family (23)" onTouchTap={ this.menuClick.bind(this, "family") } />
          <mui.MenuItem primaryText="Child Works (2)" />
          <mui.MenuItem primaryText="Baseball (0)" />
        </mui.Menu>
      </div>
    );
  }

}

DocumentNav.propTypes = {
  selectedParagraphClick: React.PropTypes.func.isRequired,
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
