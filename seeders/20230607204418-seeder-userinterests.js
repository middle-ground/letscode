'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data.json").UserInterests
    await queryInterface.bulkInsert('UserInterests', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserInterests', null, [])
  }
};
