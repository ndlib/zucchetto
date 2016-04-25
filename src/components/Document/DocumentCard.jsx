'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemStore from '../../store/ItemStore.js';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import Title from '../Document/Title.jsx';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


const iconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color={Colors.grey400} />
  </IconButton>
);

class DocumentCard extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._doc = this.props.doc;
    this._paragraphs = this.props.paragraphs;

    this.state = { menuOpen: false }
  }

  primaryAction(event) {
    event.preventDefault();
    this.props.primaryAction(event, this._doc);
  }

  render() {
    var icon = (<mui.FontIcon className="material-icons">menu</mui.FontIcon>);

    return (
      <article className="result document">
        <a href="#" onClick={this.primaryAction}>
          <Title item={this._doc} />
        </a>

        {this.props.children}
      </article>
    );
  }
}

DocumentCard.propTypes = {
  doc: React.PropTypes.object,
  paragraphs: React.PropTypes.array,
  primaryAction: React.PropTypes.func,
}

export default DocumentCard;
