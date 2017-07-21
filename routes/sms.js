const express = require('express');
const msg91 = require('msg91-sms');
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
    console.log(data);
    if(data.text != "" && data.sms_standard != ""){
        if(data.sms_standard != "ALL"){
            if(data.sms_section == "ALL"){
                Standard.findById(data.sms_standard).populate('section').exec((err, result)=>{
                    let numbers = [];
                    console.log(result)
                    result.section.forEach(function(element) {
                        element.students.forEach(function(student){
                            Student.findById(element.student).exec((err, stu)=>{
                                numbers.push(stu.phone);
                            })
                        }, this)
                    }, this);
                    console.log(numbers);
                    res.send(numbers)
                });
            }else{
                let numbers =[];
                Section.findById(data.sms_section).populate('students').exec((err, result)=>{
                    result.students.forEach(function(student){
                        numbers.push(student.phone);
                    });

                });
            }
        }else{
            let numbers = [];
            Student.find({}, (err, student)=>{
                student.forEach(function(element){
                    numbers.push(element.phone);
                }, this);
                msg91.sendMultiple("153760A7ehQ8Uc5926af23",numbers,data.text,"MTMHSS","4","91",function(response){
 
                    //Returns Message ID, If Sent Successfully or the appropriate Error Message 
                    if(response) res.send({response: response, message: "Sent successfully"})
                
                });

            });
        }
    }
});

module.exports = router;