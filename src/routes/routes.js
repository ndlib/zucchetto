'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import SiteIndexPage from './SiteIndexPage.jsx';
import AboutPage from './AboutPage.jsx';
import PartnersPage from './PartnersPage.jsx';
import ContactPage from './ContactPage.jsx';
import ResultPage from './ResultPage.jsx';
import SearchPage from './SearchPage.jsx';


export default function() {
  const history = createHistory();
  return (
    <Router history={ history }>
      <Route path="/" component="div">
        <IndexRoute component={ SiteIndexPage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/partners" component={ PartnersPage} />
        <Route path="/contact" component={ ContactPage} />
        <Route path="/result" component={ ResultPage} />
        <Route path="/search" component={SearchPage} />
      </Route>
    </Router>
  );
}
