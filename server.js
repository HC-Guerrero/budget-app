const express = require('express');
const app = require('./app');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
