const express = require('express');
const router = express.Router();

const Standard = require('../models/standard');

router.get('/', (req, res)=>{
    Standard.find({},(err, standards)=>{
        res.render('sms', {standards:standards});        
    });
});

module.exports = router;