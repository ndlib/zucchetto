'use strict'
var _ = require('underscore');
var React = require('react');
var SearchActions = require('../../actions/SearchActions.js');
var SearchStore = require('../../store/SearchStore.js');
var ItemStore = require('../../store/ItemStore.js');
import HumanRightsID from '../../constants/HumanRightsID.js';
import VaticanID from '../../constants/VaticanID.js';
import mui from 'material-ui';
import DocDateSlider from './DocDateSlider.jsx';

var AdvancedSearch = React.createClass({
  howTo() {
    return(
      <div>
        <p>How to ------ </p>
      </div>
    );
  },

  render: function() {
    return(
      this.howTo()
    );
  }
});
export default AdvancedSearch
