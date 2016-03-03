'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import _ from 'underscore'

class DisplayDocument extends Component {

  paragraphs() {
    var item = ItemStore.getItem(this.props.documentId);
    var parent = ItemStore.getItemParent(item);
    return ItemStore.getItemChildrenInOrder(parent).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    if (item.metadata.transcription) {
      return (<p dangerouslySetInnerHTML={ { __html: item.metadata.transcription.values[0].value } } />);
    } else {
      return "";
    }
  }

  render() {
    return (<div>{ this.paragraphs() }</div>);
  }
}

DisplayDocument.propTypes = {
  documentId: React.PropTypes.string,
}

export default DisplayDocument;
