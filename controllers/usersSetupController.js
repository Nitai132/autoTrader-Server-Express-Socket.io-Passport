const express = require('express');
const router = express.Router();
const { getUserSetup, setUserSetup, changeTradingStatus } = require('../services/usersSetupService')
// לשליחת פידיאף של הפוזיציות והכנה להורדה api
router.get('/getSetup/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const data = await getUserSetup(userEmail);
        return res.json(data[0]); // הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

router.post('/setSetup', async (req, res) => {
    try {
        const {
            userEmail,
            currentAccount,
            activeAccount,
            sellPositions,
            buyPositions,
            financialTechnology,
            stopLoss,
            riskManagment,
            times,
            symbols,
            rates,
            tradesPerDay,
            doubleTheTradeValues
        } = req.body;
        await setUserSetup(
            userEmail,
            currentAccount,
            activeAccount,
            sellPositions,
            buyPositions,
            financialTechnology,
            stopLoss,
            riskManagment,
            times,
            symbols,
            rates,
            tradesPerDay,
            doubleTheTradeValues
        );
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
})

router.post('/changeTradingStatus', async (req, res) => {
    try {
        const { userEmail, tradingStatus } = req.body;
        await changeTradingStatus(userEmail, tradingStatus);
        return res.sendStatus(200);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    };
});

router.get('/getTradingStatus/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const data = await getUserSetup(userEmail);
        return res.json(data[0].tradingStatus)
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
})

module.exports = router;