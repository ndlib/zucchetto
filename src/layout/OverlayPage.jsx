'use strict'
var React = require('react');
var mui = require('material-ui');
var CloseButton = require('../other/CloseButton.jsx');
var SideNavButton = require("../other/SideNavButton.jsx");
var PageContent = require('../layout/PageContent.jsx');

var OverlayPage = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    onPrevButtonClick: React.PropTypes.func,
    onNextButtonClick: React.PropTypes.func,
    onCloseButtonClick: React.PropTypes.func,
  },

  pageStyles: function() {
    return {
      height: window.innerHeight + "px",
      width: "100%",
      position: "fixed",
      zIndex: "4",
    }
  },

  toolbar: function() {
    return (
      <mui.Toolbar >
        <mui.ToolbarGroup key={0} float="left" >
          <mui.ToolbarTitle text={this.props.title} />
        </mui.ToolbarGroup>
        <mui.ToolbarGroup key={1} float="right">
          {this.closeButton()}
        </mui.ToolbarGroup>
      </mui.Toolbar>
    )
  },

  closeButton: function() {
    if(this.props.onCloseButtonClick) {
      return (<CloseButton clickEvent={this.props.onCloseButtonClick} />);
    }
    return "";
  },

  nextButton: function() {
    if(this.props.onNextButtonClick) {
      return (<SideNavButton onClick={this.props.onNextButtonClick} rightIcon={true} />);
    }
    return "";
  },

  prevButton: function() {
    if(this.props.onPrevButtonClick) {
      return (<SideNavButton onClick={this.props.onPrevButtonClick} />);
    }
    return "";
  },

  render: function() {
    return (
      <PageContent fluidLayout={true}>
        <mui.Paper style={this.pageStyles()}>
          {this.toolbar()}
          {this.prevButton()}
          {this.nextButton()}
          {this.props.children}
        </mui.Paper>
      </PageContent>
    );
  }
});

// each file will export exactly one component
module.exports = OverlayPage;
