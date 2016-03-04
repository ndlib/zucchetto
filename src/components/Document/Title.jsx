'use strict'
import React, { Component, PropTypes } from 'react';

class Title extends Component {

  render() {
    return (<h1>{ this.props.item.name }</h1>);
  }
}

Title.propTypes = {
  item: React.PropTypes.object,
}

export default Title;
