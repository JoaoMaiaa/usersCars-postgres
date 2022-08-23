const express = require("express");
const routes = express.Router();

const UserController = require("./Controller/UserController");
const CarController = require("./Controller/CarController");

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.put("/users/:userId", UserController.update);
routes.delete("/users/:userId/", UserController.delete);

routes.post("/users/:userId/cars", CarController.store);
routes.get("/users/:userId/cars", CarController.index);
routes.put("/users/:userId/cars", CarController.update);
routes.delete("/users/:carsId/cars", CarController.delete);

module.exports = routes;
