'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../components/StaticAssets/Header.jsx';
import Document from '../components/Document/Document.jsx';
import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'

class DocumentPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
    this.preLoadFinished = this.preLoadFinished.bind(this)
  }

  componentWillMount() {
    if (ItemStore.preLoaded()) {
      this.preLoadFinished();
    } else {
      var func = this.preLoadFinished.bind(this);
      ItemStore.on("PreLoadFinished", func);
    }
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  renderDocument() {
    if (this.state.loaded) {
      return (<Document documentId={ this.props.params.id } />);
    } else {
      return (<p>Loading....</p>);
    }
  }

  render() {
    return (
      <mui.Paper zDepth={ 0 }>
        <Header/>
        { this.renderDocument() }
      </mui.Paper>
    );
  }
}

export default DocumentPage;
