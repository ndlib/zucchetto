'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DocumentType extends Component {

  render() {
    if (this.props.item.metadata.type_of_document) {
      return (<i>{this.props.item.metadata.type_of_document.values[0].value}</i>);
    }
    return (<div />);
  }
}

DocumentType.propTypes = {
  item: PropTypes.object,
}

export default DocumentType;
