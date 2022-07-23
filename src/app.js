require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res, _next) => {
   res.status(200).json(process.env.MENSAGEM)
})

module.exports = app;