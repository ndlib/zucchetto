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
        return (<h2 className="heading1 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Heading2") {
        return (<h2 className="heading2 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Heading3") {
        return (<h3 className="heading3 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading1") {
        return (<h4 className="subheading1 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading2") {
        return (<h5 className="subheading2 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading3") {
        return (<h6 className="subheading3 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading4") {
        return (<h6 className="subheading4 document-content" dangerouslySetInnerHTML={ { __html: content } } />);
      }
    }
    return (
      <div
        ref={ this.ref() }
        className={this.determineClassName()}
        dangerouslySetInnerHTML={ { __html: content } } />
    );
  }

  ref() {
    return this.props.item.id;
  }

  determineClassName() {
    if (this.props.selected) {
      return "selected-paragraph paragraph document-content";
    }
    return "paragraph document-content";
  }

  addButton() {
    if(this.props.showCheckBoxes) {
      return (
        <div id={"paragraph-" + this.props.item.id} className="paragraph-section">
          <AddToCompare item={ this.props.item } />
          <CurrentParagraph item={ this.props.item } />
        </div>
      );
    }
    return null;
  }

  render() {
    if (this.props.item.metadata.transcription) {
      return(
        <div>
          { this.addButton() }
          {this.determineHTMLTag(this.props.item.metadata.transcription.values[0].value)}
        </div>
      )
    } else {
      return <div />;
    }
  }
}

Paragraph.propTypes = {
  item: React.PropTypes.object,
  selected: React.PropTypes.bool,
  showCheckBoxes: React.PropTypes.bool,
}

Paragraph.defaultProps = {
  showCheckBoxes: false,
}
export default Paragraph;
