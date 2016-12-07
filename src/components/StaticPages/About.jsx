'use strict'
var React = require('react');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Header = require('../StaticAssets/Header.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
var About = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col info-page">
          <h1>About the Database</h1>
           <h2>Purpose</h2>
          <p>This database is a research tool for investigating the connections between international human rights and Catholic social teaching. It searches theological and legal documents simultaneously, returning results in such a way that users are able to compare these bodies of thought side by side.</p>
<p>While the main focus is comparative research, the database also serves as an unparalleled resource for those interested more generally in documents from one or the other domain.</p>
<h2>History</h2>
<p>The concept for this comparative database arose at the University of Notre Dame from an intellectual interest in the overlap of Catholic social teaching and international human rights law, and the recognized need for such a comparative resource. Notre Dame faculty, in dialogue with Catholic Church actors, found widespread support and excitement for a tool that would bring the fields of international human rights and Catholic social teaching into dialogue.
</p>
<p>With input from numerous community members and students, the database began to take shape. It was developed by the Center for Civil and Human Rights, in collaboration with the Center for Digital Scholarship and the Web and Software Engineering Team of the Hesburgh Libraries of the University of Notre Dame. The project was formally launched in April 2016.
</p>

<h2>Innovative Research
</h2>
<p>This platform is a cutting edge research tool, providing much more than a mere repository of documents. In addition to paralleled searching and a side-by-side display that allows for easy comparison between two different sets of documents, the database content is parsed into granular components. Search results are returned at the paragraph level, enabling users to retrieve more specified results within a document. Users also have the option of viewing the pertinent paragraphs within the full context of the document.
</p>
<p>Users may notice that no terms are highlighted in the returned paragraphs. This is because the texts have been analyzed so that paragraphs about a particular concept are returned even if a term is not explicitly used in the paragraph. This is further explained below and in “How to Use the Database.”
</p>

<h2>The Topic List</h2>
<p>A user may search the database via the topic list found on the left side of the screen. This topic list was created through extensive collaboration with experts in the field. While we acknowledge that this list does not include every topic of potential interest, we attempt to be as inclusive as possible. In addition, it is important to note that the terminology utilized for the topic list was generated with a view to the particular documents within the database, and in hopes of being accessible to the broadest audience possible.
</p>
<p>Specific topics are not highlighted within the text of the search results. This is because the exact language associated with the topic may or may not be used in the text; rather, it is the general concept that is being identified. Relying on the topic list, therefore, should give better search results than a keyword search (which will simply search for the stem of the word and common synonyms).
</p>
<p>Every paragraph of each document was classified. Due to the large number of paragraphs and the length of the topic list, a small percentage were classified manually and the rest were classified via machine learning and text analysis tools. We welcome feedback either through the “Report a Problem” button or the feedback form on the “Contact Us” page as we are continually refining document classification.
</p>

<h2>Content</h2>
<p>Currently the database houses 31 Catholic social teaching documents and 108 international legal documents. The Catholic social teaching documents are all from the Vatican. They include encyclicals and apostolic exhortations, among others. The legal documents are mostly declarations, conventions, and protocols, from the United Nations, the International Labour Organization, the International Committee of the Red Cross, the African Union, the Council of Europe, and the Organization of American States. As work on the database continues, the number and range of documents will increase. Please check back on this page or the “Index of Documents” to find an updated record of documents. Furthermore, please feel free to contact us via email (<a href="mailto:csthr@nd.edu">csthr@nd.edu</a>) or the “Project Feedback” button to suggest other documents to add to the database.
</p>

<h3>Center for Civil and Human Rights
</h3>
<p><a href="http://humanrights.nd.edu/">The Center for Civil and Human Rights (CCHR)</a> was founded at Notre Dame in 1973 by Rev. Theodore M. Hesburgh, C.S.C., as a center for civil rights education and advocacy. CCHR soon expanded its mission to address the dignity of all people. It now educates human rights lawyers from across the globe, largely from regions in which such training is desperately needed and for which these advocates have no other resource. In addition, CCHR engages in a broad range of programmatic and research activities, designed to enlighten and inform the public on pressing civil and human rights issues.
</p>
<p>CCHR is a constituent part of the <a href="http://keough.nd.edu/">Keough School of Global Affairs</a>, whose mission is to develop highly skilled, ethical leaders in the promotion of integral human development - a positive vision of human flourishing articulated in modern Catholic social teaching and shared by several other religious and humanistic traditions.
</p>

<h3>Center for Digital Scholarship</h3>
<p><a href="http://library.nd.edu/cds/">The Center for Digital Scholarship (CDS)</a> is a part of the Hesburgh Libraries of the University of Notre Dame. The CDS leverages state-of-the art technologies, enabling students and faculty to explore new methodologies, analyze complex data, and share research results in ways never before possible. With established partnerships campus-wide, the Center for Digital Scholarship serves as a “hub” that enhances the teaching, learning, and research process in every academic discipline. CDS empowers and equips the next generation of scientists and scholars to create new knowledge in a digital environment and make a more profound impact in the world.
        </p>        </div>
      </div>
      <FooterHome/>
    </div>
    );
  }

});

module.exports = About;
