const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoUsersSymbolsSchema = new Schema({ //סכמה משתמש
    email: String, 
    symbols: Array
}, { collection: 'AutoUsersSymbols'} );

module.exports = AutoUsersSymbolsSchema;