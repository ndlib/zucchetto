'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Paper } from 'material-ui';
import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
import CompareStore from '../store/CompareStore.js'
import DocumentSection from '../components/Document/DocumentSection.jsx';
import MetadataSection from '../components/Document/MetadataSection.jsx';
import DocumentToolbar from '../components/Document/DocumentToolbar.jsx';

class DocumentPage extends Component {
  constructor(props, context) {
    super(props, context);

    this._baseState = "none";
    this._searchIds = [];
    if (this.props.location.query.searchIds) {
      this._baseState = "search"
      this._searchIds = this.props.location.query.searchIds.split(",");
    }

    this.state = {
      loaded: ItemStore.preLoaded(),
    };

    this.preLoadFinished = this.preLoadFinished.bind(this);

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

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <Paper zDepth={ 0 }>
        <Header />
        <br /><br /><br />
        <DocumentToolbar document={ parent } />
        <DocumentSection
          baseState={ this._baseState }
          searchIds={ this._searchIds }
          comparedItems={ CompareStore.allItems() }
          parent={ ItemStore.getItem(this.props.params.id) }
        />
        <Footer />
      </Paper>
    );
  }
}

DocumentPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentPage;
