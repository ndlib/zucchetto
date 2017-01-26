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
            <a href="https://docs.google.com/a/nd.edu/forms/d/1KWB42euKekIx9a3P8C7JuPQzwZk2FshQTg0z8KCSlr8/viewform" target="_blank">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomePageNavigation;
