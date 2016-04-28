'use strict'
import React, { Component, PropTypes } from 'react';

import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import Heading from '../components/Shared/Heading.jsx';

import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';

import CatholicDocumentList from '../components/Document/CatholicDocumentList.jsx';
import HumanRightsDocumentList from '../components/Document/HumanRightsDocumentList.jsx';

class AllDocumentsPage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: ItemStore.preLoaded(),
    };
    this.preLoadFinished = this.preLoadFinished.bind(this)
  }

  componentWillMount() {
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  }

  componentWillUnmount() {
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="col-sm-12">
            <h2>Document Index</h2>
          </div>
          <div className="col-sm-6 notebook-column left doc-list">
            <Heading title="Catholic Social Teachings" />
            <ul>
              <CatholicDocumentList items={ItemStore.getParentItems()} />
            </ul>
          </div>
          <div className="col-sm-6 notebook-column right doc-list">
            <Heading title="International Human Rights" />
            <ul>
              <HumanRightsDocumentList items={ItemStore.getParentItems()} />
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AllDocumentsPage;
