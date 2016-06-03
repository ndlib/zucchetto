'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { FlatButton, FontIcon, LeftNav } from 'material-ui';
import NotebookLink from "../Notebook/NotebookLink.jsx"
import { Link } from 'react-router'
import Navigation from './Navigation.jsx'

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
    var icon = (<FontIcon style={ { color: "#D5B117", marginRight: "0px" }} className="material-icons">menu</FontIcon>);
    return (
      <header>
        <div className="row">
          <div className="col-sm-6">
            <h1><FlatButton style={ { color: "#D5B117", marginRight: "10px" }} label="" onTouchTap={ this.menuClick } >{ icon }</FlatButton> <Link to="/" className='main-heading'>Research Database</Link></h1>
            <LeftNav
              open={this.state.menuOpen}
              docked={ false }
              onRequestChange={ this.requestChange.bind(this) }
            >
              <p className="tagline"></p>
              <div  className="menu">
                <Navigation/>
              </div>
              <div style={{ position: "absolute", bottom: "140px", left: "35px" }}>
                <Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"  className="feedback" target="_blank" style={{ backgroundColor: "white", textAlign: "center" }}>Project Feedback<br /></Link>
                <span className="tearms"><Link to='/terms'>Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></span>
              </div>
              <p>
                <Link to="http://humanrights.nd.edu/" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr m" /></Link>
                <Link to="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="cds" /></Link>
              </p>
            </LeftNav>
          </div>
          <div className="col-sm-6">
            <div style={{float: "right", paddingTop: "8px"}}>
              <NotebookLink />
            </div>
          </div>
        </div>

      </header>

    );
  }
}

export default Header;
