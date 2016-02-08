
var React = require('react');

var PageContent = React.createClass({

  classes: function () {
    if (this.props.fluidLayout) {
      return "container-fluid";
    } else {
      return "container";
    }
  },

  render: function() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
});

// each file will export exactly one component
module.exports = PageContent;
