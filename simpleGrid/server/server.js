const express = require('express');
const app = express();
const db = require("./database")
const port = process.env.PORT || 8000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.get('/api/getItems', (req,res,next) => {
    db.getItems()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
})

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});