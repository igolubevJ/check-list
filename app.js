const express = require('express');
const bodyParser = require('body-parser');

const authRoute = require('./routers/auth.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/auth', authRoute);

module.exports = app;
