const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionsTypesSchema = new Schema({ //סכמה משתמש
    stocks: Array, //שם פרטי
    commodity: Array, //שם משפחה
    indexes: Array, //טלפון
});

module.exports = positionsTypesSchema;