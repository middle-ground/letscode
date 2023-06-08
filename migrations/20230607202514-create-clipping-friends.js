'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClippingFriends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ClippingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clippings",
          key: "id"
        },
        onDelete: "SET NULL",
      },
      FriendUsername: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "username"
        },
        onDelete: "SET NULL"
      },
      invitationStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClippingFriends');
  }
};