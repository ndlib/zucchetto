'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mui, {FlatButton, FontIcon} from 'material-ui';
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
          <FlatButton
            label="Back to Search"
            labelPosition="after"
            icon={<FontIcon className="material-icons">navigate_before</FontIcon>}
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
