const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');
// Import express from node npm
const express = require('express');
// Initialize Express.js to be used
const app = express();

// Specify a port as any available or default to 3001
const PORT = process.env.PORT || 3001;

// parses incoming requets from JSON format
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// To create a route for the files in this folder
app.use(express.static('public'));

// Middleware to handle each route
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listen for incoming connections at the port
app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
);
