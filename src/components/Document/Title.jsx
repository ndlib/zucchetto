'use strict'
import React, { Component, PropTypes } from 'react';

class Title extends Component {

  render() {
    return (<h4 className="document-title">{ this.props.item.name }</h4>);
  }
}

Title.propTypes = {
  item: React.PropTypes.object,
}

export default Title;
