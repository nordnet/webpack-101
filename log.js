module.exports = function(message) {

  if (NODE_ENV === 'development') {
    console.log('running in development mode');
  }

  console.info(message);
}
