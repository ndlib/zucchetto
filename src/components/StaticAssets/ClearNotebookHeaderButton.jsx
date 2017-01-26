'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Dialog, FlatButton, FontIcon } from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import CompareActions from '../../actions/CompareActions.js';
import CompareStore from '../../store/CompareStore.js';

class ClearNotebookHeaderButton extends Component {

  constructor(props) {
    super(props);
    this.updateCount = this.updateCount.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      totalCount: CompareStore.allItems().length,
    }
  }

  onClick() {
    CompareActions.clearItems();
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  componentWillUnmount() {
    CompareStore.removeListener('ItemCompareUpdated', this.updateCount);
  }

  disabled() {
    return (this.state.totalCount == 0);
  }

  updateCount() {
    this.setState({ totalCount: CompareStore.allItems().length })
  }

  render() {
    return (
      <FlatButton
        onClick={ this.onClick }
        label="Clear all"
        icon={ <FontIcon className="material-icons" style={{ margin: '4px 12px' }}>delete</FontIcon> }
        style={{
          backgroundColor: this.disabled() ? '#224048': Colors.red900,
          color: this.disabled() ? '#cdcdcd' : 'white',
          cursor: this.disabled() ? 'default' :'pointer',
          fontFamily: 'Roboto,​sans-serif',
          fontSize: '0.9em',
          margin: '0 0',
          padding: '0 16px',
          textAlign: 'center',
          textTransform: 'uppercase',
          lineHeight: '50px',
          borderLeft: '1px solid white',
          borderRight: '1px solid white'
        }}
      />

    );
  }
}

export default ClearNotebookHeaderButton;
