const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SymbolsSchema = new Schema({ //סכמה משתמש
    id: String, 
    symbol: String,
    stocks: Boolean,
    options: Boolean,
    contract: Boolean,
    optionOnContract: Boolean,
    price: Number,
    exchange: String
}, { collection: 'AutoSymbols'} );

module.exports = SymbolsSchema;