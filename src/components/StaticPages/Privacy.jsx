'use strict'
import React, { Component } from 'react'
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
class Privacy extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="row body">
          	<div className="col-sm-3 left-col">
          		<Navigation/>
          	</div>
          	<div className="col-sm-9 right-col">
        		<h1>Privacy Policy – last modified 21 April 2016</h1>
<p>Your privacy is important to us. This privacy policy (“Policy”) explains how your personal information is collected, used, and disclosed by the Catholic Social Teaching and International Human Rights Comparative Database Project (the “Project”), in the Center for Civil and Human Rights at the University of Notre Dame.</p>

<h2>WHAT INFORMATION DO WE COLLECT?</h2>
<p>We do not ask you to register to use our site and your visit will be anonymous.</p>
<p>We will collect personally identifiable information when you provide it to us (for example if you report an error to us using the relevant form).</p>
<p>The Project uses Google Analytics to gather statistics for portions of the website. The information gathered will be used to improve services for users. Google Analytics uses a browser cookie for statistical analysis related to your browsing behavior on the website. If you choose, you can opt out by turning off cookies in the preferences settings in your browser, or download and install Google Analytics Opt-out Browser Add-on at http://tools.google.com/dlpage/gaoptout. For more information on Google Analytics, please visit <a href="https://www.google.com/analytics/" target="_blank">https://www.google.com/analytics/</a>.</p>

<h2>DO WE USE COOKIES?</h2>
<p>We will use cookies to enhance the functionality of the site.
</p>
<h2>DO WE DISCLOSE ANY INFORMATION TO OUTSIDE PARTIES?</h2>
<p>We do not generally sell, trade, or otherwise transfer personally identifiable information to outside parties. However we may release information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or other’s rights, property, or safety.</p>
<p>Non-personally identifiable visitor information may be provided to other parties for other uses.</p>

<h2>THIRD PARTY LINKS</h2>
<p>At our discretion, we may include links to other websites or offers of other products or services on our website. Any third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>

  <h2>TERMS AND CONDITIONS</h2>
  <p>Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website.</p>
  <h2>YOUR CONSENT</h2>
  <p>By using our site, you consent to our website Privacy Policy and Website Terms.
  </p>
  <h2>CHANGES TO OUR PRIVACY POLICY</h2>
  <p>This policy was last updated on the date shown at the top of this policy. The Project reserves the right to change, modify or amend this policy at will and without notice. We therefore encourage you to review this Policy regularly to inform yourself about how your Personal Information is collected, used and shared by the Project. To the fullest extent allowed under Federal law, your use of our website after the Effective date means that you are subject to the Policy then in effect.</p>

  <h2>CONTACTING US</h2>
  <p>Please contact the Project regarding any privacy concerns or questions you have via <a href="mailto:csthr@nd.edu">email</a>.
  </p>
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

export default Privacy;
