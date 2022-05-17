const express = require('express');

const pokemon = require('./models/pokemon');

const app = express();
const port = process.env.port || 5000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, resp) => {
    resp.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, resp) => {
    resp.render('index');
});

app.listen(port, () => console.log('Listening on port: ' + port));