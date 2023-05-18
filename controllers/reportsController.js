const express = require('express');
const router = express.Router();
const { createReport, saveLink} = require('../services/reportsService');



router.post('/createReport', async (req, res) => {
    try {
        const {positions, userEmail, amount } = req.body;
        
        const report = await createReport(positions, userEmail, amount);
        return res.json(report);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
})

router.post('/saveLink', async (req, res) => {
    try {
        const {userEmail, link } = req.body;
        const toSave = await saveLink(userEmail, link);
        return res.json(toSave);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    };
})


module.exports = router;
