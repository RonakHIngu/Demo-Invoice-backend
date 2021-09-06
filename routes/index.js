const express = require('express');
const app = express();

app.use("/invoice", require("./invoice"))

module.exports = app;