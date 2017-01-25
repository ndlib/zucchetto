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
    });
  },

  openDialog() {
    this.setState({isOpen: true});
  },

  closeDialog() {
    SearchActions.setFilters(null, {}, true);
    this.setState({isOpen: false});
  },

  openFAQ() {
    this.setState({faqOpen: true});
  },

  closeFAQ() {
    this.setState({faqOpen: false});
  },

  onDoctypeCheck(collection, value, event, isInputChecked) {
    if(isInputChecked) {
      SearchActions.addFilters(collection, { docType: [value] });
    } else {
      SearchActions.removeFilters(collection, { docType: [value] });
    }
    this.forceUpdate();
  },

  onDocsourceCheck(collection, value, event, isInputChecked) {
    if(isInputChecked) {
      SearchActions.addFilters(collection, { docSource: [value] });
    } else {
      SearchActions.removeFilters(collection, { docSource: [value] });
    }
    this.forceUpdate();
  },

  buildDoctypeList(collectionId) {
    var currentFilters = SearchStore.selectedFilters[collectionId].docType;
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
    var currentFilters = SearchStore.selectedFilters[collectionId].docSource;
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
    SearchActions.setFilters(VaticanID, { docType: [], docSource: [] });
    SearchActions.setFilters(HumanRightsID, { docType: [], docSource: [] });
    SearchActions.setFilters(null, { minDate: ItemStore.getEarliestDocYear(), maxDate: new Date().getFullYear() });
    this.forceUpdate();
  },

  topicSearchChecked(e, isChecked) {
    SearchStore.topicsOnly = isChecked;
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

  render: function() {
    const actions = [
      <mui.FlatButton
        onTouchTap={ this.openFAQ }
        backgroundColor={ '#224048' }
        style={{ marginRight: '15px' }}
      >
        <mui.FontIcon
          className="material-icons"
          style={{
            color: 'white',
            padding: '0 1px',
            verticalAlign: 'middle'
          }}
        >info</mui.FontIcon>
      </mui.FlatButton>,
      <mui.FlatButton
        label="Reset"
        labelStyle={{color: 'white'}}
        onTouchTap={ this.reset }
        backgroundColor={ '#224048' }
        style={{marginRight: '15px'}}
      />,
      <mui.FlatButton
        label="Search"
        labelStyle={{ color: 'white' }}
        onTouchTap={ this.closeDialog }
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
          title="Advanced Search"
          actions={actions}
          modal={false}
          open={this.state.isOpen}
          onRequestClose={this.closeDialog}
          autoScrollBodyContent={true}
        >
          <mui.Dialog
            title="How to Advanced Search"
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

          <DocDateSlider />
          <h4>Here you can refine search parameters on each document collection separately.</h4>
          { this.makeCard('Catholic Social Teaching', this.onVaticanExpand, this.state.vaticanExpanded, VaticanID) }
          <br/>
          { this.makeCard('International Human Rights Law', this.onHumanExpand, this.state.humanExpanded, HumanRightsID) }
          <mui.Checkbox
            label="Search Topic List Only"
            style={ this.styles.topicSearchCheckbox }
            onCheck={ this.topicSearchChecked }
            checked={ SearchStore.topicsOnly }
          />
        </mui.Dialog>
      </div>
    );
  }
});
module.exports = AdvancedSearch
