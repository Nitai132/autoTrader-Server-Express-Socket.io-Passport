const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ //סכמה משתמש
    firstName: String, //שם פרטי
    lastName: String, //שם משפחה
    phone: String, //טלפון
    email:  { type: String, unique: true }, //אימייל
    password: String, //סיסמא
    isAdmin: Number, //הרשאות
    credits: Number //קרדיטים
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = userSchema;