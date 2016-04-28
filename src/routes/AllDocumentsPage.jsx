'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import { Link } from 'react-router';

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

  orderKeys(obj, expected) {

    var keys = Object.keys(obj).sort(function keyOrder(k1, k2) {
        if (k1 < k2) return -1;
        else if (k1 > k2) return +1;
        else return 0;
    });

    var i, after = {};
    for (i = 0; i < keys.length; i++) {
      after[keys[i]] = obj[keys[i]];
      delete obj[keys[i]];
    }

    for (i = 0; i < keys.length; i++) {
      obj[keys[i]] = after[keys[i]];
    }
    return obj;
  }

  groupIhrDocuments() {
    var groupedDocuments = {};
    this.sortedParents().map(function(item) {
      if (item.collection_id == "humanrights") {
        var source = 'Unidentified Source';
        if(item.metadata.source) {
           source = item.metadata.source.values[0].value;
          source = source.replace(/\(*([0-9]+(th|st|nd|rd))(\s*(regular|special)*\s*session\)*\s*(of)*\s*(the)*)*/gi, '').trim();
        }
        if(Object.keys(groupedDocuments).indexOf(source) < 0){
          groupedDocuments[source] = [item];
        }
        else {
          groupedDocuments[source].push(item);
        }
        return;
      }
    }.bind(this));
    groupedDocuments = this.orderKeys(groupedDocuments);
    return groupedDocuments;
  }

  ihrHeader(grouping) {
    return (<h4>{grouping}</h4>);
  }

  ihrDocuments() {
    var documents = this.groupIhrDocuments();
    var documentList = []
    for(var i = 0; i < Object.keys(documents).length; i++) {
      var group = Object.keys(documents)[i];
      documentList.push(this.ihrHeader(group));
      documentList.push(documents[group].map(function(item) {
        return this.listItem(item);
      }.bind(this)));
    }
    return documentList;
  }

  documentURL(item){
    return "/document/" + item.id;
  }

  listItem(item) {
    return (<li><Link to={this.documentURL(item)}>{item.name}</Link></li>);
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
