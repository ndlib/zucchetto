'use strict'
import React, { Component, PropTypes } from 'react';
import mui from "material-ui";

class BackButton extends Component {

  clickBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <mui.FlatButton
        label="Back"
        labelPosition="after"
        icon={<mui.FontIcon className="material-icons">navigate_before</mui.FontIcon>}
        onClick={ this.clickBack.bind(this) }
        backgroundColor="#E4E1D1"
        style={{ margin: '10px 5px' }} 
      />
    );
  }

}

BackButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BackButton;
