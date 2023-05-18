const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersReportsSchema = new Schema({ //סכמה משתמש
    userEmail: String, 
    link: String
}, { collection: 'usersReports', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }} );

module.exports = usersReportsSchema;