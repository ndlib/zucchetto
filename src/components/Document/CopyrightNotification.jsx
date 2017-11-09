'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CopyrightNotification extends Component {

  render() {
    if (this.props.item.metadata && this.props.item.metadata.rights_holder && this.props.item.metadata.rights_holder_website) {
      return (
        <div style={{ clear: 'left', textAlign: this.props.align }}>
          <a
            href={ this.props.item.metadata.rights_holder_website.values[0].value }
            target="_blank"
            className="copyright-notification"
            style={{color: '#224048'}}
          >{ this.props.item.metadata.rights_holder.values[0].value }</a>
          <hr style={{background: '#dddddd'}}/>
        </div>
      );
    }
    return null;
  }
}

CopyrightNotification.propTypes = {
  item: PropTypes.object,
  align: PropTypes.string,
}

CopyrightNotification.defaultProps = {
  align: 'center'
}

export default CopyrightNotification;
