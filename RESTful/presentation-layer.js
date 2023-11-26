const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/addData', async (req, res) => {
  const item = req.body.item;
  await axios.post('http://localhost:3001/business/addData', { item });
  res.send('Data added successfully!');
});

app.get('/processData', async (req, res) => {
  await axios.get('http://localhost:3001/business/processData');
  res.send('Data processed successfully!');
});

app.get('/displayData', async (req, res) => {
  const result = await axios.get('http://localhost:3001/business/displayData');
  res.send(result.data);
});

app.listen(3000, () => {
  console.log('Presentation Layer listening on port 3000');
});
