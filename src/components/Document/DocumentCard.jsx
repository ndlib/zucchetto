'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import Title from '../Document/Title.jsx';

class DocumentCard extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
    this._parent = ItemStore.getItemParent(this._item);
  }

  primaryAction(event) {
    this.props.primaryAction(event, this._item);
  }

  render() {
    return (
      <div className="document">
        <div  style={{cursor: 'pointer'}} onClick={this.primaryAction}>
          <Title item={this._parent} />
        </div>
        <CurrentParagraph item={ this._item } />
        {this.props.children}
      </div>
    );
  }
}

DocumentCard.propTypes = {
  item: React.PropTypes.object,
  primaryAction: React.PropTypes.func,
}

export default DocumentCard;
