import * as Mongoose from 'mongoose';

Mongoose.connect(
  'mongodb://mongo:root@localhost:27017/starwarsapi?authSource=admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).catch(err => console.log(err));

export default Mongoose;
