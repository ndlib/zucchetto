'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DownloadPDF extends Component {

  render() {
    if (this.props.item.metadata.manuscript_url) {
      return (<a target="_blank" href={this.props.item.metadata.manuscript_url.values[0].value}>Download PDF</a>);
    }
    return (<div>&nbsp;</div>);
  }
}

DownloadPDF.propTypes = {
  item: PropTypes.object,
}

export default DownloadPDF;
