const express = require('express');
const path = require('path');

const controllers = require('./controllers/index');

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;
