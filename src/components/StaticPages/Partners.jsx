'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var FooterHome = require('../StaticAssets/FooterHome.jsx');

var headingStyle = {
  paddingLeft: '1em',
  textAlign: 'left',
}

class Partners extends Component {

  render() {
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
    			      <td><Link to='http://law.nd.edu/' target='_blank'><img alt="University of Notre Dame Law School" src="/resources/images/partners/ndls.png" /></Link></td>
    			      <td><Link to='http://kellogg.nd.edu/' target='_blank'><img alt="Kellog Institute for International Studies" src="/resources/images/partners/kiis.png" /></Link></td>
    			    </tr>
    			    <tr>
    			      <td><Link to='http://www.bc.edu/' target='_blank'><img alt="Boston College" src="/resources/images/partners/bc.png" /></Link></td>
    			      <td><Link to='http://socialconcerns.nd.edu/' target='_blank'><img alt="Center for Social Concerns" src="/resources/images/partners/csc.png" /></Link></td>
    			    </tr>
    			    <tr>
    			      <td><Link to='http://www.exeter.ac.uk/' target='_blank'><img alt="University of Exeter" src="/resources/images/partners/ue.png" /></Link></td>
    			      <td><Link to='https://www.scu.edu/jst/' target='_blank'><img alt="Jesuit School of Theology in Berkley" src="/resources/images/partners/jstb.png" /></Link></td>
    			    </tr>
    			    <tr>
    			      <td><Link to='http://hls.harvard.edu/' target='_blank'><img alt="Harvard Law School" src="/resources/images/partners/hls.png" /></Link></td>
    			      <td><Link to='https://www.tcd.ie/' target='_blank'><img alt="Trinity College Dublin" src="/resources/images/partners/tcd.png" /></Link></td>
    			    </tr>
    			    <tr>
    			      <td><Link to='https://www.law.umich.edu/Pages/default.aspx' target='_blank'><img alt="University of Michigan Law School" src="/resources/images/partners/mlum.png" /></Link></td>
    			      <td><Link to='http://www.law.ou.edu/' target='_blank'><img alt="The University of Oklahoma College of Law" src="/resources/images/partners/uocl.png" /></Link></td>
    			    </tr>
    			  </tbody>
        </table>

        <table style={{ backgroundColor: '#E4E1D1'}}>
    			  <tbody>
              <tr><td colSpan='2' style={ headingStyle }><h2>Funding</h2></td></tr>
    			    <tr>
    			      <td><Link to='http://kroc.nd.edu/' target='_blank'><img alt="Kroc Institute for International Peace Studies" src="/resources/images/partners/kiips.png" /></Link></td>
    			      <td><Link to='http://isla.nd.edu/' target='_blank'><img alt="Institute for Scholarship in the Liberal Arts" src="/resources/images/partners/isla.png" /></Link></td>
    			    </tr>
    			  </tbody>
    			</table>
        		<table>
    			  <tbody>
            <tr><td colSpan='2' style={ headingStyle }><h2>Documents</h2></td></tr>
    			    <tr>
    			      <td><Link to='http://w2.vatican.va/content/vatican/en.html' target='_blank'><img alt="Libreria Editrice Vaticana" src="/resources/images/partners/lev.png" /></Link></td>
    			      <td><Link to='http://www.coe.int/en/web/conventions/' target='_blank'><img alt="Council of Europe" src="/resources/images/partners/coe.png" /></Link></td>
    			    </tr>
    			    <tr>
                <td><Link to='http://www.un.org/en/index.html' target='_blank'><img alt="United Nations" src="/resources/images/partners/un.png" /></Link></td>
    			      <td><Link to='http://www.ilo.org/global/lang--en/index.htm' target='_blank'><img alt="International Labor Organization" src="/resources/images/partners/ilo.png" /></Link></td>
    			    </tr>
    			    <tr>
    			      <td><Link to='http://www.oas.org/en/default.asp' target='_blank'><img alt="Organization of American States" src="/resources/images/partners/oas.png" /></Link></td>
                <td><Link to='https://www.icrc.org/' target='_blank'><img alt="International Committee of the Red Cross" src="/resources/images/partners/icrc_logo.png" /></Link></td>
    			    </tr>
            <tr>
  			      <td><Link to='http://www.au.int/' target='_blank'><img alt="African Union" src="/resources/images/partners/au.png" /></Link></td>
              <td>&nbsp;</td>
  			    </tr>
    			  </tbody>
    			</table>
        	</div>
        </div>
        <FooterHome/>
      </div>
    );
  }

}

export default Partners;
