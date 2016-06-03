'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { MenuItem, Divider } from 'material-ui';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/search?q=">Search Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/documents">Document Index</Link>
        </MenuItem>
        <Divider />
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
          <Link to="/contact">Contact Us</Link>
        </MenuItem>
      </nav>
    );
  }
}

export default Navigation;
