module.exports = {
    //קונפיגורציה למונגו דיבי
    mongoDBStoreConfig: {
        uri: 'mongodb://adminnew:x8engX86cy8B@80.179.152.210:27018/TradingData?authSource=admin',
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