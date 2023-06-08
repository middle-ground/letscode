'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clipping.init({
    OwnerUsername: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    links: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clipping',
  });
  return Clipping;
};