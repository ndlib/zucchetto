'use strict'
import React, { Component, PropTypes } from 'react'

class FootNotes extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.item && this.props.item.metadata && this.props.item.metadata.footnotes) {
      return (
        <div className="paragraph document-content footnotes"
             dangerouslySetInnerHTML={ { __html: this.props.item.metadata.footnotes.values[0].value } } />
      )
    }
    return null
  }
}

FootNotes.propTypes = {
  item: PropTypes.object,
}

export default FootNotes
