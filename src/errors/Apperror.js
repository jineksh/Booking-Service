const { StatusCodes } = require('http-status-codes');

class Apperror extends Error {
    constructor(name , message, explanation , statuscode){
        super();
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statuscode = statuscode;
    }
}

module.exports = Apperror;