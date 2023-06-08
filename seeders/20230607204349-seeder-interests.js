'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data.json").Interests
    await queryInterface.bulkInsert('Interests', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Interests', null, [])
  }
};
