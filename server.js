const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Require fs library to write in the animals.json file
// const fs = require('fs');
// const path = require('path');
// Require npm package
const express = require('express');
// Require Animal data
// const { animals } = require('./data/animals.json');
// const { type } = require('os');
// Sets an enviroment variable
const PORT = process.env.PORT || 3001;
// Instantiate the server
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// set middleware the allows the server to access eveytime that is contained by the directory.
app.use(express.static('public'));
// Make server listen to request
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
