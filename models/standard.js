const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
    code: String,
    section:[{
        type:mongoose.Schema.Types.ObjectId, ref:'sections'
    }],
    fees:[{type: mongoose.Schema.Types.ObjectId, ref:'fees'}]
});

const Standard = mongoose.model('standards', standardSchema);

module.exports = Standard;