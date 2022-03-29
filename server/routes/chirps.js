const express = require("express");
const cors = require("cors");
const chirpsStore = require('../chirpsStore')

let router = express.Router();

router.get("/:id?", (req, res) => {
    const id = req.params.id
    if(id) {
        const chirp = chirpsStore.GetChirp();
        res.json(chirp);
    } else {
        const chirps = chirpsStore.GetChirps();
        res.json(chirps);
    }
});

// Create
router.post("/", (req, res) => {
    const body = req.body;

    chirpsStore.CreateChirp(body);
    res.sendStatus(200);
});

// Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});

// Update
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;

    chirpsStore.UpdateChirp(id, body);
    res.sendStatus(200);
});

module.exports = router;