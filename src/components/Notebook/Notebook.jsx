'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import Document from '../Document/Document.jsx'
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'
import mui from 'material-ui'
import _ from 'underscore'

class Notebook extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      selectedDocument: null,
    };
  }

  componentWillMount() {
    ItemActions.preLoadItems();
    var func = _.bind(this.preLoadFinished, this);
    ItemStore.on("PreLoadFinished", func);
  }

  selectDocumentClick(event) {
    this.setState({ selectedDocument: event.target.id });
  }

  removeDocumentClick(event) {
    this.setState({ selectedDocument: false });
  }

  preLoadFinished() {
    this.setState({loaded: true});
  }

  documentList() {
    var clickFunc = _.bind(this.selectDocumentClick, this);
    return(
      _.map(ItemStore.getItemsByMultipleIds(this.props.vaticanItems), function (item) {
        var parentItem = ItemStore.getItemParent(item);

        return (<li key={ item.id }><a href="#" id={item.id} onClick={clickFunc}>{parentItem.name}</a></li>)
      })
    );
  }

  displayDocuemnt() {
    if (this.state.selectedDocument) {
      return (
      <div>
        <div>
          <a href="#" className="remove-document" onClick={ this.removeDocumentClick.bind(this) }>
            <mui.FontIcon
              className="material-icons"
            >clear</mui.FontIcon>
          </a>
        </div>
        <Document documentId={this.state.selectedDocument} />
      </div>);
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
          <div className="col-sm-2 left-col">
            Notebook
            <ul>
              { this.documentList() }
            </ul>
          </div>
          <div className="col-sm-5 right-col">
            <h3>Catholic Social Teaching</h3>
            { this.displayDocuemnt() }
          </div>
          <div className="col-sm-5 right-col">
            <h3>International Human Rights Law</h3>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Notebook.propTypes = {
  vaticanItems: React.PropTypes.array,
  humanRightsItems: React.PropTypes.array,
}

Notebook.defaultProps = {
  vaticanItems: [],
  humanRightsItems: [],
}

export default Notebook;
