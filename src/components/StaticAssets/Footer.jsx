'use strict'
import React, { Component, PropTypes } from 'react';
import CompareButton from '../Document/CompareButton.jsx'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-6">
            <CompareButton />
          </div>
          <div className="col-sm-6 right">
            <img src="/resources/images/cchr.png" className="cchr" />
            <img src="/resources/images/undhl-cds.png" className="undhl" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
