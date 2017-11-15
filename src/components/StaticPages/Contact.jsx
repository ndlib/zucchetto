'use strict'
import React, { Component } from 'react'
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

class Contact extends Component {

  render () {
    return (
      <div>
        <Header/>
          <div className="row body contact">
          	<div className="col-sm-3 left-col">
          		<Navigation/>
          	</div>
          	<div className="col-sm-9 right-col">
              <h1>Contact Us</h1>
              <h2>We are always interested in hearing from you.</h2>

<p>Our goal is to constantly refine this platform’s capabilities and expand its usefulness. If you have suggestions for helping us achieve this goal – or if you have questions regarding its use – please contact us:
</p>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeZh4J52TYlnTD4WDb7l6WUQO0bH-MEhgCN05uCqPaygHo-9Q/viewform?embedded=true" width="760" height="50%" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
<p>&nbsp;</p>
<p>&nbsp;</p>
              <h2>Problems with the database?</h2>

<p>If you encounter technical malfunctions or content errors, please use our <a href='https://docs.google.com/a/nd.edu/forms/d/e/1FAIpQLSfiRPkyJHcX8FaQZdweNDCclVDWpc30n-qL8Ez8zGcAzV_rmw/viewform' target='_blank'>Report a Problem</a> form, which is always available via the side tab on every page.
            </p>

<h2>The Center for Civil &amp; Human Rights</h2>
<p>2150 Eck Hall of Law  Notre Dame, IN 46556<br/>Phone 574-631-8555   Fax 574-631-8702    <a href="mailto:cchr@nd.edu">cchr@nd.edu</a></p>
<h2>Center for Digital Scholarship</h2>


<p>Hesburgh Library, Notre Dame, IN 46556 <br/>
Phone 574-631-4900 Fax 574-631-6772 <a href="mailto:cds@nd.edu">cds@nd.edu</a> </p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
            </div>
          </div>
        <FooterHome/>
      </div>
    );
  }

}

export default Contact;
