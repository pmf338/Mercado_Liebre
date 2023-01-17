const express = require('express');
const app = express();
const PORT = 3002;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.sendFile(path.resolve(__dirname, "./views/home.html"));

});

app.listen(PORT, () => {

    numeroPuerto = PORT;
    console.log('server listening on ${PORT} cuyo numero es ' + numeroPuerto);

});