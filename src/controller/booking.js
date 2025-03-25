const  BookingService  = require('../service/booking');
const { AppError,ValidationError,ServiceError } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');
const bookinservice = new BookingService();

const createBooking = async(req,res)=>{

    try{
        const booking = await bookinservice.BookingFlight(req.body);
        return res.status(StatusCodes.OK).json({
            message : 'Booking Done',
            succses : true,
            data : booking
        });
    }
    catch(error){
        return res.status(error.statusCode).json({
            message : error.message,
            succses : false,
            explanation : error.explanation,
            data : {}
        })

    }

}


const updateBooking = async(req,res)=>{

    try{
        const booking = await bookinservice.UpdateBooking(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            message : 'Booking Updated',
            succses : true,
            data : booking
        });
    }
    catch(error){
        return res.status(error.statusCode).json({
            message : error.message,
            succses : false,
            explanation : error.explanation,
            data : {}
        })

    }

}


module.exports = {
    createBooking,updateBooking
}
