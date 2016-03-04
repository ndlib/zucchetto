'use strict'
import React, { Component, PropTypes } from 'react';

class DownloadPDF extends Component {

  render() {
    if (this.props.item.metadata.manuscript_url) {
      return (<a href={this.props.item.metadata.manuscript_url.values[0].value}>Download PDF</a>);
    }
    return (<div />);
  }
}

DownloadPDF.propTypes = {
  item: React.PropTypes.object,
}

export default DownloadPDF;
