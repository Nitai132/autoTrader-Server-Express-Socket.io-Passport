const mongoose = require('mongoose');
const usersInfoSchema = require('../models/usersInfo.model');

const UsersInfo = mongoose.model('AutoUsersInfo', usersInfoSchema);

const getUserInfo = async (email) => {
    try {
        const info = await UsersInfo.find({ _id: email });
        return info;
    } catch (err) {
        console.log(err);
        throw err;
    };
}

module.exports = { getUserInfo }; //יצוא הפונקציות