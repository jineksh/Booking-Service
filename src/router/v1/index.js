const express = require('express');
const router = express.Router();
const BookingController = require('../../controller/booking');
const Bookingmiddleware = require('../../middleware/Booking');


router.post('/Bookings',Bookingmiddleware.ValidBooking,BookingController.createBooking);
router.patch('/Bookings/:id',BookingController.updateBooking);
module.exports = router;