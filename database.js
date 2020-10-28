var mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  port: "3300",
  user: "root",
  password: "root",
  database: "LocationDb"
});

var ids = [];
con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("**** Connection sucessfully created ****");
  }
});

exports.con = con;