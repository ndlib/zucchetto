'use strict'
import React, { Component, PropTypes } from 'react';
import CompareStore from '../../store/CompareStore.js';
import ItemStore from '../../store/ItemStore.js';
import NotebookLink from '../Notebook/NotebookLink.jsx';
import CompareButton from '../Document/CompareButton.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import mui from 'material-ui';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.countParents = this.countParents.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      vatCount: this.countParents().vatCount,
      humanCount: this.countParents().humanCount,
    }
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  componentWillUnmount() {
    CompareStore.removeListener('ItemCompareUpdated', this.updateCount);
  }

  clearAll() {
    CompareStore.clearAll();
  }

  countParents() {
    let compareItems = CompareStore.allItems();
    let parentsVat = [];
    let parentsHu = [];
    for (var i = 0; i < compareItems.length; i++) {
      let parent = ItemStore.getItemParent(ItemStore.getItem(compareItems[i]));
      if(parent.collection_id === VaticanID) {
        if(parentsVat.indexOf(parent) < 0) {
          parentsVat.push(parent);
        }
      }
      if(parent.collection_id === HumanRightsID) {
        if(parentsHu.indexOf(parent) < 0) {
          parentsHu.push(parent);
        }
      }
    }

    return {vatCount: parentsVat.length, humanCount: parentsHu.length};
  }
  updateCount() {
    this.setState({
      vatCount: this.countParents().vatCount,
      humanCount: this.countParents().humanCount,
    });
  }

  style() {
    return {
      

      bottom: '45px',
      
      color: '#224048',
      height: '90px',
      width: '66%',
      
      position: 'fixed',
      left: "1vw",
      zIndex: '2',
      marginRight: 0,
      marginLeft: 0,
    }
  }

  emptyDrawer() {
    return (
      <div style={this.style()} className="row drawer">
        <div className="drop">
          <div className="col-sm-11">
            <p>Select "Save for Comparison" in a document you wish to compare</p>
          </div>
          <div className="col-sm-1 last">
            <CompareButton shortText={true} />
          </div>
        </div>
      </div>
    );
  }

  drawer() {
    return (
<<<<<<< HEAD
      <div style={this.style()} className="row">
        <div className="col-sm-1">
          <NotebookLink disabled={this.state.vatCount + this.state.humanCount < 1} />
        </div>
        <div className="col-sm-3">
          { this.state.vatCount } Catholic Social Teachings<br />
          { this.state.humanCount } International Human Rights Laws
        </div>
        <div className="col-sm-7">
          <mui.FlatButton
            label="clear all documents"
            onClick={this.clearAll.bind(this)}
          />
        </div>
        <div className="col-sm-1">
          <CompareButton shortText={true} />
=======
      
      <div style={this.style()} className="row drawer">
        <div className="drop">
          <div className="col-sm-2 first">
            <NotebookLink disabled={this.state.vatCount + this.state.humanCount < 1} />
          </div>
          <div className="col-sm-3">
            { this.state.vatCount } Catholic Social Teachings<br />
            { this.state.humanCount } International Human Rights Laws
          </div>
          <div className="col-sm-6">
            <mui.FlatButton
              label="clear all documents"
              onClick={this.clearAll.bind(this)}
            />
          </div>
          <div className="col-sm-1 last">
            <CompareButton shortText={true} />
          </div>
>>>>>>> master
        </div>
      </div>
    );
  }

  render() {
    if(CompareStore.drawerOpen()) {
      if (this.state.vatCount == 0 && this.state.vatCount == 0) {
        return (this.emptyDrawer());
      } else {
        return this.drawer();
      }
    }
    else {
      return (<div />);
    }

  }
}

export default Drawer;
