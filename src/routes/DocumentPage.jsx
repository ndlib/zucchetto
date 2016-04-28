'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import Document from '../components/Document/Document.jsx';
import DocumentNav from '../components/Document/DocumentNav.jsx';
import Title from '../components/Document/Title.jsx';

import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'

import ViewOriginal from '../components/Document/ViewOriginal.jsx';

class DocumentPage extends Component {
  constructor(props, context) {
    super(props, context);

    let baseState = "none";
    this._searchIds = [];
    if (this.props.location.query.searchIds) {
      baseState = "search"
      this._searchIds = this.props.location.query.searchIds.split(",");
    }

    this.state = {
      loaded: ItemStore.preLoaded(),
      highlightedIndex: baseState,
    };
    this.preLoadFinished = this.preLoadFinished.bind(this);
    this.highlightSelectedParagraphs = this.highlightSelectedParagraphs.bind(this);
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

  highlightSelectedParagraphs(value, event) {
    this.setState({highlightedIndex: value});
  }

  highlightedDocumentIds() {
    if (this.state.highlightedIndex == "search") {
      return this._searchIds;
    }

    return [];
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
            <ViewOriginal documentId={ this.props.params.id } />
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
          <DocumentNav
            showSearch={true}
            numSearchResults={this._searchIds.length}
            showSelectedParagraphs={true}
            selectedParagraphClick={ this.highlightSelectedParagraphs.bind(this) }
          />
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
