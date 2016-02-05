"use strict"
var React = require("react");
var mui = require("material-ui");

var CloseButton = React.createClass({

  propTypes: {
    alternate: React.PropTypes.bool,
    clickEvent: React.PropTypes.func.isRequired,
  },

  getDefaultProps: function() {
    return {
      alternate: false,
    }
  },


  render: function() {
    return (
      <mui.EnhancedButton
        onClick={this.props.clickEvent}
        disableTouchRipple={true}
      >
        <mui.FontIcon className="material-icons" style={{border:'solid 1px', marginTop:'16px'}}>close</mui.FontIcon>
      </mui.EnhancedButton>
    );
  },
});

module.exports = CloseButton;
