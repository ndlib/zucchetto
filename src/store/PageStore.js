import HumanRightsID from '../constants/HumanRightsID.js'
import VaticanID from '../constants/VaticanID.js'
import _ from 'underscore'

var AppDispatcher = require("../dispatcher/AppDispatcher.jsx")
var EventEmitter = require("events").EventEmitter
var PageActionTypes = require('../constants/PageActionTypes.jsx')

class PageStore extends EventEmitter {
  constructor() {
    super()
    this.sitePath = []
    this.loaded = false
    AppDispatcher.register(this.receiveAction.bind(this));
  }

  receiveAction(action) {
    switch(action.actionType) {
      case PageActionTypes.FETCH_SITE_PATH:
        this.sitePath = action.sitePathData
        this.loaded = true
        this.emitSitePathLoadFinished()
        break
    }
  }

  sitePathLoaded() {
    return this.loaded
  }

  emitSitePathLoadFinished() {
    if(this.loaded) {
      this.emit('SitePathLoadFinished')
    }
  }

  getPage(slug) {
    let page = _.findWhere(this.sitePath, {slug: slug})
    if(!page) {
      page = {
        name: '404',
        content: 'The requested page could not be found.'
      }
    }
    return page
  }

  getMenuList() {
    let menuList = []
    this.sitePath.forEach((page) => {
      menuList.push({name: page.name, slug: page.slug})
    })
    menuList = _.reject(menuList, (page) => {
      // Some pages are put in a special place, not the regular menu
      const excluded = ['terms-of-service', 'privacy-policy']
      let shouldReturn = false
      excluded.forEach((exception) => {
        if(page.slug === exception) {
          shouldReturn = true
        }
      })
      return shouldReturn
    })
    return menuList
  }
}

module.exports = new PageStore()
