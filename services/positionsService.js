const mongoose = require('mongoose');
const liveRateBondSchema = require('./../models/liveRateBonds.model');
const AutoUsersPositionsSchema = require('../models/AutoUsersPositions.model');
const liveRateCryptoSchema = require('../models/liveRateCrypto.model');
const userSchema = require('./../models/users.model');
const UsersPositionsIBSchema = require('./../models/usersPositionsIB.model');
const AutoUserPositions = mongoose.model('userPositions', AutoUsersPositionsSchema, 'AutoUsersPositions');
const UsersPositionsIB = mongoose.model('usersPositionsIB', UsersPositionsIBSchema, 'usersPositionsIB')
const LiveRateBond = mongoose.model('LiveRateBond', liveRateBondSchema, 'liveRateBonds');
const LiveRateCrypto = mongoose.model('LiveRateCrypto', liveRateCryptoSchema, 'liveRateCrypto');
const LiveRateComodity = mongoose.model('LiveRateComodity', liveRateCryptoSchema, 'liveRateComodity');
const LiveRateCurrencyPair = mongoose.model('LiveRateCurrencyPair', liveRateCryptoSchema, 'liveRateCurrencyPairs1');
const LiveRateRest = mongoose.model('LiveRateRest', liveRateCryptoSchema, 'liveRateIndexes');
const LiveRateStock = mongoose.model('LiveRateStock', liveRateCryptoSchema, 'iexStocks');
const User = mongoose.model('User', userSchema); //שימוש במודל וסכמה של משתמש


// סרביס שמוצא בדאטאבייס פוזיציה מסוג בונד לפי איידי ומחזיר אותה
const getBond = async (id) => {
    try {
        const bond = await LiveRateBond.find({ _id: id });
        return bond;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמוצא בדאטאבייס פוזיציה מסוג קריפטו לפי איידי ומחזיר אותה
const getCrypto = async (id) => {
    try {
        const crypto = await LiveRateCrypto.find({ _id: id });
        return crypto;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמוצא בדאטאבייס פוזיציה מסוג קומודיטי לפי איידי ומחזיר אותה
const getComodity = async (id) => {
    try {
        const comodity = await LiveRateComodity.find({ _id: id });
        return comodity;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמוצא בדאטאבייס פוזיציה מסוג קורנסי פיירס לפי איידי ומחזיר אותה
const getCurrencyPair = async (id) => {
    try {
        const currencyPair = await LiveRateCurrencyPair.find({ _id: id });
        return currencyPair;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמוצא בדאטאבייס פוזיציה מסוג רסט לפי איידי ומחזיר אותה
const getRest = async (id) => {
    try {
        const rest = await LiveRateRest.find({ _id: id });
        return rest;
    } catch (err) {
        console.log(err);
        throw err;
    };
};


// סרביס שמוצא בדאטאבייס פוזיציה מסוג סטוק לפי איידי ומחזיר אותה
const getStock = async (id) => {
    try {
        const stock = await LiveRateStock.find({ _id: id });
        return stock;
    } catch (err) {
        console.log(err);
        throw err;
    };
};


// סרביס שמחזיר את כל הפוזיציות מסוג קריפטו בשביל האדמין
const getAllCrypto = async () => {
    try {
        const getCrypto = await LiveRateCrypto.find()
        return getCrypto
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמחזיר את כל הפוזיציות מסוג בונדס בשביל האדמין
const getAllBonds = async () => {
    try {
        const getBonds = await LiveRateBond.find()
        return getBonds
    } catch (err) {
        console.log(err);
        throw err;
    };
};


// סרביס שמחזיר את כל הפוזיציות מסוג רסט בשביל האדמין
const getAllRest = async () => {
    try {
        const getRest = await LiveRateRest.find()
        return getRest
    } catch (err) {
        console.log(err);
        throw err;
    };
};


// סרביס שמחזיר את כל הפוזיציות מסוג קומודיטי בשביל האדמין
const getAllComodity = async () => {
    try {
        const getComodity = await LiveRateComodity.find()
        return getComodity
    } catch (err) {
        console.log(err);
        throw err;
    };
};

// סרביס שמחזיר את כל הפוזיציות מסוג קורנסי פיירס בשביל האדמין
const getAllPairs = async () => {
    try {
        const getPairs = await LiveRateCurrencyPair.find()
        return getPairs
    } catch (err) {
        console.log(err);
        throw err;
    };
};



// סרביס שמחזיר את כל הפוזיציות מסוג סטוקס בשביל האדמין
const getAllStocks = async () => {
    try {
        const getStocks = await LiveRateStock.find()
        return getStocks
    } catch (err) {
        console.log(err);
        throw err;
    };
};

//סרביס שמחזיר את כל הפוזיציות שיש למשתמש מסויים לפי אימייל
const getPositions = async (email) => {
    try {
        const positions = await AutoUserPositions.find({ user: email });
        return positions;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

const getActivePositions = async (email) => {
    try {
        const positions = await UsersPositionsIB.find({ user: email, active: true });
        return positions;
    } catch (err) {
        console.log(err);
        throw err;
    };
};



//סרביס שמקבל פוזיציות שיצאו פולס ומוצא את כל המשתמשים עם אותה פוזיציה 
const checkUsersWithFalsePosition = async (id) => {
    try {
        const usersWithFalsePositions = await userPositions.find({
            $or: [
                { bonds: id },
                { crypto: id },
                { comodity: id },
                { pairs: id },
                { stocks: id },
            ]
        });
        const usersArray = usersWithFalsePositions.map(({ user }) => user)
        return usersArray;
    } catch (err) {
        console.log(err);
        throw err;
    };
};

//סרביס שמקבל מערך של משתמשים שצריכים לקבל זיכוי ומחזיר לכל אחד מהם קרדיט אחת
const refundUsers = async (usersArray) => {
    try {
        const usersToRefund = await User.find({ email: { $in: usersArray } });
        for (let i = 0; i < usersToRefund.length; i++) {
            await User.updateOne({ email: usersToRefund[i].email }, { $inc: { credits: 1 } })
        }
        return usersToRefund
    } catch (err) {
        console.log(err);
        throw err;
    };
};


module.exports = {
    getBond,
    getPositions,
    getCrypto,
    getComodity,
    getCurrencyPair,
    getRest,
    getStock,
    getAllBonds,
    getAllStocks,
    getAllComodity,
    getAllRest,
    getAllCrypto,
    getAllPairs,
    checkUsersWithFalsePosition,
    refundUsers,
    getActivePositions
}