'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TokenSearchBox from './TokenSearchBox.jsx';
class LandingContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="col-sm-1">&nbsp;</div>
        <div className="col-sm-10">
          <div style={{ display: "inline-block", paddingTop: "45px" }}>
            <h1>Get Started</h1>
            <h2>Enter a search query or select a filter to view a list of matching documents.</h2>
            <TokenSearchBox />
              <nav style={{margin: '30px auto'}}>
                <div className="col-sm-6">
                  <p><Link to="/documents">Document Index</Link></p>
                  <p><Link to="/about">About the Database</Link></p>
                  <p><Link to="/using">Using the Database</Link></p>
                </div>
                <div className="col-sm-6" style={{textAlign: 'right'}}>
                  <p><Link to="/partners">Project Partners</Link></p>
                  <p><Link to="/privacy">Privacy Policy</Link></p>
                  <p><Link to="/terms">Terms of Service</Link></p>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-sm-1">&nbsp;</div>
        </div>
     );
  }
}

export default LandingContent;
