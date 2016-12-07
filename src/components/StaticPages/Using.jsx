'use strict'
var React = require('react');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Header = require('../StaticAssets/Header.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
var Using = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col info-page">
          <h1>How To Use the Database</h1>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
      <FooterHome/>
    </div>
    );
  }

});

module.exports = Using;
