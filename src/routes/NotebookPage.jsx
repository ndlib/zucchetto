'use strict'
import React, { Component, PropTypes } from 'react';

import Notebook from '../components/Notebook/Notebook.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';
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
    this.setState({loaded: true});
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
