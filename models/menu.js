'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    menu_type: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.hasMany(models.MenuUser)
  };
  return Menu;
};