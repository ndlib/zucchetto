'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class MiniMap extends Component {

  constructor(props) {
    super(props);
    this.scrollToHere = this.scrollToHere.bind(this);
    this.setTop = this.setTop.bind(this);
    this.state = {
      scale: .2,
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    this.setState({
      width: ReactDOM.findDOMNode(this.refs.miniMap).clientWidth / this.state.scale,
      height: ReactDOM.findDOMNode(this.refs.miniMap).parentElement.clientHeight / this.state.scale,
      top: 0
    });

  }

  componentDidUpdate() {
    this.setTop();
  }

  setTop() {
    ReactDOM.findDOMNode(this.refs.miniMap).parentElement.scrollTop = (this.props.scrollTop - 40) * this.state.scale;
  }

  scrollToHere(e){
    var here = (ReactDOM.findDOMNode(this.refs.miniMap).parentElement.scrollTop + e.screenY - 210)/this.state.scale;
    e.preventDefault();
    this.props.onClick(here);
    this.setState({ top: (ReactDOM.findDOMNode(this.refs.miniMap).parentElement.scrollTop + e.screenY - 290)/this.state.scale })
  }

  style() {
    var s = { x: this.state.scale, y: this.state.scale };
    var sc = 'scale(' + s.x + ','+ s.y + ')';
    return {
      transform: sc,
      cursor: 'pointer',
    };
  }

  render() {
    return (
      <div style={ this.style()} className='mini-map' ref='miniMap' onClick={ this.scrollToHere } >{this.props.children}
        <div
          className="mini-map-highlight"
          style={{
            backgroundColor: 'rgba(255, 165, 0, 0.38)',
            height: window.innerHeight - 100,
            width: window.innerWidth * .65,
            position: 'absolute',
            top: this.state.top + 330,
            right: '-300%',
            zIndex: '1',
          }}
        >&nbsp;</div>
      </div>
    );
  }

}

MiniMap.propTypes = {
  onClick: React.PropTypes.func,
  scrollTop: React.PropTypes.number,
}

export default MiniMap;
