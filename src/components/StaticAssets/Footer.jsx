'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Drawer from '../../components/Search/Drawer.jsx';

class Footer extends Component {
  render() {
    return (<Drawer />);
  }
}

Footer.propTypes = {
  showCompareButton: PropTypes.bool,
  showBackToSearchButton: PropTypes.bool,
}

Footer.defaultProps = {
  showCompareButton: false,
  showBackToSearchButton: false,
}

export default Footer;
