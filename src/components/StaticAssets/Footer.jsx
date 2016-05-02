'use strict'
import React, { Component, PropTypes } from 'react';
import CompareButton from '../Document/CompareButton.jsx';
import BackToSearchButton from '../Document/BackToSearchButton.jsx';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-5 compare">
            { this.props.showCompareButton ? (<CompareButton/>) : '' }
            { this.props.showBackToSearchButton ? (<BackToSearchButton/>) : '' }
          </div>
          <div className="col-sm-2">
            <a href="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank">Project Feedback<br /></a>
            <span className="tearms"><a href="#">Tearms of Service</a> | <a href="#">Privacy Policy</a></span>
          </div>
          <div className="col-sm-5 right">
            <a href="http://humanrights.nd.edu/" target="_blank"><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr" /></a>
            <a href="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="undhl" /></a>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  showCompareButton: React.PropTypes.bool,
  showBackToSearchButton: React.PropTypes.bool,
}

Footer.defaultProps = {
  showCompareButton: false,
  showBackToSearchButton: false,
}

export default Footer;
