'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data.json").Followers
    await queryInterface.bulkInsert("Followers", data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Followers", null, {});
  }
};
