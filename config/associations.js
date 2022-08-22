const Users = require("../models/Users");
const Cars = require("../models/Cars");

Users.belongsToMany(Cars, {
  foreignKey: "userId",
  through: "usersCars",
  as: "cars",
});

Cars.belongsToMany(Users, {
  foreignKey: "carId",
  through: "usersCars",
  as: "users",
});

module.exports = { Users, Cars };
