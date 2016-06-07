'use strict'
import React, { Component, PropTypes } from 'react';

import Using from '../components/StaticPages/Using.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class UsingPage extends Component {
  render() {
    return (
      <div>
        <Using />
        <FeedbackLink />
      </div>
    );
  }
}

export default UsingPage;
