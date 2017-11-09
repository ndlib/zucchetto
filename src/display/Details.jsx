'use strict'
var React = require("react");
import mui, {FontIcon, RaisedButton, Paper} from 'material-ui';
var MetadataList = require('../display/MetadataList.jsx');

var Details = React.createClass({

  propTypes: {
    item: PropTypes.object,
    additionalDetails: PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      showDetails: true
    }
  },

  getInitialState: function() {
    return {
      showDetails: this.props.showDetails,
    };
  },

  toggleDetails: function() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  },

  detailsButtonStyle: function() {
    var arr = {

      position: "absolute",
      top: "-45px",
      right: "0",
    };

    return arr;
  },

  paperStyle: function() {
    return {
      maxHeight: "70%",
      width: "30%",
      position: "absolute",
      right: "70px",
      zIndex: "100",
      opacity: "0.8",
      backgroundColor: "#fff",
      overflow: "visible"
    };
  },

  detailsStyle: function () {
    return {
      display: this.state.showDetails ? "block" : 'none',
      padding: "10px",
      paddingTop: "35px",
    }
  },

  render: function () {
    return (
      <Paper className="details" style={this.paperStyle()}>
        <RaisedButton
          onClick={this.toggleDetails}
          style={this.detailsButtonStyle()}
          disableTouchRipple={true}
          labelPosition="after"
        >
          <span style={{fontSize: "20px", letterSpacing: "0", textTransform: "uppercase", fontWeight: "500", padding: "0px 10px" }}>
            Details
            <FontIcon className="material-icons" style={{verticalAlign:'top', marginLeft:'5px'}}>{this.state.showDetails ? "arrow_forward" : "arrow_back"}</FontIcon>
          </span>
        </RaisedButton>

        <div className="item-details" style={this.detailsStyle()}>
          <div className="additional-details" dangerouslySetInnerHTML={{__html: this.props.additionalDetails}} />
          <MetadataList metadata={this.props.item.metadata} />
        </div>
      </Paper>
    );
  }
});

module.exports = Details;
