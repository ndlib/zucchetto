'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemStore from '../../store/ItemStore.js';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import DocumentDialog from '../Document/DocumentDialog.jsx';
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
    this.props.primaryAction(event, this._doc);
  }

  viewDocument(event) {
    this.refs.DocumentDialog.handleOpen(this._doc.id);
  }

  render() {
    var icon = (<mui.FontIcon className="material-icons">menu</mui.FontIcon>);

    return (
      <div className="document">
        <DocumentDialog ref="DocumentDialog"/>
        <div style={{ float: "right "}} className="view-document" onClick={ this.viewDocument.bind(this) }>
          <i className="material-icons view-document-icon">description</i>
          <span>Full Document</span>
        </div>
        <div  style={{cursor: 'pointer'}} onClick={this.primaryAction}>
          <Title item={this._doc} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

DocumentCard.propTypes = {
  doc: React.PropTypes.object,
  paragraphs: React.PropTypes.array,
  primaryAction: React.PropTypes.func,
}

export default DocumentCard;
