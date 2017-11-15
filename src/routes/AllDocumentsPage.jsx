'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'

import Header from '../components/StaticAssets/Header.jsx';
import FooterHome from '../components/StaticAssets/FooterHome.jsx';
import Heading from '../components/Shared/Heading.jsx';

import ItemStore from '../store/ItemStore.js';
import ItemActions from '../actions/ItemActions.jsx';
import HumanRightsID from '../constants/HumanRightsID.js';
import VaticanID from '../constants/VaticanID.js';

import DocumentList from '../components/Document/DocumentList.jsx';
import FeedbackLink from "../components/StaticAssets/FeedbackLink.jsx"
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
    if(!this.state.loaded) {
      ItemActions.preLoadItems();
    }
  }

  componentWillUnmount() {
    ItemStore.removeListener("PreLoadFinished", this.preLoadFinished);
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  render() {
    if(!this.state.loaded) {
      return (
        <div>
          <Header/>
          Loading...
        </div>
      );
    }
    return (
      <div>
        <Header/>
        <div className="row body" style={{display: 'block'}}>
          <div className="col-sm-12">
            <h2>Index of Documents</h2>
          </div>
          <div className="col-sm-6 notebook-column left doc-list">
            <Heading title="Catholic Social Teachings" />
            <ul>
              <DocumentList
                items={ItemStore.getParentItems()}
                type={ VaticanID }
              />
            </ul>
          </div>
          <div className="col-sm-6 notebook-column right doc-list">
            <Heading title="International Human Rights" />
            <ul>
              <DocumentList
                items={ItemStore.getParentItems()}
                type ={ HumanRightsID }
              />
            </ul>
          </div>
        </div>

        <FooterHome />
        <FeedbackLink />
      </div>
    );
  }
}

export default AllDocumentsPage;
