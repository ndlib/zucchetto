'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import DocumentDialog from '../Document/DocumentDialog.jsx';
import Paragraph from '../Document/Paragraph.jsx';
import CopyrightNotification from '../Document/CopyrightNotification.jsx';
import DocumentCard from '../Document/DocumentCard.jsx';
import AddToCompare from '../Document/AddToCompare.jsx';
import Title from '../Document/Title.jsx';
import { Link } from 'react-router';


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
          <CopyrightNotification item={ this._doc } />
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
        blurb.push(this._doc.metadata.alternative_title.values[0].value + ' - ' +  this._doc.metadata.document_symbol.values[0].value + '; ');
    }
    else {
      if(this._doc.metadata.alternative_title) {
        blurb.push(this._doc.metadata.alternative_title.values[0].value + '; ');
      }
      if(this._doc.metadata.document_symbol) {
        blurb.push(this._doc.metadata.document_symbol.values[0].value + '; ');
      }
    }


    if(this._doc.metadata.type_of_document) {
      if(this._doc.metadata.promulgated_by) {
        blurb.push(this._doc.metadata.type_of_document.values[0].value + ', Promulgated By ' +  this._doc.metadata.promulgated_by.values[0].value + '.');
      }
      else if(this._doc.metadata.entry_into_force) {
        blurb.push(this._doc.metadata.type_of_document.values[0].value + ', Entered Into Force On ' + this._doc.metadata.entry_into_force.values[0].value + '.');
      }
      else {
        blurb.push(this._doc.metadata.type_of_document.values[0].value);
      }
    } else {
      if(this._doc.metadata.promulgated_by) {
        blurb.push('Promulgated By ' + this._doc.metadata.promulgated_by.values[0].value + '.');
      }
      else if(this._doc.metadata.entry_into_force) {
        blurb.push('Entered Into Force On ' + this._doc.metadata.entry_into_force.values[0].value + '.');
      }
    }

    if(blurb.length !== 0) {
      return (<p>{blurb}</p>);
    } else {
      return (<p></p>);
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

  selectedParagraphIds() {
    return this._paragraphs.map(function (p) {
      return p.id;
    });
  }

  render() {
    return (
      <article className="result document">
        <Link to={ "/document/" + this._doc.id + "?searchIds=" + this.selectedParagraphIds() }>
          <Title item={this._doc} />
        </Link>
        <div className="blurb">
          <div>
            { this.blurb() }
            { this.resultCount() }
          </div>
        </div>
        { this.paragraphsOrCompare(this.state.showDocument) }

      </article>
    );
  }
};

ListItem.propTypes = {
  groupedItem: PropTypes.object.isRequired,
}

export default ListItem;
