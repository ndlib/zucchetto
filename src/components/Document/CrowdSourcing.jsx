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
        if(_.where(this.state.topicArrays[index], {name: actor[0].trim()}).length > 0) {
          assigned = true
          sortedActors[index].push(actor)
        }
        index += 1
      }

    })
    return sortedActors
  }

  setActors(item) {
    let unsortedActors = []
    let filteredActors = []
    let sortedActors = []
    if(item.items.metadata && item.items.metadata.actors) {
      filteredActors = item.items.metadata.actors.values.filter((actor) => {
        const regex = new RegExp(/^((?![a-z]\d{1,3})).*/gim)
        const val = actor.value.match(regex)
        return val !== null
      })
      // Remove actors with generated, non-descritive names e.g. a201, h300
      unsortedActors = filteredActors.map((actor) => {
        const regex = new RegExp(/^((?![a-z]\d{1,3})).*/gim)
        const val = actor.value.match(regex)
        if(val !== undefined) {
          return actor.value.match(regex)
        }
      })
      // Sort into groups
      sortedActors = this.sortActors(unsortedActors)

    }
    this.setState({actors: sortedActors, actorsSet: true})
  }

  render() {
    const headings = [
      'Actors', 'Harms and Violations', 'Rights and Freedoms', 'Principles and Values']
    // Only render if user has a uuid and the actors have been set.
    if(this.state.uuid && this.state.actorsSet) {
      let buttons = []
      // Each actor gets its own set of feedback buttons
      this.state.actors.forEach(
        (group, index) => {
          if(group.length > 0) {
            buttons.push(
              <h5 key={buttons.length}>{headings[index]}</h5>
            )
            group.forEach(
              (actor) => {
                buttons.push(
                  <CrowdSourcingButton
                    actor={actor.join()}
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
