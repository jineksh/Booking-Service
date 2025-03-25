const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

module.exports = {
    PORT,FLIGHT_URL : process.env.FLIGHT_URL
}