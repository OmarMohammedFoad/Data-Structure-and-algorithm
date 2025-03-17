const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const port = 8080;

const app = express();
const pathFile = path.join(__dirname, "log.txt");
app.use(bodyParser.json());




app.use((req, res, next) => {

    const logData = `${new Date().toISOString()} ${req.method} ${req.url}`;

    fs.appendFile(pathFile, logData, (err, data) => {
        if (err) {
            throw err
        }

    });

    next();
});



app.get("/logs", (req, res) => {
    fs.readFile(pathFile, (err, data) => {

        if (err) {
            return res.status(500).json({ error: "error" })
        }
        res.type("text/plain").send(data);
    });
});














app.listen(port, () => {

    console.log(`this server is running on port ${port}`);

})