'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import _ from 'underscore'

class DisplayDocument extends Component {

  paragraphs() {
    return ItemStore.getItemChildrenInOrder(this.props.documentId).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    console.log(item);
    if (item.metadata.transcription) {
      return (<p dangerouslySetInnerHTML={ { __html: item.metadata.transcription.values[0].value } } />);
    } else {
      return "";
    }
  }

  render() {
    console.log("render")
    console.log(this.paragraphs());
    return (<div>{ this.paragraphs() }</div>);
  }
}

DisplayDocument.propTypes = {
  documentId: React.PropTypes.string,
}

export default DisplayDocument;
