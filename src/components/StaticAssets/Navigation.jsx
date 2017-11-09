'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import mui, { MenuItem, Divider } from 'material-ui';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/search?q=">Search the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/documents">Index of Documents</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/about">About the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/using">How To Use the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/partners">Project Partners</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact Us</Link>
        </MenuItem>
      </nav>
    );
  }
}

export default Navigation;
