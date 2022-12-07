const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoUsersPositionSchema = new Schema({ //סכמה משתמש
    mongoID: String,
    user: String, 
    IB_ID: String,
    exchange: String,
    operation: String, 
    positionType: String, 
    symbol: String, 
    technologies: String,
    margin: Number,
    startDate: String,
    endDate: String,
    startPrice: Number,
    endPrice: Number,
    succeeded: Boolean,
    pipsed: Number,
    quantity: Number,
    currentAccountBalance: Number,
    stopLoss: Number,
    stopLossUsed: Boolean,
    totalBrokerFee: Number,
    active: Boolean,
    takeProfit: Array, 
}, { collection: 'usersPositionsIB'} );

module.exports = AutoUsersPositionSchema;