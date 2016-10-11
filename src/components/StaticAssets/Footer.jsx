'use strict'
import React, { Component, PropTypes } from 'react';
import Drawer from '../../components/Search/Drawer.jsx';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-4 compare">
            { this.props.showCompareButton ? (<CompareButton/>) : '' }
            { this.props.showBackToSearchButton ? (<BackToSearchButton/>) : '' }
          </div>
          <div className="col-sm-4" style={{textAlign: 'center', zIndex: '6'}} >
            <Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank">Report a Problem<br /></Link>
            <span className="tearms"><Link to='/terms'>Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></span>
          </div>
          <div className="col-sm-4 right">
            <Link to="http://humanrights.nd.edu" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr" /></Link>
            <Link to="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="undhl" /></Link>
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
