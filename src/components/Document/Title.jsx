'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';

class Title extends Component {

  render() {
    var docLink = '/document/' + this.props.item.id;
    if (this.props.shouldLink) {
      return (<Link to={ docLink }><h4 className="document-title">{ this.props.item.name }</h4></Link>);
    }
    return (<h4 className="document-title">{ this.props.item.name }</h4>);
  }
}

Title.propTypes = {
  item: PropTypes.object,
  shouldLink: PropTypes.bool,
}

Title.defaultProps = {
  shouldLink: true,
}

export default Title;
