/* eslint-disable no-console */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

const server = app.listen(3000, () => {
  console.log('🏃 Running Server');
});

process.on('SIGINT', () => {
  server.close();
  console.log('❎ Stopped Server');
});
