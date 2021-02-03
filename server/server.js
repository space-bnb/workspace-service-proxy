const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use('/buildings/:workspaceId', express.static(__dirname + '/../client/dist'));
app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/workspace-api/workspace/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`http://localhost:4000/workspace-api/workspace/${id}`);
  res.json(data);
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;
