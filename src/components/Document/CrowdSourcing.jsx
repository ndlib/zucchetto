import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrowdSourcingButton from './CrowdSourcingButton.jsx'
import ItemStore from '../../store/ItemStore.js'
import IDFromAtID  from '../../modules/IDFromAtID.js';

class CrowdSourcing extends Component {
  constructor(props) {
    super(props);
    this.setActors = this.setActors.bind(this)
    let documentId = IDFromAtID(this.props.item['isPartOf/item'])
    let doc = ItemStore.getItem(documentId)
    this.state = {
      actors: [],
      actorsSet: false,
      doc: doc,
      uuid: localStorage.getItem('UUID'),
    }
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

  setActors(item) {
    let actors = []
    let filteredActors = []
    if(item.items.metadata && item.items.metadata.actors) {
      filteredActors = item.items.metadata.actors.values.filter((actor) => {
        const regex = new RegExp(/^((?![a-z]\d{1,3})).*/gim)
        const val = actor.value.match(regex)
        return val !== null
      })
      // Remove actors with generated, non-descritive names e.g. a201, h300
      actors = filteredActors.map((actor) => {
        const regex = new RegExp(/^((?![a-z]\d{1,3})).*/gim)
        const val = actor.value.match(regex)
        if(val !== undefined) {
          return actor.value.match(regex)
        }
      })


    }
    this.setState({actors: actors, actorsSet: true})
  }

  render() {
    // Only render if user has a uuid and the actors have been set.
    if(this.state.uuid && this.state.actorsSet) {
      let buttons = []
      // Each actor gets its own set of feedback buttons
      this.state.actors.forEach((actor) => {
        buttons.push(
          <CrowdSourcingButton
            actor={actor.join()}
            doc={this.state.doc}
            item={this.props.item}
            marked={false}
            key={buttons.length}
          />
        )
      })
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
