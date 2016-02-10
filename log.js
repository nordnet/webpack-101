export default function logger(message) {

  if (NODE_ENV === 'development') {
    console.log('running in development mode');
  }

  console.info(message);
}
