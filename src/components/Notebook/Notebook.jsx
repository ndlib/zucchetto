'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import NotebookColumn from './NotebookColumn.jsx'
import NotebookList from './NotebookList.jsx'
import EmptyColumn from './EmptyColumn.jsx'

class Notebook extends Component {
  constructor() {
    super();
    this.updateColumns = this.updateColumns.bind(this);
    this.state = {
      column1: CompareStore.getColumn1(),
      column2: CompareStore.getColumn2(),
    };
  }

  componentWillMount() {
    CompareStore.on("CompareColumnsUpdated", this.updateColumns);
  }

  componentWillUnmount() {
    CompareStore.removeListener("CompareColumnsUpdated", this.updateColumns);
  }

  updateColumns() {
    this.setState({
      column1: CompareStore.getColumn1(),
      column2: CompareStore.getColumn2(),
    });
  }

  renderNotebook() {
    if (this.state.column2 || this.state.column1) {
      return (
        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-6 notebook-column left">
              <NotebookColumn item={ this.state.column1 } columnNumber= { 1 } />
            </div>
            <div className="col-sm-6 notebook-column right">
              <NotebookColumn item={ this.state.column2 } columnNumber={ 2 } />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="col-sm-9">
            <EmptyColumn />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row body">
          <div className="col-sm-3">
            <NotebookList />
          </div>
          {  this.renderNotebook() }
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
