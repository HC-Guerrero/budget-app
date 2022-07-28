const express = require('express');
const cors = require('cors');
const transactionRoute = require('./routes/budgets');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  //response.json(tester[request.params.id]);
  response.send("<h1>Hello World to Herman's Budgeting BackEnd</h1>");
});

app.use('/transactions', transactionRoute);

app.use('/*', (request, response) => {
  response.status(404).send('Something Broke.');
});
module.exports = app;
