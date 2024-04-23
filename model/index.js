const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("git", "root", "", {
  port: 3306,
  host: "localhost",
  dialect: "mysql",
});

const Genre = require("./Genre")(sequelize, Sequelize);
const Film = require("./Film")(sequelize, Sequelize);
const User = require("./User")(sequelize, Sequelize);
const WishList = require("./WishList")(sequelize, Sequelize);

Genre.hasMany(Film);
User.hasMany(WishList);
Film.hasMany(WishList);

sequelize.sync();
module.exports = { Genre, Film, User, WishList };
