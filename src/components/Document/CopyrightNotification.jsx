'use strict'
import React, { Component, PropTypes } from 'react';

class CopyrightNotification extends Component {

  render() {
    if (this.props.item.metadata.rights_holder_website) {
      return (
        <p>
          <a href="http://www.google.com" target="_blank" className="copyright-notification">{ this.props.item.metadata.rights_holder_website.values[0].value }</a>
        </p>
      );
    }
    return (<div />);
  }
}

CopyrightNotification.propTypes = {
  item: React.PropTypes.object,
}

export default CopyrightNotification;
