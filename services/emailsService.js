const mongoose = require('mongoose');
const emailSchema = require('./../models/emails.model');

const Email = mongoose.model('Email', emailSchema); //שימוש במודל וסכמה

var nodemailer = require('nodemailer');


const sendEmail = async ({ fullName, email, message }) => { //שליחת הודעה למערכת
    try {
        const E = new Email({ fullName, email, message }); //יצירת אימייל חדש
        return await E.save(); //שמירת האימייל בדאטא בייס
    } catch (err) { //במקרה של כשלון
        console.log(err);
        throw err;
    };
};

const getAllEmail = async () => { //שליפת כל האימיילים
    try {
        return Email.find({}) //מציאת כל האימיילם בדאטא בייס 
    } catch (err) { //במקרה של כשלון
        throw err;
    }
}

const deleteEmail = async (id) => { //מחיקת אימייל
    try {
        return Email.deleteOne({ _id: id }); //מוחק את האימייל
    } catch (err) { //במקרה של כשלון
        throw err;
    };
};

const sendRegisterationMail = async (email, username, password) => {
    try {
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'tradingandcoffeeapplication@gmail.com',
                pass: 'jabotinsky1644'
            }
        });

        var mailOptions = {
            from: 'tradingandcoffeeapplication@gmail.com',
            to: email,
            subject: 'Welcome to Coffee & Trading automatic trader application',
            html: `<h3>Welcome to Trading And coffee automatic trader application</h3> 
            <br /> This is your login information: 
            <br /> Your username is: ${username} 
            <br /> Your password is: ${password}
            <br/ > In addiction, this is a link to a guide that will help you understand how to use Trading and coffee systems.
            <br /> Please read it and if you have any other questions please contact us via Whatsapp or Email.
            <br> https://docs.google.com/document/d/1E0KdjXvAs7C6EPGDRsCPhPlHvYcXITe42m8CIRJmlas/edit?usp=sharing
            `
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}


module.exports = { sendEmail, getAllEmail, deleteEmail, sendRegisterationMail };
