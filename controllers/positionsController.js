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
    addNewPosition,
    getNewCrypto,
    getNewBonds,
    getNewStocks,
    getNewRest,
    getNewComodity,
    getNewPairs,
    getAllBonds,
    getAllStocks,
    getAllComodity,
    getAllRest,
    getAllCrypto,
    getAllPairs,
    checkUsersWithFalsePosition,
    refundUsers
} = require('../services/positionsService');

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

// שמוסיף פוזיציות מסוג קריפטו לפי הכמות שהמשתמש בחר API
router.get('/getNewCrypto/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const newCrypto = await getNewCrypto(amount);
        return res.json(newCrypto);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציות מסוג בונד לפי הכמות שהמשתמש בחר API
router.get('/getNewBonds/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const newBonds = await getNewBonds(amount);
        return res.json(newBonds);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציות מסוג קומודיטי לפי הכמות שהמשתמש בחר API
router.get('/getNewComodity/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const newComodity = await getNewComodity(amount);
        return res.json(newComodity);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציות מסוג קורנסי פיירס לפי הכמות שהמשתמש בחר API
router.get('/getNewpairs/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const newpairs = await getNewPairs(amount);
        return res.json(newpairs);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציות מסוג רסט לפי הכמות שהמשתמש בחר API
router.get('/getNewRest/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const newRest = await getNewRest(amount);
        return res.json(newRest);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציות מסוג סטוקס לפי הכמות והסכום שהמשתמש בחר API
router.get('/getNewStocks/:amount/:rate', async (req, res) => {
    try {
        const { amount, rate } = req.params;
        const newStocks = await getNewStocks(amount, rate);
        return res.json(newStocks);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
});

// שמוסיף פוזיציה חדשה  לדאטאבייס של המשתמש לפי סוג, אימייל של משתמש ואיידי של פוזיציה API
router.post('/addNewPosition', async (req, res) => {
    try {
        const { type, email, id } = req.body;
        await addNewPosition(type, email, id);
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
})

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


module.exports = router;