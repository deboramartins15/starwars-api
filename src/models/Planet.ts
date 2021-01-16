import mongoose from '../database';

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  weather: {
    type: String,
    require: true,
  },
  soil: {
    type: String,
    require: true,
  },
  appearences: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Planet = mongoose.model('Planet', PlanetSchema);

export default Planet;
