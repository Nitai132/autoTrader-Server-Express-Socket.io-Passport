const express = require('express');
const router = express.Router();
const { createReport } = require('../services/reportsService');



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



module.exports = router;
