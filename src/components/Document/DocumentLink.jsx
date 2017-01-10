import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class DocumentLink extends Component {

  constructor(props) {
    super(props);
  }

  documentURL(item){
    return "/document/" + item.id;
  }

  subtitle(item) {
    if(item.metadata.alternative_title) {
      var alternate = item.metadata.alternative_title.values[0].value;
      return(<div className="subtitle"><p>{alternate}</p></div>)
    }
    return null;
  }

  render() {
    var item = this.props.item;
    return (<li><Link to={this.documentURL(item)}>{item.name}</Link>
        { this.subtitle(item) }
      </li>);
  }
}

DocumentLink.propTypes = {
  item: React.PropTypes.object,
}

export default DocumentLink;
