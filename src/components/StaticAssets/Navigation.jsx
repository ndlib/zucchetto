import React, { Component} from 'react';
import PropTypes from 'prop-types'
import { MenuItem, Divider } from 'material-ui';
import { Link } from 'react-router-dom';
import PageStore from '../../store/PageStore.js'
import PageActions from '../../actions/PageActions.js'

class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      sitePathLoaded: PageStore.sitePathLoaded()
    }
    this.sitePathLoadFinished = this.sitePathLoadFinished.bind(this)
    this.honeycombPageLinks = this.honeycombPageLinks.bind(this)
  }

  componentWillMount() {
    PageStore.on('SitePathLoadFinished', this.sitePathLoadFinished)
    if(!this.state.sitePathLoaded) {
      PageActions.fetchSitePath()
    }
  }

  componentWillUnmount() {
    PageStore.removeListener('SitePathLoadFinished', this.sitePathLoadFinished)
  }

  sitePathLoadFinished() {
    this.setState({sitePathLoaded: true})
  }

  honeycombPageLinks () {
    if(!this.state.sitePathLoaded) {
      return null
    }

    let links = []
    const pages = PageStore.getMenuList()
    pages.forEach((page) => {
      links.push(
        <MenuItem key={page.slug}>
          <Link to={page.slug}>{page.name}</Link>
        </MenuItem>
      )
    })
    return links
  }

  render() {
    return (
      <nav>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link to="/search?q=">Search the Database</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/documents">Index of Documents</Link>
        </MenuItem>
        <Divider />
        { this.honeycombPageLinks() }
      </nav>
    );
  }
}

export default Navigation;
