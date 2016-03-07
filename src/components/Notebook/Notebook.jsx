'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'
import NotebookColumn from './NotebookColumn.jsx'


class Notebook extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentWillMount() {
    ItemActions.preLoadItems();
    var func = this.preLoadFinished.bind(this);
    ItemStore.on("PreLoadFinished", func);
  }

  preLoadFinished() {
    this.setState({loaded: true});
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
            <NotebookColumn
              vaticanItems={ this.props.vaticanItems }
              humanRightsItems={ this.props.humanRightsItems }
            />
          </div>
          <div className="col-sm-6 right-col">
              <NotebookColumn
                vaticanItems={ this.props.vaticanItems }
                humanRightsItems={ this.props.humanRightsItems }
              />
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
