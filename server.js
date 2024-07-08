// Import express from node npm
const express = require('express');
// Initialize Express.js to be used
const app = express();

// Specify a port as any available or default to 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))


// To create a route for the files in this folder
app.use(express.static('public'));




// Listen for incoming connections at the port
app.listen(PORT, () => 
    console.log(`Listening at http://localhost:${PORT}`)
);
