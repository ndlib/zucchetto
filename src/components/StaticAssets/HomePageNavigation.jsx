'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class HomePageNavigation extends Component {
  render() {
    return (
      <nav>
        <ul className="contentnav">
          <li>
            <Link to="/how-to-use-the-database">How To Use the Database</Link>
          </li>
          <li>
            <Link to="/documents">Index of Documents</Link>
          </li>
        </ul>
        <ul className="aboutnav">
          <li>
            <Link to="/about-the-database">About the Database</Link>
          </li>
          <li>
            <Link to="/project-partners">Project Partners</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomePageNavigation;
