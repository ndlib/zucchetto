'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import mui, {FlatButton, FontIcon} from "material-ui";
import SearchStore from "../../store/SearchStore"

class BackButton extends Component {
  clickBack() {
    this.context.router.goBack();
  }

  render() {
    if (SearchStore.hasSearch()) {
      return (
        <FlatButton
          label="Back to Search"
          labelPosition="after"
          onClick={ this.clickBack.bind(this) }
          icon={<FontIcon className="material-icons">navigate_before</FontIcon>}
          backgroundColor="#E4E1D1"
          style={{ margin: '10px 5px', float: 'left' }}
        />
      );
    }
    return <span />;
  }

}

BackButton.contextTypes = {
  router: PropTypes.object.isRequired
};

export default BackButton;
