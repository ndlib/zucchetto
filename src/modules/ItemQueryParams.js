module.exports = function ( field, url ) {
  var href = url ? url : decodeURI(window.location.href);
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var str = reg.exec(href);
  if(str == null)
    return [];
  var arr = str[1].split('|');
  if(arr[0] === "")
    return [];
  return arr;
};
