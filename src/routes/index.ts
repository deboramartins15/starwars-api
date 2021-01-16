import { Router } from 'express';
import planetRouter from './planet.routes';

const routes = Router();

routes.use('/planets', planetRouter);

export default routes;
