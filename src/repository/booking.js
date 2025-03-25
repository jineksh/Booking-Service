const { StatusCodes } = require('http-status-codes');
const { AppError, ValidationError, ServiceError } = require('../errors/index');
const { Booking } = require('../models/index');

class Bookingrepo {


    async createBooking(data) {
        try {
            const flight = await Booking.create(data);
            return flight;
        } catch (error) {
            console.log(error);
            if (error == 'SequelizeValidationError') {
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

    async update(BookingId, data) {
        try {
            const booking = await Booking.findByPk(BookingId);
            if (data.Status) {
                booking.Status = data.Status;
            }
            if (data.noOfSeat) {
                booking.noOfSeat = data.noOfSeat;
            }
            await booking.save();
            return booking;
        }
        catch (error) {
            throw new AppError(
                'Repository Error',
                'Cannot Update Booking',
                'Something went wrong Please Try Again Later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get(BookingId) {
        try {
            const  booking = await Booking.findByPk(BookingId);
            return booking;
        }
        catch (error) {
            'Repository Error',
            'Cannot fetch Booking',
            'Something went wrong Please Try Again Later',
            StatusCodes.INTERNAL_SERVER_ERROR
        }
    }

}

module.exports = Bookingrepo;