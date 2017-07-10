const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mtmhss');

module.exports = mongoose;