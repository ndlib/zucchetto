import React, { Component } from 'react'
import { FlatButton, FontIcon } from 'material-ui'
import _ from 'underscore'
import ItemStore from '../../store/ItemStore.js'
import ItemQueryParams from '../../modules/ItemQueryParams.js'
import VaticanID from '../../constants/VaticanID.js'
import HumanRightsID from '../../constants/HumanRightsID.js'
import GroupItemsByParent from '../../modules/GroupItemsByParent.js'
import ExportSummary from '../../modules/ExportSummary.js'

class PrintExportButton extends Component {
  constructor(props) {
    super(props)
    this.setDocuments = this.setDocuments.bind(this)
  }
  componentWillMount() {
    this.setDocuments()
  }

  setDocuments() {
    var humanrightsRequested = GroupItemsByParent(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')))

    var vaticanRequested = GroupItemsByParent(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')))

    this.setState({
      humanrightsDocuments: humanrightsRequested,
      vaticanDocuments: vaticanRequested
    });
  }

  render() {
    return (
      <FlatButton
        label="Download Saved Paragraphs"
        labelPosition="after"
        icon={<FontIcon className="material-icons">print</FontIcon>}
        onClick={
          ()=>{
            ExportSummary(this.state.vaticanDocuments, this.state.humanrightsDocuments)
          }
        }
        style={{ margin: "10px 5px" }}
      />
    )
  }
}

export default PrintExportButton
