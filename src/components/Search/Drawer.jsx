'use strict'
import React, { Component, PropTypes } from 'react';
import NotebookLink from '../Notebook/NotebookLink.jsx';

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NotebookLink />
      </div>
    )

  }
}

export default Drawer;
