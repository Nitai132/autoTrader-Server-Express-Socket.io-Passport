const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSetupSchema = new Schema({ 
    _id: String,
    userType: String,
    gatewayStatus: Boolean, 
    stocks: Object, 
    bonds: Object, 
    comodity: Object, 
    currencyPairs: Object, 
    indexes: Object,
}, {collection: 'AutoUsersInfo'});

module.exports = userSetupSchema;