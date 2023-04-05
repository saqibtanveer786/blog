const express = require('express');
const mongoConnect = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');

const hostname = '127.0.0.1';
const port = process.env.PORT;

//Connectiong To Mongo db
mongoConnect();

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// routes
// app.use('/api/v1/user', require('./routes/user.js'));
app.use('/backend', require('./routes/blogposts.js'));

// if (process.env.PORT) {
//   app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
// }

module.exports = app;
