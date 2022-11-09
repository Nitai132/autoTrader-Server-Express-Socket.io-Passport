const mongoose = require('mongoose');
const exchangesSchema = require('../models/exchanges.model');

const Exchanges = mongoose.model('exchanges', exchangesSchema);

const getExchanges = async () => {
    try {
        const info = await Exchanges.find({});
        return info;
    } catch (err) {
        console.log(err);
        throw err;
    };
}

module.exports = { getExchanges }; //יצוא הפונקציות