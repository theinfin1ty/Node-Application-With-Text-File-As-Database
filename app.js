const express = require('express');
const fs = require('fs');
const ExpressError = require('./utils/ExpressError');
const app = express();

app.get('/', (req, res) => {
    res.send("Home!");
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found'), 404);
});

// Express server on port 3000
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});