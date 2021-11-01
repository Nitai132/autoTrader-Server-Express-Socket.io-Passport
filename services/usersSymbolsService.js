const mongoose = require('mongoose');
const AutoUsersSymbolsSchema = require('../models/AutoUsersSymbols.model');

const AutoUsersSymbols = mongoose.model('AutoUsersSymbols', AutoUsersSymbolsSchema);

const getUserSymbols = async (email) => {
    try {
        const userSetup = await AutoUsersSymbols.find({ email: email });
        return userSetup;
    } catch (err) {
        console.log(err);
        throw err;
    };
}

module.exports = { getUserSymbols }; //יצוא הפונקציות