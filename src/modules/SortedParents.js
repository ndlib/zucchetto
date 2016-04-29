import _ from 'underscore';
module.exports = function(items) {
  var parents = _.sortBy(items, function (item) {
    return item.name;
  });

  return parents;
}
