const express = require('express')
const db = require ('mongoose')

const Label = require ('../models/label')

const router = express.Router();

router.get('/', (req, res, next) => {
    Label.find({}, (err, label) => {
        if(err) res.status(500).send(err);
        console.log(' ');
        console.log('requested data: ');
        console.log(label);
        console.log(' ');
        res.status(200).send(label);
    })
})

module.exports = router;