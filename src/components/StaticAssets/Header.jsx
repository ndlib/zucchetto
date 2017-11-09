'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router';
import mui, { AppBar, FlatButton, FontIcon, Drawer } from 'material-ui';
import NotebookLink from "../Notebook/NotebookLink.jsx"
import ClearNotebookHeaderButton from "./ClearNotebookHeaderButton.jsx"

import { Link } from 'react-router'
import Navigation from './Navigation.jsx'

class Header extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false }
    this.menuClick = this.menuClick.bind(this);
  }

  actionButtons() {
    if(this.props.showCompareActions)
      return (
        <div style={{ marginTop: '-8px' }}>
          <NotebookLink />
          <ClearNotebookHeaderButton />
        </div>
      );
    return null;
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
          title="Convocate"
          onLeftIconButtonTouchTap={ this.menuClick }
          onTitleTouchTap={ this.titleClick }
          style={{
            backgroundColor: '#224048',
            height: '50px',
            minHeight: '50px',
            borderBottom: "double 3px #979694",
          }}
          titleStyle={{
            color: '#D5B117',
            cursor: 'pointer',
            lineHeight: '50px',
          }}
          iconElementLeft={ icon }
          iconElementRight={ this.actionButtons() }

        />
        <Drawer
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
          <p
            style={{
                position: 'fixed',
                bottom: '0',
                margin: '10px',
            }}
          >
            <a href="http://humanrights.nd.edu/" target="_blank" ><img src="/resources/images/cchr.png" alt="The Center For Civil and Human Rights" className="cchr m" /></a>
            <a href="https://library.nd.edu/cds" target="_blank" ><img src="/resources/images/undhl-cds.png" alt="Hesburgh Library Center for Digital Scholarship University of Notre Dame" className="cds" style={{ marginTop: '10px'}} /></a>
          </p>
        </Drawer>
      </div>

    );
  }
}

Header.propTypes = {
  showCompareActions: PropTypes.bool,
}

Header.defaultProps = {
  showCompareActions: true,
}

export default Header;
