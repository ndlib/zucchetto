'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

import Result from '../components/StaticPages/Result.jsx'
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
class ResultPage extends Component {
  render() {
    return (
      <div>
        <Result  />
        <FeedbackLink />
      </div>
    );
  }
}

export default ResultPage;
