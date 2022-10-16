/*
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
*/


// start of added by me
const alasql = require('alasql');

const db = new alasql.Database(); db.exec('CREATE TABLE foods (ID int, NAME string, SERVSIZE int, ENERGY int, PROTEIN int, TFAT int, SFAT int, CARB int, SUGAR int, DIFIBER int, SOD int)');
// ServingSize as SERVSIZE, Total Fat as TFAT, Sat.Fat as SFAT, Dietary Fiber as DIFIBER, Sodium as SOD

// end of added by me

module.exports = db;