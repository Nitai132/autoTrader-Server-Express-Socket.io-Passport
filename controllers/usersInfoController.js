const express = require('express');
const router = express.Router();
const { getUserInfo } = require('../services/usersInfoService')
// לשליחת פידיאף של הפוזיציות והכנה להורדה api
router.get('/getUserInfo/:userEmail', async (req, res) => {
    try {
        const { userEmail } = req.params;
        const data = await getUserInfo(userEmail);
        return res.json(data[0]); // הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

module.exports = router;