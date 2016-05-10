'use strict'
import React, { Component, PropTypes } from 'react';

class CopyrightNotification extends Component {

  render() {
    if (this.props.item.metadata && this.props.item.metadata.rights_holder && this.props.item.metadata.rights_holder_website) {
      return (
        <p style={{clear: 'left', textAlign: 'center'}}>
          <a href={ this.props.item.metadata.rights_holder_website.values[0].value } target="_blank" className="copyright-notification">{ this.props.item.metadata.rights_holder.values[0].value }</a>
          <hr style={{background: '#dddddd'}}/>
        </p>
      );
    }
    return null;
  }
}

CopyrightNotification.propTypes = {
  item: React.PropTypes.object,
}

export default CopyrightNotification;
