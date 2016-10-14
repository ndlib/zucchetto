'use strict'
import React, { Component, PropTypes } from 'react';
import mui from "material-ui";
import SearchStore from "../../store/SearchStore"

class BackButton extends Component {
  render() {
    if (SearchStore.hasSearch()) {
      return (
        <mui.FlatButton
          label="Back to Search"
          labelPosition="after"
          href={ SearchStore.searchUri() }
          linkButton={true}
          icon={<mui.FontIcon className="material-icons">navigate_before</mui.FontIcon>}
          backgroundColor="#E4E1D1"
          style={{ margin: '10px 5px' }}
        />
      );
    }
    return <span />;
  }

}

BackButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BackButton;
