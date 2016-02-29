var HoneycombURL = require('./HoneycombURL.js');
module.exports = function(atID) {
  var regex = new RegExp(HoneycombURL() + "\/v1\/(collections|items)\/");
  var id = atID.replace(regex, '');
  return id;
}
