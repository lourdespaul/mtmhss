const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    phone: String,
    father: String,
    address: String,
    standard:{type:mongoose.Schema.Types.ObjectId, ref:'standards'},
    section:{type: mongoose.Schema.Types.ObjectId, ref:'sections'},
    recipts:[{type: mongoose.Schema.Types.ObjectId, ref:'recipts'}]
});

const Student = mongoose.model('students', studentSchema);

module.exports = Student;