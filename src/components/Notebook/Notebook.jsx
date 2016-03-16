'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import NotebookColumn from './NotebookColumn.jsx'

class Notebook extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
    this.preLoadFinished = this.preLoadFinished.bind(this)
  }

  componentWillMount() {
    ItemActions.preLoadItems();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  renderColumn2() {
    if (CompareStore.getColumn1() || CompareStore.getColumn2()) {
      return (<NotebookColumn />);
    }
  }

  render() {
    if (!this.state.loaded) {
      return (<p>Loading....</p>);
    }

    return (
      <div>
        <Header/>
        <div className="row" style={{ maxWidth: "80em"  }}>
          <div className="col-sm-6">
            <a href="/" className="top-links">« Home </a>
            <a href="/search" className="top-links">« Search</a>
          </div>
          <div className="col-sm-6" style={{textAlign:'right'}}>
            <a href="#" className="top-links"><i className="material-icons" style={{verticalAlign: 'text-top'}}>mail_outline</i>Share/Save Search Results</a>
          </div>
        </div>
        <div class="row">
          <div className="col-sm-12">
            <div className="notebook-column left">
              <NotebookColumn />
            </div>
            <div className="notebook-column right">
              { this.renderColumn2() }
            </div>
          </div>
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
