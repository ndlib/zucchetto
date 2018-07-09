import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'
import Header from '../components/StaticAssets/Header.jsx'
import FooterHome from '../components/StaticAssets/FooterHome.jsx'
import FeedbackLink from '../components/StaticAssets/FeedbackLink.jsx'
import Navigation from '../components/StaticAssets/Navigation.jsx'
import PageStore from '../store/PageStore.js'

class HoneycombPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sitePathData: null,
      loaded: PageStore.sitePathLoaded
    }
    this.sitePathLoadFinished = this.sitePathLoadFinished.bind(this)
  }

  componentWillMount() {
    PageStore.on('SitePathLoadFinished', this.sitePathLoadFinished)
    if(!this.state.loaded) {
      PageActions.fetchSitePath()
    }
  }

  componentWillUnmount() {
    PageStore.removeListener('SitePathLoadFinished', this.sitePathLoadFinished)
  }

  sitePathLoadFinished() {
    this.setState({sitePathLoaded: true})
  }

  render () {
    const slug = this.props.match.params.slug
    let page = PageStore.getPage(slug)
    return (
      <div>
        <Header/>
        <div className="row body">
          <div className="col-sm-3 left-col">
            <Navigation />
          </div>
          <div className="col-sm-9 right-col">
            {
              this.state.loaded ? <div>
                <h1>{page.name}</h1>
                <div className={slug}
                  dangerouslySetInnerHTML={ { __html: page.content } }
                /></div>
            : <div>Loading</div>
          }
          </div>
        </div>
        <FeedbackLink />
        <FooterHome />
      </div>
    )
  }
}
HoneycombPage.contextTypes = {
  router: PropTypes.object.isRequired
}
export default HoneycombPage
