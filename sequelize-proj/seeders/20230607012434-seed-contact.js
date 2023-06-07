'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Contacts',
    [
      {
      firstname: "Victor",
      lastname:"Ponce",
      phone:"00000000",
      email:"victor@email.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
     {
      firstname: "Andres",
      lastname:"Ottamendi",
      phone:"11111111",
      email:"andres@email.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     },
     {
      firstname: "John",
      lastname:"Doe",
      phone:"22222222",
      email:"john@email.com",
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Contact', null, {});
  }
};
