'use strict'
import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';

import Notebook from '../components/Notebook/Notebook.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
import ItemQueryParams from '../modules/ItemQueryParams.js';
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"

class NotebookPage extends Component {
  constructor(props) {
    super(props);
    this.handleChildrenLoaded = this.handleChildrenLoaded.bind(this);

    this.state = {
      docsToLoad: [].concat.apply(ItemQueryParams('h'), ItemQueryParams('v'))
    };
  }

  componentWillMount() {
    this.loadDocsWithChildren();
  }

  componentWillUnmount() {
    ItemStore.removeListener("LoadChildrenFinished", this.handleChildrenLoaded);
  }

  loadDocsWithChildren() {
    ItemStore.on("LoadChildrenFinished", this.handleChildrenLoaded);
    for(var doc in this.state.docsToLoad){
      ItemActions.loadParent(this.state.docsToLoad[doc]);
    }
  }

  handleChildrenLoaded(doc) {
    const newState = update(this.state, {
      docsToLoad: {$apply: function(remainingDocs) {
        remainingDocs.pop(doc);
        return remainingDocs;
      }}
    });
    this.setState(newState);
  }

  render() {
    if (this.state.docsToLoad.length > 0) {
      return (<p>Loading....</p>);
    }

    return (
      <div>
        <Notebook />
        {this.props.children}
        <FeedbackLink />
      </div>
    );
  }
}

export default NotebookPage;
