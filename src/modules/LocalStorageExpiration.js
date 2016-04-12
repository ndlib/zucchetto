import VaticanID from '../constants/VaticanID.js';
import HumanRightsID from '../constants/HumanRightsID.js';
module.exports = function(force) {
  if(force == null) {
    force = false;
  }
  // clear localStorage if the is no previousVisit Time or visitTime > 1 day
  if(force || !localStorage.getItem('visitTime')) {
    localStorage.clear();
  }
  if(force || !localStorage.getItem(VaticanID)) {
    localStorage.setItem(VaticanID, '{}')
  }
  if(force || !localStorage.getItem(HumanRightsID)) {
    localStorage.setItem(HumanRightsID, '{}');
  }
  localStorage.setItem('visitTime', Date.now());
}
