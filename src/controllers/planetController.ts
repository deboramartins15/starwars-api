import mongoose from '../database';

import Planet from '../models/Planet';
import { planetsDataSwapi as planetsData } from '../utils';

const PlanetController = {
  async add(planet): Promise<mongoose.Document> {
    if (!planet.name) throw new Error('Please, inform a name for the planet');
    if (!planet.weather)
      throw new Error('Please, inform a weather for the planet');
    if (!planet.soil) throw new Error('Please, inform a soil for the planet');

    planetsData.map(planetData => {
      if (
        planetData.name.toString().toLowerCase() ===
        planet.name.toString().toLowerCase()
      ) {
        // eslint-disable-next-line no-param-reassign
        planet.appearences = planetData.films.length;
      }
    });
    return Planet.create(planet);
  },

  async findById(id: string): Promise<mongoose.Document> {
    if (!id) throw new Error('Id of the planet not informed');
    return Planet.findById(id);
  },

  async findByName(name: string): Promise<mongoose.Document[]> {
    if (!name) throw new Error('Name of the planet not informed');
    return Planet.find({
      name,
    });
  },

  async list(): Promise<mongoose.Document[]> {
    return Planet.find();
  },

  async del(id: string): Promise<void> {
    if (!id) throw new Error('Id of the planet not informed');
    return Planet.findById(id).deleteOne();
  },
};

export default PlanetController;
