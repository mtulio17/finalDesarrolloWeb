const express = require('express');
const bodyParser = require('body-parser');
const dataLayer = require('./data-layer');

const app = express();
app.use(bodyParser.json());

app.post('/addData', (req, res) => {
  const item = req.body.item;
  dataLayer.insertData(item);
  res.send('Data added successfully!');
});

app.get('/processData', (req, res) => {
  // Función para procesar los datos
  dataLayer.fetchData();
  res.send('Data processed successfully!');
});

app.get('/displayData', (req, res) => {
  const data = dataLayer.fetchData();
  res.send(data);
});

app.listen(3001, () => {
  console.log('Listening port 3001');
});
