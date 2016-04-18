'use strict'
import React, { Component, PropTypes } from 'react';

class ViewOriginal extends Component {

  render() {
    if (this.props.item.metadata.url) {
      return (
        <p>
          <a href={ this.props.item.metadata.url.values[0].value } target="_blank" className="view-original">View PDF</a>
        </p>
      );
    }
    return (<div />);
  }
}

ViewOriginal.propTypes = {
  item: React.PropTypes.object,
}

export default ViewOriginal;
