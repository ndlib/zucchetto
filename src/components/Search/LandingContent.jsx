'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TokenSearchBox from './TokenSearchBox.jsx';
class LandingContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  var height = window.innerHeight - 51;
    return (
      <div className="col-sm-12" style={{ paddingRight: "0" }}>
        <div className="col-sm-10" style={{ display: "inline-block", width: "45%" }}>
          <div style={{ display: "inline-block", paddingTop: "15px" }}>
            <h1>Search By Keyword</h1>
            <TokenSearchBox />
            <hr/>
            <div style={{margin: '20px auto'}}>
              <h1>
                <Link to="/documents" style={{color: "#224048"}}>
                  Browse the Document Index <i className="glyphicon glyphicon-circle-arrow-right" style={{ top: "5px" }} />
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-sm-5 instructions" style={{ height: height, width: '55%' }}>
          <h2>Getting started: choose a search method</h2>
          <h3>Keyword search</h3>
          <p>Use <strong>keyword search</strong> to locate all documents containing a specific word or words. Results will be broad and inclusive.</p>
          <p>If you combine multiple keywords in a search, the results will include documents containing combinations of keywords <strong>AND</strong> documents containing any one of the keywords.</p>

          <h3>Topic search</h3>
          <p>Use <strong>topic search</strong> to locate all documents that include discussion of a specific topic. Results will be more focused than keyword search.</p>
          <p>You may choose multiple topics in a single search. Results will contain documents that discuss any combination of the selected topics <strong>AND</strong> documents that discuss any one of the topics.</p>

          <h3>Combined keyword and topic search</h3>
          <p>For a more narrowly focused search, select a topic <strong>AND</strong> enter a keyword. Results will include only documents that discuss the selected topic and contain the selected keyword.</p>

          <h3>Search the document index</h3>
          <p>If you know the name of the document you want to review, find it quickly in the document index.</p>
        </div>
      </div>
    );
  }
}

export default LandingContent;
