'use strict'
import React, { Component, PropTypes } from 'react';

import Notebook from '../components/Notebook/Notebook.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
import ItemQueryParams from '../modules/ItemQueryParams.js';
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"

class NotebookPage extends Component {
  constructor(props) {
    super(props);
    this.preLoadFinished = this.preLoadFinished.bind(this);

    this.state = {
      loaded: ItemStore.preLoaded(),
    };
  }

  componentWillMount() {
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  componentWillUnmount() {
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  preLoadFinished() {
    this.setState({loaded: true}, this.loadChildren);
  }

  loadChildren() {
    var docs = ItemQueryParams('d');
    // TODO: Call a function that makes sure the LoadChildrenFinished event
    // is actually for this doc
    ItemStore.on("LoadChildrenFinished", this.forceUpdate.bind(this));
    for(var doc in docs){
      ItemActions.loadChildren(docs[doc]);
    }
  }

  render() {
    if (!this.state.loaded) {
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
