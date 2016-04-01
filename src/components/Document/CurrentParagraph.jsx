'use strict'
import React, { Component, PropTypes } from 'react';

class CurrentParagraph extends Component {

  render() {
    let orderNumber = 0;
    if(this.props.item.metadata.order) {
      orderNumber = this.props.item.metadata.order.values[0].value;
    }

    return (<div style={{paddingTop: '10px'}}>Paragraph {orderNumber}</div>);
  }
}

CurrentParagraph.propTypes = {
  item: React.PropTypes.object,
}

export default CurrentParagraph;
