//import express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3005;

// Static middleware pointing to the public folder
app.use(express.static('Develop/public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
const apiRoutes = require('./Develop/routes/apiRoutes/notesRoutes.js');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
