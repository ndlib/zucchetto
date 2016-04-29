import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class DocumentLink extends Component {

  constructor(props) {
    super(props);
  }

  documentURL(item){
    return "/document/" + item.id;
  }

  render() {
    return (<li><Link to={this.documentURL(this.props.item)}>{this.props.item.name}</Link></li>);
  }
}

DocumentLink.propTypes = {
  item: React.PropTypes.object,
}

export default DocumentLink;
