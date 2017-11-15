'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3 className="heading">{ this.props.title }</h3>
    );
  }
}

export default Heading;
