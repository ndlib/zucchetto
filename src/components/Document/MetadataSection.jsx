'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      var label = this._metadata[prop].label;
      var value = this._metadata[prop].values[0].value;

      if(value.startsWith('http')) {
        value = (<a href={value} target='_blank'>{value}</a>);
      }

      var html = (
        <p key={ prop } ><span style={{ fontFamily: 'sans-serif', fontWeight: 'bold'}}>{label}:</span> {value}</p>
      );

      if(label !== 'Coverage Temporal' && label !=='Footnotes') {
        data.push({label: label.toLowerCase(), value: html});
      }
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
    values.unshift((<p key='source' ><span style={{ fontFamily: 'sans-serif', fontWeight: 'bold'}}>Source:</span> {this._metadata.organization.values[0].value}</p>));
    return values;
  }


  render() {

    return (
        <Paper zdepth={ 0 } style={{
            backgroundColor: 'transparent',
            height: 'calc(100% - 200px)',
            marginTop: '1em',
            width: "100%"
        }}>
          <div style={{
              margin: '0 auto',
              maxWidth: '60vw'
          }}>
            <h2 className='heading1'
              style={{
                padding: '1em 0',
                textAlign: 'left'
              }}
            >Document Information</h2>
            { this.metadataList() }
          </div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </Paper>
     );
  }
}
MetadataSection.propTypes = {
  document: PropTypes.object.isRequired,
}

export default MetadataSection;
