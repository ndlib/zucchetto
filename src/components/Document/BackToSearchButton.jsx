'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import { Link } from 'react-router';

class BackToSearchButton extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Link to="/search?q=">
        <mui.FlatButton
        label="Return To Search"
        />
    </Link>
    );
  }

}

export default BackToSearchButton;
