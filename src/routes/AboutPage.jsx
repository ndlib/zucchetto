'use strict'
import React, { Component, PropTypes } from 'react';

import About from '../components/StaticPages/About.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"

class AboutPage extends Component {
  render() {
    return (
      <div>
        <About  />
        <FeedbackLink />
      </div>
    );
  }
}

export default AboutPage;
