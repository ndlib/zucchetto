'use strict'
import React, { Component, PropTypes } from 'react';

class MetadataSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.document)
    return (
       <p/>
     );
  }
}
MetadataSection.propTypes = {
  document: React.PropTypes.object.isRequired,
}

export default MetadataSection;
