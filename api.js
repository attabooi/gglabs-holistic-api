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




const key = {
    apiKey: 'J3VMYCC-N9K47ZG-PXR7HA0-AH94H32',
    uuid: '90f74f31-aa66-43fe-b770-78a85452488c'
}


app.get('/api/users/:apikey/:type', async (req, res) => {
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid.')
    }else{

    }

    if(type == 'seoul') {
        let data = [
            {name:"최준헌", city:"seoul"},
            {name:"구본석", city:"seoul"}
        ];
        res.send(data);
    }else if(type == 'jeju') {
        let data = [
            {name:"박지환", city:"jeju"},
            {name:"정종석", city:"jeju"}
        ];
    }else{
        res.send('Type is not correct');
    }

    console.log(type);
    res.send('ok');
});

