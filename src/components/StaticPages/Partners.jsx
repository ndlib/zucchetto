'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');

var headingStyle = {
  paddingLeft: '1em',
  textAlign: 'left',
}

var Partners = React.createClass({

  render: function() {
    return (
      <div>
        <Header/>
        <div className="row body partners">
        	<div className="col-sm-3 left-col">
        		<Navigation/>
        	</div>
        	<div className="col-sm-9 right-col">
        		<h1>Project Partners</h1>
        		<table>
    			  <tbody>
            <tr><td colSpan='2' style={ headingStyle }><h2>Consultants</h2></td></tr>
    			    <tr>
    			      <td><img alt="University of Notre Dame Law School" src="/resources/images/partners/ndls.png" /></td>
    			      <td><img alt="Kellog Institute for International Studies" src="/resources/images/partners/kiis.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img alt="Boston College" src="/resources/images/partners/bc.png" /></td>
    			      <td><img alt="Center for Social Concerns" src="/resources/images/partners/csc.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img alt="University of Exeter" src="/resources/images/partners/ue.png" /></td>
    			      <td><img alt="Jesuit School of Theology in Berkley" src="/resources/images/partners/jstb.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img alt="Harvard Law School" src="/resources/images/partners/hls.png" /></td>
    			      <td><img alt="Trinity College Dublin" src="/resources/images/partners/tcd.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img alt="University of Michigan Law School" src="/resources/images/partners/mlum.png" /></td>
    			      <td><img alt="The University of Oklahoma College of Law" src="/resources/images/partners/uocl.png" /></td>
    			    </tr>
    			  </tbody>
        </table>

        <table style={{ backgroundColor: '#E4E1D1'}}>
    			  <tbody>
              <tr><td colSpan='2' style={ headingStyle }><h2>Funding</h2></td></tr>
    			    <tr>
    			      <td><img alt="Kroc Institute for International Peace Studies" src="/resources/images/partners/kiips.png" /></td>
    			      <td><img alt="Institute for Scholarship in the Liberal Arts" src="/resources/images/partners/isla.png" /></td>
    			    </tr>
    			  </tbody>
    			</table>
        		<table>
    			  <tbody>
            <tr><td colSpan='2' style={ headingStyle }><h2>Documents</h2></td></tr>
    			    <tr>
    			      <td><img alt="Libreria Editrice Vaticana" src="/resources/images/partners/lev.png" /></td>
    			      <td><img alt="Council of Europe" src="/resources/images/partners/coe.png" /></td>
    			    </tr>
    			    <tr>
                <td><img alt="United Nations" src="/resources/images/partners/un.png" /></td>
    			      <td><img alt="International Labor Organization" src="/resources/images/partners/ilo.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img alt="Organization of American States" src="/resources/images/partners/oas.png" /></td>
                <td><img alt="International Committee of the Red Cross" src="/resources/images/partners/icrc_logo.png" /></td>
    			    </tr>
            <tr>
  			      <td><img alt="African Union" src="/resources/images/partners/au.png" /></td>
              <td>&nbsp;</td>
  			    </tr>
    			  </tbody>
    			</table>
        	</div>
        </div>
        <Footer/>
      </div>
    );
  }

});

module.exports = Partners;
