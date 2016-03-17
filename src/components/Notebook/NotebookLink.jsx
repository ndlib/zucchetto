'use strict'
import React, { Component, PropTypes } from 'react';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';

class NotebookLink extends Component {

  clickAction() {
    if(!this.props.disabled) {
      let vaticanItems = [];
      let humanRightItems = [];
      if(window.localStorage.length > 0) {
        for(var i = 0; i < window.localStorage.length; i++) {
          if(window.localStorage.getItem(window.localStorage.key(i)) === VaticanID) {
            vaticanItems.push(window.localStorage.key(i));
          }
          else if (window.localStorage.getItem(window.localStorage.key(i)) === HumanRightsID) {
            humanRightItems.push(window.localStorage.key(i));
          }
        }
      }

      let vString = 'v=' + vaticanItems.join('|');
      let hString = 'h=' + humanRightItems.join('|');

      window.location = '/notebook' + '?' + vString + '&' + hString;
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
          float: 'right',
          fontFamily: 'GPCMed, sans-serif',
          fontSize: '0.9em',
          margin: '10px 0',
          padding: '5px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >View Documents</div>
    );
  }
}

NotebookLink.propTypes = {
  disabled: React.PropTypes.bool,
}

NotebookLink.defaultProps = {
  disabled: true,
}

export default NotebookLink;
