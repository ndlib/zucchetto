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
    var item = this.props.item;
    var alternate = item.metadata.alternative_title ? "\n" + item.metadata.alternative_title.values[0].value : "";
    return (<li><Link to={this.documentURL(item)}>{item.name}</Link>
          <div className="subtitle"><p>{alternate}</p></div>
      </li>);
  }
}

DocumentLink.propTypes = {
  item: React.PropTypes.object,
}

export default DocumentLink;
