module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      picUrl: Sequelize.STRING
    });
    return User;
  };
  