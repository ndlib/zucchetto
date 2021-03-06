'use strict'
var React = require('react');
var createReactClass = require('create-react-class');
var Carousel = require('nuka-carousel');
var HomePageNavigation = require('../StaticAssets/HomePageNavigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

import { Link } from 'react-router-dom';

var SiteIndex = createReactClass({

  mixins: [Carousel.ControllerMixin],

  // Just add/remove images here will update the carousel correctly.
  images: [
    "resources/images/cover/01.jpg",
    "resources/images/cover/02.jpg",
    "resources/images/cover/03.jpg",
    "resources/images/cover/04.jpg",
    "resources/images/cover/05.jpg",
  ],

  getInitialState: function() {
    return {
      slideIndex: 0,
    };
  },

  setSlide: function(index) {
    this.setState({
      slideIndex: index,
    });
  },

  items: function() {
    return this.images.map(function(image) {
      return <img src={image} key={image} />;
    });
  },

  itemSetters: function() {
    var setters = []

    for (var i = 0; i < this.images.length; ++i) {
      // Just using i will cause all the list items to have the same value.
      let index = i;
      setters.push(
        <li
          className={this.state.slideIndex === index ? 'active' : ''}
          onClick={() => this.setSlide(index)}
          key={index}
        >{index}</li>
      );
    }
    return setters;
  },

  render: function() {
    return (
      <div className="index">
        <div className="bwrapper">
          <div role="banner" id="header">
            <h3 className="nddotedu"><a href="http://nd.edu">University <i>of</i> Notre Dame</a></h3>
            <h2 className="dept-ksga"><a href="http://keough.nd.edu/">Keough School <i>of</i> Global Affairs</a></h2>
          </div>
        </div>
        <header>
          <div className="row">
            <div className="col-sm-12">
              <h2>The Klau Center for Civil and Human Rights and Hesburgh Libraries</h2>
              <h1>Convocate</h1>
              <h2>Bringing Catholic Social Teaching and International Human Rights into Dialogue</h2>
            </div>
          </div>
        </header>
        <section className="search">
            <h2><Link to="/search?q=">Search The Database <i className="glyphicon glyphicon-circle-arrow-right"></i></Link></h2>
          </section>
        <HomePageNavigation/>
        <div className="home-frame">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

            <Carousel
              ref="carousel"
              data={this.setCarouselData.bind(this, 'carousel')}
              decorators={null}
              easing="easeInOutQuart"
              dragging={false}
              afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
              slideIndex={this.state.slideIndex}
              autoplay={true}
              autoplayInterval={15000}
              speed={2000}
              wrapAround={true}
            >
              {this.items()}
            </Carousel>

            <div className="fader"></div>
            <ul className="carousel-indicators" style={{color: 'transparent'}}>
              {this.itemSetters()}
            </ul>
          </div>

          <FooterHome />
        </div>
      </div>
    );
  }

});

export default SiteIndex;
