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
import Drawer from '../components/Search/Drawer.jsx';

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
      showSection: 'document',
      comparedItems: CompareStore.allItems(),
    };

    this.preLoadFinished = this.preLoadFinished.bind(this);
    this.updateCompare = this.updateCompare.bind(this);
    this.onClick = this.onClick.bind(this);
    this.contentSection = this.contentSection.bind(this);
  }

  componentWillMount() {
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
    CompareStore.on('ItemCompareUpdated', this.updateCompare);
  }

  componentWillUnmount() {
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
    CompareStore.removeListener('ItemCompareUpdated', this.updateCompare);
  }

  updateCompare() {
    this.setState({ comparedItems: CompareStore.allItems() })
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  onClick(section) {
    if(section !== this.state.showSection) {
      this.setState({ showSection: section });
    }
  }

  contentSection(section){
    if(section === 'document') {
      return (
        <DocumentSection
          baseState={ this._baseState }
          searchIds={ this._searchIds }
          comparedItems={ this.state.comparedItems }
          parent={ ItemStore.getItem(this.props.params.id) }
        />
      );
    } else if (section === 'meta') {
      return (
        <MetadataSection document={ ItemStore.getItem(this.props.params.id) } />
      );
    }
    return (<p>Loading...</p>)
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <Paper zDepth={ 0 }>
        <Header />
        <DocumentToolbar
          document={ ItemStore.getItem(this.props.params.id) }
          buttonFunction={ this.onClick }
        />
      { this.contentSection(this.state.showSection) }
        <Footer showCompareButton={ true }/>
        <Drawer />
      </Paper>
    );
  }
}

DocumentPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentPage;
