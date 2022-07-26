const express = require('express');
const router = express.Router();
const budgetModel = require('../models/budget-model');

router.get('/', (request, response) => {
  response.json(budgetModel);
});

router.get('/:id', (request, response) => {
  response.json(budgetModel[request.params.id]);
});

router.post('/', (request, response) => {
  budgetModel.push(request.body);
  response.json(budgetModel[budgetModel.length - 1]);
});

router.put('/:id', (request, response) => {
  const { id } = req.params;
  const itemToChange = budgetModel[id];
  const newData = request.body;
  response.send('tbd');
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  if (!budgetModel[id]) {
    response.send('Not a valid index number');
  } else {
    budgetModel.splice(id, 1);
    response.send(budgetModel);
  }
});

module.exports = router;
