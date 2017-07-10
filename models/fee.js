const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    code: String,
    description: String,
    amount: String,
});

const Fee = mongoose.model('fees', feeSchema);

module.exports = Fee;
