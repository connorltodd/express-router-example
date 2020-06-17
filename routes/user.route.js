// We always need to require express in every route file
const express = require('express');
// We create the express router 
const router = express.Router();
// We require the database connection configuration
const connection = require('../config');


router.get('/', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            res.status(500).send(' There was an error retreiving the users')
        } else {
            res.status(200).send(results)
        }
    })
})

router.post('/', (req, res) => {
    const userData = req.body;

    connection.query('INSERT INTO user SET ?', userData, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(' There was an error creating a new user')
        } else {
            res.status(200).send('A new user was created successfully')
        }
    })
});

module.exports = router;