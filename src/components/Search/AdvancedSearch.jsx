'use strict'
var React = require('react');
var SearchActions = require('../../actions/SearchActions.js');
var SearchStore = require('../../store/SearchStore.js');
var ItemStore = require('../../store/ItemStore.js');
import HumanRightsID from '../../constants/HumanRightsID.js';
import VaticanID from '../../constants/VaticanID.js';
import mui from 'material-ui';
import DocDateSlider from './DocDateSlider.jsx';

var AdvancedSearch = React.createClass({
  styles: {
    list: {
      maxHeight: '200px',
      overflowY: 'scroll',
    },
    listItem: {
      minWidth: '150px',
    },
    listDiv: {
      display: 'inline-block',
      maxWidth: 'calc(50% - 40px)',
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
  },

  getInitialState: function() {
    return({
      isOpen: false,
      vaticanExpanded: false,
      humanExpanded: false,
    });
  },

  openDialog() {
    this.setState({isOpen: true});
  },

  closeDialog() {
    this.setState({isOpen: false});
  },

  onCheck(value, event, isInputChecked) {
    console.log(value);
  },

  buildDoctypeList(collectionId) {
    var doctypes = ItemStore.getDocTypes(collectionId);
    var entries = [];

    for(var i = 0; i < doctypes.length; ++i) {
      entries.push(
        <mui.ListItem
          key={doctypes[i]}
          primaryText={doctypes[i]}
          leftCheckbox={
            <mui.Checkbox
              onCheck={this.onCheck.bind(this, doctypes[i])}
            />
          }
        />
      );
    }

    return(
      <div style={this.styles.listDiv}>
        <h4>Document Type</h4>
        <mui.Divider/>
        <mui.List style={this.styles.list}>
          {entries}
        </mui.List>
      </div>
    );
  },

  buildDocSourceList(collectionId) {
    var sources = ItemStore.getDocSources(collectionId);
    var entries = [];

    for(var i = 0; i < sources.length; ++i) {
      entries.push(
        <mui.ListItem
          key={sources[i]}
          primaryText={sources[i]}
          leftCheckbox={
            <mui.Checkbox
              onCheck={this.onCheck.bind(this, sources[i])}
            />
          }
        />
      );
    }

    return(
      <div style={this.styles.listDiv}>
        <h4>Document Source</h4>
        <mui.Divider/>
        <mui.List style={this.styles.list}>
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

  makeCard(title, expandFunc, expanded, collectionId) {
    return(
      <mui.Card
        onExpandChange={expandFunc}
      >
        <mui.CardHeader
          title={title}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <mui.CardMedia
          expandable={true}
          style={this.styles.cardMedia}
        >
          <DocDateSlider collection={collectionId} />
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
            >youtube_searched_for</mui.FontIcon>
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
          <p>Here you can refine search parameters on each document collection separately.</p>
          { this.makeCard('Vatican', this.onVaticanExpand, this.state.vaticanExpanded, VaticanID) }
          { this.makeCard('Human Rights', this.onHumanExpand, this.state.humanExpanded, HumanRightsID) }
        </mui.Dialog>
      </div>
    );
  }
});
module.exports = AdvancedSearch
