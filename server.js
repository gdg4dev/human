const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const mainRoutes = require("./routes/main");

app.use(bodyParser.json());
app.use("/backend", mainRoutes)

const port = 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});