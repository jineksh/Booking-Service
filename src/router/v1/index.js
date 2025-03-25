const express = require('express');
const router = express.Router();
const BookingController = require('../../controller/booking');



router.post('/Bookings',BookingController.createBooking);
router.patch('/Bookings/:id',BookingController.updateBooking);
module.exports = router;