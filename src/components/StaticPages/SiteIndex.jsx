'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');
var SiteIndex = React.createClass({

  render: function() {
    return (
      <div className="index">
        <Header />


      		<section className="search">
              <h2><a href="#">Search The Database <i className="glyphicon glyphicon-circle-arrow-right"></i></a></h2>
              <p><a href="#">Using the Database</a></p>
          </section>

        
        <Navigation/>
<div className="home-frame">
  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
  
  
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src="resources/images/cover/01.jpg" />
      </div>
      <div className="item">
        <img src="resources/images/cover/02.jpg" />
      </div>
      <div className="item">
        <img src="resources/images/cover/03.jpg" />
      </div>
    </div>
    <div className="fader"></div>
  </div>
  <Footer />
</div>
        

      </div>
    );
  }

});

module.exports = SiteIndex;
