'use strict'
import React, { Component, PropTypes } from 'react';

class Paragraph extends Component {

  determineHTMLTag(content) {
    console.log(this.props.item.metadata.type);
    if (this.props.item.metadata.type) {
      var type = this.props.item.metadata.type.values[0].value;
      if (type == "Heading3") {
        return (<h3 className="heading3" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading1") {
        return (<h4 className="subheading1" dangerouslySetInnerHTML={ { __html: content } } />);
      } else if (type == "Subheading2") {
        return (<h5  className="subheading1" dangerouslySetInnerHTML={ { __html: content } } />);
      }
    }
    return (<p dangerouslySetInnerHTML={ { __html: content } } />);
  }

  render() {
    if (this.props.item.metadata.transcription) {
      return this.determineHTMLTag(this.props.item.metadata.transcription.values[0].value);
    } else {
      return "";
    }
  }
}

Paragraph.propTypes = {
  item: React.PropTypes.object,
}

export default Paragraph;
