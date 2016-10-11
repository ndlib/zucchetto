'use strict'
import React, { Component, PropTypes } from 'react';

import Privacy from '../components/StaticPages/Privacy.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class PrivacyPage extends Component {
  render() {
    return (
      <div>
        <Privacy  />
        <FeedbackLink />
      </div>
    );
  }
}

export default PrivacyPage;
