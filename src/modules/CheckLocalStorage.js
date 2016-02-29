var IDFromAtID = require('./IDFromAtID.js');
module.exports =  function(key) {
  if (localStorage.getItem(IDFromAtID(key)) === null) {
    return false;
  }
  return true;
}
