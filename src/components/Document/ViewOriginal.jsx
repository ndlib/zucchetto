'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import mui from 'material-ui';

class ViewOriginal extends Component {

  render() {
    let doc = ItemStore.getItem(this.props.documentId);
    if (doc && doc.metadata.url) {
      return (
        <mui.FlatButton linkButton={true} href={ doc.metadata.url.values[0].value } target="_blank" label="View PDF" />
      );
    }
    return (<div />);
  }
}

ViewOriginal.propTypes = {
  docuementId: React.PropTypes.object,
}

export default ViewOriginal;
