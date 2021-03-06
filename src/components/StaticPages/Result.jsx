'use strict'
import React, { Component } from 'react'
var Header = require('../StaticAssets/Header.jsx');
var Navigation = require('../StaticAssets/Navigation.jsx');
var Footer = require('../StaticAssets/Footer.jsx');

class Result extends Component{

  render() {
    return (
      <div>
      	<Header/>
      	<div className="row body">
      		<div className="col-sm-3 left-col">
            <div className="search">
              <form>
                <input type="text" placeholder="Search the Database" /> <span className="glyphicon glyphicon-search"></span>
              </form>
            </div>
            <h2>Search by Topic</h2>
      			<nav className="filter">
      				<ul>
      					<li>
      						<a href="#">Values</a><input type="checkbox" />
      					</li>
      					<li>
      						<a href="#">Groups of People</a><input type="checkbox" />
      					</li>
      					<li>
      						<a href="#" className="open">Rights/Freedoms</a><input type="checkbox" />
                  <ul><li><a href="#">Sub Topic</a><input type="checkbox" /></li></ul>
      					</li>
      				</ul>
      			</nav>
            <h2>Search by Date</h2>
            <div className="form-group col-md-6">
              <label for="dateFrom">From</label>
              <input type="text" className="form-control" id="dateFrom" />
            </div>
            <div className="form-group col-md-6">
              <label for="dateTo">To</label>
              <input type="text" className="form-control" id="dateTo" />
            </div>
            <h2>Search by Document Type</h2>
            <nav className="filter">
              <ul>
                <li>
                  <a href="#">Catholic Social Teaching</a>
                </li>
                <li>
                  <a href="#">International Human Rights Law</a>
                </li>
              </ul>
            </nav>
            <h2>Search by Geographic Region</h2>
            <nav className="filter">
              <ul>
                <li>
                  <a href="#">About the Database</a>
                </li>
                <li>
                  <a href="#">Project Partners</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
      		</div>
      		<div className="col-sm-9 right-col">
      			<section className="content results">
        		  <div className="row">
                <div className="helpers">
                  <a href="#" className="left">&laquo; Home</a>
                  <a href="#" className="right"><span className="glyphicon glyphicon-envelope"></span> Share/Save Search Results</a>
                </div>
                <div className="col-sm-6 teaching">
                  <h3>Catholic School Teaching</h3>
                    <article className="result">
                      <h4><a className="open" data-toggle="collapse" href="#firstDocument" aria-expanded="false" aria-controls="firstDocument">Document Title</a></h4>
                      <div className="paragraphNumber">Paragraph 235</div>
                      <div className=" blurb" id="firstDocument">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>
                        <a href="#" className="left">Source of Document</a>
                        <a href="#" className="right">Metadata</a>
                      </p>
                      </div>
                      <hr />
                      <p>
                        <a href="#" className="left">Add to Notebook</a>
                        <a href="#" className="right">Download PDF</a>
                      </p>
                    </article>
                    <article className="result">
                      <h4><a className="open" data-toggle="collapse" href="#firstDocument" aria-expanded="false" aria-controls="firstDocument">Document Title</a></h4>
                      <div className="paragraphNumber">Paragraph 235</div>
                      <div className=" blurb" id="firstDocument">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>
                        <a href="#" className="left">Source of Document</a>
                        <a href="#" className="right">Metadata</a>
                      </p>
                      </div>
                      <hr />
                      <p>
                        <a href="#" className="left">Add to Notebook</a>
                        <a href="#" className="right">Download PDF</a>
                      </p>
                    </article>
                </div>
                <div className="col-sm-6 law">
                  <h3>International Human Rights Law</h3>

                  <article className="result">
                      <h4><a className="closed" data-toggle="collapse" href="#firstDocument" aria-expanded="false" aria-controls="firstDocument">Document Title</a></h4>
                      <div className="paragraphNumber">Paragraph 235</div>
                      <div className="collapse blurb" id="firstDocument">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>
                        <a href="#" className="left">Source of Document</a>
                        <a href="#" className="right">Metadata</a>
                      </p>
                      </div>
                      <hr />
                      <p>
                        <a href="#" className="left">Add to Notebook</a>
                        <a href="#" className="right">Download PDF</a>
                      </p>
                    </article>
                    <article className="result">
                      <h4><a className="closed" data-toggle="collapse" href="#firstDocument" aria-expanded="false" aria-controls="firstDocument">Document Title</a></h4>
                      <div className="paragraphNumber">Paragraph 235</div>
                      <div className="collapse blurb" id="firstDocument">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>
                        <a href="#" className="left">Source of Document</a>
                        <a href="#" className="right">Metadata</a>
                      </p>
                      </div>
                      <hr />
                      <p>
                        <a href="#" className="left">Add to Notebook</a>
                        <a href="#" className="right">Download PDF</a>
                      </p>
                    </article>
                </div>
              </div>
            </section>
      		</div>
      	</div>


      	<Footer/>

      </div>
    );
  }

}

export default Result;
