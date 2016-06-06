'use strict'
import React, { Component, PropTypes } from 'react';
import ItemActions from '../actions/ItemActions.jsx'
import ItemStore from '../store/ItemStore.js'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"

class Page extends Component {
  componentWillMount() {
    ItemActions.preLoadItems();
  }

  render() {
    return (
      <div className='page'>
        { this.props.children }
        <FeedbackLink />  
      </div>
    );
  }
}

export default Page;
