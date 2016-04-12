'use strict';

import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import SiteIndexPage from './SiteIndexPage.jsx';
import AboutPage from './AboutPage.jsx';
import PartnersPage from './PartnersPage.jsx';
import ContactPage from './ContactPage.jsx';
import ResultPage from './ResultPage.jsx';
import SearchPage from './SearchPage.jsx';
import NotebookPage from './NotebookPage.jsx';
import DocumentPage from './DocumentPage.jsx';
import AllDocumentsPage from './AllDocumentsPage.jsx';
import Page from './Page.jsx';


export default function() {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ Page }>
        <IndexRoute component={ SiteIndexPage } />
        <Route path="/about" component={ AboutPage } />
        <Route path="/partners" component={ PartnersPage} />
        <Route path="/contact" component={ ContactPage} />
        <Route path="/result" component={ ResultPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/documents" component={AllDocumentsPage} />
        <Route path="/notebook" component={NotebookPage} />
        <Route path="/document/:id" component={DocumentPage} />
      </Route>
    </Router>
  );
}
