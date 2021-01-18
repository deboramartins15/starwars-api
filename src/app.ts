import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import routes from './routes';

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(routes);

export default app;
