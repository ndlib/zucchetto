import _ from 'underscore';
module.exports = function(groups, sortKey) {
  var split = sortKey.split("_");
  var sortType = split[0];
  if(sortType == "relavence") {
    return groups;
  }

  var direction = split[1];
  var parents = _.sortBy(groups, function (group) {
    switch(sortType) {
      case 'year':
        return group.year;
      break;

      case 'name':
        return group.name;
      break;

      case 'hits':
        return group.paragraphs.length;
      break;
    }
  });

  if(direction === "desc") {
    parents = parents.reverse();
  }
  return parents;
}
