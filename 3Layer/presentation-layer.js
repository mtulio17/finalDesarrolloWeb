const express = require('express');
const bodyParser = require('body-parser');
const businessLogic = require('./business-logic-layer');

const app = express();
app.use(bodyParser.json());

app.post('/addData', (req, res) => {
  const item = req.body.item;
  businessLogic.addData(item);
  res.send('Data added successfully!');
});

app.get('/processData', (req, res) => {
  businessLogic.processData();
  res.send('Data processed successfully!');
});

app.get('/displayData', (req, res) => {
  const data = businessLogic.getData();
  res.send(data);
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});
