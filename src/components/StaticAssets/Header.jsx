'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

class Header extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false }
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
            <h1><mui.FlatButton style={ { color: "#D5B117" }}  icon={ icon } onTouchTap={ this.menuClick.bind(this) } />Research Database</h1>
            <mui.LeftNav
              open={this.state.menuOpen}
              docked={ false }
              onRequestChange={ this.requestChange.bind(this) }
            >
              <p className="tagline"></p>
              <a onTouchTap={this.menuClick.bind(this)}>Hi</a>
              <mui.MenuItem onTouchTap={this.handleClose}>Home</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.handleClose}>Search Database</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.handleClose}>About Database</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.handleClose}>Project Partners</mui.MenuItem>
              <mui.MenuItem onTouchTap={this.handleClose}>Contact Us</mui.MenuItem>

              <p>
                <img src="/resources/images/cchr.png" className="cchr" />
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
