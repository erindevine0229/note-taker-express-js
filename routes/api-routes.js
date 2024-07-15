const router = require('express'). Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, noteData) => {
        if (err) {
            console.error('Error occurred when reading data', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(noteData));
    });
});


router.post('/api/notes', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, noteData) => {
        if (err) {
            console.error(err);
            return;
        }
    
    const currentInfo = JSON.parse(noteData);

    const newInfo = {
       id: uuidv4(),
       title: req.body.title,
       text: req.body.text,
    };

    currentInfo.push(newInfo);

    fs.writeFile('db.json', JSON.stringify(currentInfo, null, 2), (err) => {
        if (err) {
            console.error(err);
            return;
        }

        res.json(newInfo);
    });
});

});

module.exports = router;