'use strict'
import React, { Component, PropTypes } from 'react';

class ShareSave extends Component {

  render() {
    return (<a href="#" className="top-links"><i className="material-icons" style={{verticalAlign: 'text-top'}}>mail_outline</i>Share/Save</a>);
  }
}

ShareSave.propTypes = {
  item: React.PropTypes.object,
}

export default ShareSave;
