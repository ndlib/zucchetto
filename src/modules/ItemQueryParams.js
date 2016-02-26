module.exports = function ( field, url ) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var str = reg.exec(href);
  var arr = str[1].split('|');
  return arr;
};
