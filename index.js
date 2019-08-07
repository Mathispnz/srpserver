// Define all the modules
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Use the Express function
const app = express();

// CORS: allows the connection from different sides: both client and server
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

// Mongoose allows communication between MongoDB and the server
mongoose
    .connect('mongodb://localhost/srp-server', {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to MongoDB !')
    })
    .catch(err => {console.error('An error occured', err)})


app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'accueil du site');
});

// Define the routes (we could put them here but making them in an appropriate folder is clearer)
const jewelRouter = require('./routes/jewelRouter.js');
app.use('/api', jewelRouter);

// Listen the Express application on PORT = 5000
app.listen(5000);