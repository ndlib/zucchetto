'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import mui, { FlatButton } from 'material-ui';

class ViewOriginal extends Component {
  constructor(props) {
    super(props);
    this.openUrl = this.openUrl.bind(this);
    this._doc = ItemStore.getItem(this.props.documentId);
  }

  openUrl() {
    window.open(this._doc.metadata.url.values[0].value);
  }

  render() {

    if (this._doc && this._doc.metadata.url) {
      return (
        <FlatButton
          label="View PDF"
          onClick={ this.openUrl }
          style={{ margin: '10px 24px'}}
        />
      );
    }
    return (<div />);
  }
}

ViewOriginal.propTypes = {
  docuementId: React.PropTypes.object,
}

export default ViewOriginal;
