const express = require('express');
const router = express.Router();
const { sendEmail, getAllEmail, deleteEmail, sendRegisterationMail, sendPositionMail, sendClosePositionMail } = require('../services/emailsService');
const { adminValidation } = require('../validations/adminValidation');

//שליחת הודעה למערכת API
router.post('/send', async (req, res) => { 
    try {
        await sendEmail(req.body); //פונקצייה שמכניסה הודעה לדאטאבייס
        return res.sendStatus(200); //הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

//מביא את כל האימיילים במערכת API
router.get('/getAll', adminValidation, async (req, res) => { 
    try {
        const emails = await getAllEmail(); //פונקצייה שמביאה את כל האימיילים
        return res.json(emails); //מחזיר את האימיילם אם יש הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

//מחיקת הודעה API
router.delete('/delete/:id', adminValidation, async (req, res) => {
    try {
        const { id } = req.params; //בודק איידי לפי URL
        await deleteEmail(id); //פונקצייה שמוחקת את האימייל
        return res.sendStatus(200); //הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

router.post('/sendRegisterationMail', async (req, res) => {
    try {
        const {email, username, password} = req.body;
        await sendRegisterationMail(email, username, password);
        return res.sendStatus(200);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    };
});


module.exports = router;
