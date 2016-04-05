'use strict'
import React, { Component, PropTypes } from 'react';
import CompareButton from '../Document/CompareButton.jsx'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-6 compare">
            <CompareButton />
          </div>
          <div className="col-sm-6 right">
            <a href="http://humanrights.nd.edu/"><img src="/resources/images/cchr.png" className="cchr" /></a>
            <a href="https://library.nd.edu/cds"><img src="/resources/images/undhl-cds.png" className="undhl" /></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
