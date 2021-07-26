const express = require('express');
const ExpressError = require('./utils/ExpressError');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const employeeRoutes = require('./routes/employee');

app.use('/employee', employeeRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found'), 404);
});

// Express server on port 3000
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});