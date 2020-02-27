'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuUser = sequelize.define('MenuUser', {
    UserId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    delivery_date: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  MenuUser.associate = function(models) {
    // associations can be defined here
    MenuUser.belongsTo(models.User)
    MenuUser.belongsTo(models.Menu)

  };
  return MenuUser;
};