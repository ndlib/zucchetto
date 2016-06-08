'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { List, ListItem, Divider, FontIcon } from 'material-ui';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import CompareStore from '../../store/CompareStore.js'
import ItemStore from '../../store/ItemStore.js'
import _ from 'underscore'
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import GroupItemsByParent from '../../modules/GroupItemsByParent.js';
import ItemQueryParams from '../../modules/ItemQueryParams.js';

class ShareSave extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      copyMessage: null
    };

    this._humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    this._vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({
      open: false,
      copyMessage: null
    });
  }

  copyToClipBoard() {
    this.refs.copyUrl.select();
    try {
        document.execCommand('copy');
        this.setState({ copyMessage: true});
      }
    catch (err) {
      this.setState({ copyMessage: false});
    }
  }

  documentList(documents) {
    let clickFunc = this.documentClick;
    let groupedItems = GroupItemsByParent(documents);
    if(documents.length > 0) {
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        var checked = this.state.column1 === groupedItems[i].doc || this.state.column2 === groupedItems[i].doc;
        itemNodes.push(
          <ListItem innerDivStyle={{ padding: "8px" }} primaryText={groupedItems[i].doc.name} rightIcon={ <mui.FontIcon className="material-icons">delete</mui.FontIcon> } />
        );
      }

      return(
        <div>
          {itemNodes}
        </div>
      );
    }
    return null;
  }


  render() {
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={ this.closeDialog }
        labelStyle={ { color: 'white' } }
        backgroundColor={ '#224048' }
      />,
    ];

    var copyMessage = '';
    if(this.state.copyMessage !== null) {
      if(this.state.copyMessage) {
        copyMessage = (<div><i>The URL has been copied to your clipboard.</i></div>);
      }
      else {
        copyMessage = (<div><i>Please press Ctrl/Cmd+C to copy.</i></div>);
      }
    }

    return (
      <div>
        <FlatButton
          label="Manage Documents"
          icon={<FontIcon className="material-icons">library_books</FontIcon>}
          onClick={this.openDialog}
          style={{ margin: "10px 24px" }}
        />
        <Dialog
          title="Share or Save this comparison."
          actions={ actions }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.closeDialog }
        >
          <div>Copy the URL from your address bar or provided below to share or save this page.</div>
          <br/>
          <div>
            <input
              ref={ 'copyUrl' }
              type="text"
              readOnly={ true }
              name="copyUrl"
              value={ window.location }
              onClick= { this.copyToClipBoard }
              style={{
                maxWidth: '80%',
                minWidth: '200px',
                verticalAlign: 'top',
              }}
            /> <i
              className="material-icons"
              onClick={ this.copyToClipBoard }
              style={{
                backgroundColor: '#224048',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                height: '26px',
                padding: '5px',
                width: '26px',
              }}
            >content_copy</i>
          </div>
          <br/>
          { copyMessage }
          <h3>Manage Compared Documents</h3>
          <List style={{overflow: "scroll" }}>
            { this.documentList(this._vatican_douments) }
            { this.documentList(this._humanrights_documents) }
          </List>
        </Dialog>
      </div>
    );
  }

}

export default ShareSave;
