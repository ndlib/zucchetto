'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');
var TermsOfService = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation/>
          </div>
          <div className="col-sm-9 right-col">
            <h1>Terms and Conditions – last modified 21 April 2016</h1>
            <p>This is the website of: the Catholic Social Teaching and International Human Rights Comparative Database Project (the “Project”), in the Center for Civil and Human Rights at the University of Notre Dame.</p>
            <p>Set out below are the rules that will apply to your use of our website. In using our website you are agreeing to comply with these rules including our Privacy Policy. We may amend the rules at any time by posting the amended rules on our website. All amended rules will apply from the time they are posted on our website. Your continued use of the website signifies your agreement to the terms contained herein at any time.</p>

            <h2>DATA PROTECTION NOTIFICATION</h2>
            <p>The website is operated by the Project. Please see our Privacy Policy for specific information relating to Data Protection.</p>

            <h2>PRIVACY POLICY (COOKIES)</h2>
            <p>We use cookies to enhance the functionality of the site.</p>

            <h2>INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>The content and software on this site is to be used solely for providing information to users of this site.
            You may print material from the Project website for your legitimate purposes, but you may not charge a fee for any use and commercial use is expressly prohibited.</p>

            <h2>DISCLAIMER AND LIMITATION OF LIABILITY</h2>
            <p>Due to the changing nature of the information contained in this website, neither the Project, the University of Notre Dame, nor anyone affiliated with either of them shall be liable for any damage or loss resulting from information accessible via this website not being accurate, complete or current.</p>
            <p>Due to the nature of communications over the Internet and the inherent risks of the transfer of data over the Internet, neither the Project, the University of Notre Dame, nor anyone affiliated with the either of them shall be liable for any damage or loss whatsoever or howsoever resulting from viruses or other forms of malware or the corruption or loss of data or damage to software or hardware.</p>
            <p>While the Project will use reasonable endeavors to minimize any amount of downtime on the website, due to the intrinsic nature of websites, neither the Project, the University of Notre Dame, nor anyone affiliated with the either of them shall be liable for any damage or loss whatsoever resulting from your being unable to access the website.</p>
            <p>Without prejudice to the above, neither the Project, the University of Notre Dame, nor anyone affiliated with either of them shall be liable for any direct, indirect, special or consequential losses or damages whatsoever, howsoever arising (including but not limited to loss of business, loss of opportunity, loss of sale, loss of goodwill, loss of profits or increased costs).</p>
            <p>The disclaimers set out above do not affect or prejudice any other Project or University of Notre Dame disclaimers or exclusions relating to this website (whether or not contained in these terms).</p>

            <h2>TERMINATION </h2>
            <p>The Project may deny access to to any user or suspend or terminate any of the services offered herein, or delete the website at any time in its sole discretion.</p>

            <h2>HYPERLINKS</h2>
            <p>The Project website may provide hyperlinks to other websites. The Project is not responsible for the availability of such other websites and does not endorse, and is not responsible or liable for any content, products or other materials available on such other websites.</p>

            <h2>GENERAL</h2>
            <p>Any waiver or amendment of any of these rules will be effective only if signed by an authorized representative of the University of Notre Dame, and the failure of the Project or the University of Notre Dame to exercise or enforce any rule shall not constitute a waiver of such right or provision. The Project reserves the right to make changes to this website and these rules at any time in its sole discretion.</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
          </div>
        </div>
        <FooterHome/>
      </div>
    );
  }

});

export default TermsOfService;
