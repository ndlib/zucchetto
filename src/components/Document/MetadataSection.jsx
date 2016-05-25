'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Paper } from 'material-ui';

class MetadataSection extends Component {

  constructor(props) {
    super(props);
    this._metadata = this.props.document.metadata;
    this.metadataList = this.metadataList.bind(this);
  }

  metadataList() {
    var data = [];

    for (var prop in this._metadata) {
      data.push({label: this._metadata[prop].label.toLowerCase(), value: (<p key={ prop } >{this._metadata[prop].label}: {this._metadata[prop].values[0].value}</p>)});
    }

    data = data.sort(function(a,b) {
      if (a.label < b.label)
       return -1
      if (a.label > b.label)
       return 1
      return 0 //default return value (no sorting)
    });

    var values = []
    for(var item in data) {
      values.push(data[item].value);
    }
    values.unshift((<p key='source' >Source: <a href={this._metadata.rights_holder_website.values[0].value}>{this._metadata.rights_holder.values[0].value}</a></p>));
    return values;
  }


  render() {

    return (
      <Paper style={{ height: 'calc(100% - 200px)', marginTop: '111px'}}>
        <Paper zDepth={ 0 } style={{ width: "100%" }}>
          <h2 className='heading1'>Metadata</h2>
          <div style={{ margin: '0 auto', maxWidth: '60vw' }}>
            { this.metadataList() }
          </div>
          <p></p>
        </Paper>
      </Paper>
     );
  }
}
MetadataSection.propTypes = {
  document: React.PropTypes.object.isRequired,
}

export default MetadataSection;
