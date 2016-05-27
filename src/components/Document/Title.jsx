'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Title extends Component {

  render() {
    var docLink = '/document/' + this.props.item.id;
    return (<Link to={ docLink }><h4 className="document-title">{ this.props.item.name }</h4></Link>);
  }
}

Title.propTypes = {
  item: React.PropTypes.object,
}

export default Title;
