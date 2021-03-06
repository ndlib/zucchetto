import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrowdSourcingButton from './CrowdSourcingButton.jsx'
import ItemStore from '../../store/ItemStore.js'
import IDFromAtID  from '../../modules/IDFromAtID.js';
import topics from '../Search/topics.js'
import _ from 'underscore'
import flattenTreeToArray from '../../modules/FlattenTreeToArray.js'

class CrowdSourcing extends Component {
  constructor(props) {
    super(props);
    this.setActors = this.setActors.bind(this)
    let documentId = IDFromAtID(this.props.item['isPartOf/item'])
    let doc = ItemStore.getItem(documentId)
    this.state = {
      actors: [[],[],[],[]],
      actorsSet: false,
      doc: doc,
      uuid: localStorage.getItem('UUID'),
      topicArrays: [
        flattenTreeToArray(topics.topics[0].children, []),
        flattenTreeToArray(topics.topics[1].children, []),
        flattenTreeToArray(topics.topics[2].children, []),
        flattenTreeToArray(topics.topics[3].children, [])
      ]
    }
    this.sortActors = this.sortActors.bind(this)
    this.headings = [
      'Actors', 'Harms and Violations', 'Rights and Freedoms', 'Principles and Values']
  }

  componentWillMount() {
    $.ajax({
      url: `https://honeycomb.library.nd.edu/v1/items/${this.props.item.id}`,
      method: 'GET',
      dataType: 'json'
    }).success((item) => {
      this.setActors(item)
    })

  }

  sortActors(actors) {
    let sortedActors = [[], [], [], []]
    actors.forEach((actor) => {
      let assigned = false
      let index = 0
      while (!assigned && index < sortedActors.length) {
        if(_.where(this.state.topicArrays[index], {name: actor.value.trim()}).length > 0) {
          assigned = true
          sortedActors[index].push({label: actor.value.trim(), category: this.headings[index]})
        }
        index += 1
      }

    })
    return sortedActors
  }

  setActors(item) {
    let actors = []
    if(item.items.metadata && item.items.metadata.actors) {
      const regex = new RegExp(/^((?![a-z]\d{1,3})).*/gim)

      // Remove actors with generated, non-descritive names e.g. a201, h300
      actors = item.items.metadata.actors.values.filter((actor) => {
        // Filter out a bunch of null values
        return actor.value.match(regex) !== null
      })

    }
    this.setState({actors: this.sortActors(actors), actorsSet: true})
  }

  render() {

    // Only render if user has a uuid and the actors have been set.
    if(this.state.uuid && this.state.actorsSet) {
      let buttons = []
      // Each actor gets its own set of feedback buttons
      this.state.actors.forEach(
        (group, index) => {
          if(group.length > 0) {
            buttons.push(
              <h5 key={buttons.length}>{this.headings[index]}</h5>
            )
            group.forEach(
              (actor) => {
                buttons.push(
                  <CrowdSourcingButton
                    actor={actor}
                    doc={this.state.doc}
                    item={this.props.item}
                    marked={false}
                    key={buttons.length}
                  />
                )
              }
            )
          }
        }
      )
      return (
        <div className="crowdsourcing-buttons">{buttons}</div>
      )
    }
    return null;
  }
}

CrowdSourcing.propTypes = {
  item: PropTypes.object.isRequired,
  marked: PropTypes.bool,
}
CrowdSourcing.defaultProps = {
  marked: false,
}

export default CrowdSourcing;
