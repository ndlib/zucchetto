'use strict'
import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-8">
            <p>
              <img src="/resources/images/cchr.png" className="cchr" />
              <img src="/resources/images/cds.png" className="cds" />
            </p>
          </div>
          <div className="col-sm-4 right">
            <img src="/resources/images/und.png" />
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
