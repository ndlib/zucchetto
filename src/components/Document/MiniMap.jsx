'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class MiniMap extends Component {

  constructor(props) {
    super(props);
    this._scale = .2;
    this.scrollToHere = this.scrollToHere.bind(this);
    this.setTop = this.setTop.bind(this);
    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    this.setState({
      width: ReactDOM.findDOMNode(this.refs.miniMap).clientWidth/this._scale,
      height: ReactDOM.findDOMNode(this.refs.miniMap).parentElement.clientHeight/this._scale,
    });
  }

  componentDidUpdate() {
    this.setTop();
  }

  setTop() {
    ReactDOM.findDOMNode(this.refs.miniMap).parentElement.scrollTop = (this.props.scrollTop - 40) * this._scale;
  }

  scrollToHere(e){
    e.preventDefault();
    this.props.onClick((ReactDOM.findDOMNode(this.refs.miniMap).parentElement.scrollTop + e.screenY - 210)/this._scale);
  }

  style() {
    var s = { x: this._scale, y: this._scale };
    var sc = 'scale(' + s.x + ','+ s.y + ')';
    return {
      transform: sc,
      cursor: 'pointer',
    };
  }

  render() {
    return (
      <div style={ this.style()} className='mini-map' ref='miniMap' onClick={ this.scrollToHere } >{this.props.children}
      </div>
    );
  }

}

MiniMap.propTypes = {
  onClick: React.PropTypes.func,
  scrollTop: React.PropTypes.number,
}

export default MiniMap;
