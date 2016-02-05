'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');
var SiteIndex = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <div className="row body">
      		<div className="col-sm-4 left-col">
      			<Navigation/>
      		</div>
      		<div className="col-sm-8 right-col">
      			<section className="content">
        		<h1>Index Page</h1>
        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        		</section>
      		</div>
      	</div>


        <Footer />

      </div>
    );
  }

});

module.exports = SiteIndex;
