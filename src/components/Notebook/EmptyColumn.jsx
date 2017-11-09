'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

class EmptyColumn extends Component {

  render() {
    return (
      <p style={{ margin: "50px", padding: "50px", textAlign: "center", fontSize: "3em", border: "1px black dashed"}}>
        Select a document from the left to compare.
      </p>
    );
  }
}

EmptyColumn.propTypes = {
}

export default EmptyColumn;
