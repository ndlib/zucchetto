'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import Title from '../Document/Title.jsx';
import mui from 'material-ui';


class DocumentCard extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
    this._parent = ItemStore.getItemParent(this._item);

    this.state = { menuOpen: false }
  }

  primaryAction(event) {
    this.props.primaryAction(event, this._item);
  }

  menuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  menu() {
    if (this.state.menuOpen) {
      return (<mui.Menu animated={true}>
        <mui.MenuItem>View Docuemnet</mui.MenuItem>
        <mui.MenuItem>Download PDF</mui.MenuItem>
        <mui.MenuItem>Metadata?</mui.MenuItem>
      </mui.Menu>);
    }
  }

  render() {
    var icon = (<mui.FontIcon className="material-icons">menu</mui.FontIcon>);

    return (
      <div className="document">
        <div style={{ float: "right "}}>
          <mui.FlatButton icon={ icon } onTouchTap={this.menuClick.bind(this)} />
        </div>
        <div  style={{cursor: 'pointer'}} onClick={this.primaryAction}>
          <Title item={this._parent} />
        </div>
        <CurrentParagraph item={ this._item } />
        {this.props.children}
      </div>
    );
  }
}

DocumentCard.propTypes = {
  item: React.PropTypes.object,
  primaryAction: React.PropTypes.func,
}

export default DocumentCard;
