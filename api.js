const mysql = require('mysql2');
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rkqmfldpf1',
    database: 'holistic'
  });
connection.connect();


app.post('/save-results', (req, res) => {
  
  const jsonString = JSON.stringify(req.body);
  const sql = 'INSERT INTO holistic_output(json_data) VALUES (?)';
  connection.query(sql, [jsonString], (err, results) => {
    if (err) throw err;
    console.log('Data inserted successfully');
    res.json({ message: 'Data saved successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});



app.get("/", (req, res) => {

  res.sendFile(__dirname + "/holistic.html");
});


app.get("/model.js", (req, res) => {
  res.sendFile(__dirname + "/model.js");
});

