const express = require('express');

const app = express();
const port = process.env.port || 5000

app.get('/', (req, resp) => {
    resp.send('Welcome to the Pokemon App!');
});

app.listen(port, () => console.log('Listening on port: ' + port));