// Require in path and express js router method
const router = require('express').Router();
const path = require('path');

// When the URL with /notes is run, it will display the page of notes by displaying the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// When the URL with /* is run it will return the home page by viewing index.html
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the router for use
module.exports = router;

