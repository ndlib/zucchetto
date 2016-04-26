'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import DocumentDialog from '../Document/DocumentDialog.jsx';
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
    this.resultsOnClick = this.resultsOnClick.bind(this);
    this.titleOnClick = this.titleOnClick.bind(this);
    this.paragraphs = this.paragraphs.bind(this);

    this._doc = ItemStore.getItem(props.groupedItem.doc);
    this._paragraphs = [];
    for(var i = 0; i < props.groupedItem.paragraphs.length; i++) {
      this._paragraphs.push(ItemStore.getItem(props.groupedItem.paragraphs[i]));
    }
  }

  resultsOnClick(event) {
    event.preventDefault();
    this.setState({showDocument: !this.state.showDocument});
  }

  titleOnClick(event) {
    this.refs.DocumentDialog.handleOpen(this._doc.id);
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
          {paragraphs}
        </div>
      );
    }
  }

  blurb() {
    return this._paragraphs[0].metadata.transcription.values[0].value.replace(/<\/?[^>]+(>|$)/g, "");
  }

  render() {
    return (
      <div>
        <DocumentDialog ref="DocumentDialog" />
        <DocumentCard
          doc={ this._doc }
          paragraphs={ this._paragraphs }
          primaryAction={ this.titleOnClick }
        >
          <div className="blurb">
            <p style={{ textOverflow: "ellipsis", height: "3em", overflow: "hidden"}}>
              { this.blurb() }
            </p>
            <a href="#" onClick={ this.resultsOnClick } >
              { this._paragraphs.length } Search Results in Document
            </a>
          </div>
          <hr />
          <p>
<<<<<<< HEAD
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard...
          </p>
          <a href="#">
            { this._paragraphs.length } Search Results in Document
          </a>
        </div>
        { this.paragraphs() }
      </DocumentCard>
=======
            <AddToCompare
              item={ this._doc }
              subItems={ this._paragraphs }
            />
          </p>
          { this.paragraphs() }
        </DocumentCard>
      </div>
>>>>>>> master
    );
  }
};

ListItem.propTypes = {
  groupedItem: PropTypes.object.isRequired,
}

export default ListItem;
