'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class HomePageNavigation extends Component {
  render() {
    return (
      <nav>
        <ul className="contentnav">
          <li>
            <Link to="/using">How To Use the Database</Link>
          </li>
          <li>
            <Link to="/documents">Index of Documents</Link>
          </li>
        </ul>
        <ul className="aboutnav">
          <li>
            <Link to="/about">About the Database</Link>
          </li>
          <li>
            <Link to="/partners">Project Partners</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomePageNavigation;
