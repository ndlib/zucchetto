import React from 'react';
import { browserHistory, Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import SiteIndexPage from './SiteIndexPage.jsx';
import ResultPage from './ResultPage.jsx';
import SearchPage from './SearchPage.jsx';
import NotebookPage from './NotebookPage.jsx';
import DocumentPage from './DocumentPage.jsx';
import AllDocumentsPage from './AllDocumentsPage.jsx';
import Page from './Page.jsx';
import InitUserPage from './InitUserPage.jsx'
import HoneycombPage from './HoneycombPage.jsx'
import Analytics from '../components/Analytics.jsx'

const routes = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Analytics>
        <Page>
          <Switch>
            <Route exact path='/' component={ SiteIndexPage } />
            <Route exact path="/crowdsourcing" component={ InitUserPage } />
            <Route exact path="/result" component={ ResultPage} />
            <Route exact path="/search" component={ SearchPage } />
            <Route exact path="/documents" component={ AllDocumentsPage } />
            <Route exact path="/notebook" component={ NotebookPage } />
            <Route exact path="/document/:id" component={ DocumentPage } />
            <Route exact path="/:slug" component={ HoneycombPage } />
        </Switch>
      </Page>
    </Analytics>
    </BrowserRouter>
  );
}

export default routes
