const {StatusCodes} = require('http-status-codes');
const { AppError,ValidationError,ServiceError } = require('../errors/index');
const { Booking } = require('../models/index');


class Bookingrepo {


    async createBooking(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error=='SequelizeValidationError'){
                throw new ValidationError();
            }
            throw new AppError(
                'Repository Error',
                'Cannot create Booking',
                'Something went wrong Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR

            )
        }
    }

}

module.exports = Bookingrepo;