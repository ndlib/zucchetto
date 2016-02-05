'use strict'
import React, { Component, PropTypes } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="about">About the Database</a>
          </li>
          <li>
            <a href="partners">Project Partners</a>
          </li>
          <li>
            <a href="Contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
