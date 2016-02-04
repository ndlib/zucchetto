'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Footer = require('../StaticAssets/Footer.jsx');
var Contact = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        CONTACT PAGE
        <Footer/>
      </div>
    );
  }

});

module.exports = Contact;
