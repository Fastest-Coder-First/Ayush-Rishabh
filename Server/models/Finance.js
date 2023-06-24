const { Decimal128 } = require('mongodb')
const mongoose = require('mongoose')

const FinanceSchema = new mongoose.Schema({
    amount: Decimal128,
    date: Date,
    description: String,
    sender: String,
    recipient: String,
    paymentMethod: String
})

const FinanceModel = mongoose.model("data", FinanceSchema)

module.exports = FinanceModel