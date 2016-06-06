'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { FlatButton } from "material-ui"

class FeedbackLink extends Component {

  render() {
    return (
      <FlatButton
        backgroundColor="#E4E1D1"
        className="feedback"
        style={{ 	transform: "rotate(90deg)", transformOrigin: "right top 0", position: "absolute", right: 0, bottom: 150, padding: "0px 15px" }}
        href="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform"
        target="blank"
        >
        Feedback
      </FlatButton>
    );
  }

}

export default FeedbackLink;
