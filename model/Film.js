module.exports = (sequelize, Sequelize) => {
  const Film = sequelize.define("film", {
    name: Sequelize.STRING,
    date: Sequelize.INTEGER,
    picUrl: Sequelize.INTEGER,
  });
  return Film;
};
