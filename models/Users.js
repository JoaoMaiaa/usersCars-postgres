const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

// "users" se refere a tabela
const Users = sequelize.define("users", {
  name: DataTypes.STRING,
});

module.exports = Users;
