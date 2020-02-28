'use strict';

const formatRupiah = require('../helpers/formatRupiah')

module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Menu extends Model {
    getPrice(){
      return formatRupiah(this.price)
    }
   }

  Menu.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    menu_type: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, { sequelize })

  Menu.associate = function (models) {
    // associations can be defined here
    Menu.hasMany(models.MenuUser)
  };
  return Menu;
};