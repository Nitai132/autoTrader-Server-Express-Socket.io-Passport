const express = require('express');
const router = express.Router();
const passport = require('passport');
const { Signup, getAllUsers, getUserCredits, changeCredits, checkIfEmailExist, deleteUser, userSetupInit } = require('../services/usersService');
const { adminValidation } = require('../validations/adminValidation');
const { isValid } = require('../passport');



router.post('/login', //api של התחברות למערכת
    passport.authenticate('local'), //בדיקה מול פספורט
    (req, res) => {
        return res.json(req.user); //מחזיר את פרטי המשתמש
    });

router.get('/logout', (req, res) => { //התנתקות מהמערכת API
    req.session.destroy((err) => { //מוחק את הסשן מהדאטאבייס
        if (err) {
            return res.sendStatus(400); //במידה ויש בעיה מחזיר סטטוס 400
        }
        req.logout(); //מנתק את המשתמש
        res.cookie('connect.sid', req.cookies['connect.sid'], { maxAge: -1 }); //מוחק את הקוקי של המשתמש מהדפדפן
        return res.sendStatus(200); //הצלחה
    });
});

router.post('/signup', async (req, res) => { //הרשמה למערכת API
    try {
        const exists = await checkIfEmailExist(req.body.email);
        if (exists === false) {
            await Signup(req.body); //קריאה לפונקציית הרשמה עם הבודי שנשלח
            return res.json({ message: 'Account created successfully', created: 'true' }); //הצלחה
        }
        else {
            return res.json({ message: 'This email already exists in our system. pleae use anoher one', created: 'false' }); //הצלחה
        }
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

router.get('/allUsers', adminValidation, async (req, res) => { //מביא את כל המשתמשים במערכת API
    try {
        const allUsers = await getAllUsers(); //פונקצייה שמביאה את המשתמש מהדאטאבייס
        console.log(allUsers)

        return res.json(allUsers); //מחזיר ג'ייסון של כל המשתמשים
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    }
})

router.get('/userDetails', async (req, res) => { //פרטי המשתמש שמחובר כעת API
    try {
        return res.json(req.user); //מחזיר את פרטי המשתמש
    } catch (err) {
        return res.sendStatus(400); //כשלון
    }
});

router.get('/getUserById/:id', async (req, res) => { //מידע על המשתמש לפי מזהה API
    try {
        const { id } = req.params; //האיידי שנכנס ב URL
        const details = await getUserCredits(id); //פונקצייה שמביאה את המידע על המשתמש
        return res.json(details[0]); //מחזיר את פרטי המשתמש
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

router.post('/changeCredits', isValid, async (req, res) => { //שינוי קרדיט של משתמש API
    try {
        const { email, amount } = req.body; //מביא את האימייל והכמות מהבודי
        await changeCredits(email, amount); //פונקצייה שמשנה את הקרדיט
        return res.sendStatus(200); //הצלחה
    } catch (err) {
        console.log(err);
        return res.sendStatus(400); //כשלון
    };
});

//בשביל האדמין למחיקת משתמשים API
router.delete('/deleteUser/:id', adminValidation, async (req, res) => {
    try {
        const { id } = req.params; // איידי של המשתמש
        await deleteUser(id); // מחיקתת המשתמש
        return res.sendStatus(200); // במקרה של הצלחה
    } catch (err) {
        console.log(err); // במקרה של כשלון
        return res.sendStatus(400);
    };
});

module.exports = router;

