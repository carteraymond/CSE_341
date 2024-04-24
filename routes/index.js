const lesson1Constroller = require('../controllers/lesson1');
const routes = require('express').Router();
 
routes.get('/', lesson1Constroller.carterRoute);

module.exports = routes;