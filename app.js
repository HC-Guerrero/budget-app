const express = require('express');
const cors = require('cors');
const tester = require('../models/budget-model');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (request, response) => {
  response.json(tester[request.params.id]);
});
module.exports = app;