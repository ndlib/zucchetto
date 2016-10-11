'use strict'
import React, { Component, PropTypes } from 'react';

import Partners from '../components/StaticPages/Partners.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class PartnersPage extends Component {
  render() {
    return (
      <div>
        <Partners  />
        <FeedbackLink />
      </div>
    );
  }
}

export default PartnersPage;
