const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const { gracefulShutdown } = require('./helpers/db');
const authRoute = require('./routers/auth.route');

const app = express();

mongoose.connect(keys.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log('✋ Connecting MONGO DB!!!'))
  .catch(err => console.log('Error:', err));

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.once('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/auth', authRoute);

module.exports = app;
