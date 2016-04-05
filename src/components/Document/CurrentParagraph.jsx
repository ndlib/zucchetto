'use strict'
import React, { Component, PropTypes } from 'react';

class CurrentParagraph extends Component {

  render() {
    return (<div style={{paddingTop: '0', color: '#999', textAlign: 'center'}}>{this.props.item.metadata.heading.values[0].value}</div>);
  }
}

CurrentParagraph.propTypes = {
  item: React.PropTypes.object,
}

export default CurrentParagraph;
