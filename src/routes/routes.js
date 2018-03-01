import React from 'react';
import { browserHistory, Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import SiteIndexPage from './SiteIndexPage.jsx';
import AboutPage from './AboutPage.jsx';
import PrivacyPage from './PrivacyPage.jsx';
import PartnersPage from './PartnersPage.jsx';
import ContactPage from './ContactPage.jsx';
import ResultPage from './ResultPage.jsx';
import SearchPage from './SearchPage.jsx';
import NotebookPage from './NotebookPage.jsx';
import DocumentPage from './DocumentPage.jsx';
import AllDocumentsPage from './AllDocumentsPage.jsx';
import TermsOfServicePage from './TermsOfServicePage.jsx';
import UsingPage from './UsingPage.jsx';
import Page from './Page.jsx';
import InitUserPage from './InitUserPage.jsx'
import Analytics from '../components/Analytics.jsx'

const routes = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Analytics>
        <Page>
          <Switch>
            <Route exact path='/' component={ SiteIndexPage } />
            <Route exact path="/crowdsourcing" component={ InitUserPage } />
            <Route exact path="/about" component={ AboutPage } />
            <Route exact path="/using" component={ UsingPage } />
            <Route exact path="/partners" component={ PartnersPage } />
            <Route exact path="/contact" component={ ContactPage } />
            <Route exact path="/result" component={ ResultPage} />
            <Route exact path="/search" component={ SearchPage } />
            <Route exact path="/documents" component={ AllDocumentsPage } />
            <Route exact path="/notebook" component={ NotebookPage } />
            <Route exact path="/document/:id" component={ DocumentPage } />
            <Route exact path="/privacy" component={ PrivacyPage } />
            <Route exact path="/terms" component={ TermsOfServicePage } />
        </Switch>
      </Page>
    </Analytics>
    </BrowserRouter>
  );
}

export default routes
