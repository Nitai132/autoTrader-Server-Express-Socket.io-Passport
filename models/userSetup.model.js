const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSetupSchema = new Schema({ 
    userID: String,
    userEmail: { type: String, unique: true } ,
    tradingStatus: Boolean,
    doubleTheTradeValues: Object,
    stocks: Object, 
    bonds: Object, 
    comodity: Object, 
    currencyPairs: Object, 
    crypto: Object,
    indexes: Object,
}, {collection: 'AutoUsersSetup'});

module.exports = userSetupSchema;