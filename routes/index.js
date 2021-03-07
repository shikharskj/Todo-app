// require express library
const express = require('express');

// setting up the router
const router = express.Router();

// accessing controllers
const homeController = require('../controllers/home_controller');
const createtaskController = require('../controllers/createtask_controller');
const deletetaskController = require('../controllers/deletetask_controller');

// GET and POST requests
router.get('/',homeController.home);
router.post('/create-task',createtaskController.create);
router.get('/delete-task',deletetaskController.delete);

// exporting
module.exports = router;