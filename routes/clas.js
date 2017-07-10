const express = require('express');
const Standard = require('../models/standard');
const Section = require('../models/section');
const router = express.Router();

router.get('/',(req, res)=>{
    Standard.find({})
        .populate('section')
        .exec((err, result)=>{
            res.send(result);
        });
});

router.post('/', (req,res)=>{
    const data = req.body;
    console.log(data);
    if(data.std && data.sec){
        let standard = new Standard({
            code:data.std
        });
        standard.save((err, result)=>{
            if(result){
                data.sec.forEach(function(element) {
                    let section = new Section({
                        standard: result._id,
                        code: element
                    });
                    section.save((err, slt)=>{
                        Standard.findByIdAndUpdate(result._id,{$push:{section:slt._id}}).exec((err, std)=>{
                            if(result) console.log(std);
                        });
                    });
                }, this);
                res.send('Success')
            }
        });
    }
    else{
        res.send('Error')
    }    
});

module.exports = router;