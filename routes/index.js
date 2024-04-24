const lesson1Constroller = require("../controllers/lesson1");
const routes = require("express").Router();

routes.get("/", lesson1Constroller.carterRoute);
routes.get("/sarah", lesson1Constroller.sarahRoute);

module.exports = routes;
