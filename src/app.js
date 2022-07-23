const express = require('express');
const app = express();

app.get('/', (req, res, _next) => {
   res.status(200).json('Está vivo!!!')
})

module.exports = app;