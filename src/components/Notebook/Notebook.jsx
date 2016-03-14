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
        <div className="row">
          <div className="col-sm-12">
            <h3>Compare Documents</h3>
          </div>
        </div>
        <div className="row body">
          <div className="col-sm-6 right-col">
            <NotebookColumn />
          </div>
          <div className="col-sm-6 right-col">
            { this.renderColumn2() }
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Notebook.propTypes = {
}

Notebook.defaultProps = {
}

export default Notebook;
