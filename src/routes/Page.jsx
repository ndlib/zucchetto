'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

class Page extends Component {
  render() {
    return (
      <div className='page'>
        { this.props.children }
      </div>
    );
  }
}

export default Page;
