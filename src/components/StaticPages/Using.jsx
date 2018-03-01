'use strict'
import React, { Component } from 'react'
var Navigation = require('../StaticAssets/Navigation.jsx');
var Header = require('../StaticAssets/Header.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
class Using extends Component{

  render() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col info-page">
          <h1>How To Use the Database</h1>
          <div className="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/czl3Qhjk9PE" frameBorder="0" allowFullScreen></iframe></div>
          <h2>User Guide</h2>
          <p>This guide is intended as a brief introduction to the Convocate platform. It will help
familiarize the researcher with main features and provide instructions for performing
basic searches. To fully appreciate the power of Convocate, we recommend working
through the User’s Guide first, then exploring the database on your own.</p>
          <p><a href='https://drive.google.com/file/d/1qntwMEWgYZYg5xl1t1RvkzKuMwPEMBlX/view' target='_blank'>Convocate User Guide</a> <small><i>(Right click and select 'Save as...' to download.)</i></small></p>
          <h2>FAQ</h2>

<ul>
<li><a href="#1">What is Catholic Social Teaching?</a></li>
<li><a href="#2">What is the scope of documents included in this database?</a></li>
<li><a href="#3">What is the metadata of a document?</a></li>
<li><a href="#4">What is meant by relevance?</a></li>
<li><a href="#5">How do I use the Share / Save option?</a></li>
<li><a href="#6">What does a particular topic mean?</a></li>
<li><a href="#7">Where is my keyword / topic in the text?</a></li>
<li><a href="#8">How do I compare documents?</a></li>
<li><a href="#9">How were paragraphs / articles tagged?</a></li>
<li><a href="#10">How do I search by topic? / What happens when I search by topic?</a></li>
<li><a href="#11">How do I search by keyword? / What happens when I search by keyword?</a></li>
<li><a href="#12">How do I search by topic AND keyword? / What happens when I search by topic AND by keyword?</a></li>
<li><a href="#13">How do I edit my original search?</a></li>
</ul>


          <p><strong><a name="1"></a>What is Catholic Social Teaching?</strong></p>
<p>Catholic social teaching includes statements issued from the teaching authority of the Catholic Church on a myriad of social issues. These statements interpret social issues and provide guidance on response to these situations based on the truth that God has revealed to about Himself.
</p>
<p><strong><a name="2"></a>What is the scope of documents included in this database?</strong></p>
<p>The documents in this database are documents of Catholic social teaching and international human rights law. We are continually seeking to update the database with more documents. If there are documents you would like to see added that fall under one of the two main categories please feel free to contact us from the “Contact Us” page.
</p>
<p><strong><a name="3"></a>What is the metadata of a document?</strong></p>
<p>The metadata of a document is all of the information about a particular document. This includes all of the tags that have been added to each paragraph about the content of the paragraph. The metadata includes tags related to the topic list but can also include tags for specific people, places, organizations, and documents.
</p>
<p><strong><a name="4"></a>What is meant by relevance?</strong></p>
<p>By default, Convocate will sort results by Relevance. This means that the document with the single most relevant paragraph will appear at the top of the list. Within this document, paragraphs will be returned in order from the most relevant to the least relevant. The next document returned will be the document with the next most relevant paragraph, not considering any paragraphs from the first document.
</p><p>The most relevant paragraph is determined by the SOLR search engine of the database. When searching for multiple topics or keywords, SOLR takes into account both the number of different topics that all appear in the same paragraph and the number of times particular words appear in the text. Although rare, this means that it is possible for a paragraph with less of the chosen topics but more instances of a particular word to be considered more relevant to your search than a paragraph with more of the chosen topics.
</p>
<p><strong><a name="5"></a>How do I use the Share / Save option?</strong></p>
<p>You may save the contents of your comparison for later retrieval, or to share with others. At the top of the comparison frame, click Share/Save. A pop-up window will offer to copy a link into your clipboard, which you may then copy into an email. This link will take anyone directly to Convocate’s comparison frame, populated with the documents that you have chosen and the related highlighted paragraphs.
</p><p>Note: Save/Share preserves only the contents of your comparison – all those paragraphs chosen to send to the comparison frame. It does not save your search parameters. It also does not preserve the particular documents you had opened side-by-side when you clicked the Share/Save button.
</p>
<p><strong><a name="6"></a>What does a particular topic mean?</strong></p>
<p>Each topic of the topic list has a range of possibilities of meanings depending on how restrictive or open the topic is applied to each individual paragraph. A summary of the particular topics and how they were applied to individual paragraphs is available at <a href="https://humanrights.nd.edu/research/csthr-topic-list/" target="_blank">this link</a>.
</p>
<p><strong><a name="7"></a>Where is my keyword / topic in the text?</strong></p>
<p>You will not necessarily find the exact keyword or topic in the text of the returned paragraphs. This is because Convocate searches paragraphs that have been tagged, and these tags have been applied when the text relates to the topic, even if the exact word or phrase is not found within the text. The topic list searches for concepts, not language.
</p>
<p><strong><a name="8"></a>How do I compare documents?</strong></p>
<p>Under the title of each returned document, Convocate will indicate the number of results in the document (the number of relevant paragraphs). Clicking this link will open up a view of those paragraphs. They can then be reviewed and chosen for comparison by clicking Compare. Alternatively, the user may click Compare All to choose all paragraphs in the document.
</p><p>When a paragraph is chosen for comparison, this will be indicated in a pop-up notification at the bottom of the page. It will also be indicated at the top of the page – the Compare Paragraphs button will turn gold and the number of paragraphs chosen will be indicated there. When all results have been chosen for comparison, click the gold Compare Paragraphs button at the top of the screen. Convocate will advance to the comparison frame.
</p><p>Please note that this is a research tool – it helps those interested in comparison work by bringing together documents in one platform and returning search results that might not easily be found through traditional word searches. The deeper analysis of the texts is left to the researcher.
</p>
<p><strong><a name="9"></a>How were paragraphs / articles tagged?</strong></p>
<p>The first core documents of the database were originally tagged by hand by scholars from the fields of human rights and Catholic theology. Each paragraph was analyzed for its content and tagged for the topics which were found within the paragraph. Each topic of the topic list has a range of possibilities of meanings depending on how restrictive or open the topic is applied to each individual paragraph. A summary of the particular topics and how they were applied to individual paragraphs is available at this link.
</p>

<p>After the initial first round of tagging, natural language processing techniques were utilized to classify newly added texts. Parameters were set in order to tag a wider range of paragraphs. This process yields false positives but is intended to capture those paragraphs that scholars may otherwise miss. Please feel free to provide feedback via the Report Error button and Contact Us page especially for any false positives as we continue to improve our tagging accuracy.
</p>
<p><strong><a name="10"></a>How do I search by topic? / What happens when I search by topic?</strong></p>
<p>Convocate’s Topic List is composed of predetermined topics categorized into four main sections: Actors, Harms and Violations, Rights and Freedoms, and Principles and Values. Multiple topics may be selected at the same time. The search engine uses the “OR” Boolean to search the database – any document that deals with any of the selected topics will be returned. The document containing the paragraph most relevant to the search will be listed first, followed by the document containing the paragraph of second most relevance, etc.
</p><p>Using the Topic List to search the database only returns those texts that have been tagged with the corresponding topics. These tags have been applied either manually by scholars or via various methods of computer classification. It is important to note that tags have been applied when the text relates to the topic, even if the exact word or phrase is not found within the text. The topic list searches for concepts, not language.
</p>
<p><strong><a name="11"></a>How do I search by keyword? / What happens when I search by keyword?</strong></p>
<p>Keywords or phrases can be entered into the Keyword Search bar. This search method will look at all document data (text and metadata) for specific words and phrases (also common synonyms and alternate spellings). Using quotation marks will force the search engine to look for an exact match. When quotation marks are not used, the search engine will stem the word in order to return more results. For example, if the researcher enters children, document data that contains the word child will also be returned. The keyword search accepts a full range of Boolean modifiers.
</p>
<p><strong><a name="12"></a>How do I search by topic AND keyword? / What happens when I search by topic AND by keyword?</strong></p>
<p>Topic and Keyword searches can be combined for focused results. Combining the two search methods will return documents containing the specified topic(s), then eliminate all that do not also contain the specified keyword in either the text of the document or the document’s metadata.
</p>
<p><strong><a name="13"></a>How do I edit my original search?</strong></p>
<p>You may change or refine your search at any time during comparison. To change search parameters, use the Back To Search link at the top of the comparison frame. Your original search will still be active, and you may adjust it before returning to the comparison frame.
</p><p>Note: Do NOT use your browser’s back arrows to return to the search panel, and do NOT use Convocate’s main menu (upper left corner). Either of these methods will result in loss of your search parameters. Always use the Back To Search link.
</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
         {/* <h2>Getting Started: Choosing a Search Method</h2>
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
*/}
        </div>
      </div>
      <FooterHome/>
    </div>
    );
  }

}

export default Using;
