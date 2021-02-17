const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use('/buildings/:workspaceId', express.static(__dirname + '/../client/dist'));
app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/workspace-api/workspace/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://54.193.132.156:4000/workspace-api/workspace/${id}`);
  res.json(data);
});

app.get('/api/availability', async function(req, res) {
  const { id } = req.query;
  const { data } = await axios.get(`http://3.140.156.174:3001/api/availability?id=${id}`);
  res.json(data);
});

app.get('/api/getNearbyTransitOptions/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://3.140.156.174:3002/api/availability?id=${id}`);
  res.json(data);
});

app.get('/api/photos/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://54.151.43.93:6001/api/photos/${id}`);
  res.json(data);
});

app.get('/api/photos/workspace/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://54.151.43.93:6001/api/photos/workspace/${id}`);
  res.json(data);
});

app.get('/api/workspace-description/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://54.151.43.93:6060/api/workspace-description/${id}`);
  res.json(data);
});

app.get('/api/nearbyworkspaces/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://ec2-54-177-170-134.us-west-1.compute.amazonaws.com:5001/api/nearbyworkspaces/${id}`);
  res.json(data);
});

app.get('/api/nearbyworkspaces/address/:id', async function(req, res) {
  const { id } = req.params;
  const { data } = await axios.get(`http://ec2-54-177-170-134.us-west-1.compute.amazonaws.com:5001/api/nearbyworkspaces/address/${id}`);
  res.json(data);
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;
