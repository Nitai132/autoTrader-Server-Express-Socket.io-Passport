const mongoose = require('mongoose');
const userSchema = require('./../models/users.model');
const AutoUsersPositionSchema = require('../models/AutoUsersPositions.model');
const userSetupSchema = require('../models/userSetup.model');
const userInfoSchema = require('../models/usersInfo.model');
const SymbolsSchema = require('../models/Symbols.model');
const AutoUsersSymbolsSchema = require('../models/AutoUsersSymbols.model');
const PositionsTypesSchema = require('../../../autoTrader/server/models/positionsTypes.model');

const PositionsTypes = mongoose.model('positionsTypes', PositionsTypesSchema, 'positionsTypes');

const User = mongoose.model('User', userSchema); //שימוש במודל וסכמה של משתמש

const AutoUsersPositions = mongoose.model('AutoUsersPosition', AutoUsersPositionSchema);

const UsersSetup = mongoose.model('AutoUsersSetup', userSetupSchema);

const UsersInfo = mongoose.model('AutoUsersInfo', userInfoSchema);

const Symbols = mongoose.model('AutoSymbols', SymbolsSchema);

const UserSymbols = mongoose.model('AutoUsersSymbols', AutoUsersSymbolsSchema);


const Signup = async ({ firstName, lastName, phone, email, password }) => { //הרשמה למערכת 
    try {
        const s = await PositionsTypes.find({});
        console.log(s[0])
        const AUS = new UserSymbols({ email: email, symbols: s[0]})
        const u = new User({ firstName, lastName, email, phone, password, isAdmin: 0, credits: 0 }); //יצירת משתמש חדש
        const p = new AutoUsersPositions({ user: email, userID: u._id, stocks: [], bonds: [], comodity: [], currencyPairs: [], crypto: [], indexes: [] });
        const ui = new UsersInfo({
            _id: email,
            userID: u._id,
            userType: 'Simulation',
            gatewayStatus: false,
            TwsStatus: false,
            stocks: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            bonds: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            comodity: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            currencyPairs: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            crypto: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            indexes: {
                investedBalance: {
                    credits: 0,
                    dollars: 0
                },
                currentBalance: {
                    credits: 0,
                    dollars: 0
                },
                profitLoss: {
                    credits: 0,
                    dollars: 0
                },
                tradesAmount: {
                    buy: 0,
                    sell: 0
                },
                startOfTheDayBalance: 0
            },
            investedBalance: 0,
            currentBalance: 0,
            startOfTheDayBalance: 0,
            tradesAmount: {buy: 0, sell: 0}
        });
        const us = new UsersSetup({
            userID: u._id,
            userEmail: email,
            tradingStatus: false,
            riskActive: false,
            accountsOnRisk: {
                stocks: false,
                comodity: false,
                bonds: false,
                crypto: false,
                indexes: false,
                currencyPairs: false
            },
            stocks: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    groups: [],
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContractOptions: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0,
            },
            bonds: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        amount: 0
                    },
                    futureContractOptions: {
                        amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0,
            },
            comodity: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        amount: 0
                    },
                    futureContractOptions: {
                        amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0,
            },
            currencyPairs: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        amount: 0
                    },
                    futureContractOptions: {
                        amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0,
            },
            crypto: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        amount: 0
                    },
                    futureContractOptions: {
                        amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0,
            },
            indexes: {
                activeAccount: false,
                sellPositions: false,
                buyPositions: false,
                financialTechnology: {
                    Stocks: false,
                    Options: false,
                    FutureContract: false,
                    FutureContractOptions: false,
                },
                riskManagment: {
                    useDollarsRisk: false,
                    usePositionsRisk: false,
                    useRatesRisk: false,
                    dollarsRisk: 0,
                    positionsRisk: 0,
                    ratesRisk: 0,
                    margin: 0,
                    sameTimeTrades: 1
                },
                times: {
                    SpecificDays: false,
                    SpecificHours: false,
                    TradingDays: [],
                    TradingHours: ['Sun Aug 01 2021 09:30:00 GMT+0300 (שעון ישראל (קיץ))', 'Sun Aug 01 2021 16:00:00 GMT+0300 (שעון ישראל (קיץ))']
                },
                symbols: {
                    notToUse: []
                },
                rates: {
                    stocks: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    options: {
                        _5: false,
                        _5_amount: 0,
                        _100: false,
                        _100_amount: 0,
                        _250: false,
                        _250_amount: 0,
                        _500: false,
                        _500_amount: 0,
                        _1000: false,
                        _1000_amount: 0
                    },
                    futureContracts: {
                        amount: 0
                    },
                    futureContractOptions: {
                        amount: 0
                    }
                },
                takeProfit: {
                    useTakeProfit: false,
                    takeProfitPercentage: 100
                },
                tradesPerDay: 0            },
        });

        await us.save(); //שמירת המשתמש בדאטאבייס
        await ui.save();
        await p.save();
        await AUS.save();
        return await u.save(); //שמירת המשתמש בדאטאבייס
    } catch (err) { //במקרה של כשלון
        console.log(err);
        throw err;
    };
};

const getAllUsers = async () => { //הצגת כל המשתמשים
    try {
        return User.find({}); //מביא את כל המשתמשים במערכת
    } catch (err) { //במקרה של כשלון
        throw err;
    };
};

const getUserCredits = async (id) => { //בודק את כמות הקרדיט שיש למשתמש
    try {
        return User.find({ _id: id }); //מציג את הפרטים של המשתמש
    } catch (err) { //במקרה של כשלון
        throw err;
    };
};

const changeCredits = async (email, amount) => { //שינוי כמות הקרדיטים של משתמש
    try {
        return User.updateOne({ email: email }, { $set: { credits: amount } }) //משנה את הקרדיט של המשתמש לפי אימייל
    } catch (err) { //במקרה של כשלון
        throw err;
    };
};

//סרביס שבודק אם האימייל כבר קיים במערכת בזמן ההרשמה לאתר
const checkIfEmailExist = async (email) => {
    try {
        const user = await User.find({ email: email });
        if (user.length > 0) {
            return true
        }
        return false
    } catch (err) {
        console.log(err);
        throw err;
    };
};

//סרביס בשביל האדמין שמוחק משתמשים
const deleteUser = async (id) => {
    try {
        return User.deleteOne({ _id: id })
    } catch (err) {
        console.log(err);
        throw err;
    };
};


module.exports = { Signup, getAllUsers, getUserCredits, changeCredits, checkIfEmailExist, deleteUser }; //יצוא הפונקציות