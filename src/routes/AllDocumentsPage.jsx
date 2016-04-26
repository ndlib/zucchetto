'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../components/StaticAssets/Header.jsx';
import Footer from '../components/StaticAssets/Footer.jsx';
import Heading from '../components/Shared/Heading.jsx';

import ItemActions from '../actions/ItemActions.jsx';
import ItemStore from '../store/ItemStore.js';

import _ from 'underscore'


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

  sortedParents() {
    var parents = _.sortBy(ItemStore.getParentItems(), function (item) {
      return item.name;
    });

    return parents;
  }

  catholicDocuments() {
    return this.sortedParents().map(function(item) {
      if (item.collection_id == "vatican") {
        return this.listItem(item);
      }
    }.bind(this));
  }

  ihrDocuments() {
    return this.sortedParents().map(function(item) {
      if (item.collection_id == "humanrights") {
        return this.listItem(item);
      }
    }.bind(this));
  }

  listItem(item) {
    return (<li>{item.name}</li>);
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
              {this.catholicDocuments()}
            </ul>
          </div>
          <div className="col-sm-6 notebook-column right doc-list">
            <Heading title="International Human Rights" />
            <ul>
              {this.ihrDocuments()}
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AllDocumentsPage;
