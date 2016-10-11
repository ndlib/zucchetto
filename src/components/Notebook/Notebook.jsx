'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import ItemActions from '../../actions/ItemActions.jsx';
import ItemStore from '../../store/ItemStore.js';
import CompareStore from '../../store/CompareStore.js';
import NotebookColumn from './NotebookColumn.jsx';
import NotebookList from './NotebookList.jsx';
import NotebookToolbar from './NotebookToolbar.jsx';
import EmptyColumn from './EmptyColumn.jsx';

import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

class Notebook extends Component {
  constructor() {
    super();
    this.updateColumns = this.updateColumns.bind(this);
    this.alertColumnError = this.alertColumnError.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.resize = this.resize.bind(this);

    this.state = {
      column1: CompareStore.getColumn1(),
      column2: CompareStore.getColumn2(),
      showColumnErrorDialog: false,
      height: window.innerHeight - 107,
    };
  }

  componentWillMount() {
    CompareStore.on("CompareColumnsUpdated", this.updateColumns);
    CompareStore.on("CompareColumnsCannotBeUpdated", this.alertColumnError);
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    CompareStore.removeListener("CompareColumnsUpdated", this.updateColumns);
    CompareStore.removeListener("CompareColumnsCannotBeUpdated", this.alertColumnError);
  }

  resize() {
    this.setState({ height: window.innerHeight - 107 });
  }

  updateColumns() {
    this.setState({
      column1: CompareStore.getColumn1(),
      column2: CompareStore.getColumn2(),
    });
  }

  alertColumnError() {
    this.setState({showColumnErrorDialog: true});
  }

  closeDialog() {
    this.setState({showColumnErrorDialog: false});
  }

  style() {
    return {
      height: this.state.height,
      overflowY: 'hidden',
      borderRight: '1px solid #ececec',
    }
  }

  renderNotebook() {
    if (this.state.column2 || this.state.column1) {
      return (
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6 notebook-column left" style={ this.style() }>
              <NotebookColumn item={ this.state.column1 } columnNumber= { 1 } />
            </div>
            <div className="col-sm-6 notebook-column right" style={ this.style() }>
              <NotebookColumn item={ this.state.column2 } columnNumber={ 2 } />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="col-sm-12">
            <EmptyColumn />
          </div>
        </div>
      );
    }
  }

  render() {
    const actions = [

      <FlatButton
        label="OK"
        labelStyle={{ color: 'white' }}
        onTouchTap={ this.closeDialog }
        backgroundColor={ '#224048' }
      />,
    ];

    return (
      <div>
        <Header />
        <NotebookToolbar />
        <div className="row body" style={{ height: this.state.height, backgroundColor: 'white' }}>
          <div className="col-sm-3 left-col" style={{ backgroundColor: '#f8f6ed' }}>
            <NotebookList />
          </div>
          <Dialog
            title="Please close one of your open documents"
            actions={actions}
            modal={true}
            open={this.state.showColumnErrorDialog}
            onRequestClose={this.closeDialog}
          >
            <i className="material-icons"
              style={{ color: '#ccc', float: 'left', fontSize: '5em', }}>warning</i>You have opened the maximum number of documents that can be compared at one time. Please close one of the documents before choosing another.
          </Dialog>

          { this.renderNotebook() }
        </div>
        <Footer showBackToSearchButton={ true } />
      </div>
    );
  }
}

Notebook.propTypes = {
}

Notebook.defaultProps = {
}

export default Notebook;
