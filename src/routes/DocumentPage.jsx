'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import Document from '../components/Document/Document.jsx';
import Title from '../components/Document/Title.jsx';

import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'

class DocumentPage extends Component {
  constructor(props, context) {
    super(props, context);
    this._item = false;
    this._parent = false;

    let baseState = "none";
    if (this.props.location.query.searchIds) {
      baseState = "search"
    }

    this.state = {
      loaded: ItemStore.preLoaded(),
      highlightedIndex: baseState,
    };
    this.preLoadFinished = this.preLoadFinished.bind(this)
  }

  componentWillMount() {
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  componentWillUnmount() {
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  renderDocument() {
    return (
      <Document
        documentId={ this.props.params.id }
        selectedParagraphIds={ this.highlightedDocumentIds() }
      />
    );
  }

  highlightSelectedParagraphs(event, value) {
    this.setState({highlightedIndex: value});
  }

  highlightedDocumentIds() {
    if (this.state.highlightedIndex == "search") {
      return this.props.location.query.searchIds.split(",");
    }
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    var parent = ItemStore.getItem(this.props.params.id);
    return (
      <mui.Paper zDepth={ 0 }>
        <Header />
        <br /><br /><br />
        <mui.Toolbar>
          <mui.ToolbarTitle text={ parent.name } />
          <mui.ToolbarGroup float="right">
            <mui.FlatButton label="Download PDF" />
          </mui.ToolbarGroup>
          <mui.ToolbarGroup float="right">
            <mui.FlatButton label="Metadata" />
          </mui.ToolbarGroup>
          <mui.ToolbarGroup float="right">
            <mui.FlatButton label="Document" />
          </mui.ToolbarGroup>
        </mui.Toolbar>

        <mui.Paper zDepth={ 0 } style={{ width: "70%", float: "left" }}>
          { this.renderDocument() }
        </mui.Paper>
        <mui.Paper zDepth={ 0 } style={{ width: "30%", float: "left" }}>
          <div style={{ padding: "25px 0" }}>
            <mui.RaisedButton label="Add to Research" />
          </div>
          <h4>Highlight Paragraphs</h4>
          <div className="right"> <mui.Toggle label="Only Show Hightlighed Paragraphs" labelPosition="right" /> </div>
          <mui.Menu>
            <mui.MenuItem onTouchTap={ this.highlightSelectedParagraphs } primaryText="Search Results (14)" />
            <mui.Divider />
            <mui.MenuItem primaryText="Family (23)" />
            <mui.MenuItem primaryText="Child Works (2)" />
            <mui.MenuItem primaryText="Baseball (0)" />
          </mui.Menu>
        </mui.Paper>
        <Footer />
      </mui.Paper>
    );
  }
}

DocumentPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentPage;
