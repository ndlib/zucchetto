module.exports = function() {
  if (process.env.NODE_ENV == 'preproduction') {
    return 'https://honeycombpprd-vm.library.nd.edu';
  } else {
    return 'https://honeycomb.library.nd.edu';
  } 
}
