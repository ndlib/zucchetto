'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import Paragraph from '../Document/Paragraph.jsx';
import CopyrightNotification from '../Document/CopyrightNotification.jsx';
import DocumentCard from '../Document/DocumentCard.jsx';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';

import AddToCompare from '../Document/AddToCompare.jsx';

class ListItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showDocument: false,
    };
    this.titleOnClick = this.titleOnClick.bind(this);
    this.paragraphs = this.paragraphs.bind(this);

    this._doc = ItemStore.getItem(props.groupedItem.doc);
    this._paragraphs = [];
    for(var i = 0; i < props.groupedItem.paragraphs.length; i++) {
      this._paragraphs.push(ItemStore.getItem(props.groupedItem.paragraphs[i]));
    }
  }

  titleOnClick() {
    this.setState({showDocument: !this.state.showDocument});
  }

  paragraphs() {
    var paragraphs = [];
    for(var i = 0; i < this._paragraphs.length; i++) {
      paragraphs.push(
        <div key={ i } >
          <Paragraph item={ this._paragraphs[i] } />
          <CurrentParagraph item={ this._paragraphs[i] } />
          <AddToCompare item={ this._paragraphs[i] } />
        </div>
      );
    }
    return (
      <div>
        {paragraphs}
      </div>
    );
  }

  render() {
    if(this.state.showDocument) {
      return (
        <DocumentCard
          doc={ this._doc }
          paragraphs={ this._paragraphs }
          primaryAction={ this.titleOnClick }
        >
          <AddToCompare
            item={ this._doc }
            subItems={ this._paragraphs }
          />
          <hr />
          { this.paragraphs() }
          <CopyrightNotification item={ this._doc } />
        </DocumentCard>
      );
    } else {
      return (
        <DocumentCard
          doc={ this._doc }
          paragraphs={ this._paragraphs }
          primaryAction={ this.titleOnClick }
        >
          <AddToCompare
            item={ this._doc }
            subItems={ this._paragraphs }
          />
        </DocumentCard>
      );
    }
  }
};

ListItem.propTypes = {
  groupedItem: PropTypes.object.isRequired,
}

export default ListItem;
