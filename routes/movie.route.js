const express = require('express');
const router = express.Router();
const connection = require('../config');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM movie', (err, results) => {
        if (err) {
            res.status(500).send(' There was an error retreiving the movies')
        } else {
            res.status(200).send(results)
        }
    })
})

router.post('/', (req, res) => {
    const { rating, title } = req.body;
    const movieData = [rating, title]

    connection.query('INSERT INTO movie (rating, title) VALUES (?, ?)', movieData, (err, results) => {
        if (err) {
            console.log(err)
            res.status(500).send(' There was an error creating a new movie')
        } else {
            res.status(200).send('Your movie was created successfully')
        }
    })
});

module.exports = router;