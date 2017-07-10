const mongoose = require('mongoose');

const reciptSchema = new mongoose.Schema({
    student:{type: mongoose.Schema.Types.ObjectId, ref:'students'},
    feeAmount:[{
        fee:{type: mongoose.Schema.Types.ObjectId, ref:'fees'},
        amountPaid: Number
    }]
});

const Recipt = mongoose.model('recipts', reciptSchema);

module.exports = Recipt;