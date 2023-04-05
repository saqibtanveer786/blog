const mongoose = require('mongoose');

module.exports = async function connectToMongo() {
  await mongoose.connect(
    process.env.REACT_APP_API_URL ||
      `mongodb+srv://saqib:saqib123@blog.oalntnk.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log('connected to mongo');
};

// `mongodb://127.0.0.1:27017`
