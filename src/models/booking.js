'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightId: {
      type:DataTypes.INTEGER,
      allowNull : false
    },
    userID:{
      type:DataTypes.INTEGER,
      allowNull : false
    },
    Status: {
      type:DataTypes.ENUM,
      values : ['InProcces','Booked','Cancelled'],
      defaultValue : 'InProcces'
    },
    noOfSeat: {
      type:DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 1
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 0
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};