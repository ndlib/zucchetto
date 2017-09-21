'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui'
import SiteIndex from '../components/StaticPages/SiteIndex.jsx'
import InitUser from '../modules/InitUser.js'
class InitUserPage extends Component {
  render() {
    InitUser();
    return (
      <div>
      <SiteIndex  />
        <mui.Snackbar
          className='snack-drawer'
          open={ true }
          message={ `Feedback mode has been enabled. Your id is ${localStorage.getItem('UUID')}.` }
          autoHideDuration={ 6000 }
          onRequestClose={()=> {}}
        />
      </div>
    );
  }
}

export default InitUserPage;
