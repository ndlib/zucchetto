'use strict'
import React, { Component, PropTypes } from 'react'
import mui from 'material-ui';
import _ from 'underscore';
import ItemStore from '../../store/ItemStore.js'
import SearchStore from '../../store/SearchStore.js';
import IDFromAtID  from '../../modules/IDFromAtID.js';
class CrowdSourcingButton extends Component {

  constructor(props) {
    super(props)
    this.yeaClick = this.yeaClick.bind(this)
    this.nayClick = this.nayClick.bind(this)
    this.submitFeedBack = this.submitFeedBack.bind(this)
    this.getFullRecordandSubmit = this.getFullRecordandSubmit.bind(this)
    this.buildData = this.buildData.bind(this)
    this.state = {
      marked: this.props.marked || false,
      uuid: localStorage.getItem('UUID'),
    }
  }
  buildData (feedback) {
    let searchTopics = SearchStore.getTopics().join()
    let data = {
      collection_id: this.props.item.collection_id,
      document_title: this.props.doc.name,
      paragraph: this.props.item.shortDescription,
      actor: this.props.actor,
      search_topics: searchTopics,
      feedback: feedback,
      user_id: this.state.uuid,
      paragraph_link: `https://honeycomb.library.nd.edu/items/${this.props.item.id}/edit`,
      document_link: `https://honeycomb.library.nd.edu/items/${this.props.doc.id}/edit`,
      convocate_link: window.location.href,

    }
    return data
  }
  yeaClick() {
    this.getFullRecordandSubmit('good')
  }

  nayClick() {
    this.getFullRecordandSubmit('bad')
  }

  getFullRecordandSubmit(marked) {
    let builtData = this.buildData(marked)
    this.submitFeedBack(builtData)
  }

  submitFeedBack(data) {
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzOa5xibFNwIvdMOP4R-jxkKOnfbl8SBl0PxiUKVT2G9mbXT_3R/exec',
      method: 'GET',
      dataType: 'json',
      data: data
    }).success(
      this.setState({marked: true})
    );
  }

  render() {
    if(!this.state.marked) {
      return (
        <mui.ListItem
          disabled={true}
          primaryText={this.props.actor}
          rightIcon={<div style={{width: "80px"}}><button onClick={this.yeaClick}><mui.FontIcon className='material-icons' title='Mark as well tagged.'>thumb_up</mui.FontIcon></button>
        <button onClick={this.nayClick}><mui.FontIcon className='material-icons' title='Mark as poorly tagged.'>thumb_down</mui.FontIcon></button></div>}
        />
      )
      } else {
        return (
          <mui.ListItem
            primaryText="Thanks for your feedback!"
          />
      )
      }

  }
}
CrowdSourcingButton.propTypes = {
  actor: React.PropTypes.string.isRequired,
  item: React.PropTypes.object.isRequired,
  marked: React.PropTypes.bool,
}

export default CrowdSourcingButton
