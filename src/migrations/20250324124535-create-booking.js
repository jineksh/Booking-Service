'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      Status: {
        type: Sequelize.ENUM,
        values : ['InProcces','Booked','Cancelled'],
        defaultValue: 'InProcces'
      },
      noOfSeat: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 1
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
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
    await queryInterface.dropTable('Bookings');
  }
};