const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoUsersPositionSchema = new Schema({ //סכמה משתמש
    user: String, 
    userID: String,
    stocks: Array,
    bonds: Array, 
    comodity: Array, 
    currencyPairs: Array, 
    crypto: Array,
    indexes: Array, 
}, { collection: 'AutoUsersPositions'} );

module.exports = AutoUsersPositionSchema;