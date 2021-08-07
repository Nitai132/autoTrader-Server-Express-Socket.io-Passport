const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSetupSchema = new Schema({ 
    userID: String,
    userEmail: { type: String, unique: true } ,
    activeTrading: Boolean, 
    stocks: Object, 
    bonds: Object, 
    comodity: Object, 
    currencyPairs: Object, 
    indexes: Object,
}, {collection: 'AutoUsersSetup'});

module.exports = userSetupSchema;