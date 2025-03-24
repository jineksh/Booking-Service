const { StatusCodes } = require('http-status-codes');

class ServicelayerError extends Error{

    constructor(
        message = 'Something went wrong in service layer',
        explanation = 'Service layer Error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    ){
        super();
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ServicelayerError;