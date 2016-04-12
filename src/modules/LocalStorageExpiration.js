import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
module.exports = function(force) {
  if(!force) {
    force = false;
  }
  // clear localStorage if the is no previousVisit Time or visitTime > 1 day
  if(!localStorage.getItem('visitTime') || localStorage.getItem('visitTime' || force) <  new Date(Date.now - 24*60*60000)) {
    localStorage.clear();
  }
  if(!localStorage.getItem(VaticanID) || force) {
    localStorage.setItem(VaticanID, '{}')
  }
  if(!localStorage.getItem(HumanRightsID) || force) {
    localStorage.setItem(HumanRightsID, '{}');
  }
  localStorage.setItem('visitTime', Date.now());
}
