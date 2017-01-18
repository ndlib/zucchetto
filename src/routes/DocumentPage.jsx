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
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
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
      loaded: false,
      showSection: 'document',
      comparedItems: CompareStore.allItems(),
      parent: null,
      children: []
    };

    this.childrenLoadFinished = this.childrenLoadFinished.bind(this);
    this.updateCompare = this.updateCompare.bind(this);
    this.onClick = this.onClick.bind(this);
    this.contentSection = this.contentSection.bind(this);
  }

  componentWillMount() {
    ItemStore.on("LoadChildrenFinished", this.childrenLoadFinished);
    ItemActions.loadChildren(this.props.params.id);
    CompareStore.on('ItemCompareUpdated', this.updateCompare);
  }

  componentWillUnmount() {
    ItemStore.removeListener("LoadChildrenFinished", this.childrenLoadFinished);
    CompareStore.removeListener('ItemCompareUpdated', this.updateCompare);
  }

  updateCompare() {
    this.setState({ comparedItems: CompareStore.allItems() })
  }

  childrenLoadFinished(parentId) {
    if(parentId === this.props.params.id){
      var parent = ItemStore.getItem(this.props.params.id);
      this.setState({
        loaded: true,
        parent: parent,
        children: ItemStore.getItemChildrenInOrder(parent)
      });
    }
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
          parent={ this.state.parent }
          children={ this.state.children }
        />
      );
    } else if (section === 'meta') {
      return (
        <MetadataSection document={ this.state.parent } />
      );
    }
    return (<p>Loading...</p>)
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <div zDepth={ 0 }>
        <Header />
        <DocumentToolbar
          document={ this.state.parent }
          buttonFunction={ this.onClick }
          activeSection={ this.state.showSection}
        />
        { this.contentSection(this.state.showSection) }
        <Footer showCompareButton={ true }/>
        <FeedbackLink />
      </div>
    );
  }
}

DocumentPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentPage;
