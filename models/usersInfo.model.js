const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSetupSchema = new Schema({ 
    _id: String,
    userType: String,
    gatewayStatus: Boolean, 
    twsStatus: Boolean,
    stocks: Object, 
    bonds: Object, 
    comodity: Object, 
    currencyPairs: Object, 
    crypto: Object,
    indexes: Object,
    investedBalance: Number,
    currentBalance: Number,
    tradesAmount: Object
}, {collection: 'AutoUsersInfo'});

module.exports = userSetupSchema;