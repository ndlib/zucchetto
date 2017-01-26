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
          <a href="https://docs.google.com/a/nd.edu/forms/d/1KWB42euKekIx9a3P8C7JuPQzwZk2FshQTg0z8KCSlr8/viewform" target="_blank">Contact Us</a>
        </MenuItem>
      </nav>
    );
  }
}

export default Navigation;
