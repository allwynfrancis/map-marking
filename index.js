const express = require("express");
const app = express();
var cors = require('cors');

const db = require("./database");
const port = 5000;
const path = require('path');

app.get('/', function (req, res) {
    // console.log(req.body);
    // res.send('<b>hello world</b>');
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(cors());
app.get("/LocationDb", function (req, res) {
    let records = [];
    db.con.query("SELECT * FROM locations", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        // console.log(result);
    });
});
app.get("/searchcity", function (req, res) {
    let records = [];
    db.con.query("SELECT * FROM locations where ", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));