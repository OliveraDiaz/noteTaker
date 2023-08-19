const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    res.json(db);
});
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = db.length.toString();
    
    db.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    res.json(db);
});

module.exports = router;