const express = require('express');

const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.css'));
})

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server is serving at ${port}`);
})