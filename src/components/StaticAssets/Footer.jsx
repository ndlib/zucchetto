'use strict'
import React, { Component, PropTypes } from 'react';
import Drawer from '../../components/Search/Drawer.jsx';

class Footer extends Component {
  render() {
    return (<Drawer />);
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
