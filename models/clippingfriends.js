'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClippingFriends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClippingFriends.init({
    ClippingId: DataTypes.INTEGER,
    FriendUsername: DataTypes.STRING,
    invitationStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClippingFriends',
  });
  return ClippingFriends;
};