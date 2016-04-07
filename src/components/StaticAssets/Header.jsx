'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import { Link } from 'react-router'

class Header extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false }
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  requestChange(open) {
    this.setState({ menuOpen: open });
  }

  render() {
    var icon = (<mui.FontIcon style={ { color: "#D5B117", marginRight: "0px" }} className="material-icons">menu</mui.FontIcon>);
    return (
      <header>
        <div className="row">
          <div className="col-sm-9">
            <h1><mui.FlatButton style={ { color: "#D5B117", marginRight: "10px" }} label="" onTouchTap={ this.menuClick } >{ icon }</mui.FlatButton> Research Database</h1>
            <mui.LeftNav
              open={this.state.menuOpen}
              docked={ false }
              onRequestChange={ this.requestChange.bind(this) }
            >
              <p className="tagline"></p>
              <div  className="menu">
              <mui.MenuItem onTouchTap={this.menuClick}><Link to="/">Home</Link></mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}><Link to="/search?q=">Search Database</Link></mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}><Link to="/about">About Database</Link></mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}><Link to="/partners">Project Partners</Link></mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}><Link to="/contact">Contact Us</Link></mui.MenuItem>
              </div>
              <p>
                <a href="http://humanrights.nd.edu/" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr m" /></a>
                <a href="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Libriary Center for Digital Scholarship University of Notre Dame" className="cds" /></a>
              </p>
            </mui.LeftNav>
          </div>
          <div className="col-sm-3 right">
            <a href="http://humanrights.nd.edu/" target="_blank"><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr" /></a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
