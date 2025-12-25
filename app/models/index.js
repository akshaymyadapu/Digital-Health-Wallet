const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// import models
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.vitals = require("./vitals.model.js")(sequelize, Sequelize);
db.reports = require("./reports.model.js")(sequelize, Sequelize);
db.reportAccess = require("./reportAccess.model.js")(sequelize, Sequelize);


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
