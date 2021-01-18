/* eslint-disable no-console */
import app from './app';
import 'dotenv/config';

const server = app.listen(process.env.APP_PORT || 3000, () => {
  console.log('🏃 Running Server');
});

process.on('SIGINT', () => {
  server.close();
  console.log('❎ Stopped Server');
});
