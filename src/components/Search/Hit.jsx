'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AddToCompare from '../Document/AddToCompare.jsx';
import CrowdSourcing from '../Document/CrowdSourcing.jsx'

class Hit extends Component {
  render() {
    if (this.props.item.description) {
      return(
        <div className="paragraph-section">
          <div style={{ paddingTop: '0', color: '#999', textAlign: 'center' }}>
            { this.props.item.shortDescription }
          </div>
          <AddToCompare item={ this.props.item } />
          <CrowdSourcing item={ this.props.item } />
          <div className="paragraph document-content">
            { this.props.item.description }
          </div>
        </div>
      )
    } else {
      return <div />;
    }
  }
}

Hit.propTypes = {
  item: React.PropTypes.object,
}

export default Hit;
