'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

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
