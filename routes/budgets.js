const express = require('express');
const router = express.Router();
const budgetModel = require('../models/budget-model');

router.use('/*', (request, response, next) => {
  if (request.params.index && !budgetModel[request.params.index]) {
    response.status(404).send('Not Found');
  } else {
    next();
  }
});

router.get('/', (request, response) => {
  response.json(budgetModel);
});

router.get('/:index', (request, response) => {
  response.json(budgetModel[request.params.index]);
});

router.post('/', (request, response) => {
  budgetModel.push(request.body);
  response.send(budgetModel[budgetModel.length - 1]);
});

router.put('/:index', (request, response) => {
  const { index } = request.params;
  const newData = request.body;
  budgetModel[index] = newData;
  response.send(budgetModel[index]);
});

router.delete('/:index', (request, response) => {
  const { index } = request.params;
  if (!budgetModel[index]) {
    response.send('Not a valid index number');
  } else {
    budgetModel.splice(index, 1);
    response.send(budgetModel);
  }
});

module.exports = router;
