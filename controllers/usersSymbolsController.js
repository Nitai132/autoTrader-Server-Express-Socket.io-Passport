const express = require('express');
const router = express.Router();
const { getUserSymbols } = require('../services/usersSymbolsService')


router.get('/getSymbols/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const data = await getUserSymbols(email);
        return res.json(data[0].symbols); // הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

module.exports = router;