'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInterests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInterests.init({
    Username: DataTypes.STRING,
    Interest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserInterests',
  });
  return UserInterests;
};