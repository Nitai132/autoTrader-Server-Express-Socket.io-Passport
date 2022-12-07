const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocketsSchema = new Schema({ //סכמה משתמש
    user: String,
    id: String,
    webId: String
}, { collection: 'sockets'} );

module.exports = SocketsSchema;