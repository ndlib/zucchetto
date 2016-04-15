'use strict'
import React, { Component, PropTypes } from 'react';

class DocumentType extends Component {

  render() {
    if (this.props.item.metadata.type_of_document) {
      return (<h3>{this.props.item.metadata.type_of_document.values[0].value}</h3>);
    }
    return (<div />);
  }
}

DocumentType.propTypes = {
  item: React.PropTypes.object,
}

export default DocumentType;
