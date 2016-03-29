'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import Paragraph from '../Document/Paragraph.jsx';
import CopyrightNotification from '../Document/CopyrightNotification.jsx';
import DocumentCard from '../Document/DocumentCard.jsx';
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
    if(this.state.showDocument) {
      var paragraphs = [];
      for(var i = 0; i < this._paragraphs.length; i++) {
        paragraphs.push(
          <div key={ i } >
            <Paragraph
              item={ this._paragraphs[i] }
              showCheckBoxes={ true }
            />
          </div>
        );
      }
      return (
        <div>
          <CopyrightNotification item={ this._doc } />
          <hr />
          {paragraphs}
        </div>
      );
    }
  }

  render() {
    return (
      <DocumentCard
        doc={ this._doc }
        paragraphs={ this._paragraphs }
        primaryAction={ this.titleOnClick }
      >
        <div
          style={{
            paddingTop: '10px',
            position: 'absolute',
            right: '30px'
          }}
        >Results in Document: {this._paragraphs.length}</div>
        <AddToCompare
          item={ this._doc }
          subItems={ this._paragraphs }
        />
        { this.paragraphs() }
      </DocumentCard>
    );
  }
};

ListItem.propTypes = {
  groupedItem: PropTypes.object.isRequired,
}

export default ListItem;
