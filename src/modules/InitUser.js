// Load current user from localstorage or generate a new unique id between
// 100000 and 999999.
module.exports = function() {
  let uuid = window.localStorage.getItem('UUID') || Math.floor(Math.random()*899999+100000);
  window.localStorage.setItem('UUID', uuid)
};
