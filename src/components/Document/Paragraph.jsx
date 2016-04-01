'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import AddToCompare from '../Document/AddToCompare.jsx';

class Paragraph extends Component {

  determineHTMLTag(content) {
    if (this.props.item.metadata.type_of_text) {
      var type = this.props.item.metadata.type_of_text.values[0].value;
      if (type == "Heading1") {
        return (<h2 className="heading1" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Heading3") {
        return (<h3 className="heading3" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading1") {
        return (<h4 className="subheading1" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading2") {
        return (<h5 className="subheading1" dangerouslySetInnerHTML={ { __html: content } } />);
      }
    }
    return (<div ref={ this.ref() } className={this.determineClassName()} dangerouslySetInnerHTML={ { __html: content } } />);
  }

  ref() {
    return this.props.item.id;
  }

  determineClassName() {
    if (this.props.selectedItem && this.props.selectedItem.id == this.props.item.id) {
      return "selected-paragraph";
    }
    return "";
  }

  addButton() {
    if(this.props.showCheckBoxes) {
      return (
        <div>
          <CurrentParagraph item={ this.props.item } />
          <AddToCompare item={ this.props.item } />
          <hr />
        </div>
      );
    }
    return null;
  }

  render() {
    if (this.props.item.metadata.transcription) {
      return(
        <div>
          {this.determineHTMLTag(this.props.item.metadata.transcription.values[0].value)}
          { this.addButton() }
        </div>
      )
    } else {
      return "";
    }
  }
}

Paragraph.propTypes = {
  item: React.PropTypes.object,
  selectedItem: React.PropTypes.object,
  showCheckBoxes: React.PropTypes.bool,
}

Paragraph.defaultProps = {
  showCheckBoxes: false,
}
export default Paragraph;
