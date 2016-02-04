'use strict'
var React = require('react');
var mui = require('material-ui');

var ListItem = React.createClass({
  mixins: [
    require('../../mixins/LoadRemoteMixin.jsx')
  ],

  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    var item = this.props.item;

    var name = (
      <span style={{marginLeft: '30px'}}>
        {item.name}
      </span>
    );

    var description = (
        <span style={{
            maxWidth: '50em',
            marginLeft: '30px'}}
        >
          {item.description}

        </span>
    );

    return (
      <div>
        <mui.ListItem
          primaryText={name}
          secondaryText={description}
          secondaryTextLines={2}
          onClick={this.itemOnClick}
          innerDivStyle={{height:'85px'}}
        />
      <mui.Divider />
      </div>
    );
  }
});

module.exports = ListItem;
