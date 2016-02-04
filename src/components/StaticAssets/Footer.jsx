'use strict'
import React, { Component, PropTypes } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-8">
            <img src="/resources/images/cchr.png" />
            <img src="/resources/images/cds.png" />
            <nav>
              <ul>
                  <li>
                <a href="about">About the Database</a>
              </li>
              <li>
                <a href="partners">Project Partners</a>
              </li>
              <li>
                <a href="Contact">Contact Us</a>
              </li>
                </ul>
            </nav>
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
