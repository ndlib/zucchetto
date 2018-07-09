'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
import PageStore from '../store/PageStore.js'
import PageActions from '../actions/PageActions.js'

class Page extends Component {
  constructor() {
    super()
    this.state = {
      sitePathLoaded: PageStore.sitePathLoaded()
    }
    this.sitePathLoadFinished = this.sitePathLoadFinished.bind(this)
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

  render() {
    return (
      <div className='page'>
        { this.props.children }
      </div>
    );
  }
}

export default Page;
