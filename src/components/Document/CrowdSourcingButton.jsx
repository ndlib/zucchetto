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
      voteType: null
    }
  }

  style(disabled) {
    return {
      fontSize: '0.8em',
      width: '50%',
      display: 'inline-block',
      overflow: 'hidden',
      opacity: disabled ? '0.6' : '1',
    }
  }
  fontStyle(disabled) {
    return {
      fontSize: '10px',
      opacity: disabled ? '0.6' : '1',
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
      user_search: document.getElementById('searchBox').value,
      feedback: feedback,
      user_id: this.state.uuid,
      paragraph_link: `https://honeycomb.library.nd.edu/items/${this.props.item.id}/edit`,
      document_link: `https://honeycomb.library.nd.edu/items/${this.props.doc.id}/edit`,
      convocate_link: window.location.href,
      voteType: feedback === 'good' ? 'thumb_up' : 'thumb_down'
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
      this.setState({
        marked: true,
        voteType: data.voteType
      })
    );
  }

  render() {
    if(!this.state.marked) {
      return (
        <div style={this.style()}>
          <button onClick={this.yeaClick}>
            <mui.FontIcon
              className='material-icons'
              title='Mark as well tagged.'
              style={this.fontStyle()}
            >thumb_up</mui.FontIcon>
          </button>
          <button onClick={this.nayClick}>
            <mui.FontIcon
              className='material-icons'
              title='Mark as poorly tagged.'
              style={this.fontStyle()}
            >thumb_down</mui.FontIcon>
          </button> {this.props.actor}
        </div>
      )
      } else {
        return (
          <div style={this.style(true)}>
            <mui.FontIcon
              className='material-icons'
              style={this.fontStyle(true)}
            >{this.state.voteType}</mui.FontIcon> {this.props.actor}
          </div>
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
