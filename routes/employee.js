const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee');

router.get('/', employee.getAllEmployees);

router.post('/', employee.createEmployee);

router.get('/:id', employee.findEmployeeById);

module.exports = router;