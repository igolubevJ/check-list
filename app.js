const express = require('express');

const authRoute = require('./routers/auth.route');

const app = express();

app.use('/api/auth', authRoute);

module.exports = app;
