'use strict'
var React = require('react');
var Carousel = require('nuka-carousel');
var Header = require('../StaticAssets/Header.jsx');
var HomePageNavigation = require('../StaticAssets/HomePageNavigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

import { Link } from 'react-router';

var SiteIndex = React.createClass({

  mixins: [Carousel.ControllerMixin],

  getInitialState: function() {
    return {
      slideIndex: 0,
      elapsed: 0,
      start: new Date(),
    };
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 50);
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
  },

  tick: function() {
    if(this.state.elapsed > 5000) {
      var slideIndex = ++this.state.slideIndex % 4;
      this.setSlide(slideIndex);
    }
    else {
      this.setState({elapsed: new Date() - this.state.start});
    }
  },

  setSlide: function(index) {
    this.setState({
      slideIndex: index,
      elapsed: 0,
      start: new Date(),
    });
  },

  render: function() {
    return (
      <div className="index">
        <Header />
      		<section className="search">
            <h2><Link to="/search?q=">Search The Database <i className="glyphicon glyphicon-circle-arrow-right"></i></Link></h2>
          </section>
        <HomePageNavigation/>
        <div className="home-frame">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators" style={{color: 'transparent'}}>
              <li
                className={this.state.slideIndex === 0 ? 'active' : ''}
                onClick={() => this.setSlide(0)}
              >1</li>
              <li
                className={this.state.slideIndex === 1 ? 'active' : ''}
                onClick={() => this.setSlide(1)}
              >2</li>
              <li
                className={this.state.slideIndex === 2 ? 'active' : ''}
                onClick={() => this.setSlide(2)}
              >3</li>
              <li
                className={this.state.slideIndex === 3 ? 'active' : ''}
                onClick={() => this.setSlide(3)}
                >4</li>
            </ul>
            <Carousel
              ref="carousel"
              data={this.setCarouselData.bind(this, 'carousel')}
              decorators={null}
              easing="easeInOutElastic"
              slideIndex={this.state.slideIndex}
              afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}
            >
              <img src="resources/images/cover/01.jpg" />
              <img src="resources/images/cover/02.jpg" />
              <img src="resources/images/cover/03.jpg" />
              <img src="resources/images/cover/04.jpg" />
            </Carousel>
            <div className="fader"></div>
          </div>
          <FooterHome />
        </div>
      </div>
    );
  }

});

module.exports = SiteIndex;
