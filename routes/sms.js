const express = require('express');
const router = express.Router();

const Standard = require('../models/standard');
const Student = require('../models/students');
const Section = require('../models/section');


router.get('/', (req, res)=>{
    Standard.find({},(err, standards)=>{
        res.render('sms', {standards:standards});        
    });
});

router.post('/', (req, res)=>{
    const data = req.body;
    if(data.text != "" && data.standard != ""){
        if(data.standard != "ALL"){
            if(data.section==null || data.section == ""){
                Standard.findById(data.standard).populate('section').exec((err, result)=>{
                    let numbers = [];
                    result.section.forEach(function(element) {
                        element.student.forEach(function(student){
                            Student.findById(element.student).exec((err, stu)=>{
                                numbers.push(stu.phone);
                            })
                        }, this)
                    }, this);
                    console.log(numbers);
                    res.send(numbers)
                });
            }else{
                
            }
        }
    }
})

module.exports = router;