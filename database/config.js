const mongoose = require('mongoose');

mongoose.connect('mongodb://139.59.7.69:27017/mtmhss');

module.exports = mongoose;