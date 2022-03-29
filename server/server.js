const express = require('express');
const cors = require('cors');
const apiRouter = require("./routes");
const port = 3000;

let app = express();

app.use("/api", apiRouter);

app.listen(port);