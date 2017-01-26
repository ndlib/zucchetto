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
    if (SearchStore.hasSearch()) {
      return (
        <Link to={ SearchStore.searchUri() }>
          <mui.FlatButton
            label="Back to Search"
            labelPosition="after"
            icon={<mui.FontIcon className="material-icons">navigate_before</mui.FontIcon>}
            backgroundColor="#E4E1D1"
            style={{ margin: '10px 5px', float: 'left' }}
          />
        </Link>
      );
    }
    return <span />;
  }

}

export default BackToSearchButton;
