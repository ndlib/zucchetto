'use strict'
import React, { Component, PropTypes } from 'react';

import Notebook from '../components/Notebook/Notebook.jsx';

class NotebookPage extends Component {
  render() {
    return (
      <div>
        <Notebook />
        {this.props.children}
      </div>
    );
  }
}

export default NotebookPage;
