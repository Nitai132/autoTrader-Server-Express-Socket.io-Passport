const express = require('express');
const router = express.Router();
const { getUserSetup, setUserSetup } = require('../services/usersSetupService')
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
            tradesPerDay
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
            tradesPerDay
        );
        return res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
})

module.exports = router;