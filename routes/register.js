const express = require('express');
const Student = require('../models/students');
const Standard = require('../models/standard');
const Section = require('../models/section');

const router = express.Router();

router.get('/', (req, res)=>{
    Standard.find({})
    .populate('section')
    .exec((err, result)=>{
        res.render('register',{standard:result});
    });
});

router.get('/section/:id',(req, res)=>{
    Standard.findById(req.params.id).populate('section').exec((err, result)=>{
        res.send(result);
    });
});

router.post('/', (req, res)=>{
    const data = req.body;
    console.log(data);
    if(data.standard != "" && data.section != "" && data.phone.length == 10){
        const student = new Student({
            name: data.name.trim(),
            dob: data.dob,
            phone: data.phone.trim(),
            father: data.father.trim(),
            address: data.address.trim(),
            standard: data.standard
        });
        Standard.findById(data.standard)
            .where({section: data.section})
            .exec((err, result)=>{
                if(result){
                    student.section = data.section;
                    student.save((err, student)=>{
                        if(student){
                            Section.findByIdAndUpdate(data.section,{$push:{students:student._id}},(err, result)=>{
                                if(result) res.send(student);
                            });
                        }
                    });
                }
            });
    }else res.send('Error on input data');
});

module.exports = router;