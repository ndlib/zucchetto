'use strict'
import React, { Component, PropTypes } from 'react';
import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'


class Page extends Component {
  componentWillMount() {
    ItemActions.preLoadItems();
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default Page;
