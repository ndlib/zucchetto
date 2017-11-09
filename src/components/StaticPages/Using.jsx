'use strict'
var React = require('react');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Header = require('../StaticAssets/Header.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
var Using = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col info-page">
          <h1>How To Use the Database</h1>
          <h2>Getting Started: Choosing a Search Method</h2>
         <p>There are two ways to search the database: by <strong>Topic</strong> and by <strong>Keyword</strong>. These two methods can be performed independently or in combination with one another. A description of each type of search is given below.</p>
        <h3>Search by Topic</h3>

<p>        <em>Convocate</em>’s Topic List is found on the left side of the screen. The list is composed of predetermined topics categorized into four main sections: Actors, Harms and Violations, Rights and Freedoms, and Principles and Values. You may choose as many topics as you want. The search engine uses the “OR” Boolean to search the database – any document that deals with any of the selected topics will be returned. Those results that have a greater instance of selected topics will be returned at a higher relevancy.</p>
<p>Using the Topic List to search the database only returns those texts that have been tagged with the corresponding topics. These tags have been applied either manually by scholars or via various methods of computer classification. Further details on the use of terms and computer generated classification can be found here.</p>
<p>It is important to note that tags have been applied when the text relates to the topic, even if the exact word or phrase is not found within the text. The topic list searches for concepts, not language.
</p>
<h3>Search by Keyword</h3>

<p>You can input any keyword or phrase in the keyword search bar. This search method will look at both the tags associated with the text and the text itself for particular words/phrases. When searching the actual text, a keyword search will always include the word or phrase entered. Using quotations will force the search engine to look for an exact match in the text. When quotations are not used, the search engine will stem the word in order to return more results. For example, if you search for “children,” texts that also contain the word “child” will be returned. Because the search engine also searches the tags associated with the texts, texts may be returned that do not contain the searched word or phrase. For example, if you search for “subsidiarity” and a paragraph has been tagged with subsidiarity but does not include that word, the paragraph will be returned. 
</p><p>The keyword search accepts a full range of Boolean modifiers.</p>
<h3>Browse the Document Index</h3>
<p>The Index of Documents contains a list of all documents in the database, listed alphabetically first by source and then by title. Each document title is a link to the full text of the document. For more on reviewing full texts, see “In-Depth Document Analysis.”
</p>

<h2>Advanced Searching</h2>
<h3>Combining the Topic Search and Keyword Search</h3>
<p>You can combine the topic list and keywords to perform a search. While choosing more topics will return more results because of the “OR” Boolean, combining the topic list with the keyword will narrow your search to include only the overlap of the topics with the keyword. In other words, an “AND” Boolean is used to combine the topic list and keyword search.</p>
        <h3>Applying Filters</h3>
      <p>Whether using a topic list search or a keyword search (or a combination), advanced filers are available to refine results. After entering search criteria, click the Filters button on the right end of the Keyword Search bar. The following filters are available:</p>
      <p><strong>Date Range:</strong> use the sliders to narrow your results</p>
      <p><strong>Document Type:</strong> choose the desired category (or categories) of document (choices are specific to CST and IHRL)</p>
      <p><strong>Document Source:</strong> choose the desired source (or sources) of documents (choices are specific to CST and IHRL)</p>
      <h2>Reviewing Search Results</h2>
      <h3>Sorting Search Results</h3>
      <p>By default, <em>Convocate</em> will sort results by <strong>Relevance</strong>. This means that the document with the single most relevant paragraph will appear at the top of the list, followed by the document with the second most relevant paragraph, and so on.</p>
      <p>Other sorting options include:</p>
      <p><strong>Date New-Old</strong> and <strong>Date Old-New</strong> sort by document date</p>
      <p><strong>Name A-Z</strong> and <strong>Name Z-A</strong> sort alphabetically by document title</p>
      <p><strong># of Results</strong> sorts by the number of relevant paragraphs in a document, with the greatest number appearing at the top of the list. Unlike sorting by <strong>Relevance</strong>, the single most relevant paragraph may not be at the top of the list.</p>

      <h3>Reviewing/Choosing Relevant Paragraphs</h3>

      <p>Under the title of each returned document, <em>Convocate</em> will indicate the number of results in the document (the number of relevant paragraphs). Clicking this link will open up a view of those paragraphs. They can then be reviewed and chosen for comparison, if desired, by clicking <strong>Compare</strong>. Alternatively, the user may click <strong>Compare All</strong> to choose all paragraphs in the document.</p>
      <p>When a paragraph is chosen for comparison, this will be indicated in a pop-up notification at the bottom of the page. It will also be indicated at the top of the page – the <strong>Compare Paragraphs</strong> button will turn gold and the number of paragraphs chosen will be indicated there.</p>

      <h3>Clearing Chosen Paragraphs</h3>
      <p>To clear your choices, click the red <strong>Clear All</strong> button at the top of the screen. This will not affect your results, it will only deselect all paragraphs for comparison.</p>

      <h3>Moving to Comparison Page</h3>
      <p>When all results have been chosen for comparison, click the gold <strong>Compare Paragraphs</strong> button at the top of the screen. <em>Convocate</em> will advance to the comparison frame.</p>

      <h2>Comparing Texts</h2>

      <h3>Choosing Documents to Compare</h3>
      <p>In the comparison frame, all chosen documents will be listed on the left side of the screen, categorized according to discipline. Note that this list includes documents, not individual paragraphs. You can examine individual paragraphs during comparison.</p>
      <p>To begin comparison, choose any document from the list. It will appear on the left side of the main screen. Choosing a second document will place that document on the right side of the screen. The documents are now ready for comparison.</p>
      <p> At any point, you may deselect a document from the list and choose another. You are not required to select documents from both disciplines; you may choose any two documents for comparison.</p>
  
      <h3>Navigating within the Documents</h3>
      <p>In the navigation frame you have access to the full text of the chosen document, so that you may examine the relevant paragraphs in context. To facilitate navigation, at the top of each document there is a <strong>Go To Selected Paragraph</strong> drop down menu. Use this menu to jump directly to paragraphs that were chosen for comparison. Relevant paragraphs are highlighted in blue.</p>

      <h3>Adjusting Search Parameters</h3>
      <p>You may change or refine your search at any time during comparison. To change search parameters, use the <strong>Back To Search</strong> link at the top of the comparison frame. Your original search will still be active, and you may adjust it before returning to the comparison frame.</p>
      <p>Note: Do NOT use your browser’s back arrows to return to the search panel, and do NOT use <em>Convocate’s</em> main menu (upper left corner). Either of these methods will result in loss of your search parameters. Always use the <strong>Back To Search</strong> link.</p>

      <h3>Removing Documents</h3>
      <p>You may remove documents from the list during comparison. To remove documents, use the <strong>Remove Documents</strong> link at the top of the comparison frame. A pop-up menu will offer you a list of documents to remove by clicking its trash can icon.</p>
      <p>Clicking <strong>Clear All</strong> will remove all documents from the comparison frame. Your search parameters will remain intact, however, and can be accessed with the <strong>Back To Search</strong> link as explained above.</p>

      <h3>Sharing/Saving Results</h3>
      <p>You may save the contents of your comparison for later retrieval, or to share with others. At the top of the comparison frame, click <strong>Share/Save</strong>. A pop-up window will offer to copy a link into your clipboard, which you may then copy into an email. This link will take anyone directly to <em>Convocate’s</em> comparison frame, populated with the documents that you have chosen.</p>
      <p>Note: <strong>Save/Share</strong> preserves only the contents of your comparison. It does not save your search parameters. </p>
  
      <h2>In-Depth Document Analysis</h2>
      <p><em>Convocate</em> offers a number of exceptional features for review of individual documents, making it an ideal platform for in-depth analysis in either discipline. The features below apply to the examination of individual documents apart from the comparison function.</p>
      <p>To access a document’s full text and expanded analysis tools, click on the title from either the Index of Documents, the Search page, or the comparison frame. The document will open in a new screen.</p>

      <h3>Other Topics in the Document</h3>
      <p>Along the left side of the screen there is a list of all topics identified in the document (these are the tags used by topic list). The number of paragraphs tagged with that topic is also noted. Clicking any of these topics highlights the relevant paragraphs in the document.</p>
      <p>Along the right side of the screen there is a “map” of the entire document. This allows you to quickly locate the highlighted paragraphs and navigate to them.</p>

      <h3>Only Show Highlighted Paragraphs</h3>
      <p>By default <em>Convocate</em> will display the full text of the document. You may display only highlighted paragraphs by using the <strong>Only Show Highlighted Paragraphs</strong> toggle in the upper left corner of the screen.</p>

      <h3>Document Information</h3>
      <p>Full bibliographic information for each document is available in the <strong>Information</strong> link at the top of the screen.</p>

      <h3>PDF of the Document</h3>
      <p>A PDF version of the document is available in the <strong>View PDF </strong>link at the top of the screen. At this time, the PDF will either be a native PDF within <em>Convocate</em> or a link to the source PDF from the original repository.</p>

        </div>
      </div>
      <FooterHome/>
    </div>
    );
  }

});

export default Using;
