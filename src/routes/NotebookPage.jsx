'use strict'
import React, { Component, PropTypes } from 'react';

import Notebook from '../components/Notebook/Notebook.jsx';
import ItemQueryParams from '../modules/ItemQueryParams.js';

class NotebookPage extends Component {
  render() {
    return (
      <div>
        <Notebook
          vaticanItems={ItemQueryParams('v')}
          humanRightsItems={ItemQueryParams('h')}
        />
        {this.props.children}
      </div>
    );
  }
}

export default NotebookPage;
