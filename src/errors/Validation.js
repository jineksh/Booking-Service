const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error{

    constructor(error) {

        let explanation = [];
        error.errors.forEach(err => {
            explanation.push(err.message);
        });
        super();
        this.name = error.name;
        this.message = 'Not able to Validate your data';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;