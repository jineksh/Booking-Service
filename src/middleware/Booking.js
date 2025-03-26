const {StatusCodes} = require('http-status-codes');

const ValidBooking = (req,res,next)=>{
    if(!req.body.flightId || 
        !req.body.userID ||
        !req.body.noOfSeat
    ){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message : 'flightId or userId missing',
            success : false,
            data : {}
        })
    }
    next();
}


module.exports = {
    ValidBooking
}