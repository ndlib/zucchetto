'use strict'
import React, { Component, PropTypes } from 'react';
import Header  from '../StaticAssets/Header.jsx';
import Footer from '../StaticAssets/Footer.jsx';
import PageContent from '../../layout/PageContent.jsx';

class Notebook extends Component {

  render() {
    console.log('vaticanItems', this.props.vaticanItems);
    console.log('humanRightsItems', this.props.humanRightsItems);
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-2 left-col">
            Notebook
          </div>
          <div className="col-sm-5 right-col">
            <h3>Catholic Social Teaching</h3>
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
