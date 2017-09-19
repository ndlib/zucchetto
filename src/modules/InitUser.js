module.exports = function() {
  let uuid = window.localStorage.getItem('UUID') || Math.floor(Math.random()*899999+100000);
  window.localStorage.setItem('UUID', uuid)
};
