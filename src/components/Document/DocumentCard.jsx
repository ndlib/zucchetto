'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import Title from '../Document/Title.jsx';
import mui, { FontIcon, IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';

const iconButtonElement = (
  <IconButton touch={true}>
    <MoreVertIcon color='#78909c' />
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
    var icon = (<FontIcon className="material-icons">menu</FontIcon>);

    return (
      <article className="result document">
        <Link to={ "/document/" + this._doc.id }>
          <Title item={this._doc} />
        </Link>

        {this.props.children}
      </article>
    );
  }
}

DocumentCard.propTypes = {
  doc: PropTypes.object,
  paragraphs: PropTypes.array,
  primaryAction: PropTypes.func,
}

export default DocumentCard;
