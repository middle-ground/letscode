'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserInterests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "username"
        },
        onDelete: "SET NULL"
      },
      Interest: {
        type: Sequelize.STRING,
        type: Sequelize.STRING,
        references: {
          model: "Interests",
          key: "interest"
        },
        onDelete: "SET NULL"
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
    await queryInterface.dropTable('UserInterests');
  }
};