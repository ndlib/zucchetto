'use strict'
var React = require('react');
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');

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
        		<h2>Consultants</h2>
        		<table>
    			  <tbody>
    			    <tr>
    			      <td><img src="/resources/images/partners/ndls.png" /></td>
    			      <td><img src="/resources/images/partners/kiis.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/bc.png" /></td>
    			      <td><img src="/resources/images/partners/csc.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/ue.png" /></td>
    			      <td><img src="/resources/images/partners/jstb.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/hls.png" /></td>
    			      <td><img src="/resources/images/partners/tcd.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/mlum.png" /></td>
    			      <td><img src="/resources/images/partners/uocl.png" /></td>
    			    </tr>
    			  </tbody>
    			</table>
        		<h2>Funding</h2>
        		<table>
    			  <tbody>
    			    <tr>
    			      <td><img src="/resources/images/partners/kiips.png" /></td>
    			      <td><img src="/resources/images/partners/isla.png" /></td>
    			    </tr>
    			  </tbody>
    			</table>
        		<h2>Documents</h2>
        		<table>
    			  <tbody>
    			    <tr>
    			      <td><img src="/resources/images/partners/lev.png" /></td>
    			      <td><img src="/resources/images/partners/eu.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/au.png" /></td>
    			      <td><img src="/resources/images/partners/ilo.png" /></td>
    			    </tr>
    			    <tr>
    			      <td><img src="/resources/images/partners/un.png" /></td>
    			      <td><img src="/resources/images/partners/oas.png" /></td>
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
