const express = require("express");
const cors = require("cors");
const chirpsStore = require('../filestore')

let router = express.Router();

router.get("/", (req, res) => {
    let id =req.params.id
    if(id) {
        res.json(chirpsStore.GetChhirp(id));
    } else {
        res.send(chirpsStore.GetChhirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
})

module.exports = router;