'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class FooterHome extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-4">
            <Link to="http://humanrights.nd.edu" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr" /></Link>
          </div>
          <div className="col-sm-4" style={{textAlign: 'center', zIndex: '6'}} >
            <Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank">Report a Problem<br /></Link>
            <span className="tearms"><Link to='/terms'>Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></span><br/>
            <span className="copyright org tearms">
          <a href="http://www.nd.edu/copyright/">Copyright</a> &copy; 2017 
          <a href="http://www.nd.edu/" class="org"> &nbsp;University of Notre Dame</a>
        </span><br/>
        <span className="tearms">
<a href="http://www.nd.edu/about/accessibility/">Accessibility Information</a>
</span>
          </div>
          <div className="col-sm-4">
            <Link to="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="undhl" /></Link>
          </div>
        </div>
      </footer> 
    );
  }
}


export default FooterHome;
