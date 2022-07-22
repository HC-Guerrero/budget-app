const express = require('express');
const cors = require('cors');
//const tester = require('./models/budget-model');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (request, response) => {
  //response.json(tester[request.params.id]);
  response.send('<h1>Hello World</h1>');
});
module.exports = app;
