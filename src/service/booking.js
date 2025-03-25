const Bookingrepo = require('../repository/booking');
const axios = require('axios');
const { FLIGHT_URL } = require('../config/server');
const { AppError, ValidationError, ServiceError } = require('../errors/index');


class BookingService {

    constructor() {
        this.repository = new Bookingrepo();
    }


    async BookingFlight(data) {
        try {
            const flightId = data.flightId;
            const url = `${FLIGHT_URL}/api/v1/flights/${flightId}`;
            const flight = await axios.get(url);
            const flightdata = flight.data.data;
            const price = flightdata.price * data.noOfSeat;
            const Bookingpayload = { ...data, price };
            let totalseat = flightdata.seats - data.noOfSeat;

            const Booking = await this.repository.createBooking(Bookingpayload);

            await axios.patch(`${FLIGHT_URL}/api/v1/flights/${Booking.flightId}`, {
                seats: totalseat
            });

            const finalBooking = await this.repository.update(Booking.id, { Status: 'Booked' });
            return finalBooking;

        } catch (error) {
            console.log(error);
            throw new ServiceError();
        }
    }


    async UpdateBooking(bookingId, data) {
        try {
            if (data.Status) {
                const booking = await this.repository.get(bookingId);
                const finalBooking = await this.repository.update(booking.id, data);
                const url = `${FLIGHT_URL}/api/v1/flights/${finalBooking.flightId}`;
                const flight = await axios.get(url);
                const flightdata = flight.data.data;
                const totalseat = flightdata.seats + finalBooking.noOfSeat;

                await axios.patch(`${FLIGHT_URL}/api/v1/flights/${finalBooking.flightId}`, {
                    seats: totalseat
                });

                return finalBooking;
            }
        } catch (error) {
            console.log(error);
            throw new ServiceError();
        }
    }
}
module.exports = BookingService;