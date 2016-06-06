'use strict'
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import mui, { AppBar, FlatButton, FontIcon, LeftNav } from 'material-ui';
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

  titleClick() {
    browserHistory.push('/');
  }

  requestChange(open) {
    this.setState({ menuOpen: open });
  }

  render() {
    var icon = (
      <FontIcon style={{
          color: '#D5B117',
          cursor: 'pointer',
          marginTop: '4px',
        }}
        className="material-icons"
        onClick={ this.menuClick }
      >menu</FontIcon>
    );
    return (
      <div>
        <AppBar
          title="Research Database"
          onLeftIconButtonTouchTap={ this.menuClick }
          onTitleTouchTap={ this.titleClick }
          style={{
            backgroundColor: '#224048',
            height: '50px',
            minHeight: '50px',
          }}
          titleStyle={{
            color: '#D5B117',
            cursor: 'pointer',
            lineHeight: '50px',
          }}
          iconElementLeft={ icon }
          iconElementRight={ (<div style={{marginTop: '-8px'}}><NotebookLink /></div>) }

        />
        <LeftNav
          open={this.state.menuOpen}
          docked={ false }
          onRequestChange={ this.requestChange.bind(this) }
        >
          <p className="tagline"></p>
          <div className="menu">
            <Navigation/>
          </div>
          <p
            style={{
                position: 'fixed',
                bottom: '0',
                margin: '10px',
            }}
          >
            <a href="http://humanrights.nd.edu/" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr m" /></a>
            <a href="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="cds" /></a>
          </p>
        </LeftNav>
      </div>

    );
  }
}

export default Header;
