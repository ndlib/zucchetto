'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import DocumentNav from './DocumentNav.jsx';
import CopyrightNotification from './CopyrightNotification.jsx';
import Document from './Document.jsx';
import TopicsInDocuments from '../../modules/TopicsInDocument.js';
import MiniMap from './MiniMap.jsx';

import mui, { Paper } from 'material-ui';

class DocumentSection extends Component {
  constructor(props, context) {
    super(props, context);

    let baseState = this.props.baseState;
    this._topics = TopicsInDocuments(this.props.parent);
    this._searchIds = [];
    if (baseState !== 'none') {
      this._searchIds = this.props.searchIds;
    }
    this.state = {
      highlightedIndex: baseState,
      showAllParagraphs: true,
      height: window.innerHeight - 107,
      scrollTop: 0
    };
    this.highlightSelectedParagraphs = this.highlightSelectedParagraphs.bind(this);
    this.resize = this.resize.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goToTop = this.goToTop.bind(this);
    this.doc = this.doc.bind(this);
    this.mapClick = this.mapClick.bind(this);
    this.scrollWindow = this.scrollWindow.bind(this);

    this.styles = {
      paperNav: {
        width: "25vw",
        float: "left",
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: this.state.height,
        backgroundColor: "#f8f6ed",
        paddingLeft: '7px',
      },
      paperDoc: {
        width: "65vw",
        float: "left",
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: this.state.height,
        backgroundColor: "white",
      },
      backButton: {
        cursor: 'pointer',
        position: 'absolute',
        top: '20px',
        left: 'calc(25% + 20px)',
        textAlign: 'center',
      },
      topButton: {
        cursor: 'pointer',
        position: 'absolute',
        bottom: '10px',
        left: 'calc(25% + 20px)',
        textAlign: 'center',
      },
      paperMap: {
        width: "10vw",
        right: '0',
        marginRight: "0",
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: this.state.height,
        position: 'absolute',
      }
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    ReactDOM.findDOMNode(this.refs.docBody).addEventListener('scroll', this.scrollWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    ReactDOM.findDOMNode(this.refs.docBody).removeEventListener('scroll', this.scrollWindow);
  }

  resize(e) {
    this.setState({height: window.innerHeight - 107})
  }

  scrollWindow() {
    this.setState({scrollTop: ReactDOM.findDOMNode(this.refs.docBody).scrollTop});
  }

  highlightSelectedParagraphs(event, value) {
    this.setState({highlightedIndex: value});
  }

  toggleHightlightedParagraphs() {
    this.setState({showAllParagraphs: !this.state.showAllParagraphs});
  }

  highlightedDocumentIds() {
    if (this.state.highlightedIndex == "search") {
      return this._searchIds;
    } else if (this._topics[this.state.highlightedIndex]) {
      return this._topics[this.state.highlightedIndex];
    }
    return [];
  }

  goBack() {
    this.context.router.goBack()
  }

  goToTop() {
    ReactDOM.findDOMNode(this.refs.docBody).scrollTop = 0;
  }

  doc() {
    return (
        <Document
          documentId={ this.props.parent.id }
          paragraphs={ this.props.children }
          selectedParagraphIds={ this.props.comparedItems }
          highlightedParagraphIds={ this.highlightedDocumentIds() }
          showOnlySelected={ this.state.showAllParagraphs}
        />
    );
  }

  mapClick(screenY){
    ReactDOM.findDOMNode(this.refs.docBody).scrollTop = screenY;
  }

  render() {
    return (
      <Paper style={{ width: '100%', backgroundColor: "inherit" }}>
        <Paper zdepth={ 0 } style={this.styles.paperNav} >
          <DocumentNav
            parent={ this.props.parent }
            showSearch={ (this._searchIds.length > 0)}
            numSearchResults={ this._searchIds.length }
            selectedMenuItem={ this.state.highlightedIndex }
            showSelectedParagraphs={ true }
            listedTopics={ this._topics }
            selectedParagraphClick={ this.highlightSelectedParagraphs.bind(this) }
            toggleOnClick={ this.toggleHightlightedParagraphs.bind(this) }
          />
        </Paper>
        <Paper zdepth={ 0 } style={this.styles.paperDoc} ref='docBody'>
          <div ref='docContent'>
              <div style={{ marginTop: '1em'}} >
                <CopyrightNotification item={ this.props.parent } />
              </div>
            {this.doc()}
          </div>
          <div style={this.styles.backButton} onClick={ this.goBack }>
            <i className="material-icons">arrow_back</i><br/>
          </div>
          <div style={this.styles.topButton} onClick={ this.goToTop }>
            <i className="material-icons">vertical_align_top</i><br/>
            <p>Top</p>
          </div>
        </Paper>
        <Paper zdepth={ 0 } style={this.styles.paperMap}>
          <MiniMap
            onClick={ this.mapClick }
            scrollTop={ this.state.scrollTop }
          >{ this.doc() }</MiniMap>
        </Paper>

      </Paper>
     );
  }
}
DocumentSection.propTypes = {
  baseState: PropTypes.string,
  searchIds: PropTypes.array,
  comparedItems: PropTypes.array,
  parent: PropTypes.object,
  children: PropTypes.array
}

DocumentSection.defaultProps = {
  baseState: 'none',
  searchIds: [],
  comparedItems: [],
  parent: ''
}

DocumentSection.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DocumentSection;
