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
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
