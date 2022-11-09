const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exchangesSchema = new Schema({ 
    'SMART-IBIS': Array,
    'SMART-SBF': Array,
    'SMART-EBS': Array,
    'SMART-BVME': Array,
    'SMART-NYSE': Array,
    'SMART-NASDAQ': Array,
    'SMART-LSE': Array,
    'SMART-ASX': Array,
    ECBOT: Array,
    NYMEX: Array,
    NYBOT: Array,
    IPE: Array,
    MONEP: Array,
    GLOBEX: Array,
    EUREX: Array,
    ICEEU: Array,
    MEFFRV: Array,
    OSEJPN: Array,
    HKFE: Array,
    SNFE: Array,
    ASX: Array,
});

module.exports = exchangesSchema;