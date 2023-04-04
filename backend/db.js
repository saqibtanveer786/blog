const mongoose = require('mongoose');

module.exports = async function connectToMongo() {
  await mongoose.connect(
    process.env.REACT_APP_API_URL || `mongodb://127.0.0.1:27017`
  );
  console.log('connected to mongo');
};

// `mongodb://127.0.0.1:27017`
