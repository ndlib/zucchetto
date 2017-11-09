'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import mui, { FlatButton } from "material-ui"

class FeedbackLink extends Component {

  render() {
    return (
      <Link to="https://docs.google.com/a/nd.edu/forms/d/1yCnSjl4nBCJYmw70_S2VfVx1LzgNQ-kmroOqapq6i0Q/viewform" target="_blank">
      <FlatButton
        backgroundColor="#857f6f"
        hoverColor="#193035"
        className="feedback"
        style={{
          color: "#E4E1D1",
          transform: "rotate(90deg)",
          transformOrigin: "right top 0",
          position: "absolute",
          right: 0,
          bottom: 150,
          padding: "0px 15px",
          boxShadow: "0px 0px 10px 4px #bbb",
        }}
        >
        Report a Problem
      </FlatButton>
    </Link>
    );
  }

}

export default FeedbackLink;
