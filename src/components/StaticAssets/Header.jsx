'use strict'
import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-8">
            <h1>Research Database</h1>
            <p className="tagline">A CROSS-COMPARISON OF CATHOLIC SOCIAL TEACHING AND INTERNATIONAL HUMAN RIGHTS LAW</p>
          </div>
        <div className="col-md-4 right">
          <img src="/resources/images/cchr.png" className="cchr" />
            <img src="/resources/images/cds.png" className="cds" />
        </div>
        </div>
      </header>
    );
  }
}

export default Header;
