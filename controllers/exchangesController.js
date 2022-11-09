const express = require('express');
const router = express.Router();
const { getExchanges } = require('../services/exchangeService.js')
// לשליחת פידיאף של הפוזיציות והכנה להורדה api
router.get('/getSymbols', async (req, res) => {
    try {
        const data = await getExchanges();
        return res.json(data[0]); // הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

module.exports = router;