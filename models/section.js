const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    standard:{type: mongoose.Schema.Types.ObjectId, ref:'standards'},
    code: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref:'students'}]
}); 

const Section = mongoose.model('sections', sectionSchema);

module.exports = Section;