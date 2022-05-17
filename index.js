const express = require('express');

const pokemon = require('./models/pokemon');

const app = express();
const port = process.env.port || 5000;

app.get('/', (req, resp) => {
    resp.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, resp) => {
    resp.send(pokemon);
});

app.listen(port, () => console.log('Listening on port: ' + port));