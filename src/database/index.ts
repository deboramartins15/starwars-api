/* eslint-disable no-console */
import * as Mongoose from 'mongoose';
import 'dotenv/config';

Mongoose.connect(
  // 'mongodb://mongo:root@localhost:27017/starwarsapi?authSource=admin',
  `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
  .then(connection =>
    console.log(`✅ Connected to db ${connection.connections[0].name}`),
  )
  .catch(err => console.log(err));

process.on('SIGINT', () => {
  Mongoose.disconnect();
  console.log('❎ Disconnected from db');
});

export default Mongoose;
