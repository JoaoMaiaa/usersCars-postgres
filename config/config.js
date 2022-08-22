require("dotenv").config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "usersCars",
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: true,
  },
};
