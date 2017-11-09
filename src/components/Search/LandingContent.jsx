'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router';
import SearchBox from './SearchBox.jsx';
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
            <SearchBox />
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
        <div className="col-sm-5 instructions" style={{ minHeight: "calc(100vh - 50px)", width: '55%', zIndex: '20' }}>
          <h2>Getting started: Choose a Search Method</h2>
<h3>          Search By Topic
</h3><p>Use “Search By Topic” to find all documents that include discussion of a specific topic. Choosing from the topic list will return results based on computer-learning algorithms that identify relevant content, regardless of specific language.
</p><p>You may choose multiple topics in a single search. Results will contain documents that discuss any combination of the selected topics AND documents that discuss any one of the topics.
          </p>

         <h3> Search By Keyword</h3>
<p>Use “Search by Keyword” to return all documents containing a specific word or words and common synonyms. While specific, the keyword search can potentially return results that may not be relevant.
</p><p>If you combine multiple keywords in a search, the results will include documents containing combinations of keywords AND documents containing any one of the keywords.
          </p>


<h3>Combined keyword and topic search</h3>
<p>For a more narrowly focused search, select a topic AND enter a keyword. Results will include only documents that discuss the selected topic and contain the selected keyword or common synonym.
          </p>


          <h3>Browse the Document Index</h3>
<p>If you know the name of the document you want to review, find it quickly in the document index.
        </p>        </div>
      </div>
    );
  }
}

export default LandingContent;
