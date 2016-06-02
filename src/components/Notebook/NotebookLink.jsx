'use strict'
import React, { Component, PropTypes } from 'react';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import CompareStore from '../../store/CompareStore.js';
import mui from "material-ui"

class NotebookLink extends Component {
  constructor(props) {
    super(props);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      totalCount: CompareStore.allItems().length,
    }
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

  clickAction() {
    CompareStore.clearColumnItems();
    if(!this.disabled()) {
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
    let totalCount = CompareStore.allItems().length;

    return (
      <mui.FlatButton onClick={this.clickAction.bind(this)}
        style={{
          backgroundColor: this.disabled() ? '#dddddd': '#224048',
          color: this.disabled() ? '#cdcdcd' : '#ffffff',
          cursor: this.disabled() ? 'default' :'pointer',
          display: 'inline',
          fontFamily: 'Roboto,​sans-serif',
          fontSize: '0.9em',
          margin: '0 0',
          padding: '0 16px',
          textAlign: 'center',
          textTransform: 'uppercase',
          lineHeight: '36px',
        }}
      >Compare ({ totalCount } Paragraphs)</mui.FlatButton>
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
