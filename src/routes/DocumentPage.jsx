'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import Document from '../components/Document/Document.jsx';
import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'

class DocumentPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: ItemStore.preLoaded(),
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
    return (<Document documentId={ this.props.params.id } />);
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <mui.Paper zDepth={ 0 }>
        <Header/>
        <br /><br /><br />
        <mui.Tabs style={{ top: "70px" }}>
          <mui.Tab label="Search Results">
            <h2>Search Results</h2>
            <p> These would be the selected paragraphs in order of relavance. Options include compare this paragraph. </p>
          </mui.Tab>
          <mui.Tab label="Full Document">
            { this.renderDocument() }
          </mui.Tab>
          <mui.Tab label="Metadata">
            <h2> Metadata </h2>
            the full document metadata.
          </mui.Tab>
          <mui.Tab label="Download">

          </mui.Tab>
        </mui.Tabs>
        <Footer />
      </mui.Paper>
    );
  }
}

export default DocumentPage;
