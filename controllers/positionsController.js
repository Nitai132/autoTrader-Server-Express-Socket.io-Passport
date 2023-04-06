const express = require('express');
const router = express.Router();
const { adminValidation } = require('../validations/adminValidation');
const {
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
    getActivePositions,
    getPositionsTypes,
    getShopPositions
} = require('../services/positionsService');


router.get('/types', async (req, res) => {
    try {
        const types = await getPositionsTypes();
        return res.json(types);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג בונד לפי איידי API
router.get('/getBond/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const bond = await getBond(id);
        return res.json(bond);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג בונד בשביל האדמין API
router.get('/getAllBonds', adminValidation, async (req, res) => {
    try {
        const bonds = await getAllBonds();
        return res.json(bonds);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג קריפטו לפי איידי API
router.get('/getCrypto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const crypto = await getCrypto(id);
        return res.json(crypto);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג קריפטו בשביל האדמין API
router.get('/getAllCrypto', adminValidation, async (req, res) => {
    try {
        const crypto = await getAllCrypto();
        return res.json(crypto);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג קומודיטי לפי איידי API
router.get('/getComodity/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comodity = await getComodity(id);
        return res.json(comodity);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג קומודיטי בשביל האדמין API
router.get('/getAllComodity', adminValidation, async (req, res) => {
    try {
        const comodity = await getAllComodity();
        return res.json(comodity);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג קורנסי פיירס לפי איידי API
router.get('/getCurrencyPair/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const CurrencyPair = await getCurrencyPair(id);
        return res.json(CurrencyPair);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג קורנסי פיירס בשביל האדמין API
router.get('/getAllPairs', adminValidation, async (req, res) => {
    try {
        const pairs = await getAllPairs();
        return res.json(pairs);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג רסט לפי איידי API
router.get('/getRest/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rest = await getRest(id);
        return res.json(rest);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג רסט בשביל האדמין API
router.get('/getAllRest', adminValidation, async (req, res) => {
    try {
        const rest = await getAllRest();
        return res.json(rest);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא פוזיציה מסוג סטוק לפי איידי API
router.get('/getStock/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await getStock(id);
        return res.json(stock);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות מסוג סטוק בשביל האדמין API
router.get('/getAllStocks', adminValidation, async (req, res) => {
    try {
        const stocks = await getAllStocks();
        return res.json(stocks);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

//שמוצא את כל הפוזיציות של המשתמש לפי האימייל API
router.get('/getUserPositions/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const positions = await getPositions(email);
        return res.json(positions);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

router.get('/getUserActivePositions/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const positions = await getActivePositions(email);
        return res.json(positions);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});


//שמחזיר קרדיטים למשתמש ברגע שקיבל פוזיציה שהיא פולס API 
router.post('/falsePosition', async (req, res) => {
    try {
        const { id } = req.body; // מקבל את האיידי של הפוזיציה שיצאה פולס מהשרת השני
        const usersWithFalsePositions = await checkUsersWithFalsePosition(id); // מוצא את כל היוזרים שיש להם את הפוזיציה שהיא לא נכונה
        const refunds = await refundUsers(usersWithFalsePositions) // מחזיר קרדיטים לאותם משתמשים
        return res.json(refunds) //במקרה של הצלחה
    } catch (err) {
        console.log(err); // במקרה של כשלון
        res.sendStatus(400);
    };
});

router.get('/getShopPositions', async (req, res) => {
    try {
        const positions = await getShopPositions();
        return res.json(positions);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
});


module.exports = router;