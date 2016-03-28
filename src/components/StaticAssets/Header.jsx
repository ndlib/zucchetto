'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

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
    var icon = (<mui.FontIcon className="material-icons">menu</mui.FontIcon>);
    return (
      <header>
        <div className="row">
          <div className="col-sm-9">
            <h1><mui.FlatButton style={ { color: "#D5B117" }}  icon={ icon } onTouchTap={ this.menuClick } />Research Database</h1>
            <mui.LeftNav
              open={this.state.menuOpen}
              docked={ false }
              onRequestChange={ this.requestChange.bind(this) }
            >
              <p className="tagline"></p>
              <div  className="menu">
              <mui.MenuItem onTouchTap={this.menuClick}>Home</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}>Search Database</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}>About Database</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}>Project Partners</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.menuClick}>Contact Us</mui.MenuItem>
              </div>
              <p>
                <img src="/resources/images/cchr.png" className="cchr m" />
                <img src="/resources/images/cds.png" className="cds" />
              </p>
            </mui.LeftNav>
          </div>
          <div className="col-sm-3 right">
            <img src="/resources/images/cchr.png" className="cchr" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
