const express = require('express');
const app = require('./app');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.OUR_PORT || 3008;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
