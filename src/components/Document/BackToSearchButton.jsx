'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import { Link } from 'react-router';
import SearchStore from '../../store/SearchStore.js';

class BackToSearchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={ SearchStore.searchUri() }>
        <mui.FlatButton
        label="Return To Search"
        />
    </Link>
    );
  }

}

export default BackToSearchButton;
