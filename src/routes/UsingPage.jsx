'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

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
