'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');
var TermsOfService = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col">
            <h1>Terms of Service</h1>
            <p> Content for terms of service.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

});

module.exports = TermsOfService;
