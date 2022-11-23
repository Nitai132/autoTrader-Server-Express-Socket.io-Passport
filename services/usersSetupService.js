const mongoose = require('mongoose');
const userSetupSchema = require('../models/userSetup.model');
const AutoUsersSymbolsSchema = require('../models/AutoUsersSymbols.model');

const UsersSetup = mongoose.model('AutoUsersSetup', userSetupSchema);
const AutoUsersSymbols = mongoose.model('AutoUsersSymbols', AutoUsersSymbolsSchema);


const getUserSetup = async (email) => {
    try {
        const userSetup = await UsersSetup.find({ userEmail: email });
        return userSetup;
    } catch (err) {
        console.log(err);
        throw err;
    };
}

const setUserSetup = async (
    userEmail,
    currentAccount,
    activeAccount,
    sellPositions,
    buyPositions,
    financialTechnology,
    riskManagment,
    times,
    symbols,
    rates,
    takeProfit,
    tradesPerDay,
) => {
    try {
        const userSetup = await UsersSetup.updateOne({ userEmail: userEmail }, {
            $set: {
                [currentAccount]: {
                    activeAccount: JSON.parse(activeAccount),
                    sellPositions: JSON.parse(sellPositions),
                    buyPositions: JSON.parse(buyPositions),
                    financialTechnology: {
                        Stocks: financialTechnology.Stocks,
                        Options: financialTechnology.Options,
                        FutureContract: financialTechnology.FutureContract,
                        FutureContractOptions: financialTechnology.FutureContractOptions,
                    },
                    riskManagment: {
                        useDollarsRisk: riskManagment.useDollarsRisk,
                        usePositionsRisk: riskManagment.usePositionsRisk,
                        useRatesRisk: riskManagment.useRatesRisk,
                        dollarsRisk: riskManagment.dollarsRisk,
                        positionsRisk: riskManagment.positionsRisk,
                        ratesRisk: riskManagment.ratesRisk,
                        margin: riskManagment.margin,
                        sameTimeTrades: riskManagment.sameTimeTrades
                    },
                    times: {
                        SpecificDays: times.SpecificDays,
                        SpecificHours: times.SpecificHours,
                        TradingDays: times.TradingDays,
                        TradingHours: times.TradingHours
                    },
                    rates: {
                        stocks: {
                            _5: rates.stocks._5,
                            _5_amount: rates.stocks._5_amount,
                            _100: rates.stocks._100,
                            _100_amount: rates.stocks._100_amount,
                            _250: rates.stocks._250,
                            _250_amount: rates.stocks._250_amount,
                            _500: rates.stocks._500,
                            _500_amount: rates.stocks._500_amount,
                            _1000: rates.stocks._1000,
                            _1000_amount: rates.stocks._1000_amount,
                        },
                        options: {
                            _5: rates.options._5,
                            _5_amount: rates.options._5_amount,
                            _100: rates.options._100,
                            _100_amount: rates.options._100_amount,
                            _250: rates.options._250,
                            _250_amount: rates.options._250_amount,
                            _500: rates.options._500,
                            _500_amount: rates.options._500_amount,
                            _1000: rates.options._1000,
                            _1000_amount: rates.options._1000_amount,
                            optionsPerTrade: rates.options.optionsPerTrade
                        },
                        futureContracts: {
                            amount: rates.futureContracts.amount
                        },
                        futureContractOptions: {
                            _5: rates.futureContractOptions._5,
                            _5_amount: rates.futureContractOptions._5_amount,
                            _100: rates.futureContractOptions._100,
                            _100_amount: rates.futureContractOptions._100_amount,
                            _250: rates.futureContractOptions._250,
                            _250_amount: rates.futureContractOptions._250_amount,
                            _500: rates.futureContractOptions._500,
                            _500_amount: rates.futureContractOptions._500_amount,
                            _1000: rates.futureContractOptions._1000,
                            _1000_amount: rates.futureContractOptions._1000_amount,
                            amount: rates.futureContractOptions.amount
                        }
                    },
                    takeProfit: {
                        useTakeProfit: takeProfit.useTakeProfit,
                        takeProfitPercentage: takeProfit.takeProfitPercentage
                    },
                    tradesPerDay: tradesPerDay
                }
            }
        });
        await AutoUsersSymbols.updateOne({ email: userEmail }, {
            symbols: symbols
        })
        return userSetup;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const changeTradingStatus = async (userEmail, tradingStatus) => {
    try {
        return await UsersSetup.updateOne({ userEmail: userEmail }, {
            tradingStatus: !tradingStatus
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}


module.exports = { getUserSetup, setUserSetup, changeTradingStatus }; //יצוא הפונקציות