'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { MenuItem } from 'material-ui';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/search?q=">Search Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/documents">Index of Documents</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/using">Using the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/partners">Project Partners</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/privacy">Privacy Policy</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/terms">Terms of Service</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact Us</Link>
        </MenuItem>
      </nav>
    );
  }
}

export default Navigation;
