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

import TopicsInDocuments from '../modules/TopicsInDocument.js'


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
      showAllParagraphs: true,
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

  highlightSelectedParagraphs(event, value) {
    this.setState({highlightedIndex: value});
  }

  toggleHightlightedParagraphs() {
    this.setState({showAllParagraphs: !this.state.showAllParagraphs});
  }

  highlightedDocumentIds() {
    let parent = ItemStore.getItem(this.props.params.id);
    let topics = TopicsInDocuments(parent);

    if (this.state.highlightedIndex == "search") {
      return this._searchIds;
    } else if (topics[this.state.highlightedIndex]) {
      return topics[this.state.highlightedIndex];
    }

    return [];
  }

  collapsedParagraphsClassName() {
    if (!this.state.showAllParagraphs) {
      return "collapsed-paragraphs";
    }
    return ""
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    let parent = ItemStore.getItem(this.props.params.id);
    let topics = TopicsInDocuments(parent);

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
          <div className={this.collapsedParagraphsClassName()}>
            { this.renderDocument() }
          </div>
        </mui.Paper>
        <mui.Paper zDepth={ 0 } style={{ width: "30%", float: "left" }}>
          <DocumentNav
            parent={parent}
            showSearch={ (this._searchIds.length > 0)}
            numSearchResults={this._searchIds.length}
            selectedMenuItem={this.state.highlightedIndex}
            showSelectedParagraphs={true}
            listedTopics={topics}
            selectedParagraphClick={ this.highlightSelectedParagraphs.bind(this) }
            toggleOnClick={ this.toggleHightlightedParagraphs.bind(this) }
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
