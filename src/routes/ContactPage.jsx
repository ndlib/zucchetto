'use strict'
import React, { Component, PropTypes } from 'react';

import Contact from '../components/StaticPages/Contact.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class ContactPage extends Component {
  render() {
    return (
      <div>
        <Contact  />
        <FeedbackLink />
      </div>
    );
  }
}

export default ContactPage;
