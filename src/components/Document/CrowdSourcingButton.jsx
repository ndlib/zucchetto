import React, { Component } from 'react'
import PropTypes from 'prop-types';
import mui, {FontIcon} from 'material-ui';
import _ from 'underscore';
import ItemStore from '../../store/ItemStore.js'
import SearchStore from '../../store/SearchStore.js';
import IDFromAtID  from '../../modules/IDFromAtID.js';
import mapTermToHumanReadable from '../../modules/mapTermToHumanReadable.js'
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
    let searchTopics = SearchStore.getTopics()

    let searchTopicsHuman = []
    searchTopics.map((topic) => {
      let foundTopic = mapTermToHumanReadable(topic)
      if(foundTopic) {
        searchTopicsHuman.push(foundTopic)
      }
      return
    })

    let data = {
      collection_id: this.props.item.collection_id,
      document_title: this.props.doc.name,
      paragraph: this.props.item.shortDescription,
      actor: this.props.actor,
      search_topics: searchTopics.join(),
      search_topics_human: searchTopicsHuman.join(),
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
            <FontIcon
              className='material-icons'
              title='Mark as well tagged.'
              style={this.fontStyle()}
            >thumb_up</FontIcon>
          </button>
          <button onClick={this.nayClick}>
            <FontIcon
              className='material-icons'
              title='Mark as poorly tagged.'
              style={this.fontStyle()}
            >thumb_down</FontIcon>
          </button> {this.props.actor}
        </div>
      )
      } else {
        return (
          <div style={this.style(true)}>
            <FontIcon
              className='material-icons'
              style={this.fontStyle(true)}
            >{this.state.voteType}</FontIcon> {this.props.actor}
          </div>
        )
      }

  }
}
CrowdSourcingButton.propTypes = {
  actor: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  marked: PropTypes.bool,
}

export default CrowdSourcingButton
