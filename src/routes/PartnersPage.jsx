'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

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
