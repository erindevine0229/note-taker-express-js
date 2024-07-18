// Require express and enable use of Router()
const router = require("express").Router();
// Package to generate a uniquie id for the notes being saved
const { v4: uuidv4 } = require("uuid");
// Require file system so we can use writeFile and readFile
const fs = require("fs");

// Reads the db.json and return as a json object
router.get("/notes", (req, res) => {
  console.log("get notes");
  fs.readFile("./db/db.json", "utf8", (err, noteData) => {
    if (err) {
      console.error("Error occurred when reading data", err);
      res.status(500).send("Error reading data");
      return;
    }
    const parsedNotes = JSON.parse(noteData);
    console.log('parsed notes', parsedNotes);
    res.json(parsedNotes);
  });
});

// Reads the current data, adds the new object (new note) to the array and then writes the updated db.json
router.post("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, noteData) => {
    if (err) {
      console.error("Error ocurred when reading data", err);
      res.status(500).send("Error reading data");
      return;
    }

    const currentInfo = JSON.parse(noteData);

    // Object for new note info to be saved
    const newInfo = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };

    currentInfo.push(newInfo);

    fs.writeFile(
      "./db/db.json",
      JSON.stringify(currentInfo, null, 2),
      (err) => {
        if (err) {
          console.error("Error ocurred when writing data", err);
          res.status(500).send("Error writing data");
          return;
        }

        res.json(newInfo);
      }
    );
  });
});

// export the router for use
module.exports = router;
