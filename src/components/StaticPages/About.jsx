'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Footer = require('../StaticAssets/Footer.jsx');
var About = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        ABOUT PAGE
        <Footer/>
      </div>
    );
  }

});

module.exports = About;
