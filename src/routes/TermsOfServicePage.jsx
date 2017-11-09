'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

import TermsOfService from '../components/StaticPages/TermsOfService.jsx';
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class TermsOfServicePage extends Component {
  render() {
    return (
      <div>
        <TermsOfService />
        <FeedbackLink />
      </div>
     );
  }
}

export default TermsOfServicePage;
