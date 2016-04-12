'use strict'
import React, { Component, PropTypes } from 'react';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import CompareStore from '../../store/CompareStore.js';

class NotebookLink extends Component {

  clickAction() {
    CompareStore.clearColumnItems();
    if(!this.props.disabled) {
      let vaticanItems = CompareStore.collectionItems(VaticanID);
      let humanRightItems = CompareStore.collectionItems(HumanRightsID);

      let vString = 'v=' + vaticanItems.join('|');
      let hString = 'h=' + humanRightItems.join('|');

      this.context.router.push('/notebook' + '?' + vString + '&' + hString)
    }
    else {
      // disabled do nothing
    }

  }

  render() {
    return (
      <div onClick={this.clickAction.bind(this)}
        style={{
          backgroundColor: this.props.disabled ? '#dddddd': '#224048',
          color: this.props.disabled ? '#cdcdcd' : '#ffffff',
          cursor: this.props.disabled ? 'default' :'pointer',
          display: 'inline-block',
          float: 'left',
          fontFamily: 'Roboto,​sans-serif',
          fontSize: '0.9em',
          margin: '0 0',
          padding: '0 16px',
          textAlign: 'center',
          textTransform: 'uppercase',
          lineHeight: '36px',
        }}
      >Compare</div>
    );
  }
}

NotebookLink.propTypes = {
  disabled: React.PropTypes.bool,
}

NotebookLink.contextTypes = {
  router: React.PropTypes.object.isRequired
};


NotebookLink.defaultProps = {
  disabled: true,
}

export default NotebookLink;
