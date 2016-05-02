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
    this.paragraphsOrCompare = this.paragraphsOrCompare.bind(this);
    this.resultCount = this.resultCount.bind(this);

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

  paragraphsOrCompare(showParagraphs) {
    if(showParagraphs) {
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
          {paragraphs}
        </div>
      );
    } else {
      return (
        <AddToCompare
          item={ this._doc }
          subItems={ this._paragraphs }
          document={ true }
        />
      )
    }
  }

  blurb() {
    var blurb = [];
    if(this._doc.metadata.alternative_title && this._doc.metadata.document_symbol) {
        blurb.push(<p>{this._doc.metadata.alternative_title.values[0].value} - {this._doc.metadata.document_symbol.values[0].value}</p>);
    }
    else {
      if(this._doc.metadata.alternative_title) {
        blurb.push(<p>{this._doc.metadata.alternative_title.values[0].value}</p>);
      }
      if(this._doc.metadata.document_symbol) {
        blurb.push(<p>{this._doc.metadata.document_symbol.values[0].value}</p>);
      }
    }


    if(this._doc.metadata.type_of_document) {
      if(this._doc.metadata.promulgated_by) {
        blurb.push(<p>{this._doc.metadata.type_of_document.values[0].value}, Promulgated By {this._doc.metadata.promulgated_by.values[0].value}.</p>);
      }
      else if(this._doc.metadata.entry_into_force) {
        blurb.push(<p>{this._doc.metadata.type_of_document.values[0].value}, Entered Into Force On {this._doc.metadata.entry_into_force.values[0].value}.</p>);
      }
      else {
        blurb.push(<p>{this._doc.metadata.type_of_document.values[0].value}</p>);
      }
    } else {
      if(this._doc.metadata.promulgated_by) {
        blurb.push(<p>Promulgated By {this._doc.metadata.promulgated_by.values[0].value}.</p>);
      }
      else if(this._doc.metadata.entry_into_force) {
        blurb.push(<p>Entered Into Force On {this._doc.metadata.entry_into_force.values[0].value}.</p>);
      }
    }

    if(blurb.length !== 0) {
      return blurb;
    } else {
      return (<p>NO BLURB</p>);
    }


  }

  resultCount() {
    return (
      <p>
        <a href="#" onClick={ this.resultsOnClick } >

          <span
            style={{ fontSize: '15px' }}
          >{ this._paragraphs.length }
          </span> Search Results in Document <i
            className="material-icons"
            style={{
              fontSize: '12px',
              transform: this.state.showDocument ? 'rotate(90deg)' : 'rotate(180deg)'
            }}
            >play_arrow</i>
        </a>
      </p>
    );
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
            <CopyrightNotification item={ this._doc } />
            { this.blurb() }
            { this.resultCount() }
          </div>

          { this.paragraphsOrCompare(this.state.showDocument) }
        </DocumentCard>
      </div>
    );
  }
};

ListItem.propTypes = {
  groupedItem: PropTypes.object.isRequired,
}

export default ListItem;
