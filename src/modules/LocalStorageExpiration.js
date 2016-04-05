module.exports = function() {
  // clear localStorage if the is no previousVisit Time or visitTime > 1 day
  if(!localStorage.getItem('visitTime') || localStorage.getItem('visitTime') <  new Date(Date.now - 24*60*60000)) {
    localStorage.clear();
  }
  localStorage.setItem('visitTime', Date.now());
}
