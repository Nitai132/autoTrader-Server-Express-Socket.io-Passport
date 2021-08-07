const mongoose = require('mongoose');
const userSetupSchema = require('../models/userSetup.model');

const UsersSetup = mongoose.model('AutoUsersSetup', userSetupSchema);

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
    stopLoss,
    riskManagment,
    times,
    symbols,
    rates,
    tradesPerDay
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
                        StocksAmount: financialTechnology.StocksAmount,
                        Options: financialTechnology.Options,
                        OptionsAmount: financialTechnology.OptionsAmount,
                        FutureContract: financialTechnology.FutureContract,
                        FutureContractAmount: financialTechnology.FutureContractAmount,
                        FutureContractOptions: financialTechnology.FutureContractOptions,
                        FutureContractOptionsAmount: financialTechnology.FutureContractOptionsAmount
                    },
                    stopLoss: {
                        useSystemStopLoss: stopLoss.useSystemStopLoss,
                        userStopLoss: stopLoss.userStopLoss
                    },
                    riskManagment: {
                        useDollarsRisk: riskManagment.useDollarsRisk,
                        usePositionsRisk: riskManagment.usePositionsRisk,
                        dollarsRisk: riskManagment.dollarsRisk,
                        positionsRisk: riskManagment.positionsRisk
                    },
                    times: {
                        SpecificDays: times.SpecificDays,
                        SpecificHours: times.SpecificHours,
                        TradingDays: times.TradingDays,
                        TradingHours: times.TradingHours
                    },
                    symbols: {
                        groups: symbols.groups,
                        notToUse: symbols.notToUse
                    },
                    rates: {
                        stocks: {
                            _5: rates.stocks._5,
                            _100: rates.stocks._100,
                            _200: rates.stocks._200
                        },
                        options: {
                            _5: rates.options._5,
                            _100: rates.options._100,
                            _200: rates.options._200
                        },
                        futureContracts: {
                            _5: rates.futureContracts._5,
                            _100: rates.futureContracts._100,
                            _200: rates.futureContracts._200
                        },
                        futureContractOptions: {
                            _5: rates.futureContractOptions._5,
                            _100: rates.futureContractOptions._100,
                            _200: rates.futureContractOptions._200
                        }
                    },
                    tradesPerDay: tradesPerDay
                }
            }
        });
        return userSetup;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = { getUserSetup, setUserSetup }; //יצוא הפונקציות