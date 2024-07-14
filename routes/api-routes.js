const router = require('express'). Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, noteData) => {
        if (err) {
            console.error('Error occurred when reading data', err);
        }
    })
    res.json(JSON.parse(data));
});


router.post('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, noteData) => {
        if (err) {
            console.error(err);
            return;
        }
    
    const currentInfo = json.parse(noteData);

    const newInfo = {
       id: uuidv4(),
       title: req.body.title,
       text: req.body.text,
    };
});

module.exports = router;