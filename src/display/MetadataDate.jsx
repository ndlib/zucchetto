'use strict'
var React = require('react');
var createReactClass = require('create-react-class');

var MetadataDate = createReactClass({
  displayName: 'Metadata Date',

  propTypes: {
    metadata_field: PropTypes.object.isRequired,
  },

  render: function () {
    return (<time dateTime={this.props.metadata_field.iso8601}>{this.props.metadata_field.value}</time>);
  }
});

module.exports = MetadataDate;
