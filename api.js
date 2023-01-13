const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
});

app.get('/api/users/:type', async (req, res) => {
    let {type} = req.params;

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

