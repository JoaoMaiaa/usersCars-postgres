const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

// "cars" se refere a tabela
const Cars = sequelize.define("cars", {
  name: DataTypes.STRING,
  licensePlate: DataTypes.INTEGER,
});

module.exports = Cars;
