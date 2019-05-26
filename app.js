const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('on home page')
});

app.get('/posts', (req, res) => {
    res.send('on posts page')
});

app.listen(3000)