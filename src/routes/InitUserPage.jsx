'use strict'
import React, { Component, PropTypes } from 'react';

import SiteIndex from '../components/StaticPages/SiteIndex.jsx'
import InitUser from '../modules/InitUser.js'
class InitUserPage extends Component {
  render() {
    InitUser();
    return (
      <SiteIndex  />
    );
  }
}

export default InitUserPage;
