'use strict'
import React, { Component, PropTypes } from 'react';
import mui from "material-ui"

class FeedbackLink extends Component {

  render() {
    return (
      <mui.FlatButton
        backgroundColor="#E4E1D1"
        className="feedback"
        style={{ 	transform: "rotate(90deg)", transformOrigin: "left top 0", position: "absolute", right: 0, bottom: 150, padding: "0px 15px" }}
        href="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"
        target="blank"
        linkButton="true">
          Project Feedback
      </mui.FlatButton>
    );
  }

}

export default FeedbackLink;
