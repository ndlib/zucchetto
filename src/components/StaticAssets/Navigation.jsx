'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/about">About the Database</Link>
          </li>
          <li>
            <Link to="/partners">Project Partners</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
