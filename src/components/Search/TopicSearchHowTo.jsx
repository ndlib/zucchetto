'use strict'
var React = require('react');
var createReactClass = require('create-react-class');
import mui, {Dialog, FontIcon, RaisedButton, FlatButton } from 'material-ui';

var TopicSearchHowTo = createReactClass({
  getInitialState: function() {
    return({
      isOpen: false,
    });
  },

  openDialog() {
    this.setState({
      isOpen: true,
    });
  },

  closeDialog() {
    this.setState({isOpen: false});
  },

  popupTitle: function() {
    return(
      <div>
        <h3 style={{
          margin: "0",
          padding: "0 24px 0 24px",
          color: "rgba(0, 0, 0, 0.87)",
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "400",
          display: "inline-block",
        }}>Search By Topic</h3>
        <FlatButton
            onClick={this.closeDialog}
            style={{
              float: "right",
            }}
            disableTouchRipple={true}
          >
            <FontIcon
              className="material-icons"
              style={{
                padding: '0 1px',
                verticalAlign: 'middle'
              }}
            >close</FontIcon>
          </FlatButton>
      </div>
    );
  },

  render: function() {
    return(
      <div style={{ display: 'inline-block' }}>
        <FontIcon
          className='material-icons howToIcon'
          style={{
            fontSize: '20px',
            marginLeft: '10px',
          }}
          onClick={this.openDialog}
        >info_outline</FontIcon>
        <Dialog
          title={this.popupTitle()}
          modal={false}
          open={this.state.isOpen}
          onRequestClose={this.closeDialog}
          autoScrollBodyContent={true}
        >
          The topic list search uses the "OR" Boolean, returning any document that deals with any of the selected topics.
          By default the most relevant paragraph will be listed first.
        </Dialog>
      </div>
    );
  }
});
export default TopicSearchHowTo
