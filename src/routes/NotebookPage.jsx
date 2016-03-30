'use strict'
import React, { Component, PropTypes } from 'react';

import Notebook from '../components/Notebook/Notebook.jsx';
import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';


class NotebookPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
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
      </div>
    );
  }
}

export default NotebookPage;
