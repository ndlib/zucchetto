'use strict'
var _ = require('underscore');
var React = require('react');
var SearchActions = require('../../actions/SearchActions.js');
var SearchStore = require('../../store/SearchStore.js');
var EventEmitter = require("events").EventEmitter;
var ItemStore = require('../../store/ItemStore.js');
var DeepCopy = require("../../modules/DeepCopy.js");
import HumanRightsID from '../../constants/HumanRightsID.js';
import VaticanID from '../../constants/VaticanID.js';
import mui from 'material-ui';
import DocDateSlider from './DocDateSlider.jsx';
import AdvancedHowTo from './AdvancedHowTo.jsx';

var AdvancedSearch = React.createClass({
  styles: {
    listItem: {
      minWidth: '150px',
    },
    listDiv: {
      display: 'inline-block',
      width: 'calc(50% - 40px)',
      verticalAlign: 'top',
      textAlign: 'left',
    },
    docDiv: {
      width: '100%',
      textAlign: 'center',
    },
    verticalPadding: {
      padding: '20px',
      display: 'inline-block',
    },
    cardMedia: {
      padding: "15px",
      paddingTop: "0",
    },
    topicSearchCheckbox: {
      marginTop: '15px',
    }
  },

  getInitialState: function() {
    return({
      isOpen: false,
      faqOpen: false,
      vaticanExpanded: false,
      humanExpanded: false,
      filters: DeepCopy(SearchStore.selectedFilters),
      topicsOnly: SearchStore.topicsOnly,
      emitter: new EventEmitter(),
    });
  },

  openDialog() {
    this.setState({
      isOpen: true,
      filters: DeepCopy(SearchStore.selectedFilters),
    });
  },

  applyAndClose() {
    SearchActions.setTopicsOnly(this.state.topicsOnly);
    SearchActions.setFilters(VaticanID, this.state.filters[VaticanID]);
    SearchActions.setFilters(HumanRightsID, this.state.filters[HumanRightsID]);
    SearchActions.setFilters(null, {
      "minDate": this.refs.DateSlider.state.minDate,
      "maxDate": this.refs.DateSlider.state.maxDate,
    });
    this.closeDialog();
  },

  closeDialog() {
    this.setState({isOpen: false});
  },

  openFAQ() {
    this.setState({faqOpen: true});
  },

  closeFAQ() {
    this.setState({faqOpen: false});
  },

  addFilter(collection, key, value) {
    var current = this.state.filters[collection][key];
    if(!current) {
      current = [value];
    } else if(current instanceof Array) {
      current.push(value);
    }
    this.setState(this.state.filters);
  },

  removeFilter(collection, key, value) {
    var array = this.state.filters[collection][key];
    for(var i = 0; i < array.length; ++i) {
      if(array[i] == value) {
        array.splice(i, 1);
        break;
      }
    }
    this.setState(this.state.filters);
  },

  onDoctypeCheck(collection, value, event, isInputChecked) {
    if(isInputChecked) {
      this.addFilter(collection, "docType", value);
    } else {
      this.removeFilter(collection, "docType", value);
    }
  },

  onDocsourceCheck(collection, value, event, isInputChecked) {
    if(isInputChecked) {
      this.addFilter(collection, "docSource", value);
    } else {
      this.removeFilter(collection, "docSource", value);
    }
  },

  buildDoctypeList(collectionId) {
    var currentFilters = this.state.filters[collectionId]["docType"];
    var doctypes = ItemStore.getDocTypes(collectionId);
    var entries = [];

    for(var i = 0; i < doctypes.length; ++i) {
      entries.push(
        <mui.ListItem
          key={doctypes[i]}
          primaryText={doctypes[i]}
          leftCheckbox={
            <mui.Checkbox
              onCheck={this.onDoctypeCheck.bind(this, collectionId, doctypes[i])}
              checked={ _.contains(currentFilters, doctypes[i]) }
            />
          }
        />
      );
    }

    return(
      <div style={this.styles.listDiv}>
        <h4>Document Type</h4>
        <mui.Divider/>
        <mui.List>
          {entries}
        </mui.List>
      </div>
    );
  },

  buildDocSourceList(collectionId) {
    var currentFilters = this.state.filters[collectionId]["docSource"];
    var sources = ItemStore.getDocSources(collectionId);
    var entries = [];

    for(var i = 0; i < sources.length; ++i) {
      entries.push(
        <mui.ListItem
          key={sources[i]}
          primaryText={sources[i]}
          leftCheckbox={
            <mui.Checkbox
              onCheck={ this.onDocsourceCheck.bind(this, collectionId, sources[i]) }
              checked={ _.contains(currentFilters, sources[i]) }
            />
          }
        />
      );
    }

    return(
      <div style={this.styles.listDiv}>
        <h4>Document Source</h4>
        <mui.Divider/>
        <mui.List>
          {entries}
        </mui.List>
      </div>
    );
  },

  onVaticanExpand(expanded) {
    this.setState({
      vaticanExpanded: expanded,
    });
  },

  onHumanExpand(expanded) {
    this.setState({
      humanExpanded: expanded,
    });
  },

  reset() {
    var filters = {}
    filters[VaticanID] = { docType: [], docSource: [] }
    filters[HumanRightsID] = { docType: [], docSource: [] }
    this.setState({
      filters: filters,
      topicsOnly: false,
    });
    this.state.emitter.emit('reset');
  },

  topicSearchChecked(e, isChecked) {
    this.setState({
      topicsOnly: isChecked,
    });
  },

  makeCard(title, expandFunc, expanded, collectionId) {
    return(
      <mui.Card
        onExpandChange={expandFunc}
      >
        <mui.CardHeader
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
          titleStyle={{fontSize: '17px'}}
        />
        <mui.CardMedia
          expandable={true}
          style={this.styles.cardMedia}
        >
          <div style={this.styles.docDiv}>
            { this.buildDoctypeList(collectionId) }
            <div style={this.styles.verticalPadding}/>
            { this.buildDocSourceList(collectionId) }
          </div>
        </mui.CardMedia>
      </mui.Card>
    );
  },

  advancedTitle: function() {
    return(
      <div>
        <h3 style={{
          margin: "0",
          padding: "24px 24px 0 24px",
          color: "rgba(0, 0, 0, 0.87)",
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "400",
          display: "inline-block",
        }}>Advanced Search Filters</h3>
        <mui.FlatButton
            onClick={this.closeDialog}
            style={{
              float: "right",
              marginTop: "20px",
            }}
            disableTouchRipple={true}
          >
            <mui.FontIcon
              className="material-icons"
              style={{
                padding: '0 1px',
                verticalAlign: 'middle'
              }}
            >close</mui.FontIcon>
          </mui.FlatButton>
      </div>
    );
  },

  render: function() {
    // This is the button to open how to, turn on when we have info to put in there
    //  <mui.FlatButton
    //    onTouchTap={ this.openFAQ }
    //    backgroundColor={ '#224048' }
    //    style={{ marginRight: '15px' }}
    //  >
    //    <mui.FontIcon
    //      className="material-icons"
    //      style={{
    //        color: 'white',
    //        padding: '0 1px',
    //        verticalAlign: 'middle'
    //      }}
    //    >info</mui.FontIcon>
    //  </mui.FlatButton>,
    const actions = [
      <mui.FlatButton
        label="Reset"
        labelStyle={{color: 'white'}}
        onTouchTap={ this.reset }
        backgroundColor={ '#224048' }
        style={{marginRight: '15px'}}
      />,
      <mui.FlatButton
        label="OK"
        labelStyle={{ color: 'white' }}
        onTouchTap={ this.applyAndClose }
        backgroundColor={ '#224048' }
      />,
    ];

    return(
      <div style={{ display: 'inline-block' }}>
        <div>
          <mui.RaisedButton
            onClick={this.openDialog}
            style={{
              boxShadow: 'none',
              lineHeight: '36px',
              minWidth: '36px',
              zIndex: '0',
            }}
            backgroundColor='#224048'
            disableTouchRipple={true}
          >
            <mui.FontIcon
              className="material-icons"
              style={{
                color: 'white',
                padding: '0 1px',
                verticalAlign: 'middle'
              }}
            >filter_list</mui.FontIcon>
          </mui.RaisedButton>
        </div>
        <mui.Dialog
          title={this.advancedTitle()}
          actions={actions}
          modal={true}
          open={this.state.isOpen}
          onRequestClose={this.closeDialog}
          autoScrollBodyContent={true}
        >
          <mui.Dialog
            title="How to use Advanced Search Filters"
            actions={[
              <mui.FlatButton
                onTouchTap={ this.closeFAQ }
                label="OK"
                backgroundColor={ '#224048' }
                labelStyle={{color: 'white'}}
              />
            ]}
            modal={false}
            open={this.state.faqOpen}
            onRequestClose={this.closeFAQ}
            autoScrollBodyContent={true}
          >
            <AdvancedHowTo />
          </mui.Dialog>

          <DocDateSlider ref="DateSlider" emitter={this.state.emitter} />
          <h4>Here you can refine search parameters on each document collection separately.</h4>
          { this.makeCard('Catholic Social Teaching', this.onVaticanExpand, this.state.vaticanExpanded, VaticanID) }
          <br/>
          { this.makeCard('International Human Rights Law', this.onHumanExpand, this.state.humanExpanded, HumanRightsID) }
          <mui.Checkbox
            label="Search Topic List Only"
            style={ this.styles.topicSearchCheckbox }
            onCheck={ this.topicSearchChecked }
            checked={ this.state.topicsOnly }
          />
        </mui.Dialog>
      </div>
    );
  }
});
module.exports = AdvancedSearch
