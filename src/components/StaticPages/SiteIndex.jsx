'use strict'
var React = require('react');

var SiteIndex = React.createClass({

  render: function() {
    return (
      <div>
      	<header>
      		<div className="row">
      			<div className="col-md-8">
      				<h1>Research Database</h1>
      				<p className="tagline">A CROSS-COMPARISON OF CATHOLIC SOCIAL TEACHING AND INTERNATIONAL HUMAN RIGHTS LAW</p>
      			</div>
  				<div className="col-md-4 right">
  					<img src="/resources/images/cchr.png" className="cchr" />
      				<img src="/resources/images/cds.png" className="cds" />
  				</div>
      		</div>
      	</header>
      	<div className="row body">
      		<div className="col-sm-4 left-col">
      			<nav>
      				<ul>
      					<li>
      						<a href="about">About the Database</a>
      					</li>
      					<li>
      						<a href="partners">Project Partners</a>
      					</li>
      					<li>
      						<a href="Contact">Contact Us</a>
      					</li>
      				</ul>
      			</nav>
      		</div>
      		<div className="col-sm-8 right-col">
      			<section className="content">
        		<h1>Index Page</h1>
        		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        		</section>
      		</div>
      	</div>


      	<footer>
      		<div className="row">
      			<div className="col-sm-8">
      				<img src="/resources/images/cchr.png" />
      				<img src="/resources/images/cds.png" />
      				<nav>
      					<ul>
      				    	<li>
      						<a href="about">About the Database</a>
      					</li>
      					<li>
      						<a href="partners">Project Partners</a>
      					</li>
      					<li>
      						<a href="Contact">Contact Us</a>
      					</li>
      				    </ul>
      				</nav>
      			</div>
      			<div className="col-sm-4 right">
      				<img src="/resources/images/und.png" />
      			</div>
      		</div>

      	</footer>
      	
      </div>
    );
  }

});

module.exports = SiteIndex;
