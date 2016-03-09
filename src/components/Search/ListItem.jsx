'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import CheckLocalStorage from '../../modules/CheckLocalStorage.js';
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import CurrentParagraph from '../Document/CurrentParagraph.jsx';
import Title from '../Document/Title.jsx';

class ListItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      checked: CheckLocalStorage(this.props.item['@id']),
      showDocument: false,
    };

    this.titleOnClick = this.titleOnClick.bind(this);
    this.addToNotebookOnClick = this.addToNotebookOnClick.bind(this);
    this._item = ItemStore.getItem(IDFromAtID(props.item['@id']));
    this._parent = ItemStore.getItemParent(this._item);
  }

  titleOnClick() {
    this.setState({showDocument: !this.state.showDocument});
  }

  addToNotebookOnClick() {
    this.setState({checked: !this.state.checked});
    this.addToNoteBook(this.props.item);
  }

  checkboxStyle() {
    return {
      fontSize: '18px',
      verticalAlign: 'text-top',
      paddingRight: '20px',
    }
  }

  checked() {
    if(this.state.checked) {
      return (<i className="material-icons" style={this.checkboxStyle()}>check_box</i>);
    }
    return (<i className="material-icons" style={this.checkboxStyle()}>check_box_outline_blank</i>);
  }

  addToNoteBook(item) {
    var id = IDFromAtID(item['@id']);
    var collection = IDFromAtID(item['collection']);

    if(window.localStorage.getItem(id)){
      window.localStorage.removeItem(id, collection);
    } else {
      window.localStorage.setItem(id, collection);
    }
    console.log(window.localStorage);
  }

  showDocument(id) {
    if(this.state.showDocument) {
      return (<Document documentId={id} />);
    }
    return null;
  }

  render() {
    if(!this._parent) {
      return null;
    }
    let item = this._item;
    let orderNumber = 0;
    if(item.metadata.order) {
      orderNumber = item.metadata.order.values[0].value;
    }
    if(this.state.showDocument) {
      return this.showDocument(IDFromAtID(item['@id']));
    } else {
      return (
        <div className="document">
          <div  style={{cursor: 'pointer'}} onClick={this.titleOnClick}>
            <Title item={this._parent} />
          </div>
          <CurrentParagraph item={ this._item } />
          <div onClick={this.addToNotebookOnClick} style={{color: '#224048', cursor: 'pointer'}}>{this.checked()}Add to Notebook</div>
        </div>
      );
    }
  }
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ListItem;
