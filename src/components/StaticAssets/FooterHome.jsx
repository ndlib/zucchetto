'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class FooterHome extends Component {
  render() {
    return (

    <div>
      <footer className="all">
        <div className="row">
          <div className="col-sm-4">


 <Link to="http://humanrights.nd.edu" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr" /></Link>

          </div>
          <div className="col-sm-4" style={{textAlign: 'center', zIndex: '6'}} >
 <Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank">Report a Problem<br /></Link>
            <span className="tearms"><Link to='/terms'>Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></span><br/>
            <span className="copyright org tearms">
          <a href="http://www.nd.edu/copyright/">Copyright</a> &copy; 2017
          <a href="http://www.nd.edu/" className="org"> &nbsp;University of Notre Dame</a>
        </span><br/>
        <span className="tearms">
<a href="http://www.nd.edu/about/accessibility/">Accessibility Information</a>
</span>

          </div>
          <div className="col-sm-4">
            <Link to="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/ndl.cds.b.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="undhl" /></Link>
          </div>
        </div>
      </footer>

       <footer className="homepage">
        <div className="row">
          <div className="col-sm-8">

            <span className="copyright org tearms">
          <a href="http://www.nd.edu/copyright/">Copyright</a> &copy; 2017
          <a href="http://www.nd.edu/" className="org"> &nbsp;University of Notre Dame</a>
            &nbsp;|&nbsp;<a href="http://humanrights.nd.edu" className="org"> Center for Civil &amp; Human Rights</a>
        </span>
        <br/>
        <span className="address tearms"><span className="street-address">2150 Eck Hall of Law</span>, <span className="locality">Notre Dame</span>, <span className="region" title="Indiana">IN</span> <span className="postal-code">46556</span></span>
              <br/><span className="tearms tel"><span className="type">Phone</span> 574.631.8555</span>&nbsp;&nbsp;
      <span className="tearms tel fax"><span className="type">Fax</span> 574.631.8702</span>&nbsp;&nbsp;
      <span className="tearms email"><a href="mailto:cchr@nd.edu">cchr@nd.edu</a></span><br/>
        <span className="tearms">
<a href="http://www.nd.edu/about/accessibility/">Accessibility Information</a><br/>
<Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank">Report a Problem<br /></Link>
            <span className="tearms"><Link to='/terms'>Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></span><br/>
</span>

          </div>

          <div className="col-sm-4">
            <Link to="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/und.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="undhl" /></Link>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}


export default FooterHome;
