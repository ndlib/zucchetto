'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

var Contact = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
          <div className="row body partners">
          	<div className="col-sm-3 left-col">
          		<Navigation/>
          	</div>
          	<div className="col-sm-9 right-col">
              <h1>Contact Us</h1>
              <p>
                For more information, contact Project Manager Christina Leblang via email at <a href="mailto:csthr@nd.edu">csthr@nd.edu</a>
              </p>
            </div>
          </div>
        <FooterHome/>
      </div>
    );
  }

});

module.exports = Contact;
