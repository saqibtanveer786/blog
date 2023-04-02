const mongoose = require('mongoose');

module.exports = async function connectToMongo() {
  await mongoose.connect(`mongodb://127.0.0.1:27017`);
  console.log('connected to mongo');
};
