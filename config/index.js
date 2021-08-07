module.exports = {
    //קונפיגורציה למונגו דיבי
    mongoDBStoreConfig: {
        uri: 'mongodb+srv://jovany:Jj12345@cluster0.4mfvt.mongodb.net/TradingData',
        collection: 'mySessions'
    },
    //  קונפיגורציה לקוקיז
    cookiesConfig: {
        secure: false,
        httpOnly: false,
        maxAge: 60 * 60000 * 24 * 7
    },
    //קונפיגורציה למונגוס
    mongooseConnection: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    //קונפיגורציה לפספורט
    passportConfig: {
        usernameField: 'email',
        passwordField: 'password'
    }
}