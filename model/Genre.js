module.exports = (sequelize, Sequelize) => {
  const Genre = sequelize.define("genre", {
    name: Sequelize.STRING,
  });
  return Genre;
};
