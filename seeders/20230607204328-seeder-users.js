'use strict';
const {hashSync} = require("bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let password = hashSync("qwerty")
    let data = require("../data.json").Users
    data.forEach(el => {
      el.password = password
    })
    await queryInterface.bulkInsert("Users", data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
