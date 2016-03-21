'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import NotebookColumn from './NotebookColumn.jsx'
import NotebookList from './NotebookList.jsx'

class Notebook extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      column1: CompareStore.getColumn1(),
      column2: CompareStore.getColumn2(),
    };
    this.preLoadFinished = this.preLoadFinished.bind(this)
  }

  componentWillMount() {
    ItemActions.preLoadItems();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);

    CompareStore.on("CompareColumnsUpdated", this.updateColumns.bind(this));
  }

  preLoadFinished() {
    this.setState({ loaded: true });
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
        <div>
          <div className="col-sm-5 notebook-column left">
            <a href="/" className="top-links">« Home</a>
            <NotebookColumn item={ this.state.column1 } />
          </div>
          <div className="col-sm-5 notebook-column right">
            <a href="#" className="top-links"><i className="material-icons" style={{verticalAlign: 'text-top'}}>mail_outline</i>Share/Save Notebook</a>
            <NotebookColumn item={ this.state.column2 } />
          </div>
        </div>
      );
    } else {

      return (
        <div>
          <div className="col-sm-5 notebook-column left">
            <a href="/" className="top-links">« Home</a>
          </div>
          <div className="col-sm-5 notebook-column right">
            <a href="#" className="top-links"><i className="material-icons" style={{verticalAlign: 'text-top'}}>mail_outline</i>Share/Save Notebook</a>
          </div>
          <div className="col-sm-10">
            <p style={{ margin: "50px", padding: "50px", textAlign: "center", fontSize: "3em", border: "1px black dashed"}}>
              Select the documents from your notebook to compare.
            </p>
          </div>
        </div>
      )
    }
  }


  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-2">
            <NotebookList />
          </div>
          {  this.renderNotebook() }
        </div>

      </div>
    );
  }
}

Notebook.propTypes = {
}

Notebook.defaultProps = {
}

export default Notebook;
