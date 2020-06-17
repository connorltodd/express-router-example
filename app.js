const express = require('express');
const app = express();
const port = 5000;
const connection = require('./config.js');

// Here we import all of the routing files
const movieRouter = require('./routes/movie.route');
const userRouter = require('./routes/user.route');

// Application middleware to ensure all the data received is converted to json
app.use(express.json());


// The connection.connect is responsible for checking to see if we are connecting
// to the database as expected
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('You are connected to the database successfully')
    }
})

// The app.use in this context is using anything that comes after '/movies'
// for the movie router to be responsible for all of these routes
app.use('/movies', movieRouter)

app.use('/user', userRouter)

// The app.listen should be in the end and this shows if we are connected to the
// server as expected
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`The app is running at ${port}`)
    }
})

