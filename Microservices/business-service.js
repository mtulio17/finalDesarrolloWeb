const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/addData', async (req, res) => {
  const item = req.body.item;
  await axios.post('http://localhost:3003/data-service/insertData', { item });
  res.send('Data added successfully!');
});

app.get('/processData', (req, res) => {
  // Función para procesar los datos
  res.send('Data processed successfully!');
});

app.get('/displayData', async (req, res) => {
  const result = await axios.get('http://localhost:3003/data-service/fetchData');
  res.send(result.data);
});

app.listen(3001, () => {
  console.log('Business Service listening on port 3001');
});
