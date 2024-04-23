module.exports = (sequelize, Sequelize) => {
  const WishList = sequelize.define("wish_list", {});
  return WishList;
};
