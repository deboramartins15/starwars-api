/* eslint-disable radix */
import { Router } from 'express';
import PlanetController from '../controllers/planetController';
import Planet from '../models/Planet';

const planetRouter = Router();

planetRouter.post('/', async (req, res) => {
  try {
    const planet = new Planet(...req.body);
    res.json(await PlanetController.add(planet));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

planetRouter.get('/name/:name', async (req, res) => {
  try {
    res.json(await PlanetController.findByName(req.params.name));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

planetRouter.get('/id/:id', async (req, res) => {
  try {
    res.json(await PlanetController.findById(req.params.id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

planetRouter.get('/', async (req, res) => {
  try {
    res.json(await PlanetController.list());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

planetRouter.delete('/:id', async (req, res) => {
  try {
    res.json(await PlanetController.del(req.params.id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

planetRouter.get('*', (req, res) => {
  res.status(404).send({ error: 'endpoint not found!' });
});

export default planetRouter;
