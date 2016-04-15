'use strict'
import React, { Component, PropTypes } from 'react';

class DocumentType extends Component {

  render() {
    if (this.props.item.metadata.type_of_document) {
      return (<i>{this.props.item.metadata.type_of_document.values[0].value}</i>);
    }
    return (<div />);
  }
}

DocumentType.propTypes = {
  item: React.PropTypes.object,
}

export default DocumentType;
